"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { serviceAreas, business } from "@/lib/business-data";
import { useNav } from "@/lib/store";
import { PageHeader } from "@/components/site/page-header";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, ChevronRight, CheckCircle2, Navigation } from "lucide-react";

export function AreasView() {
  const { areaSlug, goArea, openQuoteModal } = useNav();
  const selected = serviceAreas.find((a) => a.slug === areaSlug) ?? serviceAreas[0];

  // Sync hash for shareability
  useEffect(() => {
    if (typeof window !== "undefined" && areaSlug) {
      window.history.replaceState(null, "", `#area-${areaSlug}`);
    }
  }, [areaSlug]);

  return (
    <>
      <PageHeader
        eyebrow="Service areas"
        title="Roofer in Bexley, SE London & North Kent"
        subtitle={`Based at the Old Mill on Bexley High Street (${business.address.postcode}), we cover Bexley, Bexleyheath, Sidcup, Welling, Belvedere, Swanley, Orpington and Dartford. Tap your area below for local info and a quote.`}
      />

      <section className="bg-background py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
            {/* Area selector */}
            <div className="lg:col-span-4">
              <h2 className="font-display text-lg font-bold">Pick your area</h2>
              <p className="mt-1 text-sm text-muted-foreground">
                {serviceAreas.length} postcode areas covered. Not sure if we cover you? Just call.
              </p>
              <div className="mt-5 space-y-2">
                {serviceAreas.map((a) => (
                  <button
                    key={a.slug}
                    onClick={() => goArea(a.slug)}
                    className={`flex w-full items-center justify-between rounded-lg border p-3 text-left transition ${
                      selected.slug === a.slug
                        ? "border-accent bg-accent/10 text-foreground"
                        : "border-border bg-card text-foreground hover:border-accent/40"
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <MapPin className={`h-4 w-4 ${selected.slug === a.slug ? "text-accent" : "text-muted-foreground"}`} />
                      <span className="font-semibold">{a.name}</span>
                      <span className="text-xs text-muted-foreground">{a.postcode}</span>
                    </span>
                    <ChevronRight className={`h-4 w-4 transition ${selected.slug === a.slug ? "text-accent" : "text-muted-foreground"}`} />
                  </button>
                ))}
              </div>

              <div className="mt-6 rounded-xl border border-border bg-secondary p-5">
                <p className="font-display text-sm font-bold">Not on the list?</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  We cover most DA, BR and SE postcodes. Give us a call and we'll confirm.
                </p>
                <a href={business.phoneHref}>
                  <Button variant="outline" className="mt-3 gap-2 w-full sm:w-auto">
                    <Phone className="h-4 w-4" /> {business.phone}
                  </Button>
                </a>
              </div>
            </div>

            {/* Selected area detail */}
            <div className="lg:col-span-8">
              <motion.div
                key={selected.slug}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
                className="rounded-2xl border border-border bg-card p-6 shadow-brand sm:p-8"
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                      <Navigation className="h-3.5 w-3.5" /> {selected.postcode} · {business.yearsTrading} years local
                    </div>
                    <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
                      Roofer in {selected.name}
                    </h2>
                  </div>
                  <Button
                    onClick={() => openQuoteModal()}
                    className="gap-2 bg-accent text-accent-foreground shadow-orange-glow hover:bg-accent/90"
                  >
                    Get a {selected.name} quote <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>

                <p className="mt-5 text-base leading-relaxed text-muted-foreground">{selected.blurb}</p>

                <div className="mt-6 grid gap-3 sm:grid-cols-3">
                  {selected.highlights.map((h) => (
                    <div
                      key={h}
                      className="flex items-center gap-2 rounded-lg border border-border bg-background p-3 text-sm"
                    >
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-accent" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                {/* Map */}
                <div className="mt-6 overflow-hidden rounded-xl border border-border">
                  <iframe
                    title={`Map of ${selected.name} ${selected.postcode}`}
                    src={`https://www.openstreetmap.org/export/embed.html?bbox=${encodeURIComponent(
                      selected.name + " " + selected.postcode + " UK"
                    )}&layer=mapnik`}
                    className="h-56 w-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>

                <div className="mt-6 rounded-xl bg-primary p-5 text-primary-foreground">
                  <p className="font-display text-base font-bold">
                    Need a roofer in {selected.name} today?
                  </p>
                  <p className="mt-1 text-sm text-primary-foreground/80">
                    Call {business.phone} for emergency call-outs, or request a free quote for anything else.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <a href={business.phoneHref}>
                      <Button className="gap-2 bg-accent text-accent-foreground shadow-orange-glow hover:bg-accent/90">
                        <Phone className="h-4 w-4" /> Call now
                      </Button>
                    </a>
                    <Button
                      onClick={() => openQuoteModal()}
                      variant="outline"
                      className="border-primary-foreground/25 bg-primary-foreground/5 text-primary-foreground hover:bg-primary-foreground/15"
                    >
                      Free quote
                    </Button>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
