import type { Metadata, Viewport } from "next";
import { Spectral, Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

const spectral = Spectral({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-spectral",
  display: "swap",
});

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-hanken",
  display: "swap",
});

const SITE_URL = "https://rdentalcentre.in";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "R Dental Centre | Dental Clinic in Nerul, Navi Mumbai",
    template: "%s · R Dental Centre",
  },
  description:
    "R Dental Centre in Nerul (W), Navi Mumbai offers complete dental care — from teeth cleaning and fillings to smile design, implants, and laser treatments. Led by Dr. Radhika Ujjankar.",
  keywords: [
    "dental clinic nerul",
    "dentist nerul west",
    "R dental centre",
    "Dr Radhika Ujjankar",
    "cosmetic dentist navi mumbai",
    "root canal nerul",
    "teeth whitening nerul",
    "laser dentist nerul",
  ],
  authors: [{ name: "R Dental Centre" }],
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "R Dental Centre",
    title: "R Dental Centre | Dental Clinic in Nerul, Navi Mumbai",
    description:
      "Complete dental care in Nerul (W) — cosmetic, laser, restorative and family dentistry, led by Dr. Radhika Ujjankar.",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "R Dental Centre | Dental Clinic in Nerul, Navi Mumbai",
    description:
      "Complete dental care in Nerul (W), Navi Mumbai — led by Dr. Radhika Ujjankar.",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: SITE_URL },
};

export const viewport: Viewport = {
  themeColor: "#0d1b33",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  name: "R Dental Centre",
  description:
    "Full-service dental clinic in Nerul, Navi Mumbai offering cosmetic, laser, restorative and family dental care.",
  url: SITE_URL,
  telephone: "+919324874151",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Plot No. 98, Sector 16A, Ganpati Mandir Road",
    addressLocality: "Nerul (West)",
    addressRegion: "Maharashtra",
    postalCode: "400706",
    addressCountry: "IN",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "10:00",
      closes: "21:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Sunday"],
      description: "Open by appointment",
    },
  ],
  priceRange: "₹₹",
  medicalSpecialty: ["Dentistry", "Cosmetic Dentistry", "Laser Dentistry"],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "251",
  },
  founder: {
    "@type": "Person",
    name: "Dr. Radhika Ujjankar",
    jobTitle: "BDS, PGDHCM, Cosmetic & Laser Dentist",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${spectral.variable} ${hanken.variable}`}>
      <body>
        {/* Marks that JS is available, before paint, so entrance animations
            enhance an already-visible default instead of hiding content. */}
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js')",
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a href="#main-content" className="skip-link">Skip to main content</a>
        <SmoothScroll />
        <Header />
        {children}
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  );
}
