import { useQuery } from "@tanstack/react-query";
import { getRestaurants } from "@/api/restaurants";
import type { RestaurantFilters } from "@/domain/types";

export function useRestaurants(filters: Pick<RestaurantFilters, "search">) {
  return useQuery({
    queryKey: ["restaurants", filters.search ?? ""],
    queryFn: () => getRestaurants(filters),
    staleTime: 60_000,
  });
}
