"use client";

import { Logo } from "./logo";
import { business, serviceAreas, serviceCategories } from "@/lib/business-data";
import { useNav, type ViewId } from "@/lib/store";
import { Phone, Mail, MapPin, Clock, Star, ShieldCheck, BadgeCheck } from "lucide-react";

const legalLinks: { label: string; view: ViewId }[] = [
  { label: "Privacy Policy", view: "privacy" },
  { label: "Terms of Business", view: "terms" },
  { label: "Accessibility Statement", view: "accessibility" },
];

export function Footer() {
  const { setView, goArea, openQuoteModal } = useNav();

  return (
    <footer className="mt-auto bg-primary text-primary-foreground">
      {/* CTA band */}
      <div className="border-b border-primary-foreground/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 text-center sm:flex-row sm:text-left">
          <div>
            <p className="font-display text-2xl font-bold">Ready for a free, no-obligation quote?</p>
            <p className="mt-1 text-sm text-primary-foreground/70">
              Honest advice from a 30-year Bexley roofing family. No pushy sales, ever.
            </p>
          </div>
          <div className="flex flex-col gap-2 sm:flex-row">
            <button
              onClick={() => openQuoteModal()}
              className="rounded-md bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground shadow-orange-glow transition hover:bg-accent/90"
            >
              Get My Free Quote
            </button>
            <a
              href={business.phoneHref}
              className="flex items-center justify-center gap-2 rounded-md border border-primary-foreground/25 px-5 py-3 text-sm font-semibold transition hover:bg-primary-foreground/10"
            >
              <Phone className="h-4 w-4" />
              {business.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-4">
          <div className="[&_*]:!text-primary-foreground">
            <Logo />
          </div>
          <p className="text-sm leading-relaxed text-primary-foreground/70">
            {business.legalName} — {business.structure.toLowerCase()}, serving Bexley, South East London
            and Kent for {business.yearsTrading} years. Fully insured, UKATA-trained for asbestos roof work,
            insurance-backed guarantee, no deposits.
          </p>
          <div className="flex flex-wrap gap-2">
            <Badge className="gap-1 border-primary-foreground/20 bg-primary-foreground/5 text-primary-foreground/90">
              <ShieldCheck className="h-3.5 w-3.5 text-accent" /> TrustMark
            </Badge>
            <Badge className="gap-1 border-primary-foreground/20 bg-primary-foreground/5 text-primary-foreground/90">
              <BadgeCheck className="h-3.5 w-3.5 text-accent" /> Checkatrade
            </Badge>
            <Badge className="gap-1 border-primary-foreground/20 bg-primary-foreground/5 text-primary-foreground/90">
              <Star className="h-3.5 w-3.5 fill-accent text-accent" /> {business.checkatradeRating}/10
            </Badge>
          </div>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-accent">
            Our Services
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            {serviceCategories.map((c) => (
              <li key={c.id}>
                <button
                  onClick={() => setView("services")}
                  className="text-primary-foreground/70 transition hover:text-accent"
                >
                  {c.title}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-accent">
            Service Areas
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            {serviceAreas.slice(0, 8).map((a) => (
              <li key={a.slug}>
                <button
                  onClick={() => goArea(a.slug)}
                  className="text-primary-foreground/70 transition hover:text-accent"
                >
                  Roofer in {a.name} ({a.postcode})
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-accent">
            Contact & Hours
          </h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <span className="text-primary-foreground/70">{business.address.full}</span>
            </li>
            <li>
              <a
                href={business.phoneHref}
                className="flex items-center gap-3 font-semibold text-primary-foreground transition hover:text-accent"
              >
                <Phone className="h-4 w-4 shrink-0 text-accent" />
                {business.phone}
              </a>
            </li>
            <li>
              <a
                href={business.mobileHref}
                className="flex items-center gap-3 text-primary-foreground/70 transition hover:text-accent"
              >
                <Phone className="h-4 w-4 shrink-0 text-accent" />
                {business.mobile} <span className="text-primary-foreground/40">(mobile)</span>
              </a>
            </li>
            <li>
              <a
                href={business.emailHref}
                className="flex items-center gap-3 text-primary-foreground/70 transition hover:text-accent"
              >
                <Mail className="h-4 w-4 shrink-0 text-accent" />
                {business.email}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <span className="text-primary-foreground/70">
                24-hour emergency call-out · Call us for office hours
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-5 text-xs text-primary-foreground/60 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {business.legalName}. Registered in England & Wales · Company No {business.companyNumber} · VAT {business.vatNumber}. All rights reserved.
          </p>
          <nav className="flex flex-wrap items-center justify-center gap-4">
            {legalLinks.map((l) => (
              <button
                key={l.view}
                onClick={() => setView(l.view)}
                className="transition hover:text-accent"
              >
                {l.label}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}

function Badge({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium ${className ?? ""}`}
    >
      {children}
    </span>
  );
}
