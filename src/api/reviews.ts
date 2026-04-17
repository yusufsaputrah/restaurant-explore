import { apiFetch } from "./client";
import { USE_LOCAL_FALLBACK } from "@/config/env";
import { LOCAL_REVIEWS } from "@/data/localData";
import type { Review } from "@/domain/types";

export async function getReviewsByRestaurant(restaurantId: string): Promise<Review[]> {
  if (USE_LOCAL_FALLBACK) {
    await new Promise((r) => setTimeout(r, 250));
    return LOCAL_REVIEWS.filter((r) => r.restaurantId === restaurantId);
  }
  return apiFetch<Review[]>(`/reviews?restaurantId=${encodeURIComponent(restaurantId)}`);
}
