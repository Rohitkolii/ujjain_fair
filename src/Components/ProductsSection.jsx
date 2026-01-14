import ProductCard from "../Components/ProductsCard";
const arjunTea = "/images/Arjun_Tea_product_image_08609ada.webp";
const honey = "/images/Forest_Honey_product_image_2d3f72b8.webp";
const chyawanprash = "/images/Chyawanprash_product_image_a0e89656.webp";
const ntfp = "/images/NTFP_products_collection_5cb7048f.webp";

const p1 = "/images/products/1.png";
const p2 = "/images/products/2.jpeg";
const p3 = "/images/products/3.jpeg";
const p4 = "/images/products/4.png";
const p6 = "/images/products/6.png";

export default function ProductsSection({ onProductClick }) {

  const products = [
  {
    id: 1,
    name: "Arjun Herbal Tea",
    description:
      "A soothing blend made from pure Arjuna bark and natural herbs, traditionally known to support heart wellness and improve circulation.",
    image: p1,
    category: "Herbal Products",
  },
  {
    id: 3,
    name: "Chyawanprash Avleha",
    description:
      "A classical Ayurvedic formulation enriched with Amla, Ashwagandha, ghee, and honey to boost immunity, energy, and overall vitality.",
    image: p3,
    category: "Medicinal Plants",
  },
  {
    id: "ntfp-collection",
    name: "Vindhya Herbal Honey",
    description:
      "Pure, natural honey collected from forest regions of Vindhya, known for its rich taste and traditional health benefits.",
    image: p4,
    category: "Tribal Value-Added Products",
  }
];

  return (
    <section id="products" className="py-20 px-4 bg-gradient-to-b from-white to-primary/5">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
            <span className="text-primary font-semibold">Our Products</span>
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            Nature's Finest Offerings
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our curated selection of premium herbal products, forest produce, and traditional remedies.
          </p>
        </div>

        {/* Product Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              {...product}
              onLearnMore={() => onProductClick?.(product.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
