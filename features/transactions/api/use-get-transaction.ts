import { useQuery } from "@tanstack/react-query";

import {client} from "@/lib/hono";

export const useGetTransactions = (id?: string) => {
  const query = useQuery({
    enabled: !!id,
    queryKey: ["transaction", { id }],
    queryFn: async () => {
      const response = await client.api.transactions[":id"].$get({
        param: { id },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch transaction");
      }

      const { data } = await response.json();
      return data;
    },
  });

  return query;
}