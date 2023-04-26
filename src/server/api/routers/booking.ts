import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const bookingRouter = createTRPCRouter({
  getAll: publicProcedure.query(() => {
    return "asd";
  }),
});
