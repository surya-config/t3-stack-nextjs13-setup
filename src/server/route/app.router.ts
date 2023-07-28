import { trpcProcedure, trpcRouter } from "../trpc";

export const appRouter = trpcRouter({
  init: trpcProcedure.query(() => {
    return "Hello world!";
  }),
});

// export type definition of API
export type AppRouter = typeof appRouter;
