// import { useState } from "react";
// import WaveDivider from "./WaveDivider";

// const event = [
//   "/images/gallary/1.webp",
//   "/images/gallary/19.webp",
//   "/images/gallary/7.webp",
//   "/images/gallary/4.webp",
//   "/images/gallary/20.webp",
// ];

// export default function GrandExhibition({ onEventClick }) {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const stalls = [
//     {
//       id: 1,
//       title: "Pagoda",
//       size: "10m x 10m",
//       price: "Rs. 50,000/- + GST @ 18%",
//       description:
//         "Premium spacious pagoda, ideal for large showcases & displays.",
//     },
//     {
//       id: 2,
//       title: "Stall Inside Hanger",
//       size: "3m x 3m",
//       price: "Rs. 21,000/- + GST @ 18%",
//       description:
//         "Indoor stall perfect for product demonstrations & exhibits.",
//     },
//     {
//       id: 3,
//       title: "Food Stalls",
//       size: "5m x 5m",
//       price: "Rs. 14,000/- + GST @ 18%",
//       description: "Spacious layout suited for food counters & mini kitchens.",
//     },{
//       id: 4,
//       title: "Pagoda",
//       size: "5m x 5m",
//       price: "Rs. 30,000/- + GST @ 18%",
//       description:
//         "Premium spacious pagoda, ideal for large showcases & displays.",
//     },
//   ];

//   const next = () => {
//     setCurrentIndex((prev) => (prev + 1) % events.length);
//   };

//   const prev = () => {
//     setCurrentIndex((prev) => (prev - 1 + events.length) % events.length);
//   };

//   return (
//     <>
//       <WaveDivider className="text-white" />
//       <section data-aos="fade-up" className="py-10 px-4 bg-gradient-to-b from-primary/5 to-white">
//         <div className="max-w-7xl mx-auto px-4 py-6">
//           {/* Header */}
//           <div className="text-center mb-16">
//             <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
//               <span className="text-primary font-semibold">
//                 Grand exhibition
//               </span>
//             </div>
//             <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
//               Book Your Stall Space
//             </h2>
//             <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
//               Choose from our available stall categories and secure your spot.
//               Booking is processed exclusively through the Raise Enquiry button.
//             </p>
            
//           </div>

//           <div className="relative">
//             <div className="relative">
//               <div className="w-full">
//                 {/* Desktop Table */}
//                 <div className="hidden md:block overflow-x-auto rounded-xl border shadow-sm bg-white">
//                   <table className="w-full text-left border-collapse">
//                     <thead className="bg-primary/10">
//                       <tr>
//                         <th className="p-4 font-semibold text-foreground">
//                           Stall Type
//                         </th>
//                         <th className="p-4 font-semibold text-foreground">
//                           Size
//                         </th>
//                         <th className="p-4 font-semibold text-foreground">
//                           Price
//                         </th>
//                         <th className="p-4 font-semibold text-foreground">
//                           Description
//                         </th>
//                       </tr>
//                     </thead>

//                     <tbody>
//                       {stalls.map((stall) => (
//                         <tr
//                           key={stall.id}
//                           className="border-t hover:bg-primary/5 transition"
//                         >
//                           <td className="p-4 font-medium">{stall.title}</td>
//                           <td className="p-4">{stall.size}</td>
//                           <td className="p-4 font-semibold text-primary">
//                             {stall.price}
//                           </td>
//                           <td className="p-4 text-muted-foreground">
//                             {stall.description}
//                           </td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </div>

//                 {/* Mobile Friendly UI */}
//                 <div className="md:hidden space-y-4 mt-6">
//                   {stalls.map((stall) => (
//                     <div
//                       key={stall.id}
//                       className="p-4 border rounded-xl bg-white shadow-sm"
//                     >
//                       <h3 className="text-lg font-bold mb-1">{stall.title}</h3>

//                       <p className="text-sm text-muted-foreground">
//                         <span className="font-semibold text-foreground">
//                           Size:
//                         </span>{" "}
//                         {stall.size}
//                       </p>

//                       <p className="text-primary font-semibold mt-1">
//                         {stall.price}
//                       </p>

//                       <p className="text-sm text-muted-foreground mt-2">
//                         {stall.description}
//                       </p>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       <WaveDivider className="text-white rotate-180" />
//     </>
//   );
// }



"use client";

import { useState } from "react";
import { ArrowRight, Maximize2, IndianRupee } from "lucide-react";
import WaveDivider from "./WaveDivider";

export default function GrandExhibition({ onEventClick }) {
  const stalls = [
    {
      id: 1,
      title: "Premium Pagoda",
      size: "10m × 10m",
      price: "50,000",
      highlight: true,
      description:
        "A premium outdoor pagoda ideal for flagship brands, large displays, and maximum visitor engagement.",
    },
    {
      id: 2,
      title: "Indoor Hanger Stall",
      size: "3m × 3m",
      price: "21,000",
      description:
        "Well-structured indoor stall designed for focused product demonstrations and business interactions.",
    },
    {
      id: 3,
      title: "Food & Refreshment Stall",
      size: "5m × 5m",
      price: "14,000",
      description:
        "Perfect for food vendors with ample space for preparation, counters, and customer flow.",
    },
    {
      id: 4,
      title: "Standard Pagoda",
      size: "5m × 5m",
      price: "30,000",
      description:
        "Balanced option offering visibility and space, suitable for mid-sized exhibitors.",
    },
  ];

  return (
    <>
      <WaveDivider className="text-white" />

      <section className="relative py-24 bg-white overflow-hidden">
        {/* Background Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,212,29,0.15),transparent_40%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(255,212,29,0.1),transparent_45%)]" />

        <div className="relative max-w-[95%] mx-auto px-4">
          {/* Header */}
          <div className="max-w-3xl mb-20">
            <span className="inline-block mb-4 px-5 py-2 rounded-full bg-[#FFD41D]/10 text-[#FFD41D] font-semibold text-sm">
              Grand Exhibition
            </span>

            <h2 className="text-4xl md:text-6xl font-bold text-black leading-tight mb-6">
              Reserve Your
              <br />
              <span className="text-[#FFD41D]">Exhibition Space</span>
            </h2>

            <p className="text-gray-800 text-lg">
              Select from thoughtfully designed stall categories crafted to
              enhance visibility, engagement, and business opportunities at the
              International Herbal Fair.
            </p>
          </div>

          {/* Stall Cards */}
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {stalls.map((stall) => (
              <div
                key={stall.id}
                className={`group relative rounded-3xl overflow-hidden transition-all duration-500
                ${
                  stall.highlight
                    ? "lg:scale-105 border-2 border-[#FFD41D]"
                    : "border border-black/10"
                }`}
              >
                {/* Glow */}
                <div className="absolute inset-0 bg-[#FFD41D]/10 blur-2xl opacity-0 group-hover:opacity-100 transition" />

                <div className=" h-full bg-white rounded-3xl px-4 py-6 shadow-xl hover:-translate-y-2 transition-all duration-500 flex flex-col">
                  {/* Badge */}
                  {stall.highlight && (
                    <span className="absolute -top-4 left-6 bg-[#FFD41D] text-black text-xs font-bold px-4 py-1 rounded-full shadow">
                      Most Preferred
                    </span>
                  )}

                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {stall.title}
                  </h3>

                  <p className="text-sm text-gray-600 mb-6">
                    {stall.description}
                  </p>

                  {/* Meta */}
                  <div className="space-y-3 mb-8 text-sm">
                    <div className="flex items-center gap-2 text-gray-700">
                      <Maximize2 className="w-4 h-4 text-primary" />
                      <span>
                        <strong>Size:</strong> {stall.size}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 text-gray-700">
                      <IndianRupee className="w-4 h-4 text-primary" />
                      <span>
                        <strong>Price:</strong> ₹{stall.price} + GST (18%)
                      </span>
                    </div>
                  </div>

                  {/* CTA */}
                  <button
                    onClick={() => onEventClick?.(stall.id)}
                    className="mt-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary text-black font-semibold hover:bg-[#FFD41D]/50 transition z-50"
                  >
                    Raise Enquiry
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WaveDivider className="text-white rotate-180" />
    </>
  );
}
