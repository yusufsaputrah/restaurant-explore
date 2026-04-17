import { ArrowRight, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import type { Restaurant } from "@/domain/types";
import { RatingStars } from "@/components/common/RatingStars";
import { PriceBadge } from "@/components/common/PriceBadge";
import { OpenStatusBadge } from "@/components/common/OpenStatusBadge";
import { CuisineChip } from "@/components/common/CuisineChip";

export function RestaurantCard({ restaurant }: { restaurant: Restaurant }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl bg-card shadow-card transition-all hover:-translate-y-1 hover:shadow-[0_18px_40px_-14px_hsl(24_30%_25%_/_0.25)]">
      <Link to={`/restaurant/${restaurant.id}`} className="relative block aspect-[4/3] overflow-hidden bg-muted">
        <img
          src={restaurant.photos[0]}
          alt={`${restaurant.name} — ${restaurant.categories[0] ?? "restaurant"}`}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute left-3 top-3">
          <OpenStatusBadge isOpen={restaurant.isOpen} />
        </div>
      </Link>

      <div className="flex flex-1 flex-col gap-3 p-4">
        <div className="flex items-center justify-between gap-2">
          <CuisineChip label={restaurant.categories[0] ?? "Restaurant"} />
          <div className="flex items-center gap-2">
            <RatingStars value={restaurant.rating} size="sm" />
            <span className="text-muted-foreground">·</span>
            <PriceBadge value={restaurant.price} />
          </div>
        </div>

        <div>
          <h3 className="font-display text-lg font-semibold leading-tight text-foreground">{restaurant.name}</h3>
          <p className="mt-1 flex items-center gap-1 text-xs text-muted-foreground">
            <MapPin className="h-3.5 w-3.5 shrink-0" />
            <span className="truncate">{restaurant.address}</span>
          </p>
        </div>

        <Link
          to={`/restaurant/${restaurant.id}`}
          className="mt-auto inline-flex items-center gap-1 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
        >
          Learn more
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>
    </article>
  );
}
