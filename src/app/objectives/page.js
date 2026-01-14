"use client"
import Head from '@/Components/Head';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
const aboutImage = "/images/Forest_community_illustration_4b34afe9.webp";
const modiji = "/images/modiji.jpg";
const mohanji = "/images/mohanyadavji.jpg";
const fairStall = "/images/gallary/1.webp";

export default function Objectives() {
  useEffect(() => {
      AOS.init({
        duration: 1000, // animation duration
      });
    }, []);
  return (
    <div className="min-h-screen">
      <Head title={"Our Objectives"} desc={"Discover inspiring programs, workshops, and networking opportunities."} bg={fairStall} />

      <div className="max-w-7xl mx-auto px-4 py-20">
        <div data-aos="fade-up" className="text-left tex-primary/95 space-y-6 text-sm md:text-base leading-relaxed bg-black/5 p-6 rounded-lg">
          <h1 className="font-semibold text-2xl text-center pb-5">
            Objectives of International Herbal Fair (Van Mela) 2025 Bhopal
          </h1>
          <h3 className="font-semibold text-lg">
            Promotion of Minor Forest Produce (MFP):
          </h3>
          <ul className="list-disc pl-6 tex-primary/90">
            <li>
              To create awareness and market opportunities for forest-based
              products such as honey, herbs, gum, tendu leaves, mahua, and other
              natural resources.
            </li>
            <li>
              To increase the income of forest dwellers by improving the trade
              and value addition of MFP.
            </li>
          </ul>

          <h3 className="font-semibold text-lg">
            Empowerment of Forest Communities:
          </h3>
          <ul className="list-disc pl-6 tex-primary/90">
            <li>
              To empower tribal and rural communities, particularly women, who
              are primary collectors of forest produce.
            </li>
            <li>
              To provide a platform for them to directly connect with buyers,
              cooperatives, and industries, reducing dependence on middlemen.
            </li>
          </ul>

          <h3 className="font-semibold text-lg">
            Encouragement of Sustainable Forest Management:
          </h3>
          <ul className="list-disc pl-6 tex-primary/90">
            <li>
              To promote sustainable harvesting and conservation practices.
            </li>
            <li>
              To raise awareness about biodiversity and the importance of forest
              preservation.
            </li>
          </ul>

          <h3 className="font-semibold text-lg">
            Promotion of Herbal and Ayurvedic Industries:
          </h3>
          <ul className="list-disc pl-6 tex-primary/90">
            <li>
              To showcase and support Ayurvedic, herbal, and organic products
              made from forest produce.
            </li>
            <li>
              To encourage scientific research and industrial development in the
              herbal sector.
            </li>
          </ul>

          <h3 className="font-semibold text-lg">
            Business & Trade Facilitation:
          </h3>
          <ul className="list-disc pl-6 tex-primary/90">
            <li>
              To provide a national and international platform for buyers,
              sellers, manufacturers, and exporters in the forest-based and
              herbal sectors.
            </li>
            <li>
              To strengthen market linkages and foster trade partnerships at the
              domestic and global levels.
            </li>
          </ul>

          <h3 className="font-semibold text-lg">
            Cultural and Educational Exchange:
          </h3>
          <ul className="list-disc pl-6 tex-primary/90">
            <li>
              To display the rich tribal culture, crafts, art, and traditions of
              Madhya Pradesh.
            </li>
            <li>
              To organise workshops, exhibitions, and seminars on forest
              conservation, herbal medicine, and sustainable livelihoods.
            </li>
          </ul>

          <h3 className="font-semibold text-lg">
            Public Awareness and Health Promotion:
          </h3>
          <ul className="list-disc pl-6 tex-primary/90">
            <li>
              To offer free Ayurvedic health check-ups and consultations,
              spreading awareness about natural healing.
            </li>
            <li>
              To educate visitors on the benefits of herbal and organic
              lifestyles.
            </li>
          </ul>
        </div>

        {/* Patrons / Dignitaries */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div data-aos="zoom-in-right" className="flex items-center gap-4 bg-black/5 p-4 rounded-lg">
            <img
              src={modiji}
              alt="Shri Narendra Modi ji"
              className="w-40 h-40 rounded-full object-cover shadow-md"
            />
            <div className="text-left">
              <div className="font-semibold tex-primary">
                Shri Narendra Modi ji
              </div>
              <div className="text-sm tex-primary/80">
                Honourable Prime Minister of India (Govt. Of India)
              </div>
            </div>
          </div>

          <div data-aos="zoom-in-left" className="flex items-center gap-4 bg-black/5 p-4 rounded-lg">
            <img
              src={mohanji}
              alt="Shri Mohal Yadav ji"
              className="w-40 h-40 rounded-full object-cover shadow-md"
            />
            <div className="text-left">
              <div className="font-semibold tex-primary">
                Shri Mohal Yadav ji
              </div>
              <div className="text-sm tex-primary/80">
                Honourable Chief Minister of Madhya Pradesh
              </div>
            </div>
          </div>
        </div>

        <div data-aos="zoom-in" className="bg-gradient-to-br from-primary/10 to-accent/20 p-12 rounded-2xl text-center mt-9">
          <h2 className="font-heading text-3xl font-bold mb-4">Join Us</h2>
          <p className="text-lg text-muted-foreground mb-2">
            11th International Herbal Fair
          </p>
          <p className="text-xl font-semibold text-foreground mb-2">
            December 17–23, 2025
          </p>
          <p className="text-lg text-muted-foreground">
            Lal Parade Ground, Bhopal
          </p>
          <p className="text-lg font-medium text-primary mt-6 italic">
            "When forests prosper… people prosper… and happiness grows."
          </p>
        </div>
      </div>
    </div>
  );
}
