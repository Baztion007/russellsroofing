"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Cookie, X } from "lucide-react";
import { useNav } from "@/lib/store";

const STORAGE_KEY = "rr-cookie-consent-v1";

type Consent = {
  necessary: true;
  analytics: boolean;
  functional: boolean;
  ts: number;
};

export function CookieBanner() {
  // Lazy init from localStorage (guarded for SSR). Only `open` affects render,
  // and open starts false on both server and client so there's no hydration mismatch.
  const [consent, setConsent] = useState<Consent | null>(() => {
    if (typeof window === "undefined") return null;
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? (JSON.parse(raw) as Consent) : null;
    } catch {
      return null;
    }
  });
  const [open, setOpen] = useState(false);
  const [showPrefs, setShowPrefs] = useState(false);
  const setView = useNav((s) => s.setView);
  // Hide the banner whenever a modal is open (cleaner UX).
  const modalOpen = useNav((s) => s.quoteModalOpen || s.callbackModalOpen);

  useEffect(() => {
    // Only auto-open the banner if no prior consent is stored.
    if (consent) return;
    const t = setTimeout(() => setOpen(true), 900);
    return () => clearTimeout(t);
  }, [consent]);

  const save = (c: Omit<Consent, "necessary" | "ts">) => {
    const full: Consent = { necessary: true, ...c, ts: Date.now() };
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(full));
    } catch {
      /* ignore */
    }
    setConsent(full);
    setOpen(false);
  };

  if (!open || modalOpen) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      aria-live="polite"
      className="fixed inset-x-3 bottom-3 z-40 mx-auto max-w-2xl rounded-xl border border-border bg-card p-5 shadow-2xl sm:p-6"
    >
      <div className="flex items-start gap-4">
        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-accent/10 text-accent">
          <Cookie className="h-5 w-5" />
        </span>
        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-2">
            <h2 className="font-display text-base font-semibold">We use cookies</h2>
            <button
              onClick={() => setOpen(false)}
              className="rounded p-1 text-muted-foreground hover:text-foreground"
              aria-label="Dismiss"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          <p className="mt-1 text-sm text-muted-foreground">
            We use necessary cookies to run the site and, with your permission, analytics cookies to understand
            how visitors use it so we can improve. Read our{" "}
            <button
              onClick={() => {
                setView("privacy");
                setOpen(false);
              }}
              className="font-medium text-accent underline-offset-2 hover:underline"
            >
              Privacy Policy
            </button>
            .
          </p>

          {showPrefs && (
            <div className="mt-4 space-y-3 rounded-lg border border-border bg-muted/40 p-4">
              <PrefRow
                title="Necessary"
                desc="Required for the site to function (forms, security)."
                checked
                disabled
              />
              <PrefRow
                title="Functional"
                desc="Remember your quote details and preferences."
                defaultChecked
                id="functional"
              />
              <PrefRow
                title="Analytics"
                desc="Anonymous traffic stats via GA4 to help us improve."
                id="analytics"
              />
            </div>
          )}

          <div className="mt-4 flex flex-wrap gap-2">
            {!showPrefs && (
              <>
                <Button
                  size="sm"
                  onClick={() => save({ analytics: true, functional: true })}
                  className="bg-accent text-accent-foreground hover:bg-accent/90"
                >
                  Accept all
                </Button>
                <Button size="sm" variant="outline" onClick={() => save({ analytics: false, functional: false })}>
                  Necessary only
                </Button>
                <Button size="sm" variant="ghost" onClick={() => setShowPrefs(true)}>
                  Preferences
                </Button>
              </>
            )}
            {showPrefs && (
              <>
                <Button
                  size="sm"
                  onClick={() =>
                    save({
                      analytics: !!document.querySelector<HTMLInputElement>("#analytics")?.checked,
                      functional: !!document.querySelector<HTMLInputElement>("#functional")?.checked,
                    })
                  }
                  className="bg-accent text-accent-foreground hover:bg-accent/90"
                >
                  Save preferences
                </Button>
                <Button size="sm" variant="ghost" onClick={() => setShowPrefs(false)}>
                  Back
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function PrefRow({
  title,
  desc,
  id,
  checked,
  defaultChecked,
  disabled,
}: {
  title: string;
  desc: string;
  id?: string;
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
}) {
  return (
    <label htmlFor={id} className="flex items-start gap-3">
      <input
        id={id}
        type="checkbox"
        checked={checked}
        defaultChecked={defaultChecked}
        disabled={disabled}
        className="mt-1 h-4 w-4 rounded border-border accent-accent"
      />
      <span>
        <span className="block text-sm font-medium">{title}</span>
        <span className="block text-xs text-muted-foreground">{desc}</span>
      </span>
    </label>
  );
}
