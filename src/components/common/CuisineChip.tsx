import { cn } from "@/lib/utils";

export function CuisineChip({ label, className }: { label: string; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full bg-primary-soft px-2.5 py-1 text-xs font-medium text-accent-foreground",
        className,
      )}
    >
      {label}
    </span>
  );
}
