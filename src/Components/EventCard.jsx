import { Card, CardContent } from "../Components/ui/card";
import { Badge } from "../Components/ui/badge";
import { Calendar } from "lucide-react";
import { useRouter } from "next/navigation";

export default function EventCard({
  title,
  date,
  venue,
  image,
  badge,
  description,
  onJoinEvent,
}) {
  const badgeVariants = {
    Upcoming: "default",
    Featured: "default",
    Workshop: "secondary",
  };

  const router = useRouter();

  return (
    <Card
      data-aos="fade-up"
      onClick={() => router.push("/events")}
      className="overflow-hidden hover-elevate transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
    >
      <div className="relative h-48 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        {badge && (
          <Badge
            variant={badgeVariants[badge]}
            className="absolute top-4 right-4"
          >
            {badge}
          </Badge>
        )}
      </div>

      <CardContent className="p-6">
        <h3 className="font-heading text-xl font-semibold mb-3 text-foreground">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {description}
        </p>

        <div className="space-y-2 mb-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar className="w-4 h-4 text-primary" />
            <span>{date}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
