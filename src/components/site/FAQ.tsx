"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeader } from "./SectionHeader";
import { faqs } from "@/lib/site-data";
import { AnimateIn } from "./AnimateIn";
import { Stagger, StaggerItem } from "./Stagger";
import { spring } from "@/lib/motion";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="section-pad section-bone">
      <div className="mx-auto max-w-3xl">
        <SectionHeader
          eyebrow="FAQ's"
          center
          title="Ask us anything"
          sub="We would be happy to assist you — great answers to common mortgage questions."
        />

        <AnimateIn variant="scaleIn" delay={0.05}>
          <Stagger className="mt-10 divide-y hairline rounded-2xl border hairline bg-card overflow-hidden">
            {faqs.map((f, i) => (
              <StaggerItem key={f.q}>
                <div>
                  <motion.button
                    type="button"
                    onClick={() => setOpen(open === i ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left"
                    whileHover={{ backgroundColor: "var(--secondary)" }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="font-medium text-foreground">{f.q}</span>
                    <motion.span
                      animate={{ rotate: open === i ? 180 : 0 }}
                      transition={spring}
                    >
                      <ChevronDown className="h-5 w-5 shrink-0 text-muted-foreground" />
                    </motion.span>
                  </motion.button>
                  <AnimatePresence initial={false}>
                    {open === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </AnimateIn>
      </div>
    </section>
  );
}
