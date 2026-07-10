"use client";

import { motion } from "framer-motion";
import { business, accreditations } from "@/lib/business-data";
import { useNav } from "@/lib/store";
import { PageHeader } from "@/components/site/page-header";
import { SiteIcon } from "@/components/site/icon";
import { Button } from "@/components/ui/button";
import { ChevronRight, Phone, MapPin, Clock, Award, Users, ThumbsUp, Hammer } from "lucide-react";

const milestones = [
  { year: "1995", title: "The beginning", desc: "Russells Roofing starts out as a family business on Bexley High Street." },
  { year: "2001", title: "Checkatrade member", desc: "Among the first Bexley roofers to join Checkatrade — now 25+ years on the platform." },
  { year: "2010", title: "Asbestos licensed", desc: "Adds licensed asbestos removal — a service most local roofers still can't offer." },
  { year: "2018", title: "10,000th job", desc: "Surpasses 10,000 completed roofing jobs across Bexley and SE London." },
  { year: "2026", title: "9.87/10 rated", desc: "334 verified Checkatrade reviews and counting. Still family-run, still Bexley-based." },
];

const values = [
  {
    icon: "thumbsup",
    title: "Honest first",
    desc: "If a repair will do, we say so. We've turned down more replacements than we've sold — it's why the reviews are 9.87/10.",
  },
  {
    icon: "users",
    title: "Family, not franchise",
    desc: "The same family running it since day one. You speak to people who care about the name on the van.",
  },
  {
    icon: "hammer",
    title: "Proper workmanship",
    desc: "Manufacturer-spec installation, real leadwork, and tidy sites. We don't cut corners we'll have to come back to.",
  },
  {
    icon: "award",
    title: "Properly licensed",
    desc: "Asbestos removal licence, Environment Agency waste carrier, TrustMark registered, fully insured.",
  },
];

export function AboutView() {
  const { openQuoteModal, setView } = useNav();
  return (
    <>
      <PageHeader
        eyebrow="About us"
        title={`${business.yearsTrading} years of honest roofing in Bexley`}
        subtitle={`${business.legalName} is a ${business.structure.toLowerCase()} roofing contractor based at the Old Mill on Bexley High Street. We've spent three decades looking after the roofs of Bexley, South East London and North Kent — large jobs and small.`}
      />

      {/* Story + image */}
      <section className="bg-background py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative overflow-hidden rounded-2xl shadow-brand"
            >
              <img
                src="/images/about-team.jpg"
                alt="The Russells Roofing team beside their van on a Bexley street"
                className="aspect-[4/3] w-full object-cover"
                loading="lazy"
              />
              <div className="absolute bottom-4 left-4 rounded-lg bg-primary/90 px-4 py-2 text-primary-foreground backdrop-blur">
                <p className="font-display text-sm font-bold">Bexley High Street · since {business.foundingYear}</p>
              </div>
            </motion.div>

            <div>
              <p className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-accent">
                Our story
              </p>
              <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
                A local roofing family, not a call centre
              </h2>
              <div className="mt-5 space-y-4 text-base leading-relaxed text-muted-foreground">
                <p>
                  We started out in {business.foundingYear} as a one-van operation working out of Bexley. Three
                  decades on, we're still here — still family-run, still answering the phone ourselves, still
                  treating every roof like it's the one over our own heads.
                </p>
                <p>
                  What's changed is the scope. We're now one of the few roofing contractors in South East London
                  holding a full <strong className="text-foreground">asbestos removal licence</strong>, an{" "}
                  <strong className="text-foreground">Environment Agency waste carrier's licence</strong>, and a
                  25-year unbroken track record on Checkatrade at <strong className="text-foreground">{business.checkatradeRating}/10</strong>.
                </p>
                <p>
                  What hasn't changed is the approach: turn up when we say, diagnose the real problem, quote
                  honestly, and leave the site tidier than we found it. It's why most of our work comes from
                  word of mouth and repeat customers across Bexley, Bexleyheath, Sidcup, Welling and beyond.
                </p>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="rounded-xl border border-border bg-card p-4 shadow-brand">
                  <p className="font-display text-2xl font-extrabold text-accent">{business.yearsTrading}</p>
                  <p className="text-xs text-muted-foreground">Years trading</p>
                </div>
                <div className="rounded-xl border border-border bg-card p-4 shadow-brand">
                  <p className="font-display text-2xl font-extrabold text-accent">{business.checkatradeReviews}+</p>
                  <p className="text-xs text-muted-foreground">Verified reviews</p>
                </div>
                <div className="rounded-xl border border-border bg-card p-4 shadow-brand">
                  <p className="font-display text-2xl font-extrabold text-accent">9.87</p>
                  <p className="text-xs text-muted-foreground">Checkatrade rating</p>
                </div>
                <div className="rounded-xl border border-border bg-card p-4 shadow-brand">
                  <p className="font-display text-2xl font-extrabold text-accent">8</p>
                  <p className="text-xs text-muted-foreground">Postcodes covered</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-secondary py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-accent">
              Three decades, briefly
            </p>
            <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
              How we got here
            </h2>
          </div>
          <div className="relative mt-12">
            <div className="absolute left-4 top-0 hidden h-full w-px bg-border sm:block sm:left-1/2" />
            <div className="space-y-8">
              {milestones.map((m, i) => (
                <motion.div
                  key={m.year}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className={`relative flex flex-col gap-3 sm:flex-row sm:items-center ${
                    i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                  }`}
                >
                  <div className="sm:w-1/2 sm:px-8">
                    <div className="rounded-xl border border-border bg-card p-5 shadow-brand">
                      <p className="font-display text-lg font-extrabold text-accent">{m.year}</p>
                      <p className="mt-1 font-display text-base font-bold">{m.title}</p>
                      <p className="mt-1 text-sm text-muted-foreground">{m.desc}</p>
                    </div>
                  </div>
                  <div className="absolute left-4 top-5 hidden h-3 w-3 -translate-x-1/2 rounded-full border-2 border-accent bg-background sm:block sm:left-1/2" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-background py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-accent">
              What we stand for
            </p>
            <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
              The Russells way
            </h2>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="rounded-xl border border-border bg-card p-6 shadow-brand"
              >
                <span className="grid h-11 w-11 place-items-center rounded-lg bg-accent/10 text-accent">
                  <SiteIcon name={v.icon} className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-display text-base font-bold">{v.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Accreditations + CTA */}
      <section className="bg-primary py-16 text-primary-foreground sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
            <div>
              <p className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-accent">
                Credentials
              </p>
              <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
                Fully licensed, properly insured
              </h2>
              <p className="mt-4 text-primary-foreground/80">
                Don't take our word for it — these are the schemes and licences that mean a roofing contractor
                is the real deal. We carry all of them, and the certificates are available on request.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {accreditations.map((a) => (
                  <span
                    key={a.name}
                    className="inline-flex items-center gap-1.5 rounded-full border border-primary-foreground/20 bg-primary-foreground/5 px-3 py-1.5 text-xs font-medium"
                  >
                    <SiteIcon name={a.icon} className="h-3.5 w-3.5 text-accent" /> {a.name}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border border-primary-foreground/15 bg-primary-foreground/[0.06] p-6 backdrop-blur sm:p-8">
              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <div>
                    <p className="font-semibold">Visit the yard</p>
                    <p className="text-primary-foreground/70">{business.address.full}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <div>
                    <p className="font-semibold">Opening hours</p>
                    {business.openingHours.map((h) => (
                      <p key={h.day} className="text-primary-foreground/70">
                        {h.day}: {h.hours}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
              <div className="mt-6 flex flex-col gap-2 sm:flex-row">
                <Button
                  onClick={() => openQuoteModal()}
                  className="gap-2 bg-accent text-accent-foreground shadow-orange-glow hover:bg-accent/90"
                >
                  Get my free quote <ChevronRight className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  onClick={() => setView("contact")}
                  className="border-primary-foreground/25 bg-primary-foreground/5 text-primary-foreground hover:bg-primary-foreground/15"
                >
                  Contact us
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
