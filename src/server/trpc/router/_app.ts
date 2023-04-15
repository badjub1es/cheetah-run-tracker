import { router } from "../trpc";
import { authRouter } from "./auth";
import { exampleRouter } from "./example";
import { shoesRouter } from "./shoes";

export const appRouter = router({
  example: exampleRouter,
  auth: authRouter,
  shoes: shoesRouter
});

// export type definition of API
export type AppRouter = typeof appRouter;
