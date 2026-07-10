"use client";

import { business } from "@/lib/business-data";
import { PageHeader } from "@/components/site/page-header";
import { useNav } from "@/lib/store";
import { Button } from "@/components/ui/button";

export function LegalView({ kind }: { kind: "privacy" | "terms" | "accessibility" }) {
  const setView = useNav((s) => s.setView);

  const titles = {
    privacy: "Privacy Policy",
    terms: "Terms of Business",
    accessibility: "Accessibility Statement",
  } as const;

  const updated = "July 2026";

  return (
    <>
      <PageHeader eyebrow="Legal" title={titles[kind]} subtitle={`Last updated: ${updated}. ${business.legalName} is committed to handling your data responsibly and making this website usable for everyone.`} />
      <section className="bg-background py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <div className="space-y-8 text-sm leading-relaxed text-muted-foreground sm:text-base [&_h2]:font-display [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-foreground [&_h2]:mt-8 [&_h3]:font-display [&_h3]:text-base [&_h3]:font-semibold [&_h3]:text-foreground [&_h3]:mt-5 [&_p]:mt-3 [&_ul]:mt-3 [&_ul]:list-disc [&_ul]:space-y-1.5 [&_ul]:pl-5 [&_a]:text-accent [&_a]:underline [&_a]:underline-offset-2 [&_strong]:text-foreground">
            {kind === "privacy" && <PrivacyContent />}
            {kind === "terms" && <TermsContent />}
            {kind === "accessibility" && <AccessibilityContent />}
          </div>

          <div className="mt-10 rounded-xl border border-border bg-secondary p-6">
            <p className="font-display text-base font-bold">Questions about this?</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Contact us at{" "}
              <a href={business.emailHref} className="text-accent underline underline-offset-2">
                {business.email}
              </a>{" "}
              or call{" "}
              <a href={business.phoneHref} className="text-accent underline underline-offset-2">
                {business.phone}
              </a>
              .
            </p>
            <Button onClick={() => setView("contact")} variant="outline" className="mt-4">
              Contact us
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

function PrivacyContent() {
  return (
    <>
      <p>
        {business.legalName} ("we", "us", "our") operates this website. We are committed to protecting your
        privacy and handling your personal data in line with the UK General Data Protection Regulation (UK GDPR)
        and the Data Protection Act 2018.
      </p>
      <h2>What we collect</h2>
      <p>
        When you submit a quote request, emergency callback, or contact form, we collect the information you
        provide: your name, phone number, email address (if given), postcode, details of the work required, and
        any message content. We may also collect anonymous analytics data (e.g. pages visited) if you accept
        analytics cookies.
      </p>
      <h2>How we use it</h2>
      <ul>
        <li>To respond to your enquiry and provide a quote or callback.</li>
        <li>To carry out roofing works you've commissioned.</li>
        <li>To keep records required for insurance, asbestos licensing, and waste carrier compliance.</li>
        <li>To improve our website and services (anonymous analytics only, where consented).</li>
      </ul>
      <h2>Legal basis</h2>
      <p>
        We process your data under the legitimate interests of running a roofing business and responding to
        your enquiries, and under contract when works are commissioned. For emergency callbacks we rely on
        your consent by submitting the form.
      </p>
      <h2>Data processors</h2>
      <p>
        We use a CRM/automation platform (GoHighLevel) as a data processor to manage enquiries, schedule
        callbacks, and (with your consent) send review requests. Hosting and analytics providers may also act
        as processors. We do not sell your data to third parties.
      </p>
      <h2>How long we keep it</h2>
      <p>
        Enquiry data is kept for up to 24 months if no work is commissioned. Records relating to commissioned
        work — especially asbestos removal — are kept for the period required by law and our insurers
        (typically 6–40 years depending on the work type).
      </p>
      <h2>Your rights</h2>
      <ul>
        <li>Access — request a copy of the data we hold about you.</li>
        <li>Rectification — correct inaccurate data.</li>
        <li>Erasure — request deletion (subject to legal retention obligations).</li>
        <li>Restriction or objection — limit or object to certain processing.</li>
        <li>Withdraw consent — for analytics cookies and review requests, at any time.</li>
      </ul>
      <p>
        To exercise any right, email{" "}
        <a href={business.emailHref}>{business.email}</a>. You can also complain to the ICO at
        ico.org.uk if you're not satisfied with our response.
      </p>
      <h2>Cookies</h2>
      <p>
        We use necessary cookies for the site to function. With your consent (via the cookie banner) we also
        set functional and analytics cookies. See the banner for granular preferences.
      </p>
    </>
  );
}

function TermsContent() {
  return (
    <>
      <p>
        These terms govern the supply of roofing services by {business.legalName} ("we", "us", "our") to you
        ("you", "the customer"). By requesting a quote or commissioning work, you agree to these terms.
      </p>
      <h2>Quotes and estimates</h2>
      <p>
        All quotes are free and without obligation. A written fixed-price quote is provided after a site survey
        and is valid for 30 days unless stated otherwise. The online quick quote wizard collects job details
        to help us prepare — it does not produce a price estimate or constitute a quote.
      </p>
      <h2>Commissioning work</h2>
      <p>
        Work is commissioned when you accept a written quote. We'll confirm the start date and scope in writing.
        We do not take deposits — no payment is due until work is completed.
      </p>
      <h2>Payment</h2>
      <p>
        We do not take deposits. Payment is due on completion of the agreed work, with staged payments only
        for larger projects where agreed in writing in advance. Payment is due within 7 days of invoice unless
        agreed otherwise. Late payment may incur statutory interest. Cards are accepted.
      </p>
      <h2>Access and site conditions</h2>
      <ul>
        <li>You'll provide safe access to the roof and a clear working area.</li>
        <li>You'll inform us of any known hazards including asbestos, fragile surfaces, or pets.</li>
        <li>You'll ensure the property has the right to commission the works (freeholder consent where required).</li>
      </ul>
      <h2>Asbestos and waste</h2>
      <p>
        Asbestos cement roof work is carried out by our UKATA-trained team (United Kingdom Asbestos Training
        Association) to current HSE guidance, with licensed disposal. Disposal records are available on
        request. Where a job requires a full HSE asbestos removal licence, we'll tell you and refer you
        appropriately.
      </p>
      <h2>Guarantees</h2>
      <p>
        Workmanship is guaranteed for the period stated on your quote (typically 5–10 years depending on the
        work). Manufacturer warranties apply to materials separately. Guarantees don't cover damage caused by
        third parties, severe weather events, or lack of maintenance.
      </p>
      <h2>Cancellations</h2>
      <p>
        You may cancel within 14 days of commissioning without charge, provided works have not begun. If works
        have begun, you'll pay for work completed and materials ordered up to the cancellation date.
      </p>
      <h2>Liability</h2>
      <p>
        Our liability is limited to the cost of the works commissioned, save where caused by our negligence or
        where law requires otherwise. We carry comprehensive public liability insurance — certificates on
        request.
      </p>
      <h2>Governing law</h2>
      <p>
        These terms are governed by the law of England and Wales. Any disputes will be dealt with by the courts
        of England and Wales.
      </p>
    </>
  );
}

function AccessibilityContent() {
  return (
    <>
      <p>
        {business.legalName} is committed to making this website accessible to everyone, including users with
        disabilities. We aim to meet the Web Content Accessibility Guidelines (WCAG) 2.1 AA as a baseline.
      </p>
      <h2>What we've done</h2>
      <ul>
        <li>Semantic HTML with proper headings and landmark regions.</li>
        <li>Keyboard-navigable forms, menus, and modals with visible focus indicators.</li>
        <li>Large, high-contrast tap targets (minimum 44px) on touch devices.</li>
        <li>Descriptive alt text on all meaningful images.</li>
        <li>Click-to-call links and a tap-to-call button visible on every page.</li>
        <li>Reduced-motion friendly animations (no auto-playing media).</li>
      </ul>
      <h2>Known limitations</h2>
      <ul>
        <li>Some embedded maps rely on third-party (OpenStreetMap) accessibility support.</li>
        <li>The before/after image gallery uses hover interactions with tap fallbacks.</li>
      </ul>
      <p>
        If you find anything on this site difficult to use, please tell us — we take it seriously and will fix
        it where we can. Email{" "}
        <a href={business.emailHref}>{business.email}</a> or call{" "}
        <a href={business.phoneHref}>{business.phone}</a>.
      </p>
      <h2>Alternative formats</h2>
      <p>
        If you need any information on this site in a different format (large print, accessible PDF, spoken
        aloud over the phone), just ask — we'll provide it free of charge.
      </p>
    </>
  );
}
