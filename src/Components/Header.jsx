import { Button } from "../Components/ui/button";

const heroImage = "/images/bg2.jpg";
const ujjain = "/images/ujjain.jpg";

export default function Header({ onJoinClick, onContactClick }) {
  return (
    <section className="relative min-h-screen bg-[#f6faf7] overflow-hidden">
      
      {/* Decorative Gradient */}
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-primary/20 blur-3xl" />
      <div className="absolute top-1/2 -left-40 w-[500px] h-[500px] rounded-full bg-primary/40 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-16">

        {/* LEFT CONTENT */}
        <div>
          {/* Badge */}
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary/20 text-primary/70 text-sm font-semibold mb-6">
            🌿 17–23 December 2026 • Ujjain
          </span>

          <h1 className="font-heading text-4xl md:text-5xl xl:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
            International <br />
            <span className="text-primary">Herbal Fair 2026</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 max-w-xl mb-8">
            A global platform celebrating herbal science, traditional medicine,
            forest-based innovation, and sustainable living.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <Button
              size="lg"
              onClick={onJoinClick}
              className="px-10 text-lg bg-primary hover:bg-primary/70 text-white shadow-md"
              data-testid="button-join-fair"
            >
              Join the Fair
            </Button>

            <Button
              size="lg"
              variant="outline"
              onClick={onContactClick}
              className="px-10 text-lg border-primary text-primary/70 hover:bg-primary/20"
              data-testid="button-contact-us"
            >
              Contact Us
            </Button>
          </div>
        </div>

        {/* RIGHT IMAGE CARD */}
        <div className="relative">
          <div className="absolute -top-6 -left-6 w-full h-full rounded-3xl bg-primary/20" />
          
          <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden">
            <img
              src={ujjain}
              alt="Herbal Fair"
              className="w-full h-[300px] object-cover"
            />

            <div className="p-3">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Prosperous Forest — Happy People
              </h3>

              <p className="text-sm text-gray-600 leading-relaxed">
                Lal Parade Ground, Jahangirabad, Ujjain <br />
                Madhya Pradesh, India
              </p>

              <div className="mt-4 grid grid-cols-2 gap-3 text-sm text-gray-700">
                <span>🌱 Herbal Products</span>
                <span>🏺 Ayurveda & Unani</span>
                <span>🌍 Sustainability</span>
                <span>🤝 Global Experts</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}




// import { Button } from "../Components/ui/button";

// export default function Hero({ onJoinClick, onContactClick }) {
//   return (
//     <section className="bg-white border-b border-gray-200">
//       <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

//         {/* LEFT CONTENT */}
//         <div>
//           <p className="text-sm font-semibold text-green-700 uppercase mb-3">
//             Ministry Supported Event
//           </p>

//           <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-snug mb-4">
//             International Herbal Fair 2026
//           </h1>

//           <p className="text-lg text-gray-700 mb-6 max-w-2xl">
//             An international exhibition promoting herbal science, traditional
//             medicine systems, forest-based livelihoods, and sustainable development.
//           </p>

//           {/* INFO STRIP */}
//           <div className="border border-gray-200 bg-gray-50 p-4 mb-8">
//             <p className="text-sm text-gray-800">
//               <strong>Theme:</strong> Prosperous Forest — Happy People
//             </p>
//             <p className="text-sm text-gray-800">
//               <strong>Date:</strong> 17th – 23rd December 2026
//             </p>
//             <p className="text-sm text-gray-800">
//               <strong>Venue:</strong> Lal Parade Ground, Jahangirabad, Ujjain (M.P.)
//             </p>
//           </div>

//           {/* CTA */}
//           <div className="flex gap-4 flex-wrap">
//             <Button
//               size="lg"
//               onClick={onJoinClick}
//               className="bg-green-700 hover:bg-green-800 text-white"
//             >
//               Register / Participate
//             </Button>

//             <Button
//               size="lg"
//               variant="outline"
//               onClick={onContactClick}
//               className="border-gray-400 text-gray-800 hover:bg-gray-100"
//             >
//               Contact Information
//             </Button>
//           </div>
//         </div>

//         {/* RIGHT IMAGE */}
//         <div>
//           <img
//             src="/images/bg2.jpg"
//             alt="International Herbal Fair Venue"
//             className="w-full h-[380px] object-cover border border-gray-200"
//           />
//         </div>

//       </div>
//     </section>
//   );
// }
