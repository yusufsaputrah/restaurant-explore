import { cn } from "@/lib/utils";
import type { PriceLevel } from "@/domain/types";
import { Banknote } from "lucide-react";

const PRICE_LABELS: Record<PriceLevel, string> = {
  1: "Murah",
  2: "Sedang",
  3: "Mahal",
  4: "Sultan",
};

export function PriceBadge({ value, className }: { value: PriceLevel; className?: string }) {
  return (
    <span 
      className={cn(
        "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold tracking-wide capitalize",
        value === 1 ? "bg-green-100 text-green-700 dark:bg-green-500/20 dark:text-green-400 border border-green-200/50" :
        value === 2 ? "bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-400 border border-blue-200/50" :
        value === 3 ? "bg-orange-100 text-orange-700 dark:bg-orange-500/20 dark:text-orange-400 border border-orange-200/50" :
        "bg-purple-100 text-purple-700 dark:bg-purple-500/20 dark:text-purple-400 border border-purple-200/50",
        className
      )} 
      aria-label={`Kategori Harga: ${PRICE_LABELS[value]}`}
    >
      <Banknote className="w-3.5 h-3.5 opacity-80" />
      {PRICE_LABELS[value]}
    </span>
  );
}
