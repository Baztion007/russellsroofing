"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { serviceCategories, serviceAreas } from "@/lib/business-data";
import { useNav } from "@/lib/store";
import { SiteIcon } from "@/components/site/icon";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CheckCircle2, ChevronRight, MapPin, Calculator, ArrowLeft } from "lucide-react";

type PropertyType = "terrace" | "semi" | "detached" | "flat" | "commercial";
type Condition = "good" | "average" | "poor";

const propertyTypes: Record<PropertyType, { label: string }> = {
  terrace: { label: "Terraced house" },
  semi: { label: "Semi-detached" },
  detached: { label: "Detached house" },
  flat: { label: "Flat / extension" },
  commercial: { label: "Commercial" },
};

const conditions: Record<Condition, { label: string }> = {
  good: { label: "Good — minor work" },
  average: { label: "Average — some prep" },
  poor: { label: "Poor — full strip" },
};

// Normalise a UK postcode for comparison (uppercase, collapse spaces)
function normalisePostcode(pc: string): string {
  return pc.toUpperCase().replace(/\s+/g, "");
}

// Extract the postcode area (e.g. "DA5", "BR6", "SE9") from a full postcode
function postcodeArea(pc: string): string {
  const n = normalisePostcode(pc);
  // Match leading letters + digits (e.g. DA5, BR6, SE9, W1)
  const m = n.match(/^([A-Z]{1,2}\d[A-Z\d]?)/);
  return m ? m[1] : n;
}

// Check whether a postcode area is covered
function checkCoverage(pc: string): { covered: boolean; area?: string } {
  const area = postcodeArea(pc);
  // Match against serviceAreas postcodes (e.g. "DA5", "BR6") and broader DA/BR/SE
  const exact = serviceAreas.find((a) => a.postcode === area);
  if (exact) return { covered: true, area: exact.name };
  // Broad coverage: most DA, BR, SE postcodes
  if (/^(DA|BR|SE|TN|ME|CT)\d/.test(area)) return { covered: true };
  return { covered: false };
}

export function QuoteCalculator() {
  const { openQuoteModal } = useNav();
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [postcode, setPostcode] = useState("");
  const [postcodeTouched, setPostcodeTouched] = useState(false);
  const [serviceId, setServiceId] = useState<string | null>(null);
  const [property, setProperty] = useState<PropertyType | null>(null);
  const [condition, setCondition] = useState<Condition | null>(null);

  const coverage = useMemo(() => {
    if (!postcode) return null;
    if (postcode.length < 5) return null;
    return checkCoverage(postcode);
  }, [postcode]);

  const postcodeValid = !!coverage;
  const postcodeCovered = coverage?.covered === true;

  const canProceedStep1 = postcodeValid && postcodeCovered;
  const canProceedStep2 = !!serviceId;
  const canProceedStep3 = !!property && !!condition;

  const service = serviceCategories.find((s) => s.id === serviceId);

  const handleSubmit = () => {
    if (!service || !property || !condition) return;
    openQuoteModal({
      serviceType: service.title,
      postcode,
      urgency: "standard",
    });
  };

  const reset = () => {
    setStep(1);
    setPostcode("");
    setPostcodeTouched(false);
    setServiceId(null);
    setProperty(null);
    setCondition(null);
  };

  return (
    <section id="quote-calculator" className="relative overflow-hidden bg-primary py-20 text-primary-foreground sm:py-24">
      <div className="absolute inset-0 bg-grid-slate opacity-30" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Copy */}
          <div className="lg:col-span-5">
            <p className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
              <Calculator className="h-3.5 w-3.5" /> Quick quote wizard
            </p>
            <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
              Get your free roofing quote in 30 seconds
            </h2>
            <p className="mt-4 text-base text-primary-foreground/80 sm:text-lg">
              Tell us your postcode and a bit about the job. We'll check we cover your area, then book a free
              site survey for a fixed-price written quote.
            </p>

            <div className="mt-6 space-y-3 rounded-2xl border border-primary-foreground/15 bg-primary-foreground/[0.06] p-5 backdrop-blur">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <p className="text-sm text-primary-foreground/80">
                  <strong className="text-primary-foreground">No deposits taken.</strong> You pay on completion
                  of the agreed work.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <p className="text-sm text-primary-foreground/80">
                  <strong className="text-primary-foreground">Insurance-backed guarantee</strong> on all our
                  work — and we photograph every issue we find.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <p className="text-sm text-primary-foreground/80">
                  <strong className="text-primary-foreground">24-hour emergency call-out</strong> across Bexley,
                  SE London and North Kent.
                </p>
              </div>
            </div>
          </div>

          {/* Wizard */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-primary-foreground/15 bg-primary-foreground/[0.06] p-6 backdrop-blur-xl sm:p-8">
              {/* Step indicator */}
              <div className="mb-6 flex items-center gap-2">
                {[1, 2, 3].map((n) => (
                  <div key={n} className="flex flex-1 items-center gap-2">
                    <span
                      className={`grid h-7 w-7 shrink-0 place-items-center rounded-full text-xs font-bold transition ${
                        step >= n
                          ? "bg-accent text-accent-foreground"
                          : "bg-primary-foreground/10 text-primary-foreground/50"
                      }`}
                    >
                      {step > n ? "✓" : n}
                    </span>
                    <div
                      className={`h-0.5 flex-1 rounded transition ${
                        step > n ? "bg-accent" : "bg-primary-foreground/10"
                      }`}
                    />
                  </div>
                ))}
              </div>

              <AnimatePresence mode="wait">
                {/* STEP 1 — Postcode */}
                {step === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -12 }}
                    transition={{ duration: 0.25 }}
                  >
                    <label className="text-xs font-semibold uppercase tracking-wider text-primary-foreground/60">
                      Step 1 · Your postcode
                    </label>
                    <p className="mt-1 text-sm text-primary-foreground/80">
                      We cover Bexley, SE London and North Kent. Enter your postcode to check we cover your area.
                    </p>
                    <div className="mt-4 flex gap-2">
                      <Input
                        value={postcode}
                        onChange={(e) => {
                          setPostcode(e.target.value);
                          setPostcodeTouched(true);
                        }}
                        placeholder="e.g. DA5 1JX"
                        className="border-primary-foreground/20 bg-primary-foreground/5 text-primary-foreground placeholder:text-primary-foreground/40"
                        inputMode="text"
                        autoCapitalize="characters"
                        autoCorrect="off"
                      />
                      <Button
                        onClick={() => setStep(2)}
                        disabled={!canProceedStep1}
                        className="shrink-0 bg-accent text-accent-foreground shadow-orange-glow hover:bg-accent/90"
                      >
                        Next <ChevronRight className="h-4 w-4" />
                      </Button>
                    </div>

                    {/* Coverage feedback */}
                    {postcodeTouched && postcode.length >= 5 && (
                      <motion.div
                        initial={{ opacity: 0, y: 4 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`mt-3 flex items-center gap-2 rounded-lg px-3 py-2 text-sm ${
                          postcodeCovered
                            ? "bg-accent/15 text-accent"
                            : "bg-destructive/15 text-destructive-foreground"
                        }`}
                      >
                        {postcodeCovered ? (
                          <>
                            <CheckCircle2 className="h-4 w-4" />
                            {coverage?.area
                              ? `Great — we cover ${coverage.area} (${postcodeArea(postcode)}).`
                              : `Yes — we cover your area (${postcodeArea(postcode)}).`}
                          </>
                        ) : (
                          <>
                            <MapPin className="h-4 w-4" />
                            We may not cover {postcodeArea(postcode)} directly — call us on 01322 681808 to
                            check.
                          </>
                        )}
                      </motion.div>
                    )}
                  </motion.div>
                )}

                {/* STEP 2 — Service type */}
                {step === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -12 }}
                    transition={{ duration: 0.25 }}
                  >
                    <label className="text-xs font-semibold uppercase tracking-wider text-primary-foreground/60">
                      Step 2 · What do you need?
                    </label>
                    <p className="mt-1 text-sm text-primary-foreground/80">
                      Pick the closest match — we'll confirm the exact scope at the survey.
                    </p>
                    <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3">
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
                    <div className="mt-5 flex gap-2">
                      <Button
                        variant="outline"
                        onClick={() => setStep(1)}
                        className="border-primary-foreground/20 bg-transparent text-primary-foreground hover:bg-primary-foreground/10"
                      >
                        <ArrowLeft className="h-4 w-4" /> Back
                      </Button>
                      <Button
                        onClick={() => setStep(3)}
                        disabled={!canProceedStep2}
                        className="bg-accent text-accent-foreground shadow-orange-glow hover:bg-accent/90"
                      >
                        Next <ChevronRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </motion.div>
                )}

                {/* STEP 3 — Property + condition */}
                {step === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, x: 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -12 }}
                    transition={{ duration: 0.25 }}
                  >
                    <label className="text-xs font-semibold uppercase tracking-wider text-primary-foreground/60">
                      Step 3 · Property & condition
                    </label>
                    <p className="mt-4 block text-xs font-semibold uppercase tracking-wider text-primary-foreground/60">
                      Property type
                    </p>
                    <div className="mt-2 grid grid-cols-2 gap-2 sm:grid-cols-5">
                      {(Object.keys(propertyTypes) as PropertyType[]).map((k) => (
                        <button
                          key={k}
                          onClick={() => setProperty(k)}
                          className={`rounded-lg border px-2 py-2.5 text-xs font-medium transition ${
                            property === k
                              ? "border-accent bg-accent/15 text-primary-foreground"
                              : "border-primary-foreground/15 bg-primary-foreground/5 text-primary-foreground/80 hover:bg-primary-foreground/10"
                          }`}
                        >
                          {propertyTypes[k].label}
                        </button>
                      ))}
                    </div>

                    <p className="mt-4 block text-xs font-semibold uppercase tracking-wider text-primary-foreground/60">
                      Existing roof condition
                    </p>
                    <div className="mt-2 grid grid-cols-3 gap-2">
                      {(Object.keys(conditions) as Condition[]).map((k) => (
                        <button
                          key={k}
                          onClick={() => setCondition(k)}
                          className={`rounded-lg border px-2 py-2.5 text-xs font-medium transition ${
                            condition === k
                              ? "border-accent bg-accent/15 text-primary-foreground"
                              : "border-primary-foreground/15 bg-primary-foreground/5 text-primary-foreground/80 hover:bg-primary-foreground/10"
                          }`}
                        >
                          {conditions[k].label}
                        </button>
                      ))}
                    </div>

                    <div className="mt-5 flex gap-2">
                      <Button
                        variant="outline"
                        onClick={() => setStep(2)}
                        className="border-primary-foreground/20 bg-transparent text-primary-foreground hover:bg-primary-foreground/10"
                      >
                        <ArrowLeft className="h-4 w-4" /> Back
                      </Button>
                      <Button
                        onClick={handleSubmit}
                        disabled={!canProceedStep3}
                        className="bg-accent text-accent-foreground shadow-orange-glow hover:bg-accent/90"
                      >
                        Get my free quote <ChevronRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <p className="mt-6 text-center text-xs text-primary-foreground/50">
                Free, no-obligation · No deposits · Insurance-backed guarantee
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
