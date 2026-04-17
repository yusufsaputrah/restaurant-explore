import { cn } from "@/lib/utils";

interface CuisineFilterProps {
  cuisines: string[];
  active: string;
  onSelect: (cuisine: string) => void;
}

export function CuisineFilter({ cuisines, active, onSelect }: CuisineFilterProps) {
  const all = ["All", ...cuisines];
  return (
    <div className="-mx-4 overflow-x-auto px-4 sm:mx-0 sm:px-0">
      <div className="flex w-max gap-2">
        {all.map((c) => {
          const isActive = (c === "All" && !active) || c === active;
          return (
            <button
              key={c}
              type="button"
              onClick={() => onSelect(c === "All" ? "" : c)}
              aria-pressed={isActive}
              className={cn(
                "whitespace-nowrap rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors",
                isActive
                  ? "border-primary bg-primary text-primary-foreground shadow-soft"
                  : "border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-foreground",
              )}
            >
              {c}
            </button>
          );
        })}
      </div>
    </div>
  );
}
