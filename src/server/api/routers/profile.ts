import { z } from "zod";

import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";

export const profileRouter = createTRPCRouter({
  setAccountProfile: protectedProcedure
    .input(
      z.object({
        firstName: z.string(),
        lastName: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      return await ctx.prisma.profile.update({
        where: {
          userId: ctx.session.user.id,
        },
        data: {
          firstName: input.firstName,
          lastName: input.lastName,
        },
      });
    }),
  getAccountProfile: protectedProcedure.query(async ({ ctx }) => {
    return await ctx.prisma.profile.findFirst({
      where: {
        userId: ctx.session.user.id,
      },
      select: {
        firstName: true,
        lastName: true,
      },
    });
  }),
});
