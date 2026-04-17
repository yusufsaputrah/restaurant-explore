import { Skeleton } from "@/components/ui/skeleton";
import type { Restaurant } from "@/domain/types";
import { RestaurantCard } from "./RestaurantCard";
import { EmptyState } from "@/components/common/EmptyState";

interface RestaurantGridProps {
  restaurants: Restaurant[];
  isLoading: boolean;
  isError: boolean;
}

function CardSkeleton() {
  return (
    <div className="overflow-hidden rounded-2xl bg-card shadow-soft">
      <Skeleton className="aspect-[4/3] w-full rounded-none" />
      <div className="space-y-3 p-4">
        <Skeleton className="h-4 w-24" />
        <Skeleton className="h-5 w-3/4" />
        <Skeleton className="h-3 w-1/2" />
        <Skeleton className="h-4 w-20" />
      </div>
    </div>
  );
}

export function RestaurantGrid({ restaurants, isLoading, isError }: RestaurantGridProps) {
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <CardSkeleton key={i} />
        ))}
      </div>
    );
  }
  if (isError) {
    return <EmptyState title="Couldn't load restaurants" description="Please check your connection or API config and try again." />;
  }
  if (restaurants.length === 0) {
    return <EmptyState title="No restaurants match your filters" description="Try clearing a filter or searching a different cuisine." />;
  }
  return (
    <div className="grid animate-fade-in grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {restaurants.map((r) => (
        <RestaurantCard key={r.id} restaurant={r} />
      ))}
    </div>
  );
}
