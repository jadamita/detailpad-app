import { createTRPCRouter } from "~/server/api/trpc";
import { exampleRouter } from "~/server/api/routers/example";
import { userRouter } from "./routers/user";
import { profileRouter } from "./routers/profile";
import { serviceRouter } from "./routers/service";
import { bookingRouter } from "./routers/booking";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  example: exampleRouter,
  user: userRouter,
  profile: profileRouter,
  service: serviceRouter,
  booking: bookingRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
