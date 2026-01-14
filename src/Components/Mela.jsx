// import React, { useState, useEffect } from "react";

// export default function MelaSection() {
//   const slides = [
//     {
//       title: "International Herbal Fair 2024",
//       description:
//         "Celebrating herbs, Ayurveda, traditional wellness, and sustainable forest produce on a grand scale, bringing together producers, traders, and enthusiasts.",
//       image: "images/gallary/1.webp",
//     },
//     {
//       title: "Crowd & Cultural Events",
//       description:
//         "Thousands of visitors enjoyed lively folk performances, cultural shows, interactive workshops, and herbal awareness activities throughout the fair.",
//       image: "images/gallary/2.webp",
//     },
//     {
//       title: "Prize Distribution",
//       description:
//         "Recognizing excellence, awards were given to outstanding stalls, herbal product innovators, and top contributors in forest produce and crafts.",
//       image: "images/gallary/6.webp",
//     },
//     {
//       title: "International Conference",
//       description:
//         "Experts, scholars, and industry leaders participated in seminars and discussions, sharing insights on herbal medicine, forest produce, and sustainable practices.",
//       image: "images/gallary/7.webp",
//     },
//     {
//       title: "Inauguration by Honourable CM",
//       description:
//         "The fair was inaugurated by the Honourable Chief Minister, emphasizing the importance of herbal industries, tribal empowerment, and sustainable forest management.",
//       image: "images/gallary/13.webp",
//     },
//   ];

//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex((prev) => (prev + 1) % slides.length);
//     }, 4000); // change slide every 4 seconds
//     return () => clearInterval(interval);
//   }, [slides.length]);

//   return (
//     <div data-aos="zoom-in" className="w-full relative py-[150px] overflow-hidden">
//       {/* Image Layer */}
//       {slides.map((slide, i) => (
//         <img
//           key={i}
//           src={slide.image}
//           alt={slide.title}
//           className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
//             i === index ? "opacity-100 z-0" : "opacity-0 z-0"
//           }`}
//         />
//       ))}

//       {/* Overlay */}
//       <div className="absolute inset-0 bg-black/50"></div>

//       {/* Content */}
//       <div className="relative max-w-5xl mx-auto text-center text-white px-4">
//         <div className="inline-block px-6 py-2 mb-6 bg-primary/40 backdrop-blur-md rounded-full border border-white/20 shadow-lg">
//           <span className="text-white font-semibold tracking-wide uppercase">
//             Mela Highlights
//           </span>
//         </div>
//         <h2 className="text-4xl md:text-5xl font-bold mb-6 transition-all duration-700">
//           {slides[index].title}
//         </h2>
//         <p className="text-lg md:text-xl max-w-3xl mx-auto transition-all duration-700">
//           {slides[index].description}
//         </p>
//       </div>
//     </div>
//   );
// }




import React, { useState, useEffect } from "react";

const slides = [
  {
    title: "International Herbal Fair 2024",
    description:
      "A grand celebration of herbs, Ayurveda, traditional wellness, and sustainable forest produce bringing together producers and innovators.",
    image: "/images/ujjain.jpg"
      ,
    tag: "Grand Opening",
  },
  {
    title: "Crowd & Cultural Events",
    description:
      "Vibrant folk performances, cultural shows, workshops, and herbal awareness activities throughout the fair.",
    image: "/images/ujjain.jpg"
      ,
    tag: "Culture & Crowd",
  },
  {
    title: "Prize Distribution",
    description:
      "Awards recognizing outstanding stalls, innovators, and contributors in herbal products and forest-based enterprises.",
    image: "/images/ujjain.jpg"
      ,
    tag: "Awards",
  },
  {
    title: "International Conference",
    description:
      "Experts and industry leaders shared insights on herbal medicine and sustainable forest produce.",
    image: "/images/ujjain.jpg"
      ,
    tag: "Conference",
  },
  {
    title: "Inauguration by Honourable CM",
    description:
      "Highlighting tribal empowerment and sustainable forest management.",
    image: "/images/ujjain.jpg",
    tag: "Inauguration",
  },
];

export default function MelaSection() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((p) => (p + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative py-24 px-4 overflow-hidden bg-muted/40">

      {/* 🌿 Subtle background texture */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,197,94,0.08),transparent_40%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(22,163,74,0.06),transparent_40%)]"></div>

      <div className="relative max-w-7xl mx-auto">

        {/* HEADER */}
        <div data-aos="fade-up" className="text-center mb-20">
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary/15 text-primary font-semibold text-sm shadow">
            🌿 Fair Highlights
          </span>
          <h2 className="mt-5 text-4xl md:text-5xl font-heading font-bold">
            Experience the Spirit of the Fair
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg">
            Culture, commerce, knowledge, and nature — all coming together at
            the International Herbal Fair.
          </p>
        </div>

        {/* CONTENT */}
        <div className="grid md:grid-cols-2 gap-14 items-center">

          {/* LEFT CONTENT */}
          <div data-aos="fade-right" className="space-y-2">
            <span className="inline-block px-4 py-1.5 text-xs tracking-wide uppercase rounded-full bg-primary/10 text-primary font-semibold">
              {slides[active].tag}
            </span>

            <h3 className="text-3xl md:text-4xl font-bold leading-tight">
              {slides[active].title}
            </h3>

            <p className="text-lg text-muted-foreground leading-relaxed">
              {slides[active].description}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              {[
                { label: "Visitors", value: "50K+" },
                { label: "Stalls", value: "300+" },
                { label: "Events", value: "100+" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="rounded-xl bg-white/80 backdrop-blur-md border border-primary/10 p-4 text-center shadow-sm"
                >
                  <p className="text-2xl font-bold text-primary">
                    {item.value}
                  </p>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Dots */}
            <div className="flex gap-2 pt-4">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`h-2.5 rounded-full transition-all ${
                    active === i
                      ? "bg-primary w-10"
                      : "bg-primary/30 w-2.5"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* IMAGE SIDE */}
          <div
            data-aos="fade-left"
            className="relative rounded-3xl overflow-hidden shadow-2xl"
          >
            <img
              src={slides[active].image}
              alt={slides[active].title}
              className="w-full h-[400px] object-cover transition-all duration-700"
            />

            {/* Floating badge */}
            <div className="absolute top-5 right-5 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full shadow-lg text-sm font-semibold text-primary">
              {active + 1} / {slides.length}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
