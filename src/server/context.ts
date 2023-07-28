import { inferAsyncReturnType } from "@trpc/server";
import * as trpcExpress from "@trpc/server/adapters/express";

export async function createTrpcContext({
  req,
  res,
}: trpcExpress.CreateExpressContextOptions) {
  return {
    req,
    res,
  };
}

export type MyContextType = inferAsyncReturnType<typeof createTrpcContext>;
