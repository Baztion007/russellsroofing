"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { galleryItems, serviceCategories } from "@/lib/business-data";
import { useNav } from "@/lib/store";
import { PageHeader } from "@/components/site/page-header";
import { Button } from "@/components/ui/button";
import { MapPin, ChevronRight, Maximize2 } from "lucide-react";

const galleryImages = [
  "/images/gallery-1.jpg",
  "/images/gallery-2.jpg",
  "/images/gallery-3.jpg",
  "/images/gallery-4.jpg",
  "/images/gallery-5.jpg",
  "/images/gallery-6.jpg",
];

export function GalleryView() {
  const { openQuoteModal } = useNav();
  const [filter, setFilter] = useState<string>("all");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = galleryItems.filter((g) => {
    if (filter === "all") return true;
    const cat = serviceCategories.find((c) => c.id === filter);
    return cat && g.service.toLowerCase().includes(cat.title.toLowerCase().split(" ")[0]);
  });

  return (
    <>
      <PageHeader
        eyebrow="Gallery"
        title="Real roofs, real results"
        subtitle="A selection of completed jobs across Bexley and South East London. Roofing sells on visual proof of workmanship — here's ours. (Project images are illustrative — confirm specific job photos with us directly.)"
      />

      <section className="bg-background py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          {/* Filter chips */}
          <div className="flex flex-wrap gap-2">
            <FilterChip active={filter === "all"} onClick={() => setFilter("all")}>
              All work
            </FilterChip>
            {serviceCategories.map((c) => (
              <FilterChip key={c.id} active={filter === c.id} onClick={() => setFilter(c.id)}>
                {c.title}
              </FilterChip>
            ))}
          </div>

          {/* Grid */}
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((g, i) => (
              <motion.article
                key={g.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group overflow-hidden rounded-2xl border border-border bg-card shadow-brand transition hover:-translate-y-1 hover:shadow-orange-glow"
              >
                <button
                  onClick={() => setLightbox(i)}
                  className="relative block aspect-[4/3] w-full overflow-hidden"
                  aria-label={`Open ${g.title} full image`}
                >
                  <img
                    src={galleryImages[i % galleryImages.length]}
                    alt={`${g.title} — ${g.service} in ${g.area}`}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/0 to-transparent" />
                  <span className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-lg bg-background/80 text-foreground opacity-0 backdrop-blur transition group-hover:opacity-100">
                    <Maximize2 className="h-4 w-4" />
                  </span>
                  <div className="absolute inset-x-0 bottom-0 p-4 text-primary-foreground">
                    <p className="text-xs font-medium text-accent">{g.service}</p>
                    <h3 className="font-display text-lg font-bold leading-tight">{g.title}</h3>
                    <p className="mt-0.5 flex items-center gap-1 text-xs text-primary-foreground/80">
                      <MapPin className="h-3 w-3" /> {g.area}
                    </p>
                  </div>
                </button>
                <div className="p-4">
                  <p className="text-sm text-muted-foreground">{g.description}</p>
                </div>
              </motion.article>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="rounded-xl border border-dashed border-border p-12 text-center text-muted-foreground">
              No jobs in this category yet — check back soon.
            </div>
          )}

          {/* CTA */}
          <div className="mt-12 rounded-2xl bg-primary p-8 text-center text-primary-foreground shadow-brand sm:p-12">
            <h2 className="font-display text-2xl font-extrabold sm:text-3xl">
              Want your roof to feature here next?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-primary-foreground/80">
              Get a free quote and site survey. We photograph completed work for our records — with your
              permission, we'll feature yours too.
            </p>
            <Button
              onClick={() => openQuoteModal()}
              className="mt-6 gap-2 bg-accent text-accent-foreground shadow-orange-glow hover:bg-accent/90"
            >
              Start my project <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[70] grid place-items-center bg-background/90 p-4 backdrop-blur"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-card text-foreground shadow-lg"
            onClick={() => setLightbox(null)}
            aria-label="Close"
          >
            ✕
          </button>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-h-[90vh] max-w-4xl overflow-hidden rounded-2xl bg-card shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={galleryImages[lightbox % galleryImages.length]}
              alt={galleryItems[lightbox]?.title}
              className="max-h-[70vh] w-full object-cover"
            />
            <div className="p-5">
              <p className="text-xs font-medium text-accent">{galleryItems[lightbox]?.service}</p>
              <h3 className="font-display text-xl font-bold">{galleryItems[lightbox]?.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{galleryItems[lightbox]?.description}</p>
              <p className="mt-2 flex items-center gap-1 text-xs text-muted-foreground">
                <MapPin className="h-3 w-3" /> {galleryItems[lightbox]?.area}
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
}

function FilterChip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
        active
          ? "border-accent bg-accent text-accent-foreground shadow-orange-glow"
          : "border-border bg-card text-muted-foreground hover:border-accent/40 hover:text-foreground"
      }`}
    >
      {children}
    </button>
  );
}
