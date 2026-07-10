"use client";

import { motion } from "framer-motion";
import { serviceCategories } from "@/lib/business-data";
import { useNav } from "@/lib/store";
import { PageHeader } from "@/components/site/page-header";
import { SiteIcon } from "@/components/site/icon";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ChevronRight, Phone } from "lucide-react";
import { business } from "@/lib/business-data";

export function ServicesView() {
  const { openQuoteModal, setView } = useNav();
  return (
    <>
      <PageHeader
        eyebrow="Our services"
        title="Full-service roofing across Bexley & SE London"
        subtitle="From a single slipped tile to a complete re-roof — and the licensed asbestos work most local roofers can't touch. Pick a service to learn more, or jump straight to a free quote."
      >
        <div className="flex flex-wrap gap-3">
          <Button
            onClick={() => openQuoteModal()}
            className="gap-2 bg-accent text-accent-foreground shadow-orange-glow hover:bg-accent/90"
          >
            Get my free quote <ChevronRight className="h-4 w-4" />
          </Button>
          <a href={business.phoneHref}>
            <Button
              variant="outline"
              className="gap-2 border-primary-foreground/25 bg-primary-foreground/5 text-primary-foreground hover:bg-primary-foreground/15"
            >
              <Phone className="h-4 w-4" /> {business.phone}
            </Button>
          </a>
        </div>
      </PageHeader>

      <div className="bg-background py-16 sm:py-20">
        <div className="mx-auto max-w-7xl space-y-12 px-4 sm:px-6">
          {serviceCategories.map((cat, idx) => (
            <motion.article
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5 }}
              className={`grid gap-8 rounded-2xl border border-border bg-card p-6 shadow-brand sm:p-8 lg:grid-cols-12 lg:gap-10 ${
                idx % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="lg:col-span-5">
                <div className="flex items-center gap-3">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary text-primary-foreground shadow-brand">
                    <SiteIcon name={cat.icon} className="h-6 w-6" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-accent">
                      0{idx + 1} · From £{cat.startingFrom.toLocaleString()}
                    </p>
                    <h2 className="font-display text-2xl font-bold">{cat.title}</h2>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {cat.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {cat.highlights.map((h) => (
                    <span
                      key={h}
                      className="inline-flex items-center gap-1.5 rounded-full border border-accent/30 bg-accent/5 px-3 py-1 text-xs font-medium text-accent"
                    >
                      <CheckCircle2 className="h-3 w-3" /> {h}
                    </span>
                  ))}
                </div>
                <div className="mt-6">
                  <Button
                    onClick={() => openQuoteModal({ serviceType: cat.title })}
                    className="gap-2 bg-accent text-accent-foreground shadow-orange-glow hover:bg-accent/90"
                  >
                    Get a {cat.title.toLowerCase()} quote <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="lg:col-span-7">
                <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                  What's included
                </h3>
                <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                  {cat.services.map((s) => (
                    <li
                      key={s}
                      className="flex items-start gap-2 rounded-lg border border-border bg-background p-3 text-sm"
                    >
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}

          {/* CTA */}
          <div className="rounded-2xl bg-primary p-8 text-center text-primary-foreground shadow-brand sm:p-12">
            <h2 className="font-display text-2xl font-extrabold sm:text-3xl">
              Not sure which service you need?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-primary-foreground/80">
              Book a free, no-obligation site survey. We'll diagnose the actual issue and tell you straight —
              even if that means a repair instead of a replacement.
            </p>
            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button
                onClick={() => openQuoteModal()}
                className="gap-2 bg-accent text-accent-foreground shadow-orange-glow hover:bg-accent/90"
              >
                Book free survey <ChevronRight className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                onClick={() => setView("contact")}
                className="border-primary-foreground/25 bg-primary-foreground/5 text-primary-foreground hover:bg-primary-foreground/15"
              >
                Contact us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
