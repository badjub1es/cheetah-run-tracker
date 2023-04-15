import { protectedProcedure, publicProcedure, router } from "../trpc";

export const shoesRouter = router({
    createShoe: protectedProcedure
        .mutation(({ ctx, input }) => {
                console.log(input, "HERE")
                ctx.prisma.shoe.create({
                        name: input.shoeName,
                        userId: ctx.session?.user?.id,
                        miles: input.miles || 0
                })
        }),
    getAllShoes: protectedProcedure
        .query(({ ctx }) => {
            return ctx.prisma.shoe.findMany({
                where: {
                    userId: ctx.session?.user?.id
                }
            })
        })
})
