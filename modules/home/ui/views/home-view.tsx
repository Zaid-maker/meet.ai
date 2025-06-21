"use client";

import { useTRPC } from "@/trpc/client";
import { useQuery } from "@tanstack/react-query";

export const HomeView = () => {
  const trpc = useTRPC();
  const { data, isLoading, error } = useQuery(
    trpc.hello.queryOptions({ text: "world" })
  );

  return (
    <div className="flex flex-col p-4 gap-y-4">
      {error ? (
        <div className="text-red-500">Error: {error.message}</div>
      ) : isLoading ? (
        <div className="animate-pulse">Loading...</div>
      ) : (
        data?.greeting
      )}
    </div>
  );
};
