"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { business, serviceCategories } from "@/lib/business-data";
import { useNav } from "@/lib/store";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Loader2, Send, Phone } from "lucide-react";

const schema = z.object({
  name: z.string().min(2, "Please enter your name"),
  phone: z
    .string()
    .min(7, "Please enter a valid phone number")
    .regex(/^[0-9 +()\-]+$/, "Phone number looks invalid"),
  email: z.string().email("Please enter a valid email").optional().or(z.literal("")),
  postcode: z
    .string()
    .min(5, "Please enter your postcode")
    .max(9, "Postcode looks too long")
    .regex(/^[a-zA-Z]{1,2}[0-9]/, "Please enter a UK postcode"),
  serviceType: z.string().min(1, "Please select a service"),
  urgency: z.enum(["standard", "emergency", "flexible"]),
  message: z.string().max(2000).optional(),
});

type FormValues = z.infer<typeof schema>;

export function QuoteForm({
  prefill,
  compact = false,
  onSuccess,
  submitLabel = "Request my free quote",
}: {
  prefill?: { serviceType?: string; postcode?: string; urgency?: string } | null;
  compact?: boolean;
  onSuccess?: () => void;
  submitLabel?: string;
}) {
  const goThankYou = useNav((s) => s.goThankYou);
  const [submitting, setSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      serviceType: prefill?.serviceType ?? "",
      postcode: prefill?.postcode ?? "",
      urgency: (prefill?.urgency as FormValues["urgency"]) ?? "standard",
    },
  });

  const urgency = watch("urgency");
  const serviceType = watch("serviceType");

  const onSubmit = async (values: FormValues) => {
    setSubmitting(true);
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error("Request failed");
      toast.success("Quote request received", {
        description: "We'll be in touch within one working day.",
      });
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
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className={`grid gap-4 ${compact ? "" : "sm:grid-cols-2"}`}>
        <div className="space-y-1.5">
          <Label htmlFor="qf-name">Full name *</Label>
          <Input id="qf-name" placeholder="Jane Smith" {...register("name")} />
          {errors.name && <p className="text-xs text-destructive">{errors.name.message}</p>}
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="qf-phone">Phone *</Label>
          <Input id="qf-phone" placeholder="07700 900000" inputMode="tel" {...register("phone")} />
          {errors.phone && <p className="text-xs text-destructive">{errors.phone.message}</p>}
        </div>
      </div>

      <div className={`grid gap-4 ${compact ? "" : "sm:grid-cols-2"}`}>
        <div className="space-y-1.5">
          <Label htmlFor="qf-email">Email</Label>
          <Input id="qf-email" type="email" placeholder="jane@example.com" {...register("email")} />
          {errors.email && <p className="text-xs text-destructive">{errors.email.message}</p>}
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="qf-postcode">Postcode *</Label>
          <Input id="qf-postcode" placeholder="DA5 1JX" {...register("postcode")} />
          {errors.postcode && <p className="text-xs text-destructive">{errors.postcode.message}</p>}
        </div>
      </div>

      <div className={`grid gap-4 ${compact ? "" : "sm:grid-cols-2"}`}>
        <div className="space-y-1.5">
          <Label htmlFor="qf-service">Service needed *</Label>
          <Select
            value={serviceType}
            onValueChange={(v) => setValue("serviceType", v, { shouldValidate: true })}
          >
            <SelectTrigger id="qf-service">
              <SelectValue placeholder="Choose a service…" />
            </SelectTrigger>
            <SelectContent>
              {serviceCategories.map((c) => (
                <SelectItem key={c.id} value={c.title}>
                  {c.title}
                </SelectItem>
              ))}
              <SelectItem value="Other">Something else</SelectItem>
            </SelectContent>
          </Select>
          {errors.serviceType && (
            <p className="text-xs text-destructive">{errors.serviceType.message}</p>
          )}
        </div>
        <div className="space-y-1.5">
          <Label>How urgent?</Label>
          <div className="grid grid-cols-3 gap-1.5">
            {[
              { v: "emergency", label: "Emergency" },
              { v: "standard", label: "Standard" },
              { v: "flexible", label: "Flexible" },
            ].map((o) => (
              <button
                type="button"
                key={o.v}
                onClick={() => setValue("urgency", o.v as FormValues["urgency"])}
                className={`rounded-md border px-2 py-2 text-xs font-medium transition ${
                  urgency === o.v
                    ? "border-accent bg-accent/10 text-accent"
                    : "border-border bg-background hover:bg-muted"
                }`}
              >
                {o.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="qf-message">Tell us about the job (optional)</Label>
        <Textarea
          id="qf-message"
          rows={compact ? 3 : 4}
          placeholder="e.g. Two-bed semi, slipped tiles near the chimney, leaking into the loft…"
          {...register("message")}
        />
      </div>

      {prefill?.serviceType && (
        <div className="rounded-lg border border-accent/30 bg-accent/5 p-3 text-sm">
          <span className="text-muted-foreground">From the quick quote wizard: </span>
          <span className="font-semibold text-foreground">{prefill.serviceType}</span>
          {prefill.postcode && (
            <>
              {" · "}
              <span className="font-semibold text-foreground">{prefill.postcode.toUpperCase()}</span>
            </>
          )}
          <p className="mt-1 text-xs text-muted-foreground">
            We'll confirm the exact scope and a fixed price after your free site survey.
          </p>
        </div>
      )}

      <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
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
              <Send className="h-4 w-4" /> {submitLabel}
            </>
          )}
        </Button>
        <a href={business.phoneHref} className="sm:ml-auto">
          <Button type="button" variant="outline" className="w-full gap-2 sm:w-auto">
            <Phone className="h-4 w-4" /> Or call {business.phone}
          </Button>
        </a>
      </div>

      <p className="text-xs text-muted-foreground">
        By submitting you agree to be contacted about your enquiry. We never share your details — see our{" "}
        <button
          type="button"
          onClick={() => useNav.getState().setView("privacy")}
          className="text-accent underline-offset-2 hover:underline"
        >
          Privacy Policy
        </button>
        .
      </p>
    </form>
  );
}
