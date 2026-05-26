"use client";
import { motion } from "framer-motion";
import { SectionHeader } from "./Services";

const items = [
    {
        q: "Money Matters secured terms I genuinely didn't believe were possible. Calm, precise, and astonishingly well-connected.",
        a: "K. Rahman",
        r: "Investor · Downtown Dubai",
    },
    {
        q: "From first call to disbursement in under three weeks. As a non-resident, the white-glove handling made all the difference.",
        a: "S. Iyer",
        r: "Non-resident buyer · London",
    },
    {
        q: "They refinanced a portfolio of four properties for us and trimmed nearly a full percentage point off the blended rate.",
        a: "A. Al-Mansouri",
        r: "Corporate client · Business Bay",
    },
];

export function Testimonials() {
    return (
        <section className="relative px-6 py-32">
            <div className="mx-auto max-w-7xl">
                <SectionHeader
                    eyebrow="We love them"
                    title={
                        <>
                            What our clients <em className="text-gradient-gold not-italic">have to say.</em>
                        </>
                    }
                />
                <div className="mt-16 grid gap-6 md:grid-cols-3">
                    {items.map((t, i) => (
                        <motion.figure
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                            className="group relative overflow-hidden rounded-3xl glass p-8 transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-luxe)]"
                        >
                            <div className="font-display text-5xl leading-none text-primary/40">&quot;</div>
                            <blockquote className="mt-4 text-base leading-relaxed text-foreground/90">
                                {t.q}
                            </blockquote>
                            <figcaption className="mt-8 border-t hairline pt-5">
                                <div className="font-display text-lg">{t.a}</div>
                                <div className="mt-0.5 text-xs uppercase tracking-widest text-muted-foreground">
                                    {t.r}
                                </div>
                            </figcaption>
                        </motion.figure>
                    ))}
                </div>
            </div>
        </section>
    );
}
