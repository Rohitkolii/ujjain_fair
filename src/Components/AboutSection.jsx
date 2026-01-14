// import Image from "next/image";

// const ab = "/images/gallary/9.webp";


// export default function AboutSection() {


//   return (
//     <section className="py-20 px-4">
//       <div className="max-w-7xl mx-auto">
//         <div className="grid md:grid-cols-2 gap-12 items-center">
//           {/* Text Content */}
//           <div data-aos="fade-up" className="space-y-6">
//             <div className="inline-block px-4 py-2 bg-primary/10 rounded-full">
//               <span className="text-primary font-semibold">About Us</span>
//             </div>

//             <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground">
//               Rooted in Nature, Growing with Innovation
//             </h2>
            
//             <p className="text-lg text-muted-foreground leading-relaxed text-justify">
//               International Herbal Fair is an annual feature of Bhopal for over a decade now. Initially, began as a National event. This annual fair was up-scaled as an International event from 2011 with a mandate to create a platform for showcasing the Minor Forest Produce (MFP) diversity and potential of various states of India and neighbouring countries to provide robust marketing opportunities with strong backwards-forward linkages for MFP collectors, traders and manufacturers involved in processing of MFP.
//             </p>

//             <p className="text-lg text-muted-foreground leading-relaxed text-justify">
//               The International Herbal Fair 2025 invites you to explore the vast
//               world of herbal products, forest produce, natural wellness,
//               medicinal plants, and green enterprise - all under one roof.
//             </p>


//             <div className="grid grid-cols-2 gap-4 pt-4">
//               <div className="p-4 bg-card rounded-lg border border-card-border">
//                 <h4 className="font-heading font-semibold text-2xl text-primary mb-1">
//                   17–23
//                 </h4>
//                 <p className="text-sm text-muted-foreground">December 2025</p>
//               </div>
//               <div className="p-4 bg-card rounded-lg border border-card-border">
//                 <h4 className="font-heading font-semibold text-2xl text-primary mb-1">
//                   11<sup>th</sup>
//                 </h4>
//                 <p className="text-sm text-muted-foreground">Edition</p>
//               </div>
//             </div>
//           </div>

//           {/* Image Section */}
//           <div data-aos="fade-up" className="relative">
//             <div className="relative rounded-2xl overflow-hidden">
//               <img
//                 src={ab}
//                 alt="Forest and community harmony"
//                 className="w-full h-auto rounded-2xl shadow-2xl"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }



import Image from "next/image";

// const ab = "/images/gallary/9.webp";
const ab = "/images/ujjain.jpg";

export default function AboutSection() {
  return (
    <section className="py-16 md:py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* ================= TEXT ================= */}
          <div data-aos="fade-up" className="space-y-6">
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full">
              <span className="text-primary font-semibold text-sm">
                About ujjain Fair
              </span>
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-tight">
              Rooted in Nature, <br className="hidden sm:block" />
              Growing with Innovation
            </h2>

            <p className="text-base md:text-lg text-muted-foreground leading-relaxed text-justify">
              International Herbal Fair is an annual feature of Bhopal for over a
              decade. Initially begun as a national event, it was up-scaled into
              an international platform in 2011 to showcase Minor Forest Produce
              (MFP) diversity and create robust marketing opportunities for
              collectors, traders, and manufacturers.
            </p>

            <p className="text-base md:text-lg text-muted-foreground leading-relaxed text-justify">
              The International Herbal Fair 2025 invites you to explore herbal
              products, forest produce, natural wellness, medicinal plants, and
              green enterprises — all under one roof.
            </p>

            {/* ================= STATS ================= */}
            {/* <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-card border border-card-border text-center">
                <h4 className="font-heading font-bold text-2xl text-primary">
                  17–23
                </h4>
                <p className="text-sm text-muted-foreground">
                  December 2025
                </p>
              </div>

              <div className="p-4 rounded-xl bg-card border border-card-border text-center">
                <h4 className="font-heading font-bold text-2xl text-primary">
                  11<sup>th</sup>
                </h4>
                <p className="text-sm text-muted-foreground">
                  Edition
                </p>
              </div>
            </div> */}
          </div>

          {/* ================= IMAGE ================= */}
          <div
            data-aos="fade-up"
            className="relative flex justify-center md:justify-end"
          >
            <div className="relative w-full max-w-md md:max-w-none rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={ab}
                alt="Forest and community harmony"
                width={600}
                height={500}
                className="w-full h-auto object-cover rounded-2xl"
                priority
              />

              {/* Overlay Accent */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-6 left-6 bg-white rounded-xl px-5 py-3 shadow-xl border">
              <p className="text-sm font-semibold text-primary">
                International Herbal Fair
              </p>
              <p className="text-xs text-muted-foreground">
                Since 2011
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
