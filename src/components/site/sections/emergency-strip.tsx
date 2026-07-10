"use client";

import { motion } from "framer-motion";
import { business } from "@/lib/business-data";
import { useNav } from "@/lib/store";
import { AlertTriangle, Phone, ChevronRight } from "lucide-react";

export function EmergencyStrip() {
  const { openCallbackModal } = useNav();
  return (
    <section className="relative z-10 -mt-1 border-y border-destructive/20 bg-destructive text-destructive-foreground">
      <div className="bg-grid-slate opacity-10 absolute inset-0" />
      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-4 px-4 py-5 text-center sm:flex-row sm:px-6 sm:text-left">
        <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-destructive-foreground/15">
          <AlertTriangle className="h-6 w-6" />
        </span>
        <div className="min-w-0 flex-1">
          <p className="font-display text-base font-bold sm:text-lg">
            Leaking roof? Storm damage? Active emergency?
          </p>
          <p className="mt-0.5 text-sm text-destructive-foreground/80">
            We offer emergency call-outs across Bexley, Bexleyheath, Sidcup, Welling and the wider SE London area.
          </p>
        </div>
        <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
          <motion.button
            whileTap={{ scale: 0.97 }}
            onClick={openCallbackModal}
            className="inline-flex items-center justify-center gap-2 rounded-md bg-destructive-foreground px-4 py-2.5 text-sm font-semibold text-destructive shadow-lg transition hover:bg-destructive-foreground/90"
          >
            Request Emergency Callback
            <ChevronRight className="h-4 w-4" />
          </motion.button>
          <a href={business.phoneHref}>
            <button className="inline-flex w-full items-center justify-center gap-2 rounded-md border border-destructive-foreground/30 px-4 py-2.5 text-sm font-semibold transition hover:bg-destructive-foreground/10 sm:w-auto">
              <Phone className="h-4 w-4" />
              {business.phone}
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
