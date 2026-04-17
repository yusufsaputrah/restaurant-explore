import { ArrowLeft, Clock, MapPin } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { Container } from "@/components/layout/Container";
import { Header } from "@/components/layout/Header";
import { useRestaurant } from "@/hooks/useRestaurant";
import { useReviews } from "@/hooks/useReviews";
import { RatingStars } from "@/components/common/RatingStars";
import { PriceBadge } from "@/components/common/PriceBadge";
import { OpenStatusBadge } from "@/components/common/OpenStatusBadge";
import { CuisineChip } from "@/components/common/CuisineChip";
import { ReviewList } from "@/features/reviews/components/ReviewList";
import { RestaurantMap } from "@/features/map/components/RestaurantMap";
import { Skeleton } from "@/components/ui/skeleton";
import { useState } from "react";

const RestaurantDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [search, setSearch] = useState("");
  const { data: restaurant, isLoading, isError } = useRestaurant(id);
  const { data: reviews = [], isLoading: reviewsLoading, isError: reviewsError } = useReviews(id);

  return (
    <div className="min-h-screen bg-background">
      <Header search={search} onSearchChange={setSearch} />

      <Container className="py-6 sm:py-8">
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to restaurants
        </Link>
      </Container>

      <Container className="pb-16">
        {isLoading && (
          <div className="space-y-6">
            <Skeleton className="aspect-[16/7] w-full rounded-3xl" />
            <Skeleton className="h-8 w-2/3" />
            <Skeleton className="h-4 w-1/2" />
          </div>
        )}

        {isError && (
          <div className="rounded-2xl border border-dashed border-border p-10 text-center text-muted-foreground">
            Couldn't load this restaurant.
          </div>
        )}

        {restaurant && (
          <article className="space-y-10 animate-fade-in">
            {/* Hero gallery */}
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-4 sm:grid-rows-2">
              <img
                src={restaurant.photos[0]}
                alt={`${restaurant.name} hero`}
                className="aspect-[16/10] w-full rounded-3xl object-cover sm:col-span-2 sm:row-span-2 sm:aspect-auto sm:h-full"
              />
              {restaurant.photos.slice(1, 3).map((p, i) => (
                <img
                  key={i}
                  src={p}
                  alt={`${restaurant.name} photo ${i + 2}`}
                  className="hidden aspect-[4/3] w-full rounded-2xl object-cover sm:col-span-2 sm:block sm:aspect-auto sm:h-full"
                />
              ))}
            </div>

            {/* Title block */}
            <header className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div className="space-y-3">
                <div className="flex flex-wrap items-center gap-2">
                  {restaurant.categories.map((c) => (
                    <CuisineChip key={c} label={c} />
                  ))}
                </div>
                <h1 className="font-display text-3xl font-bold text-foreground sm:text-4xl">{restaurant.name}</h1>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
                  <RatingStars value={restaurant.rating} />
                  <span>·</span>
                  <PriceBadge value={restaurant.price} />
                  <span>·</span>
                  <span className="inline-flex items-center gap-1">
                    <Clock className="h-4 w-4" /> {restaurant.openHours}
                  </span>
                  <span>·</span>
                  <span className="inline-flex items-center gap-1">
                    <MapPin className="h-4 w-4" /> {restaurant.address}
                  </span>
                </div>
              </div>
              <OpenStatusBadge isOpen={restaurant.isOpen} className="self-start" />
            </header>

            {/* Description + Map */}
            <div className="grid gap-6 lg:grid-cols-5">
              <div className="lg:col-span-3">
                <h2 className="mb-2 font-display text-xl font-semibold text-foreground">About</h2>
                <p className="text-base leading-relaxed text-foreground/85">{restaurant.description}</p>
              </div>
              <div className="lg:col-span-2">
                <h2 className="mb-2 font-display text-xl font-semibold text-foreground">Location</h2>
                <RestaurantMap
                  lat={restaurant.lat}
                  lng={restaurant.lng}
                  name={restaurant.name}
                  address={restaurant.address}
                />
              </div>
            </div>

            {/* Reviews */}
            <section>
              <h2 className="mb-4 font-display text-2xl font-semibold text-foreground">
                Reviews {reviews.length > 0 && <span className="text-muted-foreground">({reviews.length})</span>}
              </h2>
              <ReviewList reviews={reviews} isLoading={reviewsLoading} isError={reviewsError} />
            </section>
          </article>
        )}
      </Container>
    </div>
  );
};

export default RestaurantDetail;
