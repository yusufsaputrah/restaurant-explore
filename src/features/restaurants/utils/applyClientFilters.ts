import type { Restaurant, RestaurantFilters } from "@/domain/types";

export function applyClientFilters(
  list: Restaurant[],
  { openNow, prices }: Pick<RestaurantFilters, "openNow" | "prices">,
): Restaurant[] {
  return list.filter((r) => {
    if (openNow && !r.isOpen) return false;
    if (prices && prices.length > 0 && !prices.includes(r.price)) return false;
    return true;
  });
}
