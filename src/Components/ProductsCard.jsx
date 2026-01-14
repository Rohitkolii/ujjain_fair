import { Card, CardContent } from "../Components/ui/card";

export default function ProductCard({
  title,
  description,
  image,
  category,
  name,
  onLearnMore,
}) {
  return (
    <Card data-aos="fade-down" className="group overflow-hidden hover-elevate transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
      {/* Image Section */}
      <div className="aspect-square overflow-hidden bg-gradient-to-br from-primary/5 to-accent/10">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Content Section */}
      <CardContent className="p-4">
        <div className="mb-2">
          <span className="text-xs font-semibold text-primary uppercase tracking-wider">
            {category}
          </span>
        </div>

        <h3 className="font-heading text-xl font-semibold mb-2 text-foreground">
          {name}
        </h3>

        <p className="text-muted-foreground mb-4 line-clamp-2">{description}</p>
      </CardContent>
    </Card>
  );
}
