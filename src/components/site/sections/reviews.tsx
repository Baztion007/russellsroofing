"use client";

import { motion } from "framer-motion";
import { reviews } from "@/lib/business-data";
import { useNav } from "@/lib/store";
import { Star, Quote, ExternalLink } from "lucide-react";

export function Reviews() {
  const { setView } = useNav();
  return (
    <section className="bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <p className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-accent">
              Real reviews
            </p>
            <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
              9.87/10 from 334 Checkatrade reviews
            </h2>
            <p className="mt-4 text-base text-muted-foreground sm:text-lg">
              Attributed by first name and postcode area — real reviews from real Bexley and SE London
              homeowners. We don't do fabricated testimonials.
            </p>
          </div>
          <a
            href="https://www.checkatrade.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-2 rounded-md border border-border bg-card px-4 py-2.5 text-sm font-semibold transition hover:border-accent/40 hover:text-accent"
          >
            See all 334 reviews on Checkatrade
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>

        {/* Featured review */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-10 overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-primary to-primary/90 p-8 text-primary-foreground shadow-brand sm:p-10"
        >
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="flex items-center gap-1">
                {Array.from({ length: 10 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              <Quote className="mt-4 h-7 w-7 text-accent" />
              <p className="mt-2 max-w-2xl font-display text-xl font-medium leading-snug sm:text-2xl">
                {reviews[0].quote}
              </p>
              <p className="mt-4 text-sm text-primary-foreground/70">
                {reviews[0].name} · {reviews[0].area} · {reviews[0].service} · {reviews[0].date}
              </p>
            </div>
            <div className="shrink-0 rounded-xl bg-primary-foreground/10 px-6 py-4 text-center backdrop-blur">
              <p className="font-display text-4xl font-extrabold text-accent">9.87</p>
              <p className="text-xs text-primary-foreground/70">/ 10 average</p>
            </div>
          </div>
        </motion.div>

        {/* Review grid */}
        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {reviews.slice(1).map((r, i) => (
            <motion.article
              key={r.name + r.area}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="flex flex-col rounded-xl border border-border bg-card p-6 shadow-brand"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star
                      key={idx}
                      className={`h-3.5 w-3.5 ${
                        idx < Math.round(r.rating / 2)
                          ? "fill-accent text-accent"
                          : "fill-muted text-muted"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-xs font-semibold text-accent">{r.rating}/10</span>
              </div>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-foreground/90">"{r.quote}"</p>
              <div className="mt-4 border-t border-border pt-3">
                <p className="text-sm font-semibold">
                  {r.name} <span className="font-normal text-muted-foreground">· {r.area}</span>
                </p>
                <p className="text-xs text-muted-foreground">
                  {r.service} · {r.date}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <button
            onClick={() => setView("gallery")}
            className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground shadow-orange-glow transition hover:bg-accent/90"
          >
            See our work in the gallery
          </button>
        </div>
      </div>
    </section>
  );
}
