import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { UtensilsCrossed } from "lucide-react";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (username === "admin" && password === "admin123") {
      localStorage.setItem("isAuthenticated", "true");
      toast({
        title: "Login Successful",
        description: "Welcome back to Tastely!",
      });
      navigate("/");
    } else {
      toast({
        title: "Login Failed",
        description: "Invalid username or password.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center">
      <Container className="max-w-md w-full">
        <div className="flex flex-col items-center gap-4 mb-8">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-hero text-primary-foreground shadow-soft">
            <UtensilsCrossed className="h-6 w-6" />
          </div>
          <div className="text-center">
            <h1 className="font-display text-2xl font-bold text-foreground">Welcome back</h1>
            <p className="text-sm text-muted-foreground mt-1">Please enter your details to sign in.</p>
          </div>
        </div>

        <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter your username"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
              />
            </div>
            <Button type="submit" className="w-full mt-2">
              Sign In
            </Button>
            
            <div className="text-center mt-4 pt-4 border-t border-border">
              <p className="text-xs text-muted-foreground">Demo Credentials:</p>
              <p className="text-xs font-mono text-muted-foreground mt-1">
                Username: <span className="font-semibold text-foreground">admin</span> | 
                Password: <span className="font-semibold text-foreground">admin123</span>
              </p>
            </div>
          </form>
        </div>
      </Container>
    </div>
  );
}
