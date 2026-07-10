"use client";

import { Hero } from "@/components/site/sections/hero";
import { EmergencyStrip } from "@/components/site/sections/emergency-strip";
import { ServicesGrid } from "@/components/site/sections/services-grid";
import { WhyChooseUs } from "@/components/site/sections/why-choose-us";
import { Reviews } from "@/components/site/sections/reviews";
import { QuoteCalculator } from "@/components/site/sections/quote-calculator";
import { CallStrip } from "@/components/site/sections/call-strip";
import { ServiceAreaPreview } from "@/components/site/sections/service-area-preview";

export function HomeView() {
  return (
    <>
      <Hero />
      <EmergencyStrip />
      <ServicesGrid />
      <WhyChooseUs />
      <Reviews />
      <QuoteCalculator />
      <ServiceAreaPreview />
      <CallStrip />
    </>
  );
}
