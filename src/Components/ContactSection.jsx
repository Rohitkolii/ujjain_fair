// "use client";
// import { useState } from "react";
// import { Button } from "../Components/ui/button";
// import { Input } from "../Components/ui/input";
// import { Textarea } from "../Components/ui/textarea";
// import { Mail, Phone, MapPin } from "lucide-react";
// import { useToast } from "../Components/hooks/use-toast";
// import { Sparkles, Loader2 } from "lucide-react";

// import { db } from "../app/stall-enquiry/firebase";
// import { collection, addDoc, serverTimestamp } from "firebase/firestore";

// export default function ContactSection() {
//   const { toast } = useToast();
//   const [showSuccess, setShowSuccess] = useState(false);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     message: "",
//   });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     // --- PHONE VALIDATION ---
//     const phoneRegex = /^[6-9]\d{9}$/;
//     if (!phoneRegex.test(formData.phone)) {
//       alert("Invalid Phone Number");
//       setIsSubmitting(false);
//       return;
//     }

//     try {
//       await addDoc(collection(db, "contacts"), {
//         name: formData.name,
//         email: formData.email,
//         phone: formData.phone,
//         message: formData.message,
//         createdAt: serverTimestamp(),
//       });

//       setShowSuccess(true);
//       setTimeout(() => {
//         setShowSuccess(false);
//       }, 3000);
//       setIsSubmitting(false);
//       toast({
//         title: "Message Sent!",
//         description:
//           "Thank you for contacting us. We’ll get back to you shortly.",
//       });

//       setFormData({
//         name: "",
//         phone: "",
//         email: "",
//         message: "",
//       });
//     } catch (error) {
//       console.error("Error adding document: ", error);
//       setIsSubmitting(false);
//       toast({
//         title: "Error",
//         description: error.message || "Failed to send message. Please try again later.",
//         variant: "destructive",
//       });
//     }
//   };

//   return (
//     <section
//       data-aos="zoom-in"
//       className="py-20 px-4 bg-gradient-to-b from-accent/20 to-white relative overflow-hidden"
//     >
//       <svg
//         className="absolute top-0 left-0 w-full h-32 text-primary/5"
//         viewBox="0 0 1200 120"
//         preserveAspectRatio="none"
//       >
//         <path
//           d="M0,0 C150,80 350,80 600,60 C850,40 1050,40 1200,60 L1200,0 L0,0 Z"
//           fill="currentColor"
//         />
//       </svg>

//       <div className="max-w-7xl mx-auto relative z-10">
//         <div className="text-center mb-16">
//           <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
//             <span className="text-primary font-semibold">Contact Us</span>
//           </div>
//           <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
//             Let's Connect
//           </h2>
//           <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
//             Have questions? We're here to help you discover the world of herbal
//             wellness
//           </p>
//         </div>

//         <div className="grid md:grid-cols-2 gap-12">
//           <form onSubmit={handleSubmit} className="space-y-6">
//             {showSuccess && (
//               <div
//                 onClick={() => setShowSuccess(false)}
//                 className="fixed top-[-50px] inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
//               >
//                 <div className="bg-card p-8 rounded-2xl border-2 border-primary text-center max-w-md mx-4">
//                   <div className="flex justify-center mb-4">
//                     {[...Array(5)].map((_, i) => (
//                       <Sparkles
//                         key={i}
//                         className="w-8 h-8 text-primary animate-bounce"
//                         style={{ animationDelay: `${i * 0.1}s` }}
//                       />
//                     ))}
//                   </div>
//                   <h2 className="font-heading text-2xl font-bold text-primary mb-2">
//                     Message Sent!
//                   </h2>
//                   <p className="text-muted-foreground">
//                     Thank you for contacting us. We’ll get back to you shortly.
//                   </p>
//                 </div>
//               </div>
//             )}
//             <div>
//               <Input
//                 placeholder="Your Name"
//                 value={formData.name}
//                 onChange={(e) =>
//                   setFormData({ ...formData, name: e.target.value })
//                 }
//                 required
//                 data-testid="input-name"
//               />
//             </div>
//             <div>
//               <Input
//                 type="email"
//                 placeholder="Email Address"
//                 value={formData.email}
//                 onChange={(e) =>
//                   setFormData({ ...formData, email: e.target.value })
//                 }
//                 required
//                 data-testid="input-email"
//               />
//             </div>
//             <div>
//               <Input
//                 type="tel"
//                 placeholder="Phone Number"
//                 value={formData.phone}
//                 onChange={(e) =>
//                   setFormData({ ...formData, phone: e.target.value })
//                 }
//                 required
//                 data-testid="input-phone"
//               />
//             </div>
//             <div>
//               <Textarea
//                 placeholder="Your Message"
//                 value={formData.message}
//                 onChange={(e) =>
//                   setFormData({ ...formData, message: e.target.value })
//                 }
//                 rows={5}
//                 required
//                 data-testid="input-message"
//               />
//             </div>
//             <Button
//               type="submit"
//               size="lg"
//               className="w-full"
//               data-testid="button-submit-contact"
//             >
//               {isSubmitting ? (
//                 <div className="flex items-center gap-2">
//                   <Loader2 className="w-5 h-5 animate-spin" />
//                   Contacting...
//                 </div>
//               ) : (
//                 "Contact"
//               )}
//             </Button>
//           </form>

//           <div className="space-y-8">
//             <div className="bg-card rounded-xl p-6 border border-card-border hover-elevate">
//               <div className="flex items-start gap-4">
//                 <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
//                   <Mail className="w-6 h-6 text-primary" />
//                 </div>
//                 <div>
//                   <h3 className="font-heading font-semibold text-lg mb-1">
//                     Email
//                   </h3>
//                   <p className="text-muted-foreground">md.mfpfed@mp.gov.in</p>
//                   <p className="text-muted-foreground">mpmfpit@gmail.com</p>
//                 </div>
//               </div>
//             </div>

//             <div className="bg-card rounded-xl p-6 border border-card-border hover-elevate">
//               <div className="flex items-start gap-4">
//                 <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
//                   <Phone className="w-6 h-6 text-primary" />
//                 </div>
//                 <div>
//                   <h3 className="font-heading font-semibold text-lg mb-1">
//                     Phone
//                   </h3>
//                   <p className="text-muted-foreground">+91-755-2674202</p>
//                   <p className="text-muted-foreground">+91-755-2552628</p>
//                 </div>
//               </div>
//             </div>

//             <div className="bg-card rounded-xl p-6 border border-card-border hover-elevate">
//               <div className="flex items-start gap-4">
//                 <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
//                   <MapPin className="w-6 h-6 text-primary" />
//                 </div>
//                 <div>
//                   <h3 className="font-heading font-semibold text-lg mb-1">
//                     Address
//                   </h3>
//                   <p className="text-muted-foreground">
//                     Lal Parade Ground
//                     <br />
//                     Bhopal, Madhya Pradesh 462001
//                     <br />
//                     India
//                   </p>
//                 </div>
//               </div>
//             </div>

//             <div className="rounded-xl overflow-hidden border border-card-border h-64">
//               <iframe
//                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3665.904750667238!2d77.4130385!3d23.246552899999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c429b4b3cf227%3A0x5905ca61add361!2sLal%20Parade%20Ground!5e0!3m2!1sen!2sin!4v1762709154643!5m2!1sen!2sin"
//                 width="100%"
//                 height="100%"
//                 style={{ border: 0 }}
//                 allowFullScreen
//                 loading="lazy"
//                 referrerPolicy="no-referrer-when-downgrade"
//                 title="Fair Location"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }



"use client";
import { useState } from "react";
import { Button } from "../Components/ui/button";
import { Input } from "../Components/ui/input";
import { Textarea } from "../Components/ui/textarea";
import { Mail, Phone, MapPin, Sparkles, Loader2 } from "lucide-react";
import { useToast } from "../Components/hooks/use-toast";

import { db } from "../app/stall-enquiry/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export default function ContactSection() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phoneRegex.test(formData.phone)) {
      alert("Invalid Phone Number");
      setIsSubmitting(false);
      return;
    }

    try {
      await addDoc(collection(db, "contacts"), {
        ...formData,
        createdAt: serverTimestamp(),
      });

      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000);

      toast({
        title: "Message Sent",
        description: "We’ll get back to you shortly.",
      });

      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (err) {
      toast({
        title: "Error",
        description: err.message || "Something went wrong",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative py-28 px-4 overflow-hidden bg-gradient-to-br from-primary/10 via-white to-primary/5">
      {/* Decorative blobs */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-primary/15 text-primary font-semibold shadow">
            <Sparkles className="w-4 h-4" />
            Contact Us
          </span>
          <h2 className="mt-6 text-4xl md:text-5xl font-heading font-bold">
            Let’s Start a Conversation
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg">
            Whether you’re an exhibitor, visitor, or partner — we’re here to help.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* FORM */}
          <form
            onSubmit={handleSubmit}
            className="relative bg-white/80 backdrop-blur-xl border border-primary/20 rounded-lg p-10 shadow-xl space-y-6"
          >
            <h3 className="text-2xl font-heading font-semibold mb-4">
              Send us a message
            </h3>

            <Input
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              required
            />
            <Input
              type="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
            />
            <Input
              type="tel"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              required
            />
            <Textarea
              rows={5}
              placeholder="Your Message"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              required
            />

            <Button type="submit" size="lg" className="w-full">
              {isSubmitting ? (
                <span className="flex items-center gap-2">
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Sending...
                </span>
              ) : (
                "Send Message"
              )}
            </Button>
          </form>

          {/* INFO PANEL */}
          <div className="space-y-8">
            {[
              {
                icon: Mail,
                title: "Email",
                lines: ["md.mfpfed@mp.gov.in", "mpmfpit@gmail.com"],
              },
              {
                icon: Phone,
                title: "Phone",
                lines: ["+91-755-2674202", "+91-755-2552628"],
              },
              {
                icon: MapPin,
                title: "Address",
                lines: [
                  "Lal Parade Ground",
                  "Bhopal, Madhya Pradesh",
                  "India",
                ],
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-5 bg-white/70 backdrop-blur-md border border-primary/15 rounded-2xl p-6 shadow hover:shadow-lg transition"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/15 flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">
                    {item.title}
                  </h4>
                  {item.lines.map((l, idx) => (
                    <p key={idx} className="text-muted-foreground">
                      {l}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

          {/* MAP */}
            <div className="rounded-lg overflow-hidden mt-5 border border-primary/20 shadow-xl h-72 w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3665.904750667238!2d77.4130385!3d23.246552899999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c429b4b3cf227%3A0x5905ca61add361!2sLal%20Parade%20Ground!5e0!3m2!1sen!2sin!4v1762709154643!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Fair Location"
              />
            </div>
      </div>
    </section>
  );
}
