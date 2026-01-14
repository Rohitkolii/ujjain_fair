"use client"
import { useState } from "react";
import { Calendar } from "lucide-react";
const fair = "/images/gallary/3.webp";

  import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import Head from "@/Components/Head";

const event =[
  "/images/gallary/13.webp",
  "/images/gallary/7.webp",
  "/images/gallary/21.webp",
  "/images/gallary/18.webp",
  "/images/gallary/20.webp",
]
export default function Events() {
    useEffect(() => {
        AOS.init({
          duration: 1000, // animation duration
        });
      }, []);
  const [filter, setFilter] = useState("all");

  const events = [
  {
    id: "inaugural",
    title: "Inaugural ceremony",
    date: "December 17, 2025",
    venue: "Main Exhibition Hall",
    type: "featured",
    image: event[0],
    description:
      "Formal opening of the fair with dignitaries and cultural showcase.",
  },
  {
    id: "conference",
    title: "International Conference",
    date: "December 19-20, 2025",
    venue: "Business Pavilion",
    type: "upcoming",
    image: event[1],
    description:
      "Expert session on herbal innovation, MFP, and sustainable livelihoods.",
  },
  {
    id: "meetup",
    title: "Buyer-Seller Meet",
    date: "December 21, 2025",
    venue: "Innovation Pavilion",
    type: "workshops",
    image: event[2],
    description:
      "B2B platform to boost trade, market linkages, and business collaboration.",
  },
  {
    id: "Closing",
    title: "Closing Ceremony & Prize Distribution",
    date: "December 23, 2025",
    venue: "Conference Hall A",
    type: "featured",
    image: event[3],
    description:
      "Concluding celebration with awards and acknowledgements.",
  },
];


  const filteredEvents =
    filter === "all" ? events : events.filter((e) => e.type === filter);

  return (
    <div className="min-h-screen">
    <Head title={"Our Events & Celebrations"} desc={"Join our herbal events and discover natural wellness through exhibitions and workshops."} bg={fair} />
      <div className="max-w-7xl mx-auto px-4 py-20">
        {/* Event Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map((event) => (
            <div
            data-aos="fade-up"
              key={event.id}
              className="bg-card rounded-xl overflow-hidden border border-card-border transition-all hover:shadow-xl hover:-translate-y-1"
            >
              <div className="relative h-48">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover"
                />

              </div>
              <div className="p-6">
                <h3 className="font-heading text-xl font-semibold mb-3 text-primary">
                  {event.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {event.description}
                </p> 
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span>{event.date}</span>
                  </div>
                </div>
                {/* <Button className="w-full">Register Interest</Button> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
