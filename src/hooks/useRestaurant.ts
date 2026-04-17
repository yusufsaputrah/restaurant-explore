import { useQuery } from "@tanstack/react-query";
import { getRestaurant } from "@/api/restaurants";

export function useRestaurant(id: string | undefined) {
  return useQuery({
    queryKey: ["restaurant", id],
    queryFn: () => getRestaurant(id!),
    enabled: !!id,
  });
}
