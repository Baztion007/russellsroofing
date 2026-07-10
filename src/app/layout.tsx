import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as SonnerToaster } from "@/components/ui/sonner";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const SITE_URL = "https://www.russellsroofing.uk";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Russells Roofing Services Ltd | Bexley & SE London Roofers — 30 Years",
    template: "%s | Russells Roofing Services Ltd",
  },
  description:
    "Family-run roofers in Bexley, Kent serving South East London for 30+ years. Roof replacements, repairs, flat roofing, chimney work & licensed asbestos removal. Rated 9.87/10 on Checkatrade. Free quotes.",
  keywords: [
    "roofer Bexley",
    "roofing Bexley",
    "roofers South East London",
    "roof repairs Kent",
    "flat roofing Bexleyheath",
    "asbestos removal Kent",
    "roof replacement Sidcup",
    "chimney repairs Welling",
    "Checkatrade roofer Kent",
  ],
  authors: [{ name: "Russells Roofing Services Ltd" }],
  creator: "Russells Roofing Services Ltd",
  publisher: "Russells Roofing Services Ltd",
  alternates: { canonical: "/" },
  formatDetection: { telephone: true, address: true, email: true },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: SITE_URL,
    siteName: "Russells Roofing Services Ltd",
    title: "Bexley & SE London's Trusted Roofers — 30 Years of Honest Roofing",
    description:
      "Free, no-obligation quotes. Fully insured. Licensed asbestos removal. Rated 9.87/10 on Checkatrade from 334 reviews.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Russells Roofing Services Ltd — Bexley & SE London",
    description:
      "30 years of honest, insurance-backed roofing. Rated 9.87/10 on Checkatrade. Free quotes.",
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  category: "Home Services",
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "RoofingContractor",
  name: "Russells Roofing Services Ltd",
  legalName: "Russells Roofing Services Ltd",
  description:
    "Family-run roofing contractor with 30+ years of experience serving Bexley, South East London and Kent. Fully insured with licensed asbestos removal and Environment Agency waste carrier's licence.",
  url: SITE_URL,
  telephone: "+441322681808",
  email: "info@russellsroofing.uk",
  image: `${SITE_URL}/og-image.jpg`,
  priceRange: "££",
  address: {
    "@type": "PostalAddress",
    streetAddress: "8 The Old Mill, Bexley High Street",
    addressLocality: "Bexley",
    addressRegion: "Kent",
    postalCode: "DA5 1JX",
    addressCountry: "GB",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 51.4419,
    longitude: 0.1488,
  },
  areaServed: [
    { "@type": "City", name: "Bexley" },
    { "@type": "City", name: "Bexleyheath" },
    { "@type": "City", name: "Sidcup" },
    { "@type": "City", name: "Welling" },
    { "@type": "City", name: "Belvedere" },
    { "@type": "City", name: "Swanley" },
    { "@type": "City", name: "Orpington" },
    { "@type": "City", name: "Dartford" },
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:30",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "08:00",
      closes: "14:00",
    },
  ],
  foundingDate: "1995",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "9.87",
    bestRating: "10",
    ratingCount: "334",
  },
  hasCredential: [
    "Checkatrade Verified",
    "TrustMark Registered (reg. 3168056)",
    "Homepro",
    "Licensed Asbestos Removal",
    "Environment Agency Waste Carrier's Licence",
  ],
  sameAs: ["https://www.checkatrade.com/", "https://www.trustmark.org.uk/"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body
        className={`${inter.variable} ${montserrat.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
        <SonnerToaster position="bottom-right" richColors closeButton />
      </body>
    </html>
  );
}
