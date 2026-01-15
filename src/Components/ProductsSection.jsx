// import ProductCard from "../Components/ProductsCard";
// const arjunTea = "/images/Arjun_Tea_product_image_08609ada.webp";
// const honey = "/images/Forest_Honey_product_image_2d3f72b8.webp";
// const chyawanprash = "/images/Chyawanprash_product_image_a0e89656.webp";
// const ntfp = "/images/NTFP_products_collection_5cb7048f.webp";

// const p1 = "/images/products/1.png";
// const p2 = "/images/products/2.jpeg";
// const p3 = "/images/products/3.jpeg";
// const p4 = "/images/products/4.png";
// const p6 = "/images/products/6.png";

// export default function ProductsSection({ onProductClick }) {

//   const products = [
//   {
//     id: 1,
//     name: "Arjun Herbal Tea",
//     description:
//       "A soothing blend made from pure Arjuna bark and natural herbs, traditionally known to support heart wellness and improve circulation.",
//     image: p1,
//     category: "Herbal Products",
//   },
//   {
//     id: 3,
//     name: "Chyawanprash Avleha",
//     description:
//       "A classical Ayurvedic formulation enriched with Amla, Ashwagandha, ghee, and honey to boost immunity, energy, and overall vitality.",
//     image: p3,
//     category: "Medicinal Plants",
//   },
//   {
//     id: "ntfp-collection",
//     name: "Vindhya Herbal Honey",
//     description:
//       "Pure, natural honey collected from forest regions of Vindhya, known for its rich taste and traditional health benefits.",
//     image: p4,
//     category: "Tribal Value-Added Products",
//   }
// ];

//   return (
//     <section id="products" className="py-20 px-4 bg-gradient-to-b from-white to-primary/5">
//       <div className="max-w-7xl mx-auto">
//         {/* Header Section */}
//         <div className="text-center mb-16">
//           <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
//             <span className="text-primary font-semibold">Our Products</span>
//           </div>
//           <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
//             Nature's Finest Offerings
//           </h2>
//           <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
//             Explore our curated selection of premium herbal products, forest produce, and traditional remedies.
//           </p>
//         </div>

//         {/* Product Cards Grid */}
//         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {products.map((product) => (
//             <ProductCard
//               key={product.id}
//               {...product}
//               onLearnMore={() => onProductClick?.(product.id)}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }



"use client";

import ProductCard from "../Components/ProductsCard";

const p1 = "/images/products/1.png";
const p3 = "/images/products/3.jpeg";
const p4 = "/images/products/4.png";

export default function ProductsSection({ onProductClick }) {
  const products = [
    {
      id: 1,
      name: "Arjun Herbal Tea",
      description:
        "A heart-friendly herbal infusion crafted from pure Arjuna bark and traditional forest herbs.",
      image: p1,
      category: "Herbal Wellness",
    },
    {
      id: 3,
      name: "Chyawanprash Avleha",
      description:
        "A classical Ayurvedic formulation to enhance immunity, vitality, and daily wellness.",
      image: p3,
      category: "Ayurvedic Nutrition",
    },
    {
      id: "ntfp-collection",
      name: "Vindhya Forest Honey",
      description:
        "Pure forest honey sourced from the Vindhya region, rich in taste and natural goodness.",
      image: p4,
      category: "Tribal Value Products",
    },
  ];

  return (
    <section className="relative py-24 overflow-hidden ">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,212,29,0.15),transparent_40%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(255,212,29,0.1),transparent_45%)]" />

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <span className="inline-block mb-4 px-5 py-2 rounded-full bg-white text-[#FFD41D] font-semibold text-sm">
            Forest & Herbal Products
          </span>
          <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Crafted by Nature,
            <br />
            <span className="text-[#FFD41D]">Preserved by Tradition</span>
          </h2>
          <p className="text-gray-700 text-lg">
            Discover premium herbal formulations, forest produce, and tribal
            value-added products that reflect India’s rich natural heritage.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product, idx) => (
            <div
              key={product.id}
              className={`group relative transition-all duration-500 ${
                idx === 1 ? "lg:scale-105" : "opacity-95"
              }`}
            >
              {/* Glow */}
              <div className="absolute inset-0 rounded-3xl bg-[#FFD41D]/10 blur-2xl opacity-0 group-hover:opacity-100 transition" />

              {/* Card */}
              <div className="relative rounded-3xl bg-white/95 overflow-hidden shadow-xl hover:-translate-y-2 transition-all duration-500">
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <span className="absolute bottom-2 left-2 bg-[#FFD41D] text-black text-xs font-bold px-4 py-1 rounded-sm shadow">
                    {product.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col h-full">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {product.description}
                  </p>

                  {/* CTA */}
                  {/* <button
                    onClick={() => onProductClick?.(product.id)}
                    className="mt-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-black text-[#FFD41D] font-semibold hover:bg-[#FFD41D] hover:text-black transition"
                  >
                    Explore Product
                  </button> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
