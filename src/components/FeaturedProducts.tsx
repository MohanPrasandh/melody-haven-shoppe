import { Button } from "@/components/ui/button";
import { Heart, ShoppingCart } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Modern Velvet Sofa",
    price: "₹89,999",
    originalPrice: "₹109,999",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80",
    tag: "Best Seller",
  },
  {
    id: 2,
    name: "Elegant Dining Table",
    price: "₹65,999",
    image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=800&q=80",
    tag: "New",
  },
  {
    id: 3,
    name: "Luxury King Bed",
    price: "₹125,999",
    originalPrice: "₹149,999",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&q=80",
    tag: "Sale",
  },
  {
    id: 4,
    name: "Executive Office Desk",
    price: "₹45,999",
    image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800&q=80",
  },
];

const FeaturedProducts = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-accent font-medium tracking-wider uppercase text-sm mb-2">
            Handpicked for You
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
            Featured Products
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-elegant transition-all duration-300"
            >
              <div className="relative aspect-square overflow-hidden bg-secondary/30">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {product.tag && (
                  <span className="absolute top-4 left-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-medium">
                    {product.tag}
                  </span>
                )}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Button
                    size="icon"
                    variant="secondary"
                    className="rounded-full shadow-lg bg-white/90 hover:bg-white"
                  >
                    <Heart className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                  {product.name}
                </h3>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xl font-bold text-foreground">
                    {product.price}
                  </span>
                  {product.originalPrice && (
                    <span className="text-sm text-muted-foreground line-through">
                      {product.originalPrice}
                    </span>
                  )}
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Add to Cart
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="border-2">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
