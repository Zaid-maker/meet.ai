import {
  defaultShouldDehydrateQuery,
  QueryClient,
} from "@tanstack/react-query";
import superjson from "superjson";
/**
 * Creates a new QueryClient instance with custom default options for query caching and data serialization.
 *
 * The returned QueryClient uses a 30-second stale time for queries and integrates superjson for serializing and deserializing query data during dehydration and hydration. The dehydration logic is extended to include queries with a "pending" status in addition to the default criteria.
 *
 * @returns A configured QueryClient instance
 */
export function makeQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 30 * 1000,
      },
      dehydrate: {
        serializeData: superjson.serialize,
        shouldDehydrateQuery: (query) =>
          defaultShouldDehydrateQuery(query) ||
          query.state.status === "pending",
      },
      hydrate: {
        deserializeData: superjson.deserialize,
      },
    },
  });
}
