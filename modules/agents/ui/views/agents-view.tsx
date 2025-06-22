"use client";

import { useTRPC } from "@/trpc/client";
import { useQuery } from "@tanstack/react-query";
import React from "react";

export const AgentsView = () => {
  const trpc = useTRPC();
  const { data, isLoading, isError } = useQuery(
    trpc.agents.getMany.queryOptions()
  );
  console.log(data);

  if (isLoading) {
    return <div className="animate-pulse">Loading...</div>;
  }

  if (isError) {
    return <div className="text-red">Error loading data</div>;
  }

  return (
    <div className="flex flex-col p-4 gap-y-4">
      {data ? (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      ) : (
        <div>No data available</div>
      )}
    </div>
  );
};
