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

const Head = ({ title, desc, bg }) => {
  return (
    <section className="bg-[#f7faf7] border-b border-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT CONTENT */}
        <div>
          {/* Accent line */}
          <div className="w-16 h-1 bg-green-600 mb-4" />

          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
            {title}
          </h1>

          {desc && (
            <p className="text-lg text-gray-700 max-w-xl">
              {desc}
            </p>
          )}
        </div>

        {/* RIGHT IMAGE */}
        {/* {bg && (
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-full h-full bg-green-100" />
            <img
              src={bg}
              alt={title}
              className="relative w-full h-72 object-cover border border-gray-300"
            />
          </div>
        )} */}
      </div>
    </section>
  );
};

export default Head;
