import { useQuery } from "@tanstack/react-query";
import { getReviewsByRestaurant } from "@/api/reviews";

export function useReviews(restaurantId: string | undefined) {
  return useQuery({
    queryKey: ["reviews", restaurantId],
    queryFn: () => getReviewsByRestaurant(restaurantId!),
    enabled: !!restaurantId,
  });
}
