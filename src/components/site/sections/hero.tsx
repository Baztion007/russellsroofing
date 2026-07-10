"use client";

import { motion } from "framer-motion";
import { business } from "@/lib/business-data";
import { useNav } from "@/lib/store";
import { Button } from "@/components/ui/button";
import { Phone, Star, ShieldCheck, Clock, ChevronRight, MapPin } from "lucide-react";

export function Hero() {
  const { openQuoteModal, setView, goArea } = useNav();

  return (
    <section className="relative isolate overflow-hidden bg-primary text-primary-foreground">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/images/hero.jpg"
          alt="Professional roofer installing slate tiles on a Kent terraced house roof at golden hour"
          className="h-full w-full object-cover opacity-40"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/85 to-primary/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-primary/30" />
        <div className="absolute inset-0 bg-grid-slate opacity-40" />
      </div>

      <div className="mx-auto max-w-7xl px-4 pb-16 pt-12 sm:px-6 sm:pb-24 sm:pt-16 lg:pt-24">
        <div className="grid items-center gap-10 lg:grid-cols-12">
          {/* Copy */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-7"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-medium text-accent backdrop-blur">
              <MapPin className="h-3.5 w-3.5" />
              Bexley · Bexleyheath · Sidcup · Welling · SE London
            </div>

            <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              Bexley & South East London's
              <span className="block text-accent">trusted roofers</span>
              <span className="mt-2 block text-2xl font-semibold text-primary-foreground/90 sm:text-3xl lg:text-4xl">
                30 years of honest, insurance-backed roofing.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base text-primary-foreground/80 sm:text-lg">
              Free, no-obligation quotes. Fully insured. Licensed asbestos removal. Rated{" "}
              <strong className="font-semibold text-accent">{business.checkatradeRating}/10</strong> on
              Checkatrade from <strong className="font-semibold text-accent">{business.checkatradeReviews}</strong>{" "}
              genuine reviews.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button
                onClick={() => openQuoteModal()}
                size="lg"
                className="gap-2 bg-accent text-accent-foreground shadow-orange-glow hover:bg-accent/90"
              >
                Get My Free Quote
                <ChevronRight className="h-4 w-4" />
              </Button>
              <a href={business.phoneHref}>
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full gap-2 border-primary-foreground/25 bg-primary-foreground/5 text-primary-foreground hover:bg-primary-foreground/15 sm:w-auto"
                >
                  <Phone className="h-4 w-4" />
                  Call {business.phone}
                </Button>
              </a>
            </div>

            {/* Trust bar */}
            <dl className="mt-10 grid max-w-xl grid-cols-3 gap-4 border-t border-primary-foreground/10 pt-6">
              <div>
                <dt className="flex items-center gap-1.5 text-xs text-primary-foreground/60">
                  <Star className="h-3.5 w-3.5 fill-accent text-accent" /> Checkatrade
                </dt>
                <dd className="mt-1 font-display text-xl font-bold text-primary-foreground">
                  {business.checkatradeRating}
                  <span className="text-sm font-normal text-primary-foreground/60">/10</span>
                </dd>
                <dd className="text-xs text-primary-foreground/50">{business.checkatradeReviews} reviews</dd>
              </div>
              <div>
                <dt className="flex items-center gap-1.5 text-xs text-primary-foreground/60">
                  <ShieldCheck className="h-3.5 w-3.5 text-accent" /> TrustMark
                </dt>
                <dd className="mt-1 font-display text-xl font-bold text-primary-foreground">Registered</dd>
                <dd className="text-xs text-primary-foreground/50">Reg. {business.trustmarkReg}</dd>
              </div>
              <div>
                <dt className="flex items-center gap-1.5 text-xs text-primary-foreground/60">
                  <Clock className="h-3.5 w-3.5 text-accent" /> Family-run
                </dt>
                <dd className="mt-1 font-display text-xl font-bold text-primary-foreground">
                  {business.yearsTrading}
                </dd>
                <dd className="text-xs text-primary-foreground/50">years trading</dd>
              </div>
            </dl>
          </motion.div>

          {/* Floating quote card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            className="lg:col-span-5"
          >
            <div className="relative mx-auto max-w-md">
              <div className="absolute -inset-2 -z-10 rounded-3xl bg-accent/20 blur-2xl" />
              <div className="rounded-2xl border border-primary-foreground/15 bg-primary-foreground/[0.07] p-6 backdrop-blur-xl">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-display text-sm font-semibold uppercase tracking-wider text-accent">
                      Quick quote
                    </p>
                    <p className="mt-1 text-lg font-semibold">Need a price fast?</p>
                  </div>
                  <span className="rounded-full bg-accent px-2.5 py-1 text-xs font-bold text-accent-foreground">
                    Free
                  </span>
                </div>
                <p className="mt-3 text-sm text-primary-foreground/70">
                  Get an instant ballpark estimate, then book a free site survey for a fixed-price quote.
                </p>
                <div className="mt-5 space-y-2">
                  <button
                    onClick={() => setView("home")}
                    className="flex w-full items-center justify-between rounded-lg border border-primary-foreground/15 bg-primary-foreground/5 px-4 py-3 text-left text-sm transition hover:bg-primary-foreground/10"
                  >
                    <span className="font-medium">Use the instant calculator</span>
                    <ChevronRight className="h-4 w-4 text-accent" />
                  </button>
                  <button
                    onClick={() => openQuoteModal()}
                    className="flex w-full items-center justify-between rounded-lg bg-accent px-4 py-3 text-left text-sm font-semibold text-accent-foreground transition hover:bg-accent/90"
                  >
                    <span>Request a free site survey</span>
                    <ChevronRight className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => goArea("bexley")}
                    className="flex w-full items-center justify-between rounded-lg border border-primary-foreground/15 bg-primary-foreground/5 px-4 py-3 text-left text-sm transition hover:bg-primary-foreground/10"
                  >
                    <span className="font-medium">See if we cover your area</span>
                    <ChevronRight className="h-4 w-4 text-accent" />
                  </button>
                </div>
                <p className="mt-4 text-center text-xs text-primary-foreground/50">
                  No obligation · Fully insured · Same-week surveys
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-primary-foreground/10" />
    </section>
  );
}
