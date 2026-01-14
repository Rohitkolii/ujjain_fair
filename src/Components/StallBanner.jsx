import { Button } from "../Components/ui/button";
import { Tent } from "lucide-react";
const fairTents = "/images/Fair_tents_and_crowd_ab11060a.webp";

export default function StallBanner({ onBookStall }) {
  return (
    <section data-aos="zoom-in" className="relative py-20 px-4 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${fairTents})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-primary/70" />

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
            <Tent className="w-10 h-10 text-white" />
          </div>
        </div>

        <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">
          Raise Your Enquiry Now
        </h2>

        <p className="text-xl text-white/95 mb-8 max-w-2xl mx-auto">
          Join hundreds of exhibitors showcasing herbal products, forest
          produce, and traditional crafts at India's premier green enterprise
          event
        </p>

        <Button
          size="lg"
          className="text-lg px-10 bg-white text-primary hover:bg-white/90 border-2 border-white"
          onClick={onBookStall}
          data-testid="button-book-stall-banner"
        >
          Enquire Now
        </Button>
      </div>
    </section>
  );
}
