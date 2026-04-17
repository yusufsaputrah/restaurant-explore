import { Skeleton } from "@/components/ui/skeleton";
import type { Review } from "@/domain/types";
import { ReviewItem } from "./ReviewItem";
import { EmptyState } from "@/components/common/EmptyState";

interface ReviewListProps {
  reviews: Review[];
  isLoading: boolean;
  isError: boolean;
}

function ReviewSkeleton() {
  return (
    <div className="flex gap-4 rounded-2xl bg-card p-4 shadow-soft">
      <Skeleton className="h-12 w-12 shrink-0 rounded-full" />
      <div className="flex-1 space-y-2">
        <Skeleton className="h-4 w-32" />
        <Skeleton className="h-3 w-20" />
        <Skeleton className="h-3 w-full" />
        <Skeleton className="h-3 w-5/6" />
      </div>
    </div>
  );
}

export function ReviewList({ reviews, isLoading, isError }: ReviewListProps) {
  if (isLoading) {
    return (
      <div className="space-y-3">
        {Array.from({ length: 3 }).map((_, i) => (
          <ReviewSkeleton key={i} />
        ))}
      </div>
    );
  }
  if (isError) {
    return <EmptyState title="Couldn't load reviews" />;
  }
  if (reviews.length === 0) {
    return <EmptyState title="No reviews yet" description="Be the first to share your thoughts." />;
  }
  return (
    <div className="space-y-3">
      {reviews.map((r) => (
        <ReviewItem key={r.id} review={r} />
      ))}
    </div>
  );
}
