import { z } from "zod";

import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "~/server/api/trpc";
import bcrypt from "bcrypt";
import { TRPCError } from "@trpc/server";

export const userRouter = createTRPCRouter({
  register: publicProcedure
    .input(
      z.object({
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
            company: {
              create: {
                name: "",
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
});
