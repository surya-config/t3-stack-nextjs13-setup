import { initTRPC } from "@trpc/server";
import superjson from "superjson";

const trpc = initTRPC.create({
  /**
   * @see https://trpc.io/docs/v10/data-transformers
   */
  transformer: superjson,
  /**
   * @see https://trpc.io/docs/v10/error-formatting
   */
  errorFormatter({ shape }) {
    return shape;
  },
});

export const trpcRouter = trpc.router;
export const trpcProcedure = trpc.procedure;
export const mergeRouters = trpc.mergeRouters;
