"use client";

import { create } from "zustand";

export type ViewId =
  | "home"
  | "services"
  | "about"
  | "contact"
  | "gallery"
  | "faq"
  | "areas"
  | "privacy"
  | "terms"
  | "accessibility"
  | "thank-you";

export type QuotePrefill = {
  serviceType?: string;
  estimate?: number;
  urgency?: string;
};

type NavState = {
  view: ViewId;
  areaSlug: string | null;
  quotePrefill: QuotePrefill | null;
  quoteModalOpen: boolean;
  callbackModalOpen: boolean;
  setView: (view: ViewId) => void;
  goArea: (slug: string) => void;
  openQuoteModal: (prefill?: QuotePrefill) => void;
  closeQuoteModal: () => void;
  openCallbackModal: () => void;
  closeCallbackModal: () => void;
  goThankYou: () => void;
};

function scrollTop() {
  if (typeof window !== "undefined") {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }
}

export const useNav = create<NavState>((set) => ({
  view: "home",
  areaSlug: null,
  quotePrefill: null,
  quoteModalOpen: false,
  callbackModalOpen: false,
  setView: (view) => {
    set({ view, areaSlug: null });
    scrollTop();
  },
  goArea: (slug) => {
    set({ view: "areas", areaSlug: slug });
    scrollTop();
  },
  openQuoteModal: (prefill) => set({ quoteModalOpen: true, quotePrefill: prefill ?? null }),
  closeQuoteModal: () => set({ quoteModalOpen: false, quotePrefill: null }),
  openCallbackModal: () => set({ callbackModalOpen: true }),
  closeCallbackModal: () => set({ callbackModalOpen: false }),
  goThankYou: () => {
    set({ view: "thank-you" });
    scrollTop();
  },
}));
