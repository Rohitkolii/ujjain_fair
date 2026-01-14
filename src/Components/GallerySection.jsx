import Image from "next/image";
import { useState } from "react";
const fairStall = "/images/Trade_fair_stall_scene_18c93dfb.webp";
const artisan = "/images/Tribal_artisan_at_work_b5912e56.webp";
const medicinal = "/images/Medicinal_plants_display_7ba65d28.webp";
const ntfp = "/images/NTFP_products_collection_5cb7048f.webp";
const honey = "/images/Forest_Honey_product_image_2d3f72b8.webp";
const chyawanprash = "/images/Chyawanprash_product_image_a0e89656.webp";

export default function GallerySection() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const event = [
    "/images/gallary/1.webp",
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

  const images = [
    { src: event[0], caption: "Trade Fair Stalls", tall: true },
    { src: event[1], caption: "Cultural representation", tall: true },
    { src: event[2], caption: "Cultural representation" },
    { src: event[3], caption: "Cultural representation Folk music" },
    { src: event[4], caption: "Fair Ground" },
    { src: event[11], caption: "Hon’ble CM of Madhya Pradesh" },
  ];

  return (
    <section
      id="gallery"
      className="py-20 px-4 bg-gradient-to-b from-white to-accent/20"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
            <span className="text-primary font-semibold">Gallery</span>
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            Moments from the Fair
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience the vibrant atmosphere and rich cultural heritage of our
            herbal fair
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((image, idx) => (
            <div
              key={idx}
              className="relative break-inside-avoid overflow-hidden rounded-xl group cursor-pointer shadow-md hover:shadow-xl transition-shadow"
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              data-testid={`gallery-item-${idx}`}
            >
              <img
                src={image.src}
                alt={image.caption}
                loading="lazy"
                className={`w-full ${
                  image.tall ? "h-96" : "h-64"
                } object-cover transition-transform duration-500 group-hover:scale-105`}
              />

              {/* Overlay caption */}
              <div
                className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end p-6 transition-opacity duration-300 ${
                  hoveredIndex === idx ? "opacity-100" : "opacity-0"
                }`}
              >
                <p className="text-white font-semibold text-lg drop-shadow-md">
                  {image.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
