"use client";

import { useNav, type ViewId } from "@/lib/store";

export function Logo({ onClickView = "home" as ViewId }: { onClickView?: ViewId }) {
  const setView = useNav((s) => s.setView);
  return (
    <button
      onClick={() => setView(onClickView)}
      className="group flex items-center gap-2.5 focus:outline-none"
      aria-label="Russells Roofing Services Ltd — home"
    >
      <span className="relative grid h-10 w-10 place-items-center rounded-lg bg-primary text-primary-foreground shadow-brand transition-transform group-hover:-translate-y-0.5">
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
          <path d="M3 11.5 12 4l9 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M5 11v9h14v-9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M9.5 20v-4.5h5V20" stroke="oklch(0.71 0.165 50)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-display text-lg font-extrabold tracking-tight text-foreground">
          Russells<span className="text-orange-brand"> Roofing</span>
        </span>
        <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
          Services Ltd · Bexley
        </span>
      </span>
    </button>
  );
}
