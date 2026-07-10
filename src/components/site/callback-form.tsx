"use client";

import { useState } from "react";
import { toast } from "sonner";
import { business } from "@/lib/business-data";
import { useNav } from "@/lib/store";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Loader2, Send, Phone } from "lucide-react";

const issues = [
  "Active leak / water coming in",
  "Storm or wind damage",
  "Slipped or missing tiles",
  "Damaged flat roof",
  "Chimney / flashing problem",
  "Emergency asbestos concern",
  "Other",
];

export function CallbackForm({ onSuccess }: { onSuccess?: () => void }) {
  const goThankYou = useNav((s) => s.goThankYou);
  const closeCallbackModal = useNav((s) => s.closeCallbackModal);
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", postcode: "", issue: issues[0] });

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.postcode) {
      toast.error("Please fill in all fields");
      return;
    }
    setSubmitting(true);
    try {
      const res = await fetch("/api/callback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("failed");
      toast.success("Callback requested", {
        description: "We'll call you back as soon as a roofer is free.",
      });
      closeCallbackModal();
      onSuccess?.();
      goThankYou();
    } catch {
      toast.error("Something went wrong", {
        description: `Please call us directly on ${business.phone}.`,
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={submit} className="space-y-4">
      <div className="space-y-1.5">
        <Label htmlFor="cb-name">Full name *</Label>
        <Input
          id="cb-name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          placeholder="Jane Smith"
        />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <Label htmlFor="cb-phone">Phone *</Label>
          <Input
            id="cb-phone"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            placeholder="07700 900000"
            inputMode="tel"
          />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="cb-postcode">Postcode *</Label>
          <Input
            id="cb-postcode"
            value={form.postcode}
            onChange={(e) => setForm({ ...form, postcode: e.target.value })}
            placeholder="DA5 1JX"
          />
        </div>
      </div>
      <div className="space-y-1.5">
        <Label htmlFor="cb-issue">What's the issue?</Label>
        <Select value={form.issue} onValueChange={(v) => setForm({ ...form, issue: v })}>
          <SelectTrigger id="cb-issue">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {issues.map((i) => (
              <SelectItem key={i} value={i}>
                {i}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="flex flex-col gap-2 sm:flex-row">
        <Button
          type="submit"
          disabled={submitting}
          className="gap-2 bg-accent text-accent-foreground shadow-orange-glow hover:bg-accent/90"
        >
          {submitting ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" /> Sending…
            </>
          ) : (
            <>
              <Send className="h-4 w-4" /> Request callback
            </>
          )}
        </Button>
        <a href={business.phoneHref} className="sm:ml-auto">
          <Button type="button" variant="outline" className="w-full gap-2 sm:w-auto">
            <Phone className="h-4 w-4" /> Call {business.phone}
          </Button>
        </a>
      </div>
    </form>
  );
}
