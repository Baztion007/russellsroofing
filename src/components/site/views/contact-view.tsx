"use client";

import { useState } from "react";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { business } from "@/lib/business-data";
import { useNav } from "@/lib/store";
import { PageHeader } from "@/components/site/page-header";
import { QuoteForm } from "@/components/site/quote-form";
import { CallbackForm } from "@/components/site/callback-form";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Phone, Mail, MapPin, Clock, AlertTriangle, Calculator } from "lucide-react";

export function ContactView() {
  const { openCallbackModal } = useNav();
  const [tab, setTab] = useState("quote");

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Get in touch — we'll actually reply"
        subtitle="Free no-obligation quotes, emergency call-outs, or just a question about your roof. Call us, message us, or fill in the form below — we reply to every enquiry within one working day."
      >
        <div className="flex flex-wrap gap-3">
          <a href={business.phoneHref}>
            <Button className="gap-2 bg-accent text-accent-foreground shadow-orange-glow hover:bg-accent/90">
              <Phone className="h-4 w-4" /> {business.phone}
            </Button>
          </a>
          <Button
            onClick={openCallbackModal}
            variant="outline"
            className="gap-2 border-destructive/40 text-destructive hover:bg-destructive/10 hover:text-destructive"
          >
            <AlertTriangle className="h-4 w-4" /> Emergency callback
          </Button>
        </div>
      </PageHeader>

      <section className="bg-background py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
            {/* Contact details */}
            <div className="lg:col-span-5">
              <h2 className="font-display text-2xl font-extrabold tracking-tight">Direct contact</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Prefer to reach us the old-fashioned way? Here's everything you need.
              </p>

              <div className="mt-6 space-y-4">
                <a
                  href={business.phoneHref}
                  className="group flex items-start gap-4 rounded-xl border border-border bg-card p-5 shadow-brand transition hover:border-accent/40"
                >
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-accent/10 text-accent transition group-hover:bg-accent group-hover:text-accent-foreground">
                    <Phone className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Phone (tap to call)
                    </p>
                    <p className="font-display text-lg font-bold">{business.phone}</p>
                    <p className="text-xs text-muted-foreground">24-hour emergency call-out · 7 days</p>
                  </div>
                </a>

                <a
                  href={business.emailHref}
                  className="group flex items-start gap-4 rounded-xl border border-border bg-card p-5 shadow-brand transition hover:border-accent/40"
                >
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-accent/10 text-accent transition group-hover:bg-accent group-hover:text-accent-foreground">
                    <Mail className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Email</p>
                    <p className="font-display text-base font-bold break-all">{business.email}</p>
                    <p className="text-xs text-muted-foreground">Replies within one working day</p>
                  </div>
                </a>

                <div className="flex items-start gap-4 rounded-xl border border-border bg-card p-5 shadow-brand">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-accent/10 text-accent">
                    <MapPin className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Office & yard
                    </p>
                    <p className="font-display text-base font-bold">{business.address.full}</p>
                    <p className="text-xs text-muted-foreground">Pop in during working hours — tea on the go</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-xl border border-border bg-card p-5 shadow-brand">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-accent/10 text-accent">
                    <Clock className="h-5 w-5" />
                  </span>
                  <div className="w-full">
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Hours & availability
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      <strong className="text-foreground">{business.emergencyCallout}</strong> — available 7 days for urgent leaks and storm damage.
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      For office hours and non-urgent enquiries, please call us.
                    </p>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="mt-6 overflow-hidden rounded-xl border border-border shadow-brand">
                <iframe
                  title="Russells Roofing location — 8 The Old Mill, Bexley High Street, DA5 1JX"
                  src="https://maps.google.com/maps?q=51.4419,0.1488&z=15&output=embed"
                  className="h-64 w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-7">
              <div className="rounded-2xl border border-border bg-card p-6 shadow-brand sm:p-8">
                <Tabs value={tab} onValueChange={setTab}>
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="quote" className="gap-2">
                      <Calculator className="h-4 w-4" /> Free quote
                    </TabsTrigger>
                    <TabsTrigger value="callback" className="gap-2">
                      <AlertTriangle className="h-4 w-4" /> Emergency callback
                    </TabsTrigger>
                  </TabsList>
                  <TabsContent value="quote" className="mt-6">
                    <h2 className="font-display text-xl font-bold">Request your free quote</h2>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Tell us about the job and we'll be in touch to book a free site survey.
                    </p>
                    <div className="mt-5">
                      <QuoteForm submitLabel="Send my quote request" />
                    </div>
                  </TabsContent>
                  <TabsContent value="callback" className="mt-6">
                    <h2 className="font-display text-xl font-bold">Emergency callback</h2>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Active leak or storm damage? We'll call you back as soon as a roofer is free.
                    </p>
                    <div className="mt-5">
                      <CallbackForm />
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
