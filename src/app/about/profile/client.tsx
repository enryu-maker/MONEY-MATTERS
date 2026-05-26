"use client";

import { motion } from "framer-motion";
import { PageShell } from "@/components/site/PageShell";
import { PageHero } from "@/components/site/PageHero";
import Link from "next/link";

const principles = [
    {
        n: "01",
        title: "Independence",
        body:
            "We answer to our clients — never to a single lender. Every recommendation is structured around the borrower's outcome, not a placement quota.",
    },
    {
        n: "02",
        title: "Discretion",
        body:
            "We handle sensitive financial information for executives, family offices and global investors. Confidentiality is non-negotiable.",
    },
    {
        n: "03",
        title: "Precision",
        body:
            "Mortgage overlays in the UAE are dense. We translate complexity into a clean, decision-ready brief for every client.",
    },
    {
        n: "04",
        title: "Access",
        body:
            "Direct relationships with every major bank in the UAE — including the desks that price exception cases for high-value collateral.",
    },
];

export function ProfileClient() {
    return (
        <PageShell>
            <PageHero
                eyebrow="Profile"
                title="A boutique consultancy with"
                highlight="institutional reach."
                description="Money Matters was founded in 2016 to bring a quieter, more considered approach to UAE mortgage advisory — one that treats every transaction as a long-term financial decision, not a product sale."
            />

            <section className="px-6 pb-24">
                <div className="mx-auto grid max-w-7xl gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {principles.map((p, i) => (
                        <motion.div
                            key={p.n}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: i * 0.08 }}
                            className="glass rounded-3xl p-8"
                        >
                            <div className="font-display text-3xl text-gradient-gold">{p.n}</div>
                            <h3 className="mt-4 text-2xl">{p.title}</h3>
                            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            <section className="px-6 pb-28">
                <div className="mx-auto max-w-5xl rounded-3xl glass-strong p-10 md:p-16 text-center">
                    <div className="text-xs uppercase tracking-[0.28em] text-primary/80">Our promise</div>
                    <p className="mt-6 font-display text-3xl leading-snug md:text-5xl">
                        “We don&apos;t sell mortgages.
                        <br />
                        <em className="text-gradient-gold not-italic">
                            We engineer financing strategies.
                        </em>
                        ”
                    </p>
                    <Link
                        href="/#contact"
                        className="mt-10 inline-flex rounded-full bg-[var(--grad-gold)] px-7 py-4 text-sm font-medium text-primary-foreground shadow-[var(--shadow-gold)]"
                    >
                        Speak with an advisor →
                    </Link>
                </div>
            </section>
        </PageShell>
    );
}
