"use client";

import { business } from "@/lib/business-data";
import { useNav } from "@/lib/store";
import { Phone } from "lucide-react";

export function CallStrip() {
  const { openQuoteModal } = useNav();
  return (
    <section className="bg-accent text-accent-foreground">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-4 py-8 text-center sm:flex-row sm:px-6 sm:text-left">
        <div className="flex items-center gap-4">
          <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-accent-foreground/10">
            <Phone className="h-6 w-6" />
          </span>
          <div>
            <p className="font-display text-xl font-extrabold sm:text-2xl">
              Prefer to talk? Call us now.
            </p>
            <p className="text-sm text-accent-foreground/80">
              Monday–Friday 7:30am–6pm · Saturday 8am–2pm · Emergency call-outs 7 days
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-2 sm:flex-row">
          <a
            href={business.phoneHref}
            className="inline-flex items-center justify-center gap-2 rounded-md bg-accent-foreground px-5 py-3 font-display text-lg font-extrabold text-accent shadow-lg transition hover:bg-accent-foreground/90"
          >
            <Phone className="h-5 w-5" />
            {business.phone}
          </a>
          <button
            onClick={openQuoteModal}
            className="inline-flex items-center justify-center rounded-md border-2 border-accent-foreground/30 px-5 py-3 text-sm font-semibold transition hover:bg-accent-foreground/10"
          >
            Or request a callback
          </button>
        </div>
      </div>
    </section>
  );
}
