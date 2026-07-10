"use client";

import { useEffect, useState } from "react";
import { Logo } from "./logo";
import { useNav, type ViewId } from "@/lib/store";
import { business } from "@/lib/business-data";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Menu, Phone, Star } from "lucide-react";

const navItems: { label: string; view: ViewId }[] = [
  { label: "Home", view: "home" },
  { label: "Services", view: "services" },
  { label: "Areas", view: "areas" },
  { label: "Gallery", view: "gallery" },
  { label: "About", view: "about" },
  { label: "FAQ", view: "faq" },
  { label: "Contact", view: "contact" },
];

export function Header() {
  const { view, setView, openQuoteModal } = useNav();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (v: ViewId) => {
    setView(v);
    setMobileOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-background/90 shadow-brand backdrop-blur-xl border-b border-border/70"
          : "bg-background/40 backdrop-blur-sm border-b border-transparent"
      }`}
    >
      {/* Top utility strip */}
      <div className="hidden border-b border-border/40 bg-primary text-primary-foreground/90 lg:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-1.5 text-xs">
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-1.5">
              <Star className="h-3.5 w-3.5 fill-accent text-accent" />
              <strong className="font-semibold">{business.checkatradeRating}/10</strong>
              <span className="text-primary-foreground/70">
                on Checkatrade ({business.checkatradeReviews} reviews)
              </span>
            </span>
            <span className="text-primary-foreground/40">·</span>
            <span className="text-primary-foreground/80">
              TrustMark Reg. {business.trustmarkReg}
            </span>
            <span className="text-primary-foreground/40">·</span>
            <span className="text-primary-foreground/80">Licensed Asbestos Removal</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-primary-foreground/70">
              {business.openingHours[0].day}: {business.openingHours[0].hours}
            </span>
            <a
              href={business.phoneHref}
              className="flex items-center gap-1.5 font-semibold text-accent hover:text-accent-foreground"
            >
              <Phone className="h-3.5 w-3.5" />
              {business.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Logo />

        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <button
              key={item.view}
              onClick={() => go(item.view)}
              className={`relative rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                view === item.view
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {item.label}
              {view === item.view && (
                <span className="absolute inset-x-3 -bottom-px h-0.5 rounded-full bg-accent" />
              )}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a href={business.phoneHref} className="hidden sm:block lg:hidden">
            <Button variant="outline" size="sm" className="gap-2">
              <Phone className="h-4 w-4" />
              Call
            </Button>
          </a>
          <Button
            onClick={() => openQuoteModal()}
            size="sm"
            className="hidden gap-2 bg-accent text-accent-foreground shadow-orange-glow hover:bg-accent/90 sm:flex"
          >
            Get Free Quote
          </Button>
          <a href={business.phoneHref} className="hidden sm:hidden">
            <span className="sr-only">Call {business.phone}</span>
          </a>

          {/* Mobile drawer */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="lg:hidden" aria-label="Open menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[340px]">
              <SheetHeader className="px-6 pt-6">
                <SheetTitle className="text-left">
                  <Logo />
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-1 px-4 py-4">
                {navItems.map((item) => (
                  <SheetClose asChild key={item.view}>
                    <button
                      onClick={() => go(item.view)}
                      className={`flex items-center justify-between rounded-lg px-4 py-3 text-left text-base font-medium transition-colors ${
                        view === item.view
                          ? "bg-primary text-primary-foreground"
                          : "text-foreground hover:bg-muted"
                      }`}
                    >
                      {item.label}
                    </button>
                  </SheetClose>
                ))}
                <div className="mt-4 flex flex-col gap-2 px-2">
                  <SheetClose asChild>
                    <Button
                      onClick={() => {
                        openQuoteModal();
                        setMobileOpen(false);
                      }}
                      className="bg-accent text-accent-foreground shadow-orange-glow hover:bg-accent/90"
                    >
                      Get My Free Quote
                    </Button>
                  </SheetClose>
                  <a href={business.phoneHref}>
                    <Button variant="outline" className="w-full gap-2">
                      <Phone className="h-4 w-4" />
                      {business.phone}
                    </Button>
                  </a>
                </div>
                <div className="mt-4 rounded-lg bg-muted p-4 text-xs text-muted-foreground">
                  <p className="font-semibold text-foreground">Family-run since {business.foundingYear}</p>
                  <p className="mt-1">{business.address.full}</p>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
