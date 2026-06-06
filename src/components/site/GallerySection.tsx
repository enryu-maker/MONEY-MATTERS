"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";
import { galleryImages } from "@/lib/gallery-data";
import { SectionHeader } from "./SectionHeader";
import { AnimateIn } from "./AnimateIn";
import { Stagger, StaggerItem } from "./Stagger";
import { spring } from "@/lib/motion";

/** Bento cell spans for a balanced 5-image layout */
const cellLayout = [
  "col-span-2 row-span-2 min-h-[220px] sm:min-h-[280px]",
  "col-span-1 row-span-1 min-h-[140px]",
  "col-span-1 row-span-1 min-h-[140px]",
  "col-span-1 row-span-1 min-h-[140px] sm:col-span-1",
  "col-span-1 row-span-1 min-h-[140px] sm:col-span-1",
] as const;

export function GallerySection() {
  const [active, setActive] = useState<number | null>(null);

  const close = useCallback(() => setActive(null), []);
  const goPrev = useCallback(() => {
    setActive((i) =>
      i === null ? null : (i - 1 + galleryImages.length) % galleryImages.length,
    );
  }, []);
  const goNext = useCallback(() => {
    setActive((i) => (i === null ? null : (i + 1) % galleryImages.length));
  }, []);

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [active, close, goPrev, goNext]);

  return (
    <section className="section-pad border-t hairline bg-background">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeader
          eyebrow="Gallery"
          largeEyebrow
          title="Life at Money Matters"
          sub="Our team, culture, and moments with clients and partners across Dubai and the UAE."
          center
        />

        <AnimateIn delay={0.05}>
          <Stagger className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4 md:auto-rows-[minmax(0,1fr)]">
            {galleryImages.map((item, i) => (
              <StaggerItem
                key={item.src}
                className={`${cellLayout[i]} ${i === 0 ? "md:min-h-[320px]" : ""}`}
              >
                <button
                  type="button"
                  onClick={() => setActive(i)}
                  className="group relative h-full min-h-[inherit] w-full overflow-hidden rounded-2xl border hairline bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.04]"
                    sizes={
                      i === 0
                        ? "(max-width: 768px) 100vw, 50vw"
                        : "(max-width: 768px) 50vw, 25vw"
                    }
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/55 via-transparent to-transparent opacity-80 transition-opacity group-hover:opacity-100" />
                  <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-2 p-3 sm:p-4">
                    <p className="text-left text-sm font-semibold leading-snug text-white sm:text-base md:text-[1.05rem]">
                      {item.caption}
                    </p>
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-white/20 text-white backdrop-blur-sm">
                      <ZoomIn className="h-4 w-4" aria-hidden />
                    </span>
                  </div>
                </button>
              </StaggerItem>
            ))}
          </Stagger>
        </AnimateIn>
      </div>

      <Lightbox
        active={active}
        onClose={close}
        onPrev={goPrev}
        onNext={goNext}
      />
    </section>
  );
}

function Lightbox({
  active,
  onClose,
  onPrev,
  onNext,
}: {
  active: number | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const item = active !== null ? galleryImages[active] : null;

  return (
    <AnimatePresence>
      {item && active !== null && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.button
            type="button"
            aria-label="Close gallery"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-foreground/80 backdrop-blur-md"
            onClick={onClose}
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={item.alt}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={spring}
            className="relative z-10 flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border hairline bg-card shadow-[var(--shadow-card)]"
          >
            <div className="relative aspect-[16/10] w-full bg-secondary sm:aspect-[3/2]">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-contain"
                sizes="(max-width: 896px) 100vw, 896px"
                priority
              />
            </div>
            <div className="flex items-center justify-between gap-4 border-t hairline px-4 py-3 sm:px-5">
              <p className="text-base font-semibold text-foreground md:text-lg">{item.caption}</p>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close"
                className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border hairline hover:bg-secondary"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </motion.div>

          <button
            type="button"
            onClick={onPrev}
            aria-label="Previous image"
            className="absolute left-2 top-1/2 z-20 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border hairline bg-card/90 shadow-lg backdrop-blur-sm hover:bg-card sm:left-4"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={onNext}
            aria-label="Next image"
            className="absolute right-2 top-1/2 z-20 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border hairline bg-card/90 shadow-lg backdrop-blur-sm hover:bg-card sm:right-4"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      )}
    </AnimatePresence>
  );
}
