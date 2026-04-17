import { Search, UtensilsCrossed, LogOut } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Container } from "./Container";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  search: string;
  onSearchChange: (v: string) => void;
}

export function Header({ search, onSearchChange }: HeaderProps) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    navigate("/login");
  };

  return (
    <header className="sticky top-0 z-30 border-b border-border bg-background/85 backdrop-blur">
      <Container className="flex flex-col gap-3 py-3 sm:flex-row sm:items-center sm:justify-between sm:py-4">
        <Link to="/" className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-hero text-primary-foreground shadow-soft">
            <UtensilsCrossed className="h-5 w-5" />
          </div>
          <div className="leading-tight">
            <div className="font-display text-xl font-bold text-foreground">Tastely</div>
            <div className="text-[11px] text-muted-foreground">Discover restaurants near you</div>
          </div>
        </Link>

        <div className="flex w-full sm:max-w-md items-center gap-2">
          <div className="relative w-full">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              value={search}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search cuisine — pizza, sushi, ramen…"
              className="h-11 rounded-full border-border bg-secondary pl-9 pr-4 text-sm shadow-soft focus-visible:ring-primary"
              aria-label="Search restaurants by cuisine"
            />
          </div>
          <Button variant="ghost" size="icon" onClick={handleLogout} className="rounded-full shrink-0" title="Logout">
            <LogOut className="h-5 w-5" />
          </Button>
        </div>
      </Container>
    </header>
  );
}
