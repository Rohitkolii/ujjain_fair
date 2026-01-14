"use client";
const fairStall = "/images/gallary/7.webp";

import Head from "@/Components/Head";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const page = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration
    });
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Head
        title={"Mela Map"}
        desc={"Explore, Discover, Connect – Your Guide to Van Mela 2025!"}
        bg={fairStall}
      />

      <div className="flex flex-col md:flex-row my-10 rounded-3xl overflow-hidden py-16 md:py-20 px-6 md:px-12 max-w-7xl mx-auto gap-8">
        {/* Left Side: Image */}
        <div data-aos="zoom-in-up" className="md:w-1/2 w-full flex-shrink-0">
          <img
            src="/images/gallary/map2.jpg"
            alt="Van Mela Map"
            className="w-full h-auto object-cover rounded-2xl shadow-lg"
          />
        </div>

        {/* Right Side: Information */}
        <div
          data-aos="zoom-in-up"
          className="md:w-1/2 w-full flex flex-col justify-center space-y-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Layout of Van Mela 2025
          </h2>
          <p className="text-gray-700 text-md leading-relaxed">
            The Herbal Fair (Van Mela) in Bhopal is a large-scale event held at
            Lal Parade Ground. It showcases a variety of herbal products, minor
            forest produce, Ayurvedic items, and other traditional forest
            products. The fair attracts vendors, producers, and visitors from
            across the region.
          </p>
          <p className="text-gray-700 text-md leading-relaxed">
            The map of the fair is carefully designed to organise the venue
            efficiently. It includes different zones such as the stall area with
            around 300 stalls, a kids’ zone, a conference hall, and an
            OPD/medical consultation area. Essential facilities like toilets and
            pathways are also clearly marked to make navigation easy for
            visitors.
          </p>
          <p className="text-gray-700 text-md leading-relaxed">
            The stalls are arranged in a grid-like pattern, ensuring that
            visitors can easily find the products they are looking for. Special
            zones highlight women producers, reflecting the fair’s theme: “Women
            Empowerment through Minor Forest Produce.”
          </p>
          <p className="text-gray-700 text-md leading-relaxed">
            Apart from trade, the fair also focuses on education and cultural
            participation. Conference halls and public spaces host seminars,
            workshops, and knowledge-sharing sessions. The kids’ zone ensures
            that families have a safe and enjoyable experience while visiting
            the fair.
          </p>
          <p className="text-gray-700 text-md leading-relaxed">
            Overall, the layout of the Van Mela is designed to integrate
            commerce, education, health services, and cultural engagement. The
            clear zoning and organised setup create a smooth flow of visitors
            and vendors, making it a well-structured community platform for
            everyone attending.
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
