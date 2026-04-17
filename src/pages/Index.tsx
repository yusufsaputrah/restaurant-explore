import { useMemo, useState } from "react";
import { Header } from "@/components/layout/Header";
import { Container } from "@/components/layout/Container";
import { FilterBar } from "@/features/restaurants/components/FilterBar";
import { RestaurantGrid } from "@/features/restaurants/components/RestaurantGrid";
import { useRestaurants } from "@/hooks/useRestaurants";
import { applyClientFilters } from "@/features/restaurants/utils/applyClientFilters";
import { LOCAL_RESTAURANTS } from "@/data/localData";
import type { PriceLevel } from "@/domain/types";

const Index = () => {
  const [search, setSearch] = useState("");
  const [activeCuisine, setActiveCuisine] = useState("");
  const [openNow, setOpenNow] = useState(false);
  const [prices, setPrices] = useState<PriceLevel[]>([]);

  // Server-side filter: search OR active cuisine chip (active cuisine wins).
  const serverSearch = activeCuisine || search;
  const { data, isLoading, isError } = useRestaurants({ search: serverSearch });

  const filtered = useMemo(() => applyClientFilters(data ?? [], { openNow, prices }), [data, openNow, prices]);

  // Cuisine chips derived from full local dataset for stable list.
  const cuisines = useMemo(() => {
    const set = new Set<string>();
    LOCAL_RESTAURANTS.forEach((r) => r.categories.forEach((c) => set.add(c)));
    return Array.from(set).sort();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header search={search} onSearchChange={setSearch} />

      <main>
        {/* Hero */}
        <section className="border-b border-border bg-gradient-to-b from-primary-soft/60 to-background">
          <Container className="py-10 sm:py-14">
            <div className="max-w-2xl">
              <h1 className="font-display text-4xl font-bold leading-tight text-foreground sm:text-5xl">
                Find your next <span className="text-primary">favorite meal</span>.
              </h1>
              <p className="mt-3 text-base text-muted-foreground sm:text-lg">
                Browse curated restaurants by cuisine, price, and availability — all in one place.
              </p>
            </div>
          </Container>
        </section>

        <Container className="py-6 sm:py-8">
          <FilterBar
            cuisines={cuisines}
            activeCuisine={activeCuisine}
            onCuisineChange={setActiveCuisine}
            openNow={openNow}
            onOpenNowChange={setOpenNow}
            prices={prices}
            onPricesChange={setPrices}
          />
        </Container>

        <Container className="pb-16">
          <div className="mb-4 flex items-baseline justify-between">
            <h2 className="font-display text-2xl font-semibold text-foreground">
              {filtered.length} {filtered.length === 1 ? "restaurant" : "restaurants"}
            </h2>
            {(activeCuisine || search || openNow || prices.length > 0) && (
              <button
                type="button"
                onClick={() => {
                  setSearch("");
                  setActiveCuisine("");
                  setOpenNow(false);
                  setPrices([]);
                }}
                className="text-sm font-medium text-primary hover:underline"
              >
                Clear filters
              </button>
            )}
          </div>
          <RestaurantGrid restaurants={filtered} isLoading={isLoading} isError={isError} />
        </Container>
      </main>

      <footer className="border-t border-border bg-card">
        <Container className="py-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Tastely. Made for the Frontend Developer technical test.
        </Container>
      </footer>
    </div>
  );
};

export default Index;
