import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/offerings", label: "Offerings" },
  { to: "/solutions", label: "Solutions" },
  { to: "/capabilities", label: "Capabilities" },
  { to: "/use-cases", label: "Use cases" },
  { to: "/platform", label: "Platform" },
  { to: "/about", label: "About Us" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/40 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Brand Logo */}
        <Link to="/" className="flex items-center group mr-8">
          <span className="font-display text-xl font-semibold tracking-tight">
            TRUSTGRID<span className="text-accent">.AI</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-base font-medium text-muted-foreground transition-colors hover:text-foreground px-2 py-1 rounded-md"
              activeProps={{ className: "text-foreground bg-surface/40" }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Action Button & Menu Button */}
        <div className="flex items-center gap-3">
          <Link to="/contact" className="hidden md:block">
            <Button size="default" className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium text-base">
              Book Strategy Session
            </Button>
          </Link>

          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Responsive Navigation menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border/40 bg-background max-h-[85vh] overflow-y-auto">
          <div className="px-6 py-6 flex flex-col gap-5">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className="text-base font-medium text-muted-foreground hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}

            <Link to="/contact" onClick={() => setMobileOpen(false)} className="mt-4">
              <Button size="default" className="w-full bg-primary text-primary-foreground text-base">
                Book Strategy Session
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

