import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-secondary/50 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-serif font-bold text-foreground mb-4">
              MELODY
            </h3>
            <p className="text-muted-foreground mb-6">
              Crafting timeless furniture pieces that bring elegance and comfort to your home.
            </p>
            <div className="flex gap-3">
              <Button variant="outline" size="icon" className="rounded-full">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full">
                <Twitter className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="/about" className="text-muted-foreground hover:text-accent transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/shop" className="text-muted-foreground hover:text-accent transition-colors">
                  Shop
                </a>
              </li>
              <li>
                <a href="/collections" className="text-muted-foreground hover:text-accent transition-colors">
                  Collections
                </a>
              </li>
              <li>
                <a href="/blog" className="text-muted-foreground hover:text-accent transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Customer Service</h4>
            <ul className="space-y-2">
              <li>
                <a href="/contact" className="text-muted-foreground hover:text-accent transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="/shipping" className="text-muted-foreground hover:text-accent transition-colors">
                  Shipping Info
                </a>
              </li>
              <li>
                <a href="/returns" className="text-muted-foreground hover:text-accent transition-colors">
                  Returns
                </a>
              </li>
              <li>
                <a href="/faq" className="text-muted-foreground hover:text-accent transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Stay Connected</h4>
            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-2 text-muted-foreground">
                <Phone className="h-4 w-4 mt-1 flex-shrink-0" />
                <span className="text-sm">+91 98765 43210</span>
              </div>
              <div className="flex items-start gap-2 text-muted-foreground">
                <Mail className="h-4 w-4 mt-1 flex-shrink-0" />
                <span className="text-sm">hello@melody.com</span>
              </div>
              <div className="flex items-start gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                <span className="text-sm">Mumbai, India</span>
              </div>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-foreground font-medium">Newsletter</p>
              <div className="flex gap-2">
                <Input placeholder="Your email" className="bg-background" />
                <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2024 Melody Furniture. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
