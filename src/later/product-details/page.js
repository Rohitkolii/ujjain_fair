"use client";
import { useRoute, useLocation } from "wouter";
import { Button } from "../Components/ui/button";
import { Badge } from "../Components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../Components/ui/accordion";
import { CheckCircle2, ShieldCheck } from "lucide-react";
const arjunTea = "/images/Arjun_Tea_product_image_08609ada.webp";
const honey = "/images/Forest_Honey_product_image_2d3f72b8.webp";
const chyawanprash = "/images/Chyawanprash_product_image_a0e89656.webp";
const ntfp = "/images/NTFP_products_collection_5cb7048f.webp";

export default function ProductDetail() {
  const [, params] = useRoute("/products/:id");
  const [, setLocation] = useLocation();
  const productId = params?.id;

  const products = {
    "arjun-tea": {
      name: "Vindhya Herbals Arjun Tea",
      category: "Herbal Products",
      image: arjunTea,
      overview:
        "Vindhya Herbals Arjun Tea is crafted from organic Arjuna bark and natural spices to support heart health. It strengthens cardiac muscles, regulates cholesterol, improves circulation, and promotes balanced blood pressure.",
      benefits: [
        "Strengthens heart muscles",
        "Improves blood flow",
        "Regulates cholesterol & BP",
        "Rich antioxidants aid diabetes management",
        "Reduces inflammation",
        "Supports digestion & respiratory comfort",
        "Enhances skin clarity",
      ],
      sourcing:
        "Produced in a GMP & ISO 9001:2000 certified facility using ingredients sourced from tribal cooperatives, supporting sustainable livelihoods.",
      usage:
        "Drink 1–2 cups daily after meals. Consult a doctor if you have specific heart conditions.",
      certifications: ["GMP Certified", "ISO 9001:2000"],
    },
    "forest-honey": {
      name: "Vindhya Herbals Honey",
      category: "Forest Produce",
      image: honey,
      overview:
        "Vindhya Herbals 100% Natural Forest Honey is raw, organic, and multifloral — collected ethically from MP's deep forests by tribal communities and processed under GMP & ISO 9001:2008 standards.",
      benefits: [
        "Boosts immunity",
        "Supports heart health",
        "Relieves sore throat & cough",
        "Prebiotic—improves digestion",
        "Antibacterial—heals wounds & reduces acne",
        "Enhances skin hydration & glow",
      ],
      sourcing:
        "Ethically collected by tribal communities from Madhya Pradesh's pristine forests, ensuring fair trade and sustainable harvesting practices.",
      usage: "Use 1 tsp in warm water daily or apply topically for skin benefits.",
      certifications: ["GMP Certified", "ISO 9001:2008", "100% Organic"],
    },
    chyawanprash: {
      name: "Vindhya Herbals Chyawanprash",
      category: "Medicinal Plants",
      image: chyawanprash,
      overview:
        "A powerful Ayurvedic Rasayana made with Amla, Pippali, Bala, Ashwagandha, honey, and ghee in GMP & ISO 9001:2008 certified units. Sustainably sourced from tribal forests.",
      benefits: [
        "Strengthens immunity",
        "Boosts stamina & vitality",
        "Promotes healthy aging",
        "Supports digestion",
        "Clears respiratory mucus",
        "Enhances overall wellness",
      ],
      sourcing:
        "Crafted using traditional Ayurvedic formulations with ingredients sustainably sourced from forest cooperatives across Madhya Pradesh.",
      usage:
        "Take ½ to 1 spoon with milk twice daily, preferably in the morning and evening.",
      certifications: ["GMP Certified", "ISO 9001:2008", "Ayurvedic Formulation"],
    },
    "ntfp-collection": {
      name: "NTFP Collection",
      category: "Tribal Value-Added Products",
      image: ntfp,
      overview:
        "Discover diverse Non-Timber Forest Produce including herbs, seeds, bark, and traditional medicinal materials collected sustainably by tribal communities across Madhya Pradesh.",
      benefits: [
        "Supports tribal livelihoods",
        "Sustainable forest management",
        "Preserves traditional knowledge",
        "Promotes biodiversity",
        "Fair trade practices",
        "Authentic forest products",
      ],
      sourcing:
        "Collected by Van Dhan Vikas Kendras (VDVKs) and Primary Cooperative Societies, ensuring fair prices and sustainable harvesting practices.",
      usage:
        "Each product in the NTFP collection has specific traditional uses. Consult product labels for detailed usage instructions.",
      certifications: ["Tribal Cooperative", "Sustainable Harvest"],
    },
  };

  const product = productId ? products[productId] : null;

  if (!product) {
    return (
      <div className="min-h-screen pt-16 flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-heading text-4xl font-bold mb-4">Product Not Found</h1>
          <Button onClick={() => setLocation("/")}>Return Home</Button>
        </div>
      </div>
    );
  }

  const relatedProducts = Object.entries(products)
    .filter(([id]) => id !== productId)
    .slice(0, 3);

  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="sticky top-24 h-fit">
            <div className="bg-gradient-to-br from-primary/5 to-accent/10 rounded-2xl p-8">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-auto rounded-xl"
              />
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <Badge className="mb-4">{product.category}</Badge>
              <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
                {product.name}
              </h1>
            </div>

            <div className="backdrop-blur-md bg-primary/5 rounded-xl p-6 border border-primary/20">
              <h2 className="font-heading text-2xl font-semibold mb-4">Overview</h2>
              <p className="text-muted-foreground leading-relaxed">{product.overview}</p>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-semibold mb-4">Key Benefits</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {product.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-card rounded-xl p-6 border border-card-border">
              <div className="flex items-start gap-3 mb-4">
                <ShieldCheck className="w-6 h-6 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-heading font-semibold text-lg mb-2">
                    Ethical Sourcing
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {product.sourcing}
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                {product.certifications.map((cert, idx) => (
                  <Badge key={idx} variant="secondary">
                    {cert}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="bg-accent/20 rounded-xl p-6">
              <h3 className="font-heading font-semibold text-lg mb-3">How To Use</h3>
              <p className="text-muted-foreground leading-relaxed">{product.usage}</p>
            </div>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="faq-1">
                <AccordionTrigger>Is this product safe for daily use?</AccordionTrigger>
                <AccordionContent>
                  Yes, all Vindhya Herbals products are made with natural ingredients
                  and are safe for daily consumption as directed. However, we recommend
                  consulting with a healthcare provider if you have specific health
                  conditions.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-2">
                <AccordionTrigger>How is this product sourced?</AccordionTrigger>
                <AccordionContent>
                  Our products are ethically sourced from tribal cooperatives in Madhya
                  Pradesh, ensuring fair trade practices and sustainable forest
                  management.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-3">
                <AccordionTrigger>What certifications do you have?</AccordionTrigger>
                <AccordionContent>
                  All our products are manufactured in GMP and ISO certified facilities,
                  adhering to the highest quality and safety standards.
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <div className="flex gap-4 pt-4">
              <Button size="lg" className="flex-1">
                Enquire Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="flex-1"
                onClick={() => setLocation("/stall-enquiry")}
              >
                Visit Our Stall
              </Button>
            </div>
          </div>
        </div>

        <div>
          <h2 className="font-heading text-3xl font-bold mb-8">
            Explore More Products
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedProducts.map(([id, prod]) => (
              <div
                key={id}
                className="bg-card rounded-xl overflow-hidden border border-card-border hover-elevate transition-all hover:shadow-xl hover:-translate-y-1 cursor-pointer"
                onClick={() => setLocation(`/products/${id}`)}
              >
                <div className="aspect-square bg-gradient-to-br from-primary/5 to-accent/10 p-8">
                  <img
                    src={prod.image}
                    alt={prod.name}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div className="p-6">
                  <Badge className="mb-3">{prod.category}</Badge>
                  <h3 className="font-heading text-xl font-semibold mb-2">
                    {prod.name}
                  </h3>
                  <Button variant="ghost" className="p-0 h-auto">
                    <span className="text-primary font-semibold">Learn More →</span>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
