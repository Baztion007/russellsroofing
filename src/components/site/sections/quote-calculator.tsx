"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { serviceCategories } from "@/lib/business-data";
import { useNav } from "@/lib/store";
import { SiteIcon } from "@/components/site/icon";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Calculator, ChevronRight, Info, PoundSterling } from "lucide-react";

type PropertyType = "terrace" | "semi" | "detached" | "flat" | "commercial";
type Condition = "good" | "average" | "poor";

const propertyMultipliers: Record<PropertyType, { label: string; mult: number; baseM2: number }> = {
  terrace: { label: "Terraced house", mult: 0.8, baseM2: 70 },
  semi: { label: "Semi-detached", mult: 1.0, baseM2: 100 },
  detached: { label: "Detached house", mult: 1.3, baseM2: 140 },
  flat: { label: "Flat / extension", mult: 0.7, baseM2: 40 },
  commercial: { label: "Commercial", mult: 1.6, baseM2: 200 },
};

const conditionMultiplier: Record<Condition, { label: string; mult: number }> = {
  good: { label: "Good — minor work", mult: 0.9 },
  average: { label: "Average — some prep", mult: 1.0 },
  poor: { label: "Poor — full strip", mult: 1.25 },
};

export function QuoteCalculator() {
  const { openQuoteModal } = useNav();
  const [serviceId, setServiceId] = useState(serviceCategories[0].id);
  const [property, setProperty] = useState<PropertyType>("semi");
  const [condition, setCondition] = useState<Condition>("average");
  const [size, setSize] = useState(100);

  const service = serviceCategories.find((s) => s.id === serviceId)!;

  const estimate = useMemo(() => {
    const base = service.startingFrom;
    const sizeFactor = size / 100;
    const pMult = propertyMultipliers[property].mult;
    const cMult = conditionMultiplier[condition].mult;
    const raw = base * sizeFactor * pMult * cMult;
    // round to nearest 50
    return Math.max(base, Math.round(raw / 50) * 50);
  }, [service, size, property, condition]);

  const rangeLow = estimate;
  const rangeHigh = Math.round((estimate * 1.3) / 50) * 50;

  return (
    <section id="quote-calculator" className="relative overflow-hidden bg-primary py-20 text-primary-foreground sm:py-24">
      <div className="absolute inset-0 bg-grid-slate opacity-30" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Copy */}
          <div className="lg:col-span-5">
            <p className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
              <Calculator className="h-3.5 w-3.5" /> Instant estimate
            </p>
            <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
              Instant roofing cost calculator
            </h2>
            <p className="mt-4 text-base text-primary-foreground/80 sm:text-lg">
              Get a ballpark figure in 30 seconds. This is an estimate, not a quote — every roof is different,
              so the next step is a free site survey for a fixed-price written quote.
            </p>

            <div className="mt-6 space-y-3 rounded-2xl border border-primary-foreground/15 bg-primary-foreground/[0.06] p-5 backdrop-blur">
              <div className="flex items-start gap-3">
                <Info className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <p className="text-sm text-primary-foreground/80">
                  Estimates cover labour and materials. Asbestos removal, scaffolding beyond two storeys, and
                  listed-building consent work are quoted separately.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <PoundSterling className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <p className="text-sm text-primary-foreground/80">
                  No payment until you've approved a written quote. No hidden call-out fees.
                </p>
              </div>
            </div>
          </div>

          {/* Calculator */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-primary-foreground/15 bg-primary-foreground/[0.06] p-6 backdrop-blur-xl sm:p-8">
              {/* Service selector */}
              <label className="text-xs font-semibold uppercase tracking-wider text-primary-foreground/60">
                1 · What do you need?
              </label>
              <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3">
                {serviceCategories.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => setServiceId(c.id)}
                    className={`flex flex-col items-start gap-1.5 rounded-lg border p-3 text-left transition ${
                      serviceId === c.id
                        ? "border-accent bg-accent/15 text-primary-foreground"
                        : "border-primary-foreground/15 bg-primary-foreground/5 text-primary-foreground/80 hover:bg-primary-foreground/10"
                    }`}
                  >
                    <SiteIcon name={c.icon} className="h-4 w-4" />
                    <span className="text-xs font-semibold leading-tight">{c.title}</span>
                  </button>
                ))}
              </div>

              {/* Property type */}
              <label className="mt-6 block text-xs font-semibold uppercase tracking-wider text-primary-foreground/60">
                2 · Property type
              </label>
              <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-5">
                {(Object.keys(propertyMultipliers) as PropertyType[]).map((k) => (
                  <button
                    key={k}
                    onClick={() => setProperty(k)}
                    className={`rounded-lg border px-2 py-2.5 text-xs font-medium transition ${
                      property === k
                        ? "border-accent bg-accent/15 text-primary-foreground"
                        : "border-primary-foreground/15 bg-primary-foreground/5 text-primary-foreground/80 hover:bg-primary-foreground/10"
                    }`}
                  >
                    {propertyMultipliers[k].label}
                  </button>
                ))}
              </div>

              {/* Size slider */}
              <div className="mt-6 flex items-center justify-between">
                <label className="text-xs font-semibold uppercase tracking-wider text-primary-foreground/60">
                  3 · Roof size (m²)
                </label>
                <span className="font-display text-sm font-bold text-accent">{size} m²</span>
              </div>
              <Slider
                value={[size]}
                onValueChange={(v) => setSize(v[0])}
                min={20}
                max={300}
                step={5}
                className="mt-3 [&_[role=slider]]:bg-accent [&_[role=slider]]:border-accent [&_span]:bg-primary-foreground/20"
              />
              <div className="mt-1 flex justify-between text-xs text-primary-foreground/50">
                <span>20 m²</span>
                <span>300 m²</span>
              </div>

              {/* Condition */}
              <label className="mt-6 block text-xs font-semibold uppercase tracking-wider text-primary-foreground/60">
                4 · Existing roof condition
              </label>
              <div className="mt-3 grid grid-cols-3 gap-2">
                {(Object.keys(conditionMultiplier) as Condition[]).map((k) => (
                  <button
                    key={k}
                    onClick={() => setCondition(k)}
                    className={`rounded-lg border px-2 py-2.5 text-xs font-medium transition ${
                      condition === k
                        ? "border-accent bg-accent/15 text-primary-foreground"
                        : "border-primary-foreground/15 bg-primary-foreground/5 text-primary-foreground/80 hover:bg-primary-foreground/10"
                    }`}
                  >
                    {conditionMultiplier[k].label}
                  </button>
                ))}
              </div>

              {/* Result */}
              <motion.div
                key={estimate}
                initial={{ opacity: 0.6, scale: 0.99 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.25 }}
                className="mt-6 flex flex-col items-center justify-between gap-4 rounded-xl border border-accent/30 bg-accent/10 p-5 sm:flex-row"
              >
                <div>
                  <p className="text-xs uppercase tracking-wider text-primary-foreground/60">
                    Estimated range
                  </p>
                  <p className="font-display text-3xl font-extrabold text-primary-foreground sm:text-4xl">
                    £{rangeLow.toLocaleString()}
                    <span className="text-primary-foreground/50"> – </span>£{rangeHigh.toLocaleString()}
                  </p>
                  <p className="mt-1 text-xs text-primary-foreground/60">
                    Ballpark only · subject to free site survey
                  </p>
                </div>
                <Button
                  onClick={() =>
                    openQuoteModal({
                      serviceType: service.title,
                      estimate,
                      urgency: "standard",
                    })
                  }
                  className="gap-2 bg-accent text-accent-foreground shadow-orange-glow hover:bg-accent/90"
                  size="lg"
                >
                  Get fixed-price quote
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
