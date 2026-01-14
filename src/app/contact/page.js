"use client"
import Head from "@/Components/Head";
import ContactSection from "../../Components/ContactSection";
const fairTents = "/images/gallary/7.webp";
export default function Contact() {
  return (
    <div className="min-h-screen">
      <Head title={"Let's Connect"} desc={"We're here to help you discover the world of herbal wellness"} bg={fairTents} />
      <ContactSection />
    </div>
  );
}
