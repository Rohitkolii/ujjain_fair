import { useState } from "react";
import WaveDivider from "./WaveDivider";

const event = [
  "/images/gallary/1.webp",
  "/images/gallary/19.webp",
  "/images/gallary/7.webp",
  "/images/gallary/4.webp",
  "/images/gallary/20.webp",
];

export default function GrandExhibition({ onEventClick }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const stalls = [
    {
      id: 1,
      title: "Pagoda",
      size: "10m x 10m",
      price: "Rs. 50,000/- + GST @ 18%",
      description:
        "Premium spacious pagoda, ideal for large showcases & displays.",
    },
    {
      id: 2,
      title: "Stall Inside Hanger",
      size: "3m x 3m",
      price: "Rs. 21,000/- + GST @ 18%",
      description:
        "Indoor stall perfect for product demonstrations & exhibits.",
    },
    {
      id: 3,
      title: "Food Stalls",
      size: "5m x 5m",
      price: "Rs. 14,000/- + GST @ 18%",
      description: "Spacious layout suited for food counters & mini kitchens.",
    },{
      id: 4,
      title: "Pagoda",
      size: "5m x 5m",
      price: "Rs. 30,000/- + GST @ 18%",
      description:
        "Premium spacious pagoda, ideal for large showcases & displays.",
    },
  ];

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % events.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + events.length) % events.length);
  };

  return (
    <>
      <WaveDivider className="text-white" />
      <section data-aos="fade-up" className="py-10 px-4 bg-gradient-to-b from-primary/5 to-white">
        <div className="max-w-7xl mx-auto px-4 py-6">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
              <span className="text-primary font-semibold">
                Grand exhibition
              </span>
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
              Book Your Stall Space
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose from our available stall categories and secure your spot.
              Booking is processed exclusively through the Raise Enquiry button.
            </p>
            
          </div>

          <div className="relative">
            <div className="relative">
              <div className="w-full">
                {/* Desktop Table */}
                <div className="hidden md:block overflow-x-auto rounded-xl border shadow-sm bg-white">
                  <table className="w-full text-left border-collapse">
                    <thead className="bg-primary/10">
                      <tr>
                        <th className="p-4 font-semibold text-foreground">
                          Stall Type
                        </th>
                        <th className="p-4 font-semibold text-foreground">
                          Size
                        </th>
                        <th className="p-4 font-semibold text-foreground">
                          Price
                        </th>
                        <th className="p-4 font-semibold text-foreground">
                          Description
                        </th>
                      </tr>
                    </thead>

                    <tbody>
                      {stalls.map((stall) => (
                        <tr
                          key={stall.id}
                          className="border-t hover:bg-primary/5 transition"
                        >
                          <td className="p-4 font-medium">{stall.title}</td>
                          <td className="p-4">{stall.size}</td>
                          <td className="p-4 font-semibold text-primary">
                            {stall.price}
                          </td>
                          <td className="p-4 text-muted-foreground">
                            {stall.description}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Mobile Friendly UI */}
                <div className="md:hidden space-y-4 mt-6">
                  {stalls.map((stall) => (
                    <div
                      key={stall.id}
                      className="p-4 border rounded-xl bg-white shadow-sm"
                    >
                      <h3 className="text-lg font-bold mb-1">{stall.title}</h3>

                      <p className="text-sm text-muted-foreground">
                        <span className="font-semibold text-foreground">
                          Size:
                        </span>{" "}
                        {stall.size}
                      </p>

                      <p className="text-primary font-semibold mt-1">
                        {stall.price}
                      </p>

                      <p className="text-sm text-muted-foreground mt-2">
                        {stall.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <WaveDivider className="text-white rotate-180" />
    </>
  );
}
