import { authClient } from "@/lib/auth-client";
import React from "react";

export const DashboardUserButton = () => {
  const { data, isPending } = authClient.useSession();

  if (isPending || !data?.user) {
    return null;
  }

  return <div>DashboardUserButton</div>;
};
