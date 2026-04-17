import type { PriceLevel } from "@/domain/types";
import { OpenNowToggle } from "./OpenNowToggle";
import { PriceFilter } from "./PriceFilter";
import { CuisineFilter } from "./CuisineFilter";

interface FilterBarProps {
  cuisines: string[];
  activeCuisine: string;
  onCuisineChange: (c: string) => void;
  openNow: boolean;
  onOpenNowChange: (v: boolean) => void;
  prices: PriceLevel[];
  onPricesChange: (p: PriceLevel[]) => void;
}

export function FilterBar(props: FilterBarProps) {
  return (
    <div className="flex flex-col gap-4">
      <CuisineFilter
        cuisines={props.cuisines}
        active={props.activeCuisine}
        onSelect={props.onCuisineChange}
      />
      <div className="flex flex-wrap items-center gap-3">
        <OpenNowToggle value={props.openNow} onChange={props.onOpenNowChange} />
        <PriceFilter selected={props.prices} onChange={props.onPricesChange} />
      </div>
    </div>
  );
}
