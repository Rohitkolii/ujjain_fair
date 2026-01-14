"use client";

import Hero from "../Components/Hero";
import StallPopup from "../Components/StallPopup";
import AboutSection from "../Components/AboutSection";
import ProductsSection from "../Components/ProductsSection";
import EventsSection from "../Components/EventsSection";
import StallBanner from "../Components/StallBanner";
import ContactSection from "../Components/ContactSection";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import GrandExhibition from "@/Components/GrandExhibition";
import Mela from "@/Components/Mela";
import GelleryTabular from "@/Components/GallertyTabular";

import AOS from "aos";
import "aos/dist/aos.css";
import Header from "@/Components/Header";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration
    });
  }, []);

  useEffect(() => {
    // Define the callback globally before loading the script
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "hi", // Your default page language
          includedLanguages: "en,hi", // Languages you want
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
        },
        "google_translate_element"
      );
    };

    // Create script element
    const script = document.createElement("script");
    script.src =
      "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;

    document.body.appendChild(script);

    // Optional cleanup
    return () => {
      document.body.removeChild(script);
      delete window.googleTranslateElementInit;
    };
  }, []);

  const router = useRouter();
  const [showWelcomePopup, setShowWelcomePopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowWelcomePopup(true), 10000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen">
      {/* <Hero
        onJoinClick={() => router.push("/stall-enquiry")}
        onContactClick={() => router.push("/contact")}
      /> */}
      <Header />
      <StallPopup
        open={showWelcomePopup}
        onOpenChange={setShowWelcomePopup}
        onKnowMore={() => router.push("/about")}
        onBookStall={() => router.push("stall-enquiry")}
      />
      {/* <StallEnquiryModal open={showStallModal} onOpenChange={setShowStallModal} /> */}
      <AboutSection />
      <Mela />
      <EventsSection onEventClick={() => router.push("/events")} />
      <ProductsSection
        onProductClick={(id) => router.push(`/products/${id}`)}
      />
      <GrandExhibition onEventClick={() => router.push("/events")} />
      <StallBanner onBookStall={() => router.push("/stall-enquiry")} />
      {/* <GallerySection /> */}
      <GelleryTabular />
      <ContactSection />
    </div>
  );
}
