"use client";

import { motion } from "framer-motion";
import { PageShell } from "@/components/site/PageShell";
import { PageHero } from "@/components/site/PageHero";

const banks = [
    "Emirates NBD",
    "ADCB",
    "Mashreq",
    "First Abu Dhabi Bank",
    "HSBC",
    "Standard Chartered",
    "Dubai Islamic Bank",
    "Abu Dhabi Islamic Bank",
    "RAK Bank",
    "Commercial Bank of Dubai",
    "Citibank",
    "ENBD Islamic",
    "Ajman Bank",
    "United Arab Bank",
    "National Bank of Fujairah",
    "Sharjah Islamic Bank",
    "Emirates Islamic",
    "Noor Bank",
    "Al Hilal Bank",
    "Bank of Sharjah",
];

export function PartnersClient() {
    return (
        <PageShell>
            <PageHero
                eyebrow="Our Partners"
                title="Affiliated with every"
                highlight="major UAE bank."
                description="Direct access to senior credit desks across the UAE financial sector — for residential, commercial, corporate and Islamic facilities."
            />

            <section className="px-6 pb-28">
                <div className="mx-auto max-w-7xl">
                    <div className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl glass md:grid-cols-4">
                        {banks.map((b, i) => (
                            <motion.div
                                key={b}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.02 }}
                                className="group flex h-32 items-center justify-center bg-background/40 p-6 text-center transition-colors hover:bg-primary/5"
                            >
                                <span className="font-display text-lg text-muted-foreground transition-colors group-hover:text-gradient-gold">
                                    {b}
                                </span>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-16 grid gap-6 md:grid-cols-3">
                        {[
                            { v: "20+", l: "Bank partners" },
                            { v: "Tier 1", l: "Credit desk access" },
                            { v: "AED 2B+", l: "Facilitated" },
                        ].map((s) => (
                            <div key={s.l} className="glass rounded-2xl p-8 text-center">
                                <div className="font-display text-4xl text-gradient-gold">{s.v}</div>
                                <div className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">
                                    {s.l}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </PageShell>
    );
}
