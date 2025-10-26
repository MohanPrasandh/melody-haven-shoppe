import bedroomImage from "@/assets/category-bedroom.jpg";
import diningImage from "@/assets/category-dining.jpg";
import officeImage from "@/assets/category-office.jpg";

const categories = [
  {
    name: "Bedroom",
    image: bedroomImage,
    description: "Rest in luxury",
  },
  {
    name: "Dining",
    image: diningImage,
    description: "Gather in style",
  },
  {
    name: "Office",
    image: officeImage,
    description: "Work with elegance",
  },
];

const Categories = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-accent font-medium tracking-wider uppercase text-sm mb-2">
            Explore by Room
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
            Shop by Category
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <a
              key={category.name}
              href={`/category/${category.name.toLowerCase()}`}
              className="group relative overflow-hidden rounded-2xl aspect-square cursor-pointer"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <p className="text-sm text-gold-light mb-1">{category.description}</p>
                <h3 className="text-3xl font-serif font-bold">{category.name}</h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
