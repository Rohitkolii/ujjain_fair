"use client";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

import { Button } from "../Components/ui/button";
import { Globe, Menu, X } from "lucide-react";
import Link from "next/link";
const logo2 = "/images/fairlogo.jpg";
const logo = "/images/logo2.jpg";
const logo3 = "/images/logo.svg";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = usePathname();

  const [showDropdown, setShowDropdown] = useState(false);
  const [showDropdownmob, setshowDropdownmob] = useState(false);
  const buttonRef = useRef(null);
  const [position, setPosition] = useState({ top: 0, left: 0 });

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Objectives", path: "/objectives" },
    { name: "Events", path: "/events" },
    { name: "Mela Map", path: "/mela-map" },
    { name: "Vindhya Herbals", path: "/vindhya-herbals" },
    { name: "Gallery", path: "/gallery" },
    { name: "Stall", path: "/stall" },
    // { name: "Contact", path: "/contact" },
  ];

  useEffect(() => {
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages: "en,hi",
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
        },
        "google_translate_element"
      );
    };

    const script = document.createElement("script");
    script.src =
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    document.body.appendChild(script);
    

    return () => {
      document.body.removeChild(script);
      delete window.googleTranslateElementInit;
    };
  }, [showDropdown, showDropdownmob, isOpen]);
  

  const handleClick = () => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setPosition({
        top: rect.bottom + window.scrollY,
        left: rect.left + window.scrollX,
      });
    }
    setShowDropdown(!showDropdown);
  };

  const handleClick2 = () => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setPosition({
        top: rect.bottom + window.scrollY,
        left: rect.left + window.scrollX,
      });
    }
    setshowDropdownmob(!showDropdownmob);
  };

  return (
    <nav className="sticky top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/80 border-b">
      <div className="max-w-7xl mx-auto px-5 sm:px-2 lg:px-4 py-0.5 max-sm:px-1">
        <p className="sm:hidden items-center flex flex-col">
          <span className="text-[13px] md:text-sm font-semibold text-gray-800">
            Ujjain Fair
          </span>{" "}
          <span className="text-xs md:text-xs font-normal text-gray-800">
            "Prosperous Forest — Happy People"
          </span>
        </p>
        <div className="flex justify-between items-center h-20">
          <Link
            href="/"
            className="max-sm:items-start flex flex-col items-center gap-0 hover-elevate px-3 py-2 rounded-md"
            data-testid="link-home"
          >
            <div className="flex items-center gap-1">
              <img
                src={logo}
                alt="Herbal Fair 2025 Logo"
                className="max-sm:h-10 h-[60px] w-auto object-contain border-1"
              />

              {/* <img
                src={logo3}
                alt="Herbal Fair 2025 Logo"
                className="max-sm:h-10 h-[100px] w-auto object-contain"
              />

              <img
                src={logo2}
                alt="Herbal Fair 2025 Logo"
                className="max-sm:h-10 h-[80px] w-auto object-contain"
              /> */}
              <div className="hidden sm:block leading-tight">
              <p className="font-semibold text-gray-800">Ujjain Fair</p>
              <p className="text-xs text-gray-500">Prosperous Forest — Happy People</p>
            </div>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden xl:flex items-center gap-[2px]">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`px-2 py-1 rounded-md text-[13px] font-medium hover-elevate ${
                  location === item.path ? "text-primary bg-accent/50 border-b-2 border-b-primary" : ""
                }`}
                data-testid={`link-${item.name.toLowerCase()}`}
              >
                {item.name}
              </Link>
            ))}
            <Link
            className="px-2 py-1 rounded-md text-[13px] font-medium hover-elevate"
            href="/files/IHF2025.pdf" target="_blank" rel="noopener noreferrer">
              Brochure
            </Link>

              <Button
                variant="outline"
                size="sm"
                onClick={handleClick}
                className="flex gap-2"
                ref={buttonRef}
              >
                <Globe className="h-4 w-4" /> Language
              </Button>
            {showDropdown && (
              <div
                id="google_translate_element"
                style={{
                  position: "absolute",
                  top: position.top,
                  left: position.left,
                  zIndex: 50,
                  background: "white",
                  padding: "10px",
                  borderRadius: "6px",
                  boxShadow: "0 2px 10px rgba(0,0,0,0.15)",
                }}
              ></div>
            )}
            <Link href="/stall-enquiry">
              <Button
                size="sm"
                className="ml-2"
                data-testid="button-book-stall-nav"
              >
                Raise Enquiry
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="xl:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            data-testid="button-menu-toggle"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="xl:hidden bg-white border-t border">
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-2 rounded-md hover-elevate ${
                  location === item.path ? "bg-accent" : ""
                }`}
                data-testid={`link-mobile-${item.name.toLowerCase()}`}
              >
                {item.name}
              </Link>
            ))}

            <Link
            className="block px-4 py-2 rounded-md hover-elevate"
            href="/files/IHF2025.pdf" target="_blank" rel="noopener noreferrer">
              Brochure
            </Link>

            {showDropdownmob && (
              <div
                id="google_translate_element"
                style={{
                  // position: "absolute",
                  // top: position.top,
                  // left: position.left,
                  zIndex: 50,
                  background: "white",
                  padding: "10px",
                  borderRadius: "6px",
                  boxShadow: "0 2px 10px rgba(0,0,0,0.15)",
                }}
              ></div>
            )}
            <Button
              ref={buttonRef}
              onClick={handleClick2}
              size="sm"
              className="ml-2"
            >
              Language
            </Button>
            
            <Link
              href="/stall-enquiry"
              onClick={() => setIsOpen(false)}
              className="block"
              data-testid="button-book-stall-mobile"
            >
              <Button className="w-full">Book Stall</Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
