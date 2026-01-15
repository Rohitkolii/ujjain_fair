// import { Card, CardContent } from "../Components/ui/card";
// import { Badge } from "../Components/ui/badge";
// import { Calendar } from "lucide-react";
// import { useRouter } from "next/navigation";

// export default function EventCard({
//   title,
//   date,
//   venue,
//   image,
//   badge,
//   description,
//   onJoinEvent,
// }) {
//   const badgeVariants = {
//     Upcoming: "default",
//     Featured: "default",
//     Workshop: "secondary",
//   };

//   const router = useRouter();

//   return (
//     <Card
//       data-aos="fade-up"
//       onClick={() => router.push("/events")}
//       className="overflow-hidden hover-elevate transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
//     >
//       <div className="relative h-48 overflow-hidden">
//         <img src={image} alt={title} className="w-full h-full object-cover" />
//         {badge && (
//           <Badge
//             variant={badgeVariants[badge]}
//             className="absolute top-4 right-4"
//           >
//             {badge}
//           </Badge>
//         )}
//       </div>

//       <CardContent className="p-6">
//         <h3 className="font-heading text-xl font-semibold mb-3 text-foreground">
//           {title}
//         </h3>
//         <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
//           {description}
//         </p>

//         <div className="space-y-2 mb-4">
//           <div className="flex items-center gap-2 text-sm text-muted-foreground">
//             <Calendar className="w-4 h-4 text-primary" />
//             <span>{date}</span>
//           </div>
//         </div>
//       </CardContent>
//     </Card>
//   );
// }



import { Calendar, MapPin, ArrowRight } from "lucide-react";
import { Badge } from "../Components/ui/badge";
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
  const router = useRouter();

  return (
    <div
      data-aos="fade-up"
      onClick={() => router.push("/events")}
      className="group relative rounded-xl overflow-hidden cursor-pointer
      shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
    >
      {/* Image */}
      <div className="relative h-45 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Dark gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

        {/* Badge */}
        {badge && (
          <Badge className="absolute top-4 left-4 bg-green-600 text-white shadow-lg">
            {badge}
          </Badge>
        )}
      </div>

      {/* Content */}
      <div className="relative bg-white p-3">
        <h3 className="font-heading text-2xl font-bold text-gray-900 mb-3 leading-tight">
          {title}
        </h3>

        <p className="text-sm text-gray-600 mb-2 line-clamp-2">
          {description}
        </p>

        {/* Meta */}
        <div className="flex flex-col gap-3 text-sm text-gray-700">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-green-600" />
            <span>{date}</span>
          </div>

          {venue && (
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-green-600" />
              <span>{venue}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
