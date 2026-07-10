"use client";

import { motion } from "framer-motion";
import { business } from "@/lib/business-data";
import { useNav } from "@/lib/store";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Phone, ChevronRight, Home, Star } from "lucide-react";

export function ThankYouView() {
  const { setView, openQuoteModal } = useNav();
  return (
    <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden bg-primary py-20 text-primary-foreground">
      <div className="absolute inset-0 bg-grid-slate opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-b from-primary/0 via-primary/0 to-primary" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative mx-auto max-w-2xl px-6 text-center"
      >
        <motion.span
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1, type: "spring" }}
          className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-accent text-accent-foreground shadow-orange-glow"
        >
          <CheckCircle2 className="h-10 w-10" />
        </motion.span>

        <h1 className="mt-6 font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
          Thank you — request received
        </h1>
        <p className="mt-4 text-base text-primary-foreground/80 sm:text-lg">
          We've got your details. One of the team will be in touch within one working day to book your free
          site survey or answer your question. For anything urgent in the meantime, call us directly.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a href={business.phoneHref}>
            <Button className="gap-2 bg-accent text-accent-foreground shadow-orange-glow hover:bg-accent/90">
              <Phone className="h-4 w-4" /> Call {business.phone}
            </Button>
          </a>
          <Button
            onClick={() => setView("home")}
            variant="outline"
            className="gap-2 border-primary-foreground/25 bg-primary-foreground/5 text-primary-foreground hover:bg-primary-foreground/15"
          >
            <Home className="h-4 w-4" /> Back to home
          </Button>
        </div>

        {/* What happens next */}
        <div className="mt-12 rounded-2xl border border-primary-foreground/15 bg-primary-foreground/[0.06] p-6 text-left backdrop-blur sm:p-8">
          <h2 className="font-display text-lg font-bold">What happens next</h2>
          <ol className="mt-4 space-y-4">
            {[
              {
                step: "1",
                title: "We review your enquiry",
                desc: "A real human (not a bot) reads your details and matches you to the right roofer for the job.",
              },
              {
                step: "2",
                title: "We call to book a survey",
                desc: "Usually within one working day. We'll find a time that suits you — including Saturdays.",
              },
              {
                step: "3",
                title: "Free site survey & fixed quote",
                desc: "We diagnose the actual issue, photograph it, and email you a fixed-price written quote.",
              },
              {
                step: "4",
                title: "You decide — no pressure",
                desc: "Take the quote, shop around, or sleep on it. We never push. Most of our work comes from word of mouth.",
              },
            ].map((s) => (
              <li key={s.step} className="flex gap-4">
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-accent font-display text-sm font-bold text-accent-foreground">
                  {s.step}
                </span>
                <div>
                  <p className="font-semibold">{s.title}</p>
                  <p className="text-sm text-primary-foreground/70">{s.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        {/* Review ask */}
        <div className="mt-8 flex flex-col items-center gap-3 rounded-xl border border-primary-foreground/15 bg-primary-foreground/[0.04] p-5 sm:flex-row sm:text-left">
          <Star className="h-6 w-6 fill-accent text-accent" />
          <p className="text-sm text-primary-foreground/80">
            Already a customer? A quick Checkatrade or Google review helps other Bexley homeowners find us.
          </p>
          <a
            href="https://www.checkatrade.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0"
          >
            <Button variant="outline" className="gap-2 border-primary-foreground/25 bg-primary-foreground/5 text-primary-foreground hover:bg-primary-foreground/15">
              Leave a review <ChevronRight className="h-4 w-4" />
            </Button>
          </a>
        </div>

        <p className="mt-8 text-xs text-primary-foreground/50">
          Reference: {business.legalName} · {business.address.full}
        </p>
      </motion.div>
    </section>
  );
}
