import type { Review } from "@/domain/types";
import { RatingStars } from "@/components/common/RatingStars";

export function ReviewItem({ review }: { review: Review }) {
  const date = new Date(review.date).toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  return (
    <article className="flex gap-4 rounded-2xl bg-card p-4 shadow-soft">
      <img
        src={review.avatar}
        alt={`${review.name} avatar`}
        loading="lazy"
        className="h-12 w-12 shrink-0 rounded-full object-cover"
      />
      <div className="flex-1">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div>
            <div className="font-semibold text-foreground">{review.name}</div>
            <div className="text-xs text-muted-foreground">{date}</div>
          </div>
          <RatingStars value={review.rating} size="sm" />
        </div>
        <p className="mt-2 text-sm leading-relaxed text-foreground/85">{review.text}</p>
      </div>
    </article>
  );
}
