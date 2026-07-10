"use client";

import { motion } from "framer-motion";
import { faqs, business } from "@/lib/business-data";
import { useNav } from "@/lib/store";
import { PageHeader } from "@/components/site/page-header";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { HelpCircle, Phone, ChevronRight } from "lucide-react";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export function FaqView() {
  const { openQuoteModal, setView } = useNav();
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <PageHeader
        eyebrow="FAQ"
        title="Straight answers to common roofing questions"
        subtitle="Real questions from Bexley and SE London homeowners — answered honestly. If yours isn't here, just give us a call or send a quick message."
      />

      <section className="bg-background py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((f, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  className="overflow-hidden rounded-xl border border-border bg-card px-5 shadow-brand data-[state=open]:border-accent/40"
                >
                  <AccordionTrigger className="text-left font-display text-base font-semibold hover:no-underline">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>

          {/* Still have questions */}
          <div className="mt-12 rounded-2xl border border-border bg-secondary p-8 text-center shadow-brand sm:p-10">
            <span className="mx-auto grid h-12 w-12 place-items-center rounded-xl bg-accent/10 text-accent">
              <HelpCircle className="h-6 w-6" />
            </span>
            <h2 className="mt-4 font-display text-2xl font-extrabold tracking-tight sm:text-3xl">
              Still got a question?
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-muted-foreground">
              We're happy to talk it through — no obligation, no pushy sales. Call us or send a message and
              we'll give you a straight answer.
            </p>
            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a href={business.phoneHref}>
                <Button className="gap-2 bg-accent text-accent-foreground shadow-orange-glow hover:bg-accent/90">
                  <Phone className="h-4 w-4" /> {business.phone}
                </Button>
              </a>
              <Button
                onClick={() => openQuoteModal()}
                variant="outline"
                className="gap-2"
              >
                Get a free quote <ChevronRight className="h-4 w-4" />
              </Button>
              <Button variant="ghost" onClick={() => setView("contact")}>
                Contact us
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
