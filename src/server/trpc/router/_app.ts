import { router } from "../trpc";
import { authRouter } from "./auth";
import { shoesRouter } from "./shoes";

export const appRouter = router({
  auth: authRouter,
  shoes: shoesRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
