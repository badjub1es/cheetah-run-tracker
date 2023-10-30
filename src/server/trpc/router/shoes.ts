import { z } from "zod";
import { protectedProcedure, router } from "../trpc";
import { shoes, users } from "db/schema/schema";
import { eq } from "drizzle-orm";

export const shoesRouter = router({
  // createShoe: protectedProcedure
  //     .input(
  //         z.object({
  //             name: z.string(),
  //             miles: z.number()
  //         })
  //     )
  //     .mutation((props) => {
  //             return props.ctx.prisma.shoe.create({
  //                 data: {
  //                     name: props.input.name,
  //                     userId: props.ctx.session?.user?.id,
  //                     miles: props.input.miles || 0
  //                 }
  //             })
  //     }),
  getAllShoes: protectedProcedure.query(({ ctx }) => {
    return ctx.drizzle.query.shoes.findMany({
      where: eq(shoes.userId, ctx.session.user.id),
    });
  }),
  getMessage: protectedProcedure.query(() => {
    return "message";
  }),
});
