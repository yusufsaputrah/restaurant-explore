import { apiFetch } from "./client";
import { USE_LOCAL_FALLBACK } from "@/config/env";
import { LOCAL_RESTAURANTS } from "@/data/localData";
import type { Restaurant, RestaurantFilters } from "@/domain/types";

/**
 * Server-side filter: cuisine/category text via `?categories_like=`.
 * MockAPI supports `?search=` style queries; we use a simple ?categories_like param
 * and filter locally as a safe fallback when querying the local dataset.
 */
export async function getRestaurants(filters: Pick<RestaurantFilters, "search">): Promise<Restaurant[]> {
  const search = filters.search?.trim();

  if (USE_LOCAL_FALLBACK) {
    // Simulate latency
    await new Promise((r) => setTimeout(r, 300));
    if (!search) return LOCAL_RESTAURANTS;
    const q = search.toLowerCase();
    return LOCAL_RESTAURANTS.filter((r) =>
      r.categories.some((c) => c.toLowerCase().includes(q)) || r.name.toLowerCase().includes(q),
    );
  }

  const qs = search ? `?categories_like=${encodeURIComponent(search)}` : "";
  return apiFetch<Restaurant[]>(`/restaurants${qs}`);
}

export async function getRestaurant(id: string): Promise<Restaurant> {
  if (USE_LOCAL_FALLBACK) {
    await new Promise((r) => setTimeout(r, 200));
    const found = LOCAL_RESTAURANTS.find((r) => r.id === id);
    if (!found) throw new Error("Restaurant not found");
    return found;
  }
  return apiFetch<Restaurant>(`/restaurants/${id}`);
}
