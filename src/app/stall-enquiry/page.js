"use client";
import { useState } from "react";
import { Button } from "../../Components/ui/button";
import { Input } from "../../Components/ui/input";
import { Textarea } from "../../Components/ui/textarea";
import { Label } from "../../Components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../Components/ui/select";
import { useToast } from "../../Components/hooks/use-toast";
import { Sparkles, Loader2 } from "lucide-react";

import { db } from "./firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const fairTents = "/images/gallary/7.webp";

export default function StallEnquiry() {
  const { toast } = useToast();
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    companyName: "",
    contactPerson: "",
    phone: "",
    email: "",
    intrestedin: "",
    message: "",
  });

  // NOTE: removed trailing space from URL

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setIsSubmitting(true);
  //   try {
  //     await addDoc(collection(db, "enquiries"), {
  //       companyName: formData.companyName,
  //       contactPerson: formData.contactPerson,
  //       phone: formData.phone,
  //       email: formData.email,
  //       intrestedin: formData.intrestedin,
  //       message: formData.message,
  //       createdAt: serverTimestamp(),
  //     });

  //     setShowSuccess(true);
  //      setTimeout(() => {
  //         setShowSuccess(false);
  //       }, 3000)
  //     setIsSubmitting(false);
  //     toast({
  //       title: "Booking Request Received!",
  //       description: "We'll contact you soon with stall details.",
  //     });

  //     setFormData({
  //       companyName: "",
  //       contactPerson: "",
  //       phone: "",
  //       email: "",
  //       intrestedin: "",
  //       message: "",
  //     });
  //   } catch (error) {
  //     console.error("Error adding document: ", error);
  //     setIsSubmitting(false);
  //   }
  // };

  const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);

  // --- PHONE VALIDATION ---
  const phoneRegex = /^[6-9]\d{9}$/;
  if (!phoneRegex.test(formData.phone)) {
    // toast({
    //   title: "Invalid Phone Number",
    //   description: "Please enter a valid 10-digit Indian mobile number.",
    //   variant: "destructive",
    // });
    alert("Invalid Phone Number")
    setIsSubmitting(false);
    return;
  }

  try {
    await addDoc(collection(db, "enquiries"), {
      companyName: formData.companyName,
      contactPerson: formData.contactPerson,
      phone: formData.phone,
      email: formData.email,
      intrestedin: formData.intrestedin,
      message: formData.message,
      createdAt: serverTimestamp(),
    });

    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
    setIsSubmitting(false);

    toast({
      title: "Booking Request Received!",
      description: "We'll contact you soon with stall details.",
    });

    setFormData({
      companyName: "",
      contactPerson: "",
      phone: "",
      email: "",
      intrestedin: "",
      message: "",
    });

  } catch (error) {
    console.error("Error adding document: ", error);
    setIsSubmitting(false);
    toast({
      title: "Error",
      description: error.message || "Failed to submit enquiry. Please try again later.",
      variant: "destructive",
    });
  }
};


  return (
    <div className="min-h-screen">
      <div
        className="relative h-96 flex items-center justify-center bg-gradient-to-r from-primary/90 to-primary/70"
        style={{
          backgroundImage: `url(${fairTents})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary/85" />
        <div className="relative z-10 text-center px-4">
          <h1 className="font-heading text-5xl md:text-6xl font-bold text-white mb-4">
            Enquiry Form
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Let us know what you’re looking for — our team will get back to you
            shortly.
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-20">
        <form onSubmit={handleSubmit} className="space-y-6 relative">
          {showSuccess && (
            <div
              onClick={() => setShowSuccess(false)}
              className="fixed top-[-50px] inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
            >
              <div className="bg-card p-8 rounded-2xl border-2 border-primary text-center max-w-md mx-4">
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Sparkles
                      key={i}
                      className="w-8 h-8 text-primary animate-bounce"
                      style={{ animationDelay: `${i * 0.1}s` }}
                    />
                  ))}
                </div>
                <h2 className="font-heading text-2xl font-bold text-primary mb-2">
                  Success!
                </h2>
                <p className="text-muted-foreground">
                  Your stall booking request has been received. We'll contact
                  you soon!
                </p>
              </div>
            </div>
          )}

          <div className="space-y-2">
            <Label htmlFor="companyName">Company Name *</Label>
            <Input
              id="companyName"
              value={formData.companyName}
              onChange={(e) =>
                setFormData({ ...formData, companyName: e.target.value })
              }
              required
              data-testid="input-company-name"
              placeholder="Enter company name"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="contactPerson">Contact Person *</Label>
            <Input
              id="contactPerson"
              value={formData.contactPerson}
              onChange={(e) =>
                setFormData({ ...formData, contactPerson: e.target.value })
              }
              required
              data-testid="input-contact-person"
              placeholder="Enter your name"
            />
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="phone">Phone *</Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                required
                data-testid="input-phone-stall"
                placeholder="Enter Phone number"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
                data-testid="input-email-stall"
                placeholder="Enter email id"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="intrestedin">Intrested In *</Label>
            <Select
              value={formData.intrestedin}
              onValueChange={(value) =>
                setFormData({ ...formData, intrestedin: value })
              }
              required
            >
              <SelectTrigger data-testid="select-category">
                <SelectValue placeholder="Select a category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Stall Booking">Stall Booking</SelectItem>
                <SelectItem value="Buyer Seller Meet">Buyer-Seller Meet</SelectItem>
                <SelectItem value="both">
                  Both
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              rows={5}
              placeholder="Tell us about your products and requirements..."
              data-testid="input-message-stall"
            />
          </div>

          <Button
            type="submit"
            size="lg"
            className="w-full"
            disabled={isSubmitting}
            aria-busy={isSubmitting}
            data-testid="button-submit-stall"
          >
            {isSubmitting ? (
              <div className="flex items-center gap-2">
                <Loader2 className="w-5 h-5 animate-spin" />
                Submitting...
              </div>
            ) : (
              "Submit Enquiry"
            )}
          </Button>

          <p className="text-sm text-muted-foreground text-center">
            Our team will review your application and contact you within 2-3
            business days
          </p>
        </form>
      </div>
    </div>
  );
}
