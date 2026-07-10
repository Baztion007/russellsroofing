"use client";

import { motion } from "framer-motion";
import { useNav, type ViewId } from "@/lib/store";
import { ChevronRight, Home } from "lucide-react";

export function PageHeader({
  eyebrow,
  title,
  subtitle,
  children,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
}) {
  const setView = useNav((s) => s.setView);
  return (
    <section className="relative overflow-hidden bg-primary text-primary-foreground">
      <div className="absolute inset-0 bg-grid-slate opacity-30" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-primary-foreground/10" />
      <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <nav className="flex items-center gap-1.5 text-xs text-primary-foreground/60">
            <button
              onClick={() => setView("home")}
              className="inline-flex items-center gap-1 transition hover:text-accent"
            >
              <Home className="h-3 w-3" /> Home
            </button>
            <ChevronRight className="h-3 w-3" />
            <span className="text-primary-foreground/90">{eyebrow ?? title}</span>
          </nav>
          {eyebrow && (
            <p className="mt-4 font-display text-sm font-semibold uppercase tracking-[0.18em] text-accent">
              {eyebrow}
            </p>
          )}
          <h1 className="mt-3 font-display text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-4 max-w-2xl text-base text-primary-foreground/80 sm:text-lg">{subtitle}</p>
          )}
          {children && <div className="mt-6">{children}</div>}
        </motion.div>
      </div>
    </section>
  );
}

export function setViewLink(view: ViewId) {
  return () => useNav.getState().setView(view);
}
