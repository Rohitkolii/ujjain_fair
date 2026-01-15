import Navigation from "@/Components/Navigation";
import "./globals.css";
import Footer from "@/Components/Footer";
import { LanguageProvider } from "../Context/LanguageContext"

const desc = "The International Herbal Fair 2026 showcases herbal products, forest produce, medicinal plants, and green enterprises under one roof. With the theme “Prosperous Forest – Happy People,” the fair highlights how forests support communities and drive India’s green economy through sustainable, eco-friendly entrepreneurship."

export const metadata = {
  title: "Herbal Fair 2026",
  description: desc,
  icons: {
    icon: "/images/logo.jpeg",
    shortcut: "/images/logo.jpeg",
  },
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/logo.jpeg" />
        <meta name="theme-color" content="#0ea5a4" />
      </head>
      <body>
        <Navigation />
          <LanguageProvider>{children}</LanguageProvider>
        <Footer />
      </body>
    </html>
  );
}
