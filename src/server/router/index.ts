// src/server/router/index.ts
import { createRouter } from "./context";
import superjson from "superjson";

import { exampleRouter } from "./example";
import { authRouter } from "./auth";
import { getItemsRouter } from "./items";
import { upcomingRouter } from "./upcoming";

export const appRouter = createRouter()
  .transformer(superjson)
  // .merge("example.", exampleRouter)
  // .merge("auth.", authRouter)
  .merge("items.", getItemsRouter);

// export type definition of API
export type AppRouter = typeof appRouter;
