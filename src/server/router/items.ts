// import { createRouter } from "./context";
import { createProtectedRouter } from "./protected-router";
import { z } from "zod";
import { TRPCError } from "@trpc/server";

const dateThreshold = new Date(Date.now() - 24 * 60 * 60 * 1000);

export const getItemsRouter = createProtectedRouter()
  .query("get-previous-items", {
    async resolve({ ctx }) {
      // if (!ctx.session || !ctx.session.user?.id) {
      //   throw new TRPCError({ message: "Not signed in", code: "UNAUTHORIZED" });
      // }

      const previous = await ctx.prisma.item.findMany({
        where: {
          AND: [
            {
              userId: ctx.session.user.id,
            },
            {
              date: {
                lt: dateThreshold,
              },
            },
          ],
        },
        orderBy: {
          date: "asc",
        },
        // take: 1,
      });
      return previous;
    },
  })
  .query("get-latest-items", {
    async resolve({ ctx }) {
      // if (!ctx.session || !ctx.session.user?.id) {
      //   throw new TRPCError({ message: "Not signed in", code: "UNAUTHORIZED" });
      // }

      const latest = await ctx.prisma.item.findMany({
        where: {
          AND: [
            {
              userId: ctx.session.user.id,
            },
            {
              date: {
                gte: dateThreshold,
                lte: new Date(Date.now()),
              },
            },
          ],
        },
        orderBy: {
          date: "asc",
        },
        // take: 1,
      });
      return latest;
    },
  })
  .query("get-upcoming-items", {
    async resolve({ ctx }) {
      // if (!ctx.session || !ctx.session.user?.id) {
      //   throw new TRPCError({ message: "Not signed in", code: "UNAUTHORIZED" });
      // }

      const upcoming = await ctx.prisma.item.findMany({
        where: {
          AND: [
            {
              userId: ctx.session.user.id,
            },
            {
              date: {
                gt: new Date(Date.now()),
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
  })
  .query("get-selected-item", {
    input: z.object({
      id: z.string(),
    }),

    async resolve({ ctx, input }) {
      const selectedItem = await ctx.prisma.item.findFirst({
        where: {
          AND: [
            {
              userId: ctx.session.user.id,
            },
            {
              id: input?.id,
            },
          ],
        },
      });
      return selectedItem;
    },
  });
