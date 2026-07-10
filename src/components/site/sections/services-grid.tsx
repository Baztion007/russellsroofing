"use client";

import { motion } from "framer-motion";
import { serviceCategories } from "@/lib/business-data";
import { useNav } from "@/lib/store";
import { SiteIcon } from "@/components/site/icon";
import { ChevronRight } from "lucide-react";

export function ServicesGrid() {
  const { setView, openQuoteModal } = useNav();
  return (
    <section id="services" className="relative bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-accent">
            What we do
          </p>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
            Full-service roofing, done properly
          </h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            Six core service areas covering everything from a single slipped tile to a full re-roof — plus
            UKATA-trained asbestos roof work most local roofers can't offer.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {serviceCategories.map((cat, i) => (
            <motion.article
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-brand transition hover:-translate-y-1 hover:border-accent/40 hover:shadow-orange-glow"
            >
              <div className="absolute right-0 top-0 h-24 w-24 -translate-y-8 translate-x-8 rounded-full bg-accent/5 transition group-hover:scale-150" />
              <div className="relative">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary text-primary-foreground shadow-brand transition group-hover:bg-accent">
                  <SiteIcon name={cat.icon} className="h-6 w-6" />
                </span>
                <h3 className="mt-4 font-display text-xl font-bold">{cat.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{cat.short}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground/90">{cat.description}</p>

                <ul className="mt-4 space-y-1.5">
                  {cat.services.slice(0, 4).map((s) => (
                    <li key={s} className="flex items-center gap-2 text-xs text-foreground/80">
                      <span className="h-1 w-1 rounded-full bg-accent" />
                      {s}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
                  <span className="text-xs font-medium text-accent">Free quote</span>
                  <div className="flex gap-2">
                    <button
                      onClick={() => openQuoteModal({ serviceType: cat.title })}
                      className="rounded-md bg-accent px-3 py-1.5 text-xs font-semibold text-accent-foreground transition hover:bg-accent/90"
                    >
                      Get quote
                    </button>
                    <button
                      onClick={() => setView("services")}
                      className="flex items-center gap-0.5 rounded-md border border-border px-3 py-1.5 text-xs font-medium text-muted-foreground transition hover:border-accent/40 hover:text-accent"
                    >
                      Details <ChevronRight className="h-3 w-3" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <button
            onClick={() => setView("services")}
            className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-5 py-2.5 text-sm font-semibold transition hover:border-accent/40 hover:text-accent"
          >
            See all services in detail
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
