import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface RatingStarsProps {
  value: number;
  size?: "sm" | "md" | "lg";
  showValue?: boolean;
  className?: string;
}

const sizeMap = {
  sm: { star: "w-3.5 h-3.5", text: "text-xs" },
  md: { star: "w-4 h-4", text: "text-sm" },
  lg: { star: "w-5 h-5", text: "text-base" },
};

export function RatingStars({ value, size = "md", showValue = true, className }: RatingStarsProps) {
  const s = sizeMap[size];
  return (
    <div className={cn("inline-flex items-center gap-1", className)}>
      <Star className={cn(s.star, "fill-rating text-rating")} />
      {showValue && <span className={cn(s.text, "font-semibold text-foreground")}>{value.toFixed(1)}</span>}
    </div>
  );
}
