// import { Button } from "../Components/ui/button";
// import { Tent } from "lucide-react";
// const fairTents = "/images/Fair_tents_and_crowd_ab11060a.webp";

// export default function StallBanner({ onBookStall }) {
//   return (
//     <section data-aos="zoom-in" className="relative py-20 px-4 overflow-hidden">
//       <div
//         className="absolute inset-0 bg-cover bg-center"
//         style={{ backgroundImage: `url(${fairTents})` }}
//       />
//       <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-primary/70" />

//       <div className="relative z-10 max-w-7xl mx-auto text-center">
//         <div className="flex justify-center mb-6">
//           <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
//             <Tent className="w-10 h-10 text-white" />
//           </div>
//         </div>

//         <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">
//           Raise Your Enquiry Now
//         </h2>

//         <p className="text-xl text-white/95 mb-8 max-w-2xl mx-auto">
//           Join hundreds of exhibitors showcasing herbal products, forest
//           produce, and traditional crafts at India's premier green enterprise
//           event
//         </p>

//         <Button
//           size="lg"
//           className="text-lg px-10 bg-white text-primary hover:bg-white/90 border-2 border-white"
//           onClick={onBookStall}
//           data-testid="button-book-stall-banner"
//         >
//           Enquire Now
//         </Button>
//       </div>
//     </section>
//   );
// }



"use client";

import { Button } from "../Components/ui/button";
import { ArrowRight } from "lucide-react";

const fairTents = "/images/Fair_tents_and_crowd_ab11060a.webp";

export default function StallBanner({ onBookStall }) {
  return (
    <section
      data-aos="fade-up"
      className="relative overflow-hidden bg-[#0f172a]"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-25"
        style={{ backgroundImage: `url(${fairTents})` }}
      />

      {/* Golden Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(255,212,29,0.18),transparent_45%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_60%,rgba(255,212,29,0.12),transparent_50%)]" />

      <div className="relative max-w-7xl mx-auto px-6 py-12">
        {/* Content */}
        <div className="max-w-3xl">
          <span className="inline-block mb-5 px-5 py-2 rounded-full bg-[#FFD41D]/10 text-[#FFD41D] font-semibold text-sm">
            Exhibitor Registration
          </span>

          <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
            Book Your Stall
            <br />
            <span className="text-[#FFD41D]">At The Grand Fair</span>
          </h2>

          <p className="text-gray-300 text-lg max-w-xl mb-5">
            Secure your space among top exhibitors and showcase herbal,
            forest-based, and traditional products at India’s leading green
            enterprise platform.
          </p>

          <Button
            onClick={onBookStall}
            size="lg"
            className="group px-8 py-4 text-lg bg-[#FFD41D] text-black hover:bg-white transition font-semibold rounded-xl"
            data-testid="button-book-stall-banner"
          >
            Raise Enquiry
            <ArrowRight className="ml-3 w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
}
