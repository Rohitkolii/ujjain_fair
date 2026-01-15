// import React from 'react'

// const Head = ({title, desc, bg}) => {
//   return (
//     <div
//         className="relative h-96 flex items-center justify-center bg-gradient-to-r from-primary/80 to-primary/60"
//         style={{
//           backgroundImage: `url(${bg})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//       >
//         <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
//         <div className="relative z-10 text-center px-4">
//           <h1 className="font-heading text-5xl md:text-6xl font-bold text-white mb-4">
//             {title}
//           </h1>
//           <p className="text-xl text-white/90 max-w-2xl mx-auto">
//             {desc}
//           </p>
//         </div>
//       </div>
//   )
// }

// export default Head


import React from "react";
const bgi = "/images/gallary/5.webp"
const Head = ({ title, desc, bg }) => {
  return (
    <section className="relative min-h-[250px] flex items-end overflow-hidden">
      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 scale-105"
        style={{
          backgroundImage: `url(${bgi})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* DARK CINEMATIC OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/20" />

      {/* DIAGONAL GOLD ACCENT */}
      <div className="absolute -top-1/3 -right-1/4 w-[60rem] h-[60rem] bg-[#FFD41D]/10 rotate-12 blur-[120px]" />

      {/* CONTENT */}
      <div className="relative z-10 w-full px-6 pb-12">
        <div className="max-w-[95%] mx-auto">
          {/* GOLD LINE */}
          <div className="w-24 h-[3px] bg-[#FFD41D] mb-6" />

          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight max-w-4xl">
            {title}
          </h1>

          <p className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl">
            {desc}
          </p>
        </div>
      </div>

      {/* SOFT BOTTOM FADE */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
};

export default Head;
