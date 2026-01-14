import Head from "@/Components/Head";
import { CheckCircle2 } from "lucide-react";
const aboutImage = "/images/Forest_community_illustration_4b34afe9.webp";
const medicinal = "/images/Medicinal_Plants_Display_89ad0124.webp";
const ab = "/images/gallary/9.webp";
export default function About() {
  return (
    <div className="min-h-screen">
      <Head title={"About US"} desc={"Celebrating nature, culture, and sustainable enterprise"} bg={medicinal} />

      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="font-heading text-4xl font-bold mb-6">Our Story</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed text-justify">
              <p>
                The International Herbal Fair 2025 invites you to explore the
                vast world of herbal products, forest produce, natural wellness,
                medicinal plants, and green enterprise — all under one roof.
              </p>
              <p>
                International Herbal Fair is an annual feature of Bhopal for
                over a decade now. Initially, began as a National event, this
                annual fair was up-scaled as an International event from 2011
                with a mandate to create a platform for showcasing the Minor
                Forest Produce (MFP) diversity and potential of various states
                of India and neighbouring countries to provide robust marketing
                opportunities with strong backward-forward linkages for MFP
                collectors, traders and manufacturers involved in processing of
                MFP.
              </p>
              <p>
                Discover a diverse showcase of raw Non-Timber Forest Produce
                (NTFP) and premium value-added herbal products. Interact
                directly with primary producers and witness how Madhya Pradesh
                is nurturing eco-friendly entrepreneurship. The fair features
                exhibitions by primary cooperative societies of district union,
                Van Dhan Vikas Kendra (VDVK) and forest-based enterprises,
                offering access to trusted brands like Vindhya Herbals.
              </p>
            </div>
          </div>
          <div>
            <img
              src={ab}
              alt="Forest community"
              className="w-full rounded-2xl shadow-xl"
            />
          </div>
        </div>

        <div className="space-y-4 py-5 text-muted-foreground leading-relaxed">
          <div className="bg-card p-8 rounded-2xl border border-card-border">
          <ul className="font-heading list-decimal leading-loose text-justify">
            {/* <p className="text-xl font-bold text-center mb-5">
              Thematic workshop on “Minor Forest Produce for Self-Reliance”.
            </p> */}
            <p className="text-xl font-bold text-center mb-5">
              Opportunities in MFP Sector
            </p>
            <li className="ml-10">
              Exhibition and showcasing of Herbal products and associated processing technology.
            </li>
            <li className="ml-10">
              Buyer-Seller Meet: Signing of MoUs for future sale-purchase of herbal raw and processed products.
            </li>
            <li className="ml-10">
              Product development and branding in collaboration with Vindhya Herbals - The state-of-the-art production unit of M.P. State MFP Federation.
            </li>
            <li className="ml-10">
              Herbal raw material: An opportunity to sell/purchase raw/processed herbal products from different processing Centers of the State, other states of the country and various participating neighbouring countries.
            </li>
            <li className="ml-10">
              Herbal Knowledge: A glimpse of innovations and entrepreneurship in the field of traditional herbal knowledge.
            </li>
            <li className="ml-10">
              Free health check-up by Ayurvedic Doctors.
            </li>
            <li className="ml-10">Evening cultural programs.</li>
          </ul>
          </div>
          <p className="text-justify">
            Exclusive buyer-seller networking, explore new market and business
            opportunities, experience live NTFP processing demonstrations, and
            gain insights through International knowledge sessions in
            conferences. The event also promotes and creates better price
            opportunities for income enhancement and value addition for the
            tribal collectors.
          </p>
          <p className="text-justify">
            Join stakeholders, entrepreneurs, experts, and enthusiasts as we
            celebrate India's rich herbal Heritage and strengthen a sustainable
            NTFP value chain. Come and experience the rich cultural heritage and
            authentic tribal cuisine of Madhya Pradesh.
          </p>
          <p className="text-justify">
            Productive forests full of NTFPs play an immense role in uplifting communities economically, sustaining livelihoods, and contributing to India's growing green economy. This flagship event of the Madhya Pradesh Forest Department celebrates India's herbal wealth and the power of Non-Timber Forest Produce (NTFP) in building greener economies and healthier communities. Explore an exciting showcase of herbal products, forest honey, therapeutic oils, medicinal plants, and value-added forest produce - all sourced sustainably from the heart of MP's forests.
          </p>
          <br />

          <p className="text-xl font-bold mb-5">COLLABORATIONS & STRATEGIC PARTNERSHIPS </p>
          <p>The International Herbal Fair 2025 also provides an excellent platform to explore professional tie-ups, strategic collaborations, and MoUs aimed at strengthening the herbal and forest-based value chain. We are open to partnering with research institutions, industry leaders, technology providers, certification agencies, and market facilitators to enhance product quality, traceability, branding, and export readiness. By bringing together diverse stakeholders across policy, science, and enterprise, the fair encourages innovative solutions, shared knowledge, and long-term business relationships.</p>
          <p>We welcome prospective partners to explore collaborative models that support
sustainable livelihoods, boost herbal entrepreneurship, and unlock new
national and international market opportunities. </p>
        <br />
        
          <ul className="font-heading list-decimal leading-loose">
            <p className="text-xl font-bold mb-5">
              Strategic Highlights from the previous Edition.
            </p>
            <li className="ml-10">2 Lakh+ Visitors. 7 Days. One Grand Celebration. </li>
            <li className="ml-10">300+ Stalls Showcasing Herbal Excellence </li>
            <li className="ml-10">Free Ayurvedic Consultants for 12,000+ People. </li>
            <li className="ml-10">Rs. 2 Crore in Sales & Rs. 4.72 Crore in MoUs Signed. </li>
            <li className="ml-10">International Participation Driving Innovation & Insight. </li>
            <li className="ml-10">Eminent Dignitaries from National & International Platforms Graced the Event.</li>
          </ul>


          <p className="text-xl font-bold mb-5">M.P. State Minor Forest Produce (MFP) Federation</p>
          <p className="text-justify">Established in 1984 under the Madhya Pradesh Cooperative Act, the M.P. State Minor Forest Produce (MFP) Federation is committed to empowering tribal communities by enhancing the trade, value, and visibility of Non-Timber Forest Produce (NTFP).</p>
          <p className="text-justify">With a strong three-tier network of 60 District Cooperative Unions and 1,069 Primary Cooperative Societies, the Federation supports nearly 40 Lakhs NTFP collectors, ensuring sustainable livelihoods and fairmarket opportunities.</p>
          <p className="text-justify">The Federation drives impactful initiatives such as infrastructure development, trade promotion, and educational scholarships for the children of tendu Teaf collectors. It advances conservation efforts through in-situ and ex-situ plantations, and improves product quality and innovation through its dedicated MFP Processing & Research Center (MFP-PARC).</p>
          <p className="text-justify">To further strengthen market access and global outreach, the Federation proudly hosts the annual International Herbal Fair, offering a vibrant platform for showcasing forest-based products, nurturing enterprise, and celebrating the herbal wealth of Madhya Pradesh.</p>
            <br />
          <p className="text-xl font-bold mb-5 text-justify">Vindhya Herbals of the M.P. State Minor Forest Produce Federation</p>
          <p className="text-justify">Vindhya Herbals is the flagship brand of the M.P. State Minor Forest Produce Federation, offering a diverse range of natural, herbal, and wellness products crafted from sustainably sourced forest produce. Manufactured at the state-of-the-art Minor Forest Produce Processing & Research Center (MFP-PARC), each product reflects a blend of traditional knowledge, scientific validation, and quality assurance. From therapeutic oils, herbal formulations, and cosmetic care to pure forest honey, Vindhya Herbals is committed to promoting holistic well-being while supporting the livelihood of tribal collectors across Madhya Pradesh. With growing consumer trust and an expanding product portfolio, Vindhya Herbals proudly represents the herbal heritage and biodiversity richness of the state.</p>
          <br />
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="bg-card p-8 rounded-2xl border border-card-border">
            <h3 className="font-heading text-2xl font-bold mb-6 text-primary">
              Vision
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              The International Herbal Fair is an annual event organized to showcase and promote skills, knowledge sharing, innovation, business, and marketing opportunities while celebrating the rich cultural diversity of Madhya Pradesh.
            </p>
          </div>
          <div className="bg-card p-8 rounded-2xl border border-card-border">
            <h3 className="font-heading text-2xl font-bold mb-6 text-primary">
              Mission
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              To promote Minor Forest Produce, empower forest communities,
              support herbal industries, and encourage sustainable forest
              management while spreading awareness about tribal culture and
              natural health.
            </p>
          </div>
        </div>

        <div className="mb-20">
          <h2 className="font-heading text-4xl font-bold mb-8 text-center">
            What to Expect
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Buyer–seller networking",
              "New market opportunities",
              "Live NTFP processing demos",
              "International knowledge sessions",
              "Tribal cuisine & cultural showcases",
              "CSR collaboration opportunities",
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <span className="text-muted-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-primary/10 to-accent/20 p-12 rounded-2xl text-center">
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
