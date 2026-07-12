"use client";

import { motion } from "framer-motion";
import { reviews, business } from "@/lib/business-data";
import { useNav } from "@/lib/store";
import { Star, Quote, ExternalLink, BadgeCheck } from "lucide-react";

export function Reviews() {
  const { setView } = useNav();
  return (
    <section className="bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <p className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-accent">
              Real Checkatrade reviews
            </p>
            <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
              {business.checkatradeRating}/10 from {business.checkatradeReviews} reviews on Checkatrade
            </h2>
            <p className="mt-4 text-base text-muted-foreground sm:text-lg">
              The reviews below are verbatim from our public Checkatrade profile — attributed exactly as
              Checkatrade publishes them. Click through to read all {business.checkatradeReviews} reviews in full.
            </p>
          </div>
          <a
            href={business.checkatradeProfileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-2 rounded-md border border-border bg-card px-4 py-2.5 text-sm font-semibold transition hover:border-accent/40 hover:text-accent"
          >
            See all reviews on Checkatrade
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>

        {/* Aggregate rating band */}
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
              <p className="mt-3 font-display text-2xl font-bold sm:text-3xl">
                {business.checkatradeRating}/10 average · {business.checkatradeReviews} verified reviews
              </p>
              <p className="mt-2 text-sm text-primary-foreground/70">
                Member of Checkatrade since January 2013 · Quality of work 9.8 · Reliability 9.8 ·
                Communication 10
              </p>
            </div>
            <div className="shrink-0 rounded-xl bg-primary-foreground/10 px-6 py-4 text-center backdrop-blur">
              <p className="font-display text-4xl font-extrabold text-accent">
                {business.checkatradeRating}
              </p>
              <p className="text-xs text-primary-foreground/70">/ 10 average</p>
            </div>
          </div>
        </motion.div>

        {/* Real review grid — verbatim from Checkatrade */}
        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r, i) => (
            <motion.article
              key={r.area + r.date}
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
              <Quote className="mt-3 h-5 w-5 text-accent/40" />
              <p className="mt-1 flex-1 text-sm leading-relaxed text-foreground/90">{r.quote}</p>
              <div className="mt-4 border-t border-border pt-3">
                <p className="flex items-center gap-1.5 text-sm font-semibold">
                  {r.name} <span className="font-normal text-muted-foreground">· {r.area}</span>
                </p>
                <p className="text-xs text-muted-foreground">
                  {r.service} · {r.date}
                </p>
                <p className="mt-1.5 inline-flex items-center gap-1 text-[10px] font-medium uppercase tracking-wider text-accent">
                  <BadgeCheck className="h-3 w-3" /> Verified on Checkatrade
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-xs text-muted-foreground">
            Reviews reproduced verbatim from our public{" "}
            <a
              href={business.checkatradeProfileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent underline underline-offset-2"
            >
              Checkatrade profile
            </a>
            . {business.checkatradeReviews} reviews and counting — read them all there.
          </p>
          <button
            onClick={() => setView("gallery")}
            className="mt-6 inline-flex items-center gap-2 rounded-md bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground shadow-orange-glow transition hover:bg-accent/90"
          >
            See our work in the gallery
          </button>
        </div>
      </div>
    </section>
  );
}
