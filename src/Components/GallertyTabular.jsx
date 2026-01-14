import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function GelleryTabular() {
    const router = useRouter()
  const images = [
    { src: "/images/gallary/1.webp", title: "Trade Fair Stalls", detail: "Showcasing tribal products and crafts" },
    { src: "/images/gallary/2.webp", title: "Cultural Representation", detail: "Traditional art and lifestyle glimpse" },
    { src: "/images/gallary/3.webp", title: "Folk Performances", detail: "Artists performing cultural dance" },
    { src: "/images/gallary/4.webp", title: "Folk Music", detail: "Local musicians performing live" },
    { src: "/images/gallary/5.webp", title: "Fair Ground", detail: "Visitors enjoying the fair environment" },
    { src: "/images/gallary/12.webp", title: "Hon’ble CM of Madhya Pradesh", detail: "Chief Minister visiting the exhibition" },
  ];

  return (
    <section onClick={()=> router.push('gallery')} id="gallery" className="py-20 px-4 bg-gradient-to-b from-white to-accent/20">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
            <span className="text-primary font-semibold">Gallery</span>
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            Moments from the Fair
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience the vibrant atmosphere and rich cultural heritage of our herbal fair
          </p>
        </div>

        {/* ⭐ Tabular Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((img, idx) => (
            <div
            data-aos="fade-up"
              key={idx}
              className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition"
            >
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-64 object-cover"
              />

              {/* Text Content */}
              <div className="p-4 bg-white">
                <h3 className="text-lg font-semibold text-gray-800 mb-1">
                  {img.title}
                </h3>
                <p className="text-sm text-gray-600">
                  {img.detail}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
