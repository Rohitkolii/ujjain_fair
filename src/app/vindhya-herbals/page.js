"use client";
// import arjunTea from '/images/Vindhya_Arjun_Tea_product_b184e2ab.webp';
// import honey from '/images/Vindhya_Herbal_Honey_product_88ff86f3.webp';
// import chyawanprash from '/images/Vindhya_Chyawanprash_product_3faabbdc.webp';

const medicinal = "/images/Medicinal_Plants_Display_89ad0124.webp";

import Head from "@/Components/Head";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const p1 = "/images/products/1.png";
const p3 = "/images/products/3.jpeg";
const p4 = "/images/products/4.png";

export default function Products() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration
    });
  }, []);

  const products = [
    {
      id: 1,
      name: "Arjun Herbal Tea",
      description:
        "A soothing blend made from pure Arjuna bark and natural herbs, traditionally known to support heart wellness and improve circulation.",
      image: p1,
      category: "Herbal Products",
    },
    {
      id: 3,
      name: "Chyawanprash Avleha",
      description:
        "A classical Ayurvedic formulation enriched with Amla, Ashwagandha, ghee, and honey to boost immunity, energy, and overall vitality.",
      image: p3,
      category: "Medicinal Plants",
    },
    {
      id: "ntfp-collection",
      name: "Vindhya Herbal Honey",
      description:
        "Pure, natural honey collected from forest regions of Vindhya, known for its rich taste and traditional health benefits.",
      image: p4,
      category: "Tribal Value-Added Products",
    },
  ];

  return (
    <div>
      {/* Banner */}
      <Head title={"Our Products"} desc={"Pure, Natural & Sustainably Sourced from Madhya Pradesh's Forests"} bg={medicinal} />

      {/* Product Grid */}
      <section className="py-16">
        <div className="w-[95%] container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
            data-aos="zoom-in-up"
              key={product.id}
              className="group bg-card border border-card-border rounded-2xl p-4 shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-1"
            >
              <div className="relative w-full h-56 rounded-lg overflow-hidden bg-white/5">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <span className="absolute top-3 left-3 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full shadow">
                  {product.category}
                </span>
              </div>

              <div className="mt-4">
                <h3 className="text-lg font-semibold text-foreground">
                  {product.name}
                </h3>
                <p className="text-muted-foreground text-sm mt-2 max-h-16 overflow-hidden">
                  {product.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
