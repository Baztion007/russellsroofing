"use client";

import { useEffect } from "react";
import { useNav } from "@/lib/store";
import { Header } from "./header";
import { Footer } from "./footer";
import { CookieBanner } from "./cookie-banner";
import { QuoteModal, CallbackModal } from "./modals";
import { HomeView } from "./views/home-view";
import { ServicesView } from "./views/services-view";
import { AboutView } from "./views/about-view";
import { ContactView } from "./views/contact-view";
import { GalleryView } from "./views/gallery-view";
import { FaqView } from "./views/faq-view";
import { AreasView } from "./views/areas-view";
import { LegalView } from "./views/legal-view";
import { ThankYouView } from "./views/thank-you-view";
import { AnimatePresence, motion } from "framer-motion";

export function AppShell() {
  const view = useNav((s) => s.view);

  // Update document title for each view
  useEffect(() => {
    const titles: Record<string, string> = {
      home: "Russells Roofing Services Ltd | Bexley & SE London Roofers — 30 Years",
      services: "Roofing Services | Russells Roofing Services Ltd",
      about: "About Us | 30 Years Family Roofing in Bexley",
      contact: "Contact Russells Roofing | Bexley & SE London",
      gallery: "Roofing Gallery & Portfolio | Russells Roofing",
      faq: "Roofing FAQ | Russells Roofing Bexley",
      areas: "Service Areas | Bexley, SE London & Kent Roofers",
      privacy: "Privacy Policy | Russells Roofing Services Ltd",
      terms: "Terms of Business | Russells Roofing Services Ltd",
      accessibility: "Accessibility Statement | Russells Roofing",
      "thank-you": "Thank You | Russells Roofing Services Ltd",
    };
    if (titles[view]) document.title = titles[view];
  }, [view]);

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={view}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            {view === "home" && <HomeView />}
            {view === "services" && <ServicesView />}
            {view === "about" && <AboutView />}
            {view === "contact" && <ContactView />}
            {view === "gallery" && <GalleryView />}
            {view === "faq" && <FaqView />}
            {view === "areas" && <AreasView />}
            {view === "privacy" && <LegalView kind="privacy" />}
            {view === "terms" && <LegalView kind="terms" />}
            {view === "accessibility" && <LegalView kind="accessibility" />}
            {view === "thank-you" && <ThankYouView />}
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
      <CookieBanner />
      <QuoteModal />
      <CallbackModal />
    </div>
  );
}
