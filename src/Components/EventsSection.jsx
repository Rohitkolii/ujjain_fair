// import { useState } from "react";
// import EventCard from "./EventCard.jsx";
// import WaveDivider from "./WaveDivider";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import { Button } from "../Components/ui/button";

// const event =[
//   "/images/gallary/13.webp",
//   "/images/gallary/7.webp",
//   "/images/gallary/21.webp",
//   "/images/gallary/18.webp",
//   "/images/gallary/20.webp",
// ]

// export default function EventsSection({ onEventClick }) {
//   const [currentIndex, setCurrentIndex] = useState(0);

//    const events = [
//   {
//     id: "inaugural",
//     title: "Inaugural ceremony",
//     date: "December 17, 2026",
//     venue: "Main Exhibition Hall",
//     type: "featured",
//     image: event[0],
//     description:
//       "Formal opening of the fair with dignitaries and cultural showcase.",
//   },
//   {
//     id: "conference",
//     title: "International Conference",
//     date: "December 19-20, 2026",
//     venue: "Business Pavilion",
//     type: "upcoming",
//     image: event[1],
//     description:
//       "Expert session on herbal innovation, MFP, and sustainable livelihoods.",
//   },
//   {
//     id: "meetup",
//     title: "Buyer-Seller Meet",
//     date: "December 21, 2026",
//     venue: "Innovation Pavilion",
//     type: "workshops",
//     image: event[2],
//     description:
//       "B2B platform to boost trade, market linkages, and business collaboration.",
//   },
//   {
//     id: "Closing",
//     title: "Closing Ceremony & Prize Distribution",
//     date: "December 23, 2026",
//     venue: "Conference Hall A",
//     type: "featured",
//     image: event[3],
//     description:
//       "Concluding celebration with awards and acknowledgements.",
//   },
// ];

//   const next = () => {
//     setCurrentIndex((prev) => (prev + 1) % events.length);
//   };

//   const prev = () => {
//     setCurrentIndex((prev) => (prev - 1 + events.length) % events.length);
//   };

//   return (
//     <>
//       <WaveDivider className="text-white" />
//       <section className="py-20 px-4 bg-gradient-to-b from-primary/5 to-white">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-16">
//             <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
//               <span className="text-primary font-semibold">Events</span>
//             </div>
//             <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
//               Events & Celebrations
//             </h2>
//             <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
//               Join us for inspiring events, workshops, and networking opportunities
//             </p>
//           </div>

//           <div className="relative">
//             <div className="grid md:grid-cols-3 gap-8 mb-8">
//               {events.map((event, idx) => (
//                 <div
//                   key={event.id}
//                   className={`transition-opacity duration-500 ${
//                     idx === currentIndex
//                       ? "opacity-100"
//                       : "md:opacity-100 opacity-0 hidden md:block"
//                   }`}
//                 >
//                   <EventCard
//                     {...event}
//                     onJoinEvent={() => onEventClick && onEventClick(event.id)}
//                   />
//                 </div>
//               ))}
//             </div>

//             {/* Mobile navigation buttons */}
//             <div className="flex justify-center gap-4 md:hidden">
//               <Button
//                 size="icon"
//                 variant="outline"
//                 onClick={prev}
//                 data-testid="button-prev-event"
//               >
//                 <ChevronLeft className="w-5 h-5" />
//               </Button>
//               <Button
//                 size="icon"
//                 variant="outline"
//                 onClick={next}
//                 data-testid="button-next-event"
//               >
//                 <ChevronRight className="w-5 h-5" />
//               </Button>
//             </div>

//             {/* Event dots */}
//             <div className="flex justify-center gap-2 mt-6 md:hidden">
//               {events.map((_, idx) => (
//                 <button
//                   key={idx}
//                   className={`w-2 h-2 rounded-full transition-all ${
//                     idx === currentIndex ? "bg-primary w-8" : "bg-muted"
//                   }`}
//                   onClick={() => setCurrentIndex(idx)}
//                   data-testid={`button-event-dot-${idx}`}
//                 />
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>
//       <WaveDivider className="text-white rotate-180" />
//     </>
//   );
// }



import { useState } from "react";
import EventCard from "./EventCard.jsx";
import WaveDivider from "./WaveDivider";
import { ChevronLeft, ChevronRight, CalendarDays } from "lucide-react";
import { Button } from "../Components/ui/button";

const images = [
  "/images/gallary/13.webp",
  "/images/gallary/7.webp",
  "/images/gallary/21.webp",
  "/images/gallary/18.webp",
];

export default function EventsSection({ onEventClick }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const events = [
    {
      id: "inaugural",
      title: "Inaugural Ceremony",
      date: "December 17, 2026",
      venue: "Main Exhibition Hall",
      type: "featured",
      image: images[0],
      description:
        "Formal opening of the fair with dignitaries and cultural showcase.",
    },
    {
      id: "conference",
      title: "International Conference",
      date: "December 19–20, 2026",
      venue: "Business Pavilion",
      type: "upcoming",
      image: images[1],
      description:
        "Expert sessions on herbal innovation, MFP, and sustainable livelihoods.",
    },
    {
      id: "meetup",
      title: "Buyer–Seller Meet",
      date: "December 21, 2026",
      venue: "Innovation Pavilion",
      type: "workshops",
      image: images[2],
      description:
        "B2B platform to boost trade, market linkages, and collaboration.",
    },
    // {
    //   id: "closing",
    //   title: "Closing Ceremony & Prize Distribution",
    //   date: "December 23, 2026",
    //   venue: "Conference Hall A",
    //   type: "featured",
    //   image: images[3],
    //   description:
    //     "Grand conclusion with awards and acknowledgements.",
    // },
  ];

  const next = () =>
    setCurrentIndex((p) => (p + 1) % events.length);
  const prev = () =>
    setCurrentIndex((p) => (p - 1 + events.length) % events.length);

  return (
    <>
      <WaveDivider className="text-white" />

      <section className="relative py-28 px-4 overflow-hidden bg-[#f8fafc]">
        {/* Decorative background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,212,29,0.18),transparent_40%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(255,212,29,0.14),transparent_45%)]" />

        <div className="relative max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <span className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-primary/15 text-primary font-semibold shadow">
              <CalendarDays className="w-4 h-4" />
              Events Schedule
            </span>
            <h2 className="mt-6 text-4xl md:text-5xl font-heading font-bold">
              Events & Celebrations
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg">
              A week full of inaugurations, conferences, networking meets,
              cultural programs and grand celebrations.
            </p>
          </div>

          {/* MAIN CONTENT */}
          <div className="relative">
            {/* Desktop layout */}
            <div className="hidden md:grid grid-cols-3 gap-10">
              {events.map((event, idx) => (
                <div
                  key={event.id}
                  className={`transition-all duration-500 ${
                    idx === 1
                      ? "md:col-span-1 scale-105"
                      : "opacity-90"
                  }`}
                >
                  <EventCard
                    {...event}
                    onJoinEvent={() =>
                      onEventClick && onEventClick(event.id)
                    }
                  />
                </div>
              ))}
            </div>

            {/* Mobile slider */}
            <div className="md:hidden">
              <EventCard
                {...events[currentIndex]}
                onJoinEvent={() =>
                  onEventClick && onEventClick(events[currentIndex].id)
                }
              />

              <div className="flex justify-center items-center gap-4 mt-8">
                <Button size="icon" variant="outline" onClick={prev}>
                  <ChevronLeft />
                </Button>
                <Button size="icon" variant="outline" onClick={next}>
                  <ChevronRight />
                </Button>
              </div>

              <div className="flex justify-center gap-2 mt-5">
                {events.map((_, idx) => (
                  <span
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-2.5 rounded-full cursor-pointer transition-all ${
                      idx === currentIndex
                        ? "bg-primary w-10"
                        : "bg-primary/30 w-2.5"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <WaveDivider className="text-white rotate-180" />
    </>
  );
}
