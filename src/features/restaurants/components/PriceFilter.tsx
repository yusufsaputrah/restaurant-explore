import { cn } from "@/lib/utils";
import type { PriceLevel } from "@/domain/types";
import { WalletCards } from "lucide-react";

interface PriceFilterProps {
  selected: PriceLevel[];
  onChange: (next: PriceLevel[]) => void;
}

const LEVELS: { value: PriceLevel; label: string }[] = [
  { value: 1, label: "Murah" },
  { value: 2, label: "Sedang" },
  { value: 3, label: "Mahal" },
  { value: 4, label: "Sultan" },
];

export function PriceFilter({ selected, onChange }: PriceFilterProps) {
  const toggle = (lvl: PriceLevel) => {
    onChange(selected.includes(lvl) ? selected.filter((l) => l !== lvl) : [...selected, lvl]);
  };
  return (
    <div className="flex flex-wrap items-center gap-2">
      <div className="hidden sm:flex items-center justify-center h-9 w-9 rounded-full bg-secondary text-muted-foreground mr-1">
        <WalletCards className="h-4 w-4" />
      </div>
      {LEVELS.map(({ value, label }) => {
        const active = selected.includes(value);
        return (
          <button
            key={value}
            type="button"
            onClick={() => toggle(value)}
            aria-pressed={active}
            className={cn(
              "px-4 py-2 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 ease-out border shadow-sm",
              active 
                ? "bg-primary text-primary-foreground border-primary shadow-primary/20 scale-105" 
                : "bg-background text-muted-foreground border-border hover:border-primary/40 hover:text-primary hover:bg-primary/5 hover:scale-[1.02]"
            )}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}
