import { Button } from "../Components/ui/button";
// const heroImage = "/images/Hero_forest_background_scene_2ad3f1c4.webp";
const heroImage = "/images/bg2.jpg";

export default function Hero({ onJoinClick, onContactClick }) {
  return (
    <div className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* <div className="backdrop-blur-md bg-white/10 rounded-2xl p-8 md:p-12 border border-white/20"> */}
        <div className="">
          <h1 className="font-heading text-4xl md:text-6xl lg:text-3xl font-bold text-white mb-4">
            Welcome to
          </h1>
          <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            International Herbal Fair 2025
          </h2>
          <p className="text-xl md:text-xl text-white/95 mb-8 font-medium">
            "Prosperous Forest — Happy People"
          </p>
          <p className="mb-2 text-white/95 font-light">17th to 23rd December 2025</p>
          <p className="mb-8 text-white/95 font-light">Lal Parade Ground, Jahangirabad, Bhopal (Madhya Pradesh)</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="text-lg px-8 backdrop-blur-md bg-primary/90 hover:bg-primary border-2 border-primary-border"
              onClick={onJoinClick}
              data-testid="button-join-fair"
            >
              Join the Fair
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 backdrop-blur-md bg-white/10 hover:bg-white/20 text-white border-2 border-white/40"
              onClick={onContactClick}
              data-testid="button-contact-us"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
