"use client";

import { motion } from "framer-motion";
import { accreditations, business } from "@/lib/business-data";
import { useNav } from "@/lib/store";
import { SiteIcon } from "@/components/site/icon";
import { Button } from "@/components/ui/button";
import { ChevronRight, Quote } from "lucide-react";

export function WhyChooseUs() {
  const { setView, openQuoteModal } = useNav();
  return (
    <section className="relative overflow-hidden bg-secondary py-20 sm:py-24">
      <div className="absolute inset-0 bg-grid-slate opacity-30" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-accent">
              Why Russells
            </p>
            <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
              The roofer Bexley has trusted for {business.yearsTrading} years
            </h2>
            <p className="mt-4 text-base text-muted-foreground sm:text-lg">
              We're not a franchise, a call centre, or a lead-generation site. We're a family roofing business
              that's been on Bexley High Street for over 25 years — and our reputation is the thing we protect
              most.
            </p>

            <div className="mt-6 rounded-2xl border border-border bg-card p-6 shadow-brand">
              <Quote className="h-6 w-6 text-accent" />
              <p className="mt-3 font-display text-lg font-medium leading-snug">
                "Adam, Jimmy and team were friendly, professional and polite and explained everything that
                needed to be done, and cleared and cleaned all areas of work. We would happily recommend this
                company."
              </p>
              <p className="mt-3 text-sm text-muted-foreground">
                — Verified reviewer, Sidcup DA14 · via Checkatrade · 10/10
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <Button
                onClick={() => openQuoteModal()}
                className="gap-2 bg-accent text-accent-foreground shadow-orange-glow hover:bg-accent/90"
              >
                Get my free quote <ChevronRight className="h-4 w-4" />
              </Button>
              <Button variant="outline" onClick={() => setView("about")}>
                Our story
              </Button>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="grid gap-4 sm:grid-cols-2">
              {accreditations.map((a, i) => (
                <motion.div
                  key={a.name}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="group flex gap-4 rounded-xl border border-border bg-card p-5 shadow-brand transition hover:border-accent/40"
                >
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-accent/10 text-accent transition group-hover:bg-accent group-hover:text-accent-foreground">
                    <SiteIcon name={a.icon} className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <h3 className="font-display text-base font-bold leading-tight">{a.name}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{a.detail}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Stats band */}
            <div className="mt-6 grid grid-cols-2 gap-4 rounded-2xl bg-primary p-6 text-primary-foreground sm:grid-cols-4">
              <Stat value={`${business.checkatradeRatingDisplay}/10`} label="Checkatrade rating" />
              <Stat value={`${business.checkatradeReviews}`} label="Verified reviews" />
              <Stat value={`${business.yearsTrading}`} label="Years trading" />
              <Stat value="6" label="Core service areas" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center sm:text-left">
      <p className="font-display text-2xl font-extrabold text-accent sm:text-3xl">{value}</p>
      <p className="mt-1 text-xs text-primary-foreground/70">{label}</p>
    </div>
  );
}
