"use client";

import { useNav } from "@/lib/store";
import { QuoteForm } from "./quote-form";
import { CallbackForm } from "./callback-form";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { AlertTriangle, Calculator } from "lucide-react";

export function QuoteModal() {
  const { quoteModalOpen, quotePrefill, closeQuoteModal } = useNav();
  return (
    <Dialog open={quoteModalOpen} onOpenChange={(o) => !o && closeQuoteModal()}>
      <DialogContent className="max-h-[92vh] overflow-y-auto sm:max-w-[560px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-accent/10 text-accent">
              <Calculator className="h-4 w-4" />
            </span>
            Your free roofing quote
          </DialogTitle>
          <DialogDescription>
            Tell us a bit about the job. We'll come out, take a look, and give you an honest, fixed-price
            quote — no obligation, no pushy sales.
          </DialogDescription>
        </DialogHeader>
        <QuoteForm
          prefill={quotePrefill}
          compact
          onSuccess={closeQuoteModal}
          submitLabel="Get my free quote"
        />
      </DialogContent>
    </Dialog>
  );
}

export function CallbackModal() {
  const { callbackModalOpen, closeCallbackModal } = useNav();
  return (
    <Dialog open={callbackModalOpen} onOpenChange={(o) => !o && closeCallbackModal()}>
      <DialogContent className="sm:max-w-[480px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-destructive/10 text-destructive">
              <AlertTriangle className="h-4 w-4" />
            </span>
            Emergency callback
          </DialogTitle>
          <DialogDescription>
            Active leak or storm damage? Leave your details — we'll call you back as soon as a roofer is free,
            usually within the hour during working hours.
          </DialogDescription>
        </DialogHeader>
        <CallbackForm onSuccess={closeCallbackModal} />
      </DialogContent>
    </Dialog>
  );
}
