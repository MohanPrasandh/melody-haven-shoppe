import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import heroImage from "@/assets/hero-living-room.jpg";

const Hero = () => {
  return (
    <section className="relative h-[600px] md:h-[700px] overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative h-full flex items-center">
        <div className="max-w-2xl space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <p className="text-accent font-medium tracking-wider uppercase text-sm">
            New Collection 2024
          </p>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-foreground leading-tight">
            Timeless Elegance for Your Home
          </h1>
          <p className="text-lg text-muted-foreground max-w-lg">
            Discover handcrafted furniture that blends modern design with 
            classic sophistication. Transform your space into a sanctuary.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-elegant">
              Explore Collection
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-2 hover:bg-secondary">
              View Catalog
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
