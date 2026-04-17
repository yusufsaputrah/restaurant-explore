import { Switch } from "@/components/ui/switch";
import { Clock } from "lucide-react";

interface OpenNowToggleProps {
  value: boolean;
  onChange: (v: boolean) => void;
}

export function OpenNowToggle({ value, onChange }: OpenNowToggleProps) {
  return (
    <label 
      className={`inline-flex cursor-pointer items-center gap-2.5 rounded-full border px-4 py-2 transition-all duration-300 shadow-sm
        ${value ? "border-primary/50 bg-primary/10 text-primary" : "border-border bg-background text-muted-foreground hover:border-border/80 hover:bg-secondary/50"}`
      }
    >
      <Clock className={`h-4 w-4 ${value ? "text-primary" : "text-muted-foreground"}`} />
      <span className="text-sm font-semibold tracking-wide">Buka Sekarang</span>
      <Switch checked={value} onCheckedChange={onChange} aria-label="Toggle open now filter" className="ml-1" />
    </label>
  );
}
