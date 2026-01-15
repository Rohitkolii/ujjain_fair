"use client"
import { useState } from "react";
const cultural = "/images/Cultural_Evening_Performance_79b9b225.webp";


import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Head from "@/Components/Head";

const gallary = ["/images/gallary/1.webp",
  "/images/gallary/2.webp",
  "/images/gallary/3.webp",
  "/images/gallary/4.webp",
  "/images/gallary/5.webp",
  "/images/gallary/6.webp",
  "/images/gallary/7.webp",
  "/images/gallary/8.webp",
  "/images/gallary/9.webp",
  "/images/gallary/10.webp",
  "/images/gallary/11.webp",
  "/images/gallary/12.webp",
  "/images/gallary/13.webp",
  "/images/gallary/14.webp",
  "/images/gallary/15.webp",
  "/images/gallary/16.webp",
  "/images/gallary/17.webp",
  "/images/gallary/18.webp",
  "/images/gallary/19.webp",
];

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState("All");
  
useEffect(() => {
    AOS.init({
      duration: 500, // animation duration
    });
  }, []);

  const filters = [
    "All",
    "Guests",
    "Fair",
    "Events",
    // "Workshops",
    "Cultural",
    // "Food & Cuisine",
  ];

  const galleryImages = [
    {
      src: gallary[0],
      alt: "Exhibition",
      caption: "Fair Exhibition",
      category: "Events",
    },
    {
      src: gallary[1],
      alt: "Cultural",
      caption: "Cultural representation",
      category: "Cultural",
    },
    {
      src: gallary[2],
      alt: "Medicinal Plants",
      caption: "Medicinal Plants Display",
      category: "Cultural",
    },
    {
      src: gallary[3],
      alt: "Cultural Event",
      caption: "Cultural Performance Folk Music",
      category: "Cultural",
    },
    {
      src: gallary[4],
      alt: "Food Stalls",
      caption: "Fair Ground",
      category: "Fair",
    },
    {
      src: gallary[5],
      alt: "Fair Crowd",
      caption: "Gift Distribution",
      category: "Guests",
    },
    {
      src: gallary[6],
      alt: "Products",
      caption: "Fair Seminar",
      category: "Herbal Products",
    },
    {
      src: gallary[7],
      alt: "Stall",
      caption: "Visitors at the Fair",
      category: "Guests",
    },
    {
      src: gallary[8],
      alt: "Plants",
      caption: "International Herbal Fair",
      category: "Fair",
    },
    {
      src: gallary[9],
      alt: "Exhibition",
      caption: "Visitors at the fair",
      category: "Cultural",
    },
    {
      src: gallary[10],
      alt: "Workshop",
      caption: "Fair Entrance",
      category: "Fair",
    },
    {
      src: gallary[11],
      alt: "Medicinal Plants",
      caption: "Honable CM of MP",
      category: "Guests",
    },
    {
      src: gallary[12],
      alt: "Cultural Event",
      caption: "Lighting Diya",
      category: "Guests",
    },
    {
      src: gallary[13],
      alt: "Food Stalls",
      caption: "Gift Distribution",
      category: "Guests",
    },
    {
      src: gallary[14],
      alt: "Fair Crowd",
      caption: "Speach",
      category: "Guests",
    },
    {
      src: gallary[15],
      alt: "Products",
      caption: "Speach",
      category: "Guests",
    },
    {
      src: gallary[16],
      alt: "Stall",
      caption: "Speach",
      category: "Guests",
    },
    {
      src: gallary[17],
      alt: "Plants",
      caption: "Gift Distribution",
      category: "Guests",
    },
    {
      src: gallary[18],
      alt: "Plants",
      caption: "Drawing Competition",
      category: "Event",
    },
  ];

  const filteredImages =
    activeFilter === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeFilter);

  return (
    <div>
      <Head title={"Event Gallery"}
      desc={"Moments that celebrate nature, culture & community"}
      bg={gallary[4]}
      />

      {/* Filters */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {filters.map((filter) => (
              <button
                key={filter}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition ${
                  activeFilter === filter
                    ? "bg-gray-800 text-white"
                    : "bg-white border border-gray-300 text-gray-800"
                }`}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredImages.map((img, idx) => (
              <div
              data-aos="zoom-in-up"
                key={idx}
                className="mb-4 break-inside-avoid relative group overflow-hidden rounded-lg"
              >

                <img
                  src={img.src}
                  alt={img.caption}
                  className="w-full h-auto rounded-lg shadow transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end p-6 transition-all ease-in-out duration-300 transform opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0">
                  <p className="text-white font-semibold">{img.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
