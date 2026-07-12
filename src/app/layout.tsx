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
    default: "Russells Roofing Services Ltd | Bexley & SE London Roofers — 30+ Years",
    template: "%s | Russells Roofing Services Ltd",
  },
  description:
    "Family-owned roofers in Bexley, Kent serving South East London for over 30 years. Roof replacements, repairs, flat roofing, chimney work & UKATA-trained asbestos roof work. 9.55/10 on Checkatrade (462 reviews). Free quotes, no deposits.",
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
    title: "Bexley & SE London's Trusted Roofers — Over 30 Years of Honest Roofing",
    description:
      "Free, no-obligation quotes. Fully insured. UKATA-trained asbestos roof work. No deposits. Rated 9.55/10 on Checkatrade from 462 reviews.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Russells Roofing Services Ltd — Bexley & SE London",
    description:
      "Over 30 years of honest, insurance-backed roofing. Rated 9.55/10 on Checkatrade (462 reviews). Free quotes, no deposits.",
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
    "Family-owned roofing contractor with over 30 years of experience serving Bexley, South East London and Kent. Fully insured, insurance-backed guarantee, UKATA-trained for asbestos roof work. No deposits taken.",
  url: SITE_URL,
  telephone: "+441322681808",
  email: "info@russellsroofing.uk",
  image: `${SITE_URL}/og-image.jpg`,
  // priceRange omitted — no published pricing. Free quotes.
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
  // [CONFIRM] Office hours not published — only 24-hour emergency call-out confirmed on Checkatrade.
  // openingHoursSpecification intentionally omitted until client confirms exact hours.
  foundingLocation: {
    "@type": "Place",
    name: "8 The Old Mill, Bexley High Street",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "9.55",
    bestRating: "10",
    ratingCount: "462",
    url: "https://www.checkatrade.com/trades/russellsroofingserviceltd",
  },
  hasCredential: [
    "Checkatrade Verified (member since January 2013)",
    "TrustMark Registered (reg. 3168056)",
    "United Kingdom Asbestos Training Association (UKATA)",
  ],
  sameAs: [
    "https://www.checkatrade.com/trades/russellsroofingserviceltd",
    "https://www.trustmark.org.uk/firms/RUSSELLS%20ROOFING%20SERVICE%20LTD-3168056-DA5%201JX",
  ],
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
