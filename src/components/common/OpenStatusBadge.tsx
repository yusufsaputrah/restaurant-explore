import { cn } from "@/lib/utils";

export function OpenStatusBadge({ isOpen, className }: { isOpen: boolean; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold",
        isOpen ? "bg-open text-open-foreground" : "bg-closed text-closed-foreground",
        className,
      )}
    >
      <span className={cn("h-1.5 w-1.5 rounded-full", isOpen ? "bg-open-foreground" : "bg-closed-foreground")} />
      {isOpen ? "Open now" : "Closed"}
    </span>
  );
}
