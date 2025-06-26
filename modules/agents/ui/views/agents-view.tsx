"use client";

import { ErrorState } from "@/components/error-state";
import { LoadingState } from "@/components/loading-state";
import { useTRPC } from "@/trpc/client";
import { useQuery } from "@tanstack/react-query";

export const AgentsView = () => {
  const trpc = useTRPC();
  const { data, isLoading, isError } = useQuery(
    trpc.agents.getMany.queryOptions()
  );
  console.log(data);

  if (isLoading) {
    return (
      <LoadingState
        title="Loading Agents"
        description="Please wait while we load the agents."
      />
    );
  }

  if (isError) {
    return (
      <ErrorState
        title="Error Loading Agents"
        description="An error occurred while fetching the agents."
      />
    );
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
