"use client";

import { useTRPC } from "@/trpc/client";
import { useQuery } from "@tanstack/react-query";
import React from "react";

export const AgentsView = () => {
  const trpc = useTRPC();
  const { data } = useQuery(trpc.agents.getMany.queryOptions());
  console.log(data);
  return (
    <div>
      {data ? (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      ) : (
        <div>No data available</div>
      )}
    </div>
  );
};
