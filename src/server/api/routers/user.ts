import { z } from "zod";

import {
  createTRPCRouter,
  publicProcedure,
  roleProtectedProcedure,
} from "~/server/api/trpc";
import bcrypt from "bcrypt";
import { TRPCError } from "@trpc/server";
import { UserRole, UserStatus } from "@prisma/client";
import { v4 as uuidv4 } from "uuid";

export const userRouter = createTRPCRouter({
  getUsers: roleProtectedProcedure
    .meta({ roleRequired: UserRole.MANAGER })
    .query(async ({ ctx }) => {
      const users = await ctx.prisma.user.findMany({
        where: {
          company: {
            id: ctx.session.user.org,
          },
          id: {
            not: {
              equals: ctx.session.user.id,
            },
          },
        },
        select: {
          id: true,
          name: true,
          email: true,
          status: true,
          role: true,
          hash: true,
        },
      });

      console.log(users);

      return users;
    }),
  addUser: roleProtectedProcedure
    .meta({ roleRequired: UserRole.MANAGER })
    .input(
      z.object({
        username: z.string().min(3),
        email: z.string().email(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const doesExist = await ctx.prisma.user.findFirst({
        where: {
          OR: [
            {
              name: { equals: input.username.toLowerCase() },
            },
            {
              email: { equals: input.email.toLowerCase() },
            },
          ],
        },
      });

      const company = await ctx.prisma.company.findFirst({
        where: {
          userId: ctx.session.user.id,
        },
      });

      console.log("user id", ctx.session.user.id);

      const DEFAULT_PASSWORD = "123123123";

      if (doesExist == null) {
        const hashedPassword = await bcrypt.hash(DEFAULT_PASSWORD, 5);

        const result = await ctx.prisma.user.create({
          data: {
            name: input.username,
            email: input.email,
            passwordHash: hashedPassword,
            status: UserStatus.PENDING_ACTIVATION,
            role: UserRole.EMPLOYEE,
            hash: uuidv4(),
            company: {
              connect: {
                id: company?.id,
              },
            },
            profile: {
              create: {
                firstName: "",
                lastName: "",
              },
            },
          },
        });

        console.log(result);
      } else {
        console.log("already exists");
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: "The username or email already exist",
        });
      }

      return true;
    }),
  register: publicProcedure
    .input(
      z.object({
        companyName: z.string().min(3),
        username: z.string().min(3),
        email: z.string().email(),
        password: z.string().min(6),
        confirmPassword: z.string().min(6),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const doesExist = await ctx.prisma.user.findFirst({
        where: {
          OR: [
            {
              name: { equals: input.username.toLowerCase() },
            },
            {
              email: { equals: input.email.toLowerCase() },
            },
          ],
        },
      });

      if (doesExist == null) {
        const hashedPassword = await bcrypt.hash(input.password, 5);

        const result = await ctx.prisma.user.create({
          data: {
            name: input.username,
            email: input.email,
            passwordHash: hashedPassword,
            status: UserStatus.PENDING_VERIFICATION,
            hash: uuidv4(),
            profile: {
              create: {
                firstName: "",
                lastName: "",
              },
            },
          },
        });

        const newCompany = await ctx.prisma.company.create({
          data: {
            name: input.companyName,
            userId: result.id,
          },
        });

        await ctx.prisma.user.update({
          where: {
            id: result.id,
          },
          data: {
            companyId: newCompany.id,
          },
        });

        console.log(result);
        console.log(newCompany);
      } else {
        console.log("already exists");
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: "The username or email already exist",
        });
      }

      return true;
    }),
});
