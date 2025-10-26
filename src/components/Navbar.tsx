import { ShoppingCart, User, Search, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/" className="text-2xl font-serif font-bold text-foreground">
            MELODY
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="/" className="text-foreground hover:text-accent transition-colors">
              Home
            </a>
            <a href="/shop" className="text-foreground hover:text-accent transition-colors">
              Shop
            </a>
            <a href="/collections" className="text-foreground hover:text-accent transition-colors">
              Collections
            </a>
            <a href="/about" className="text-foreground hover:text-accent transition-colors">
              About
            </a>
            <a href="/contact" className="text-foreground hover:text-accent transition-colors">
              Contact
            </a>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-accent text-accent-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <a href="/" className="text-foreground hover:text-accent transition-colors">
                Home
              </a>
              <a href="/shop" className="text-foreground hover:text-accent transition-colors">
                Shop
              </a>
              <a href="/collections" className="text-foreground hover:text-accent transition-colors">
                Collections
              </a>
              <a href="/about" className="text-foreground hover:text-accent transition-colors">
                About
              </a>
              <a href="/contact" className="text-foreground hover:text-accent transition-colors">
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
