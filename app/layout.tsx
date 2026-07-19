import type { Metadata } from "next";
import "./globals.css";
import { LangProvider } from "@/context/LangContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

export const metadata: Metadata = {
  title: {
    default: "Finura Agro Tech LLP — Technology for Nature",
    template: "%s | Finura Agro Tech LLP",
  },
  description:
    "Finura Agro Tech LLP is a leading agri-biotech centre in Tamil Nadu offering plant tissue culture, mushroom production, soil testing, internships, and agricultural training. TNAU-affiliated, MCA-registered.",
  keywords: [
    "plant tissue culture",
    "mushroom production",
    "soil testing",
    "agri-biotech",
    "agricultural training",
    "internship",
    "Tamil Nadu",
    "Kanyakumari",
    "TNAU",
    "Finura Agro Tech",
  ],
  authors: [{ name: "Finura Agro Tech LLP" }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://finuraagrotechllp.com",
    siteName: "Finura Agro Tech LLP",
    title: "Finura Agro Tech LLP — Technology for Nature",
    description:
      "Leading agri-biotech centre in Tamil Nadu. Tissue culture, mushroom production, training & internships.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

import ScrollProgress from "@/components/ScrollProgress";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-brand-cream font-body antialiased">
        <LangProvider>
          <ScrollProgress />
          <Navbar />
          <main>{children}</main>
          <Footer />
          <FloatingButtons />
        </LangProvider>
      </body>
    </html>
  );
}
