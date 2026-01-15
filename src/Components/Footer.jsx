// import { Leaf, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
// import Link from "next/link";

// export default function Footer() {
//   return (
//     <footer className="bg-white border-t border-primary/20">
//       <div className="max-w-7xl mx-auto px-4 py-12">
//         {/* Main Footer Grid */}
//         <div className="grid md:grid-cols-4 gap-8 mb-8">
          
//           {/* Brand Info */}
//           <div>
//             <div className="flex items-center gap-2 mb-4">
//               {/* <Leaf className="w-8 h-8 text-primary" /> */}
//               <img
//                 src="/images/fairlogo.jpg"
//                 alt="Herbal Fair 2026 Logo"
//                 className="h-[80px] w-auto object-contain rounded-lg"
//               />
//               <span className="font-heading font-bold text-md">
//                 11th International Herbal Fair 2026
//               </span>
//             </div>
//             <p className="text-muted-foreground text-sm leading-relaxed">
//               Celebrating Nature & Culture Together
//             </p>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h4 className="font-heading font-semibold mb-4">Quick Links</h4>
//             <ul className="space-y-2">
//               <li>
//                 <Link
//                   href="/about"
//                   className="text-muted-foreground hover:text-primary transition-colors text-sm"
//                   data-testid="link-footer-about"
//                 >
//                   About Us
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   href="/events"
//                   className="text-muted-foreground hover:text-primary transition-colors text-sm"
//                   data-testid="link-footer-events"
//                 >
//                   Events
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   href="/products"
//                   className="text-muted-foreground hover:text-primary transition-colors text-sm"
//                   data-testid="link-footer-products"
//                 >
//                   Products
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   href="/contact"
//                   className="text-muted-foreground hover:text-primary transition-colors text-sm"
//                   data-testid="link-footer-contact"
//                 >
//                   Contact
//                 </Link>
//               </li>
//             </ul>
//           </div>

//           {/* Exhibitor Links */}
//           <div>
//             <h4 className="font-heading font-semibold mb-4">For Exhibitors</h4>
//             <ul className="space-y-2">
//               <li>
//                 <Link
//                   href="/stall-enquiry"
//                   className="text-muted-foreground hover:text-primary transition-colors text-sm"
//                   data-testid="link-footer-stall-enquiry"
//                 >
//                   Raise Enquiry
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   href="/objectives"
//                   className="text-muted-foreground hover:text-primary transition-colors text-sm"
//                 >
//                   Objectives
//                 </Link>
//               </li>
//             </ul>
//           </div>

//           {/* Social Links */}
//           <div>
//             <h4 className="font-heading font-semibold mb-4">Connect With Us</h4>
//             <div className="flex gap-3">
//               {[
//                 { icon: Facebook, label: "Facebook", id: "facebook", url: "https://www.facebook.com/mpmfp/" },
//                 { icon: Twitter, label: "Twitter", id: "twitter" , url : "https://x.com/MP_MFP"},
//                 { icon: Instagram, label: "Instagram", id: "instagram", url : "/" },
//                 { icon: Linkedin, label: "LinkedIn", id: "linkedin", url : "https://in.linkedin.com/company/madhuka" },
//               ].map(({ icon: Icon, label, id , url}) => (
//                 <Link
//                   key={id}
//                   href={url || "/"}
//                   target="_blank"
//                   aria-label={label}
//                   data-testid={`link-${id}`}
//                   className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors"
//                 >
//                   <Icon className="w-5 h-5 text-primary" />
//                 </Link>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Footer Bottom */}
//         <div className="border-t border-primary/20 pt-8">
//           <p className="text-center text-sm text-muted-foreground">
//             © 11th International Herbal Fair 2026. All rights reserved. | M.P. State Minor Forest Produce (T&D) Cooperative Federation Limited
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// }



import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  MapPin,
  Mail,
  Phone,
} from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0f172a] text-gray-300">
      <div className="max-w-7xl mx-auto px-4 pt-14 pb-5">
        {/* Top Grid */}
        <div className="grid gap-10 md:grid-cols-4">
          {/* Brand */}
          <div>
            <img
              src="/images/fairlogo.jpg"
              alt="International Herbal Fair Logo"
              className="h-16 mb-4 rounded-md bg-white p-1"
            />
            <h3 className="text-white font-semibold text-lg mb-2">
              11th International Herbal Fair 2026
            </h3>
            <p className="text-sm leading-relaxed text-gray-400">
              Celebrating India’s rich herbal heritage by connecting tradition,
              innovation, and sustainability.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              {[
                { name: "About Us", href: "/about" },
                { name: "Events", href: "/events" },
                { name: "Products", href: "/products" },
                { name: "Contact", href: "/contact" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="hover:text-green-400 transition"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Exhibitors */}
          <div>
            <h4 className="text-white font-semibold mb-4">For Exhibitors</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/stall-enquiry"
                  className="hover:text-green-400 transition"
                >
                  Stall Enquiry
                </Link>
              </li>
              <li>
                <Link
                  href="/objectives"
                  className="hover:text-green-400 transition"
                >
                  Objectives
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3">
                <MapPin className="w-4 h-4 text-green-400 mt-0.5" />
                <span>Ujjain, Madhya Pradesh, India</span>
              </li>
              <li className="flex gap-3">
                <Mail className="w-4 h-4 text-green-400 mt-0.5" />
                <span>info@herbalfair2026.com</span>
              </li>
              <li className="flex gap-3">
                <Phone className="w-4 h-4 text-green-400 mt-0.5" />
                <span>+91 XXXXX XXXXX</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 my-5" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-gray-400 text-center md:text-left">
            © 2026 International Herbal Fair.  
            M.P. State Minor Forest Produce (T&D) Cooperative Federation Limited.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4">
            {[
              {
                icon: Facebook,
                href: "https://www.facebook.com/mpmfp/",
              },
              {
                icon: Twitter,
                href: "https://x.com/MP_MFP",
              },
              {
                icon: Instagram,
                href: "/",
              },
              {
                icon: Linkedin,
                href: "https://in.linkedin.com/company/madhuka",
              },
            ].map(({ icon: Icon, href }, i) => (
              <Link
                key={i}
                href={href}
                target="_blank"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-green-500 transition"
              >
                <Icon className="w-5 h-5 text-white" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
