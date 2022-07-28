import { createRouter } from "./context";
import { z } from "zod";
import { TRPCError } from "@trpc/server";

export const upcomingRouter = createRouter().query("get-upcoming-items", {
  async resolve({ ctx }) {
    if (!ctx.session || !ctx.session.user?.id) {
      throw new TRPCError({ message: "Not signed in", code: "UNAUTHORIZED" });
    }

    const upcoming = await ctx.prisma.item.findMany({
      where: {
        AND: [
          {
            userId: ctx.session.user.id,
          },
          {
            date: {
              gte: new Date(Date.now()),
            },
          },
        ],
      },
      orderBy: {
        date: "asc",
      },
      // take: 1,
    });
    return upcoming;
  },
});
