import { z } from "zod";
import { eq } from "drizzle-orm";
import { shoes } from "db/schema/schema";
import { protectedProcedure, router } from "../trpc";

export const shoesRouter = router({
  createShoe: protectedProcedure
    .input(
      z.object({ shoe: z.string(), distance: z.number(), color: z.string() })
    )
    .mutation((props) => {
      return props.ctx.drizzle.insert(shoes).values({
        name: props.input.shoe,
        distance: props.input.distance,
        color: props.input.color,
        userId: props.ctx.session.user.id,
      });
    }),
  getAllShoes: protectedProcedure.query(({ ctx }) => {
    return ctx.drizzle.query.shoes.findMany({
      where: eq(shoes.userId, ctx.session.user.id),
    });
  }),
  getMessage: protectedProcedure.query(() => {
    return "message";
  }),
});
