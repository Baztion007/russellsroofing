"use client";

import { motion } from "framer-motion";
import { serviceAreas } from "@/lib/business-data";
import { useNav } from "@/lib/store";
import { MapPin, ChevronRight } from "lucide-react";

export function ServiceAreaPreview() {
  const { goArea, setView } = useNav();
  return (
    <section className="bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4">
            <p className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-accent">
              Where we work
            </p>
            <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
              Your local Bexley & SE London roofers
            </h2>
            <p className="mt-4 text-base text-muted-foreground sm:text-lg">
              Based at the Old Mill on Bexley High Street, we cover the whole of Bexley, North Kent and South
              East London. Tap your area for local info and a quote.
            </p>
            <button
              onClick={() => setView("areas")}
              className="mt-6 inline-flex items-center gap-2 rounded-md bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground shadow-orange-glow transition hover:bg-accent/90"
            >
              See all service areas
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>

          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {serviceAreas.map((a, i) => (
                <motion.button
                  key={a.slug}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.35, delay: i * 0.04 }}
                  onClick={() => goArea(a.slug)}
                  className="group flex flex-col items-start rounded-xl border border-border bg-card p-4 text-left shadow-brand transition hover:-translate-y-1 hover:border-accent/40 hover:shadow-orange-glow"
                >
                  <MapPin className="h-5 w-5 text-accent" />
                  <span className="mt-2 font-display text-base font-bold">{a.name}</span>
                  <span className="text-xs text-muted-foreground">{a.postcode}</span>
                  <span className="mt-2 inline-flex items-center gap-0.5 text-xs font-semibold text-accent">
                    View <ChevronRight className="h-3 w-3" />
                  </span>
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
