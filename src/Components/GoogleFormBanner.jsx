import { Button } from "../Components/ui/button";
import { Tent } from "lucide-react";
import { useRouter } from "next/navigation";

const fairTents = "/images/Fair_tents_and_crowd_ab11060a.webp";

export default function GoogleFormBanner({ onBookStall }) {
    const router = useRouter()
  return (
    <section data-aos="zoom-in" className="relative py-20 px-4 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        // style={{ backgroundImage: `url(${fairTents})` }}
      />
      <div className="absolute inset-0" />

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-black mb-6">
          Fill Google form for Stall Booking.
        </h2>
        
        <div className="flex justify-center mb-6">
          <div className="size-[300px] max-sm:size-[100%] flex items-center justify-center backdrop-blur-sm">
            {/* <Tent className="w-10 h-10 text-black" /> */}
            <img className="size-full" src="/images/barcode.jpeg" alt="" />
          </div>
        </div>

        <Button
          size="lg"
          className="text-lg px-10 bg-primary text-white hover:bg-white/90 border-2 border-primary hover:text-primary"
          onClick={()=> router.push("https://docs.google.com/forms/d/e/1FAIpQLScpJ4ChO4KUIZ4pDDrvHvFTjqSzQHz_DFS0vLRujyAeScL6CA/closedform")}
          data-testid="button-book-stall-banner"
        >
          Book your stall
        </Button>
      </div>
    </section>
  );
}
