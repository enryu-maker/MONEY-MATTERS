"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const services = [
    {
        n: "01",
        t: "Resale / Fresh Purchase",
        s: "First-time buyer or seasoned investor",
        d: "Factual, unbiased, independent guidance for purchasing property in Dubai and the UAE. We work closely with you to understand your goals and recommend mortgage packages from a wide panel of lenders — with transparent terms and no hidden fees down the line.",
    },
    {
        n: "02",
        t: "Buyout",
        s: "Refinance at a better rate",
        d: "If your current lender is overcharging, we evaluate your case at no cost, benchmark it against the market, and coordinate a stress-free transfer between your existing bank and the new lender — so you save every month, for years.",
    },
    {
        n: "03",
        t: "Equity Release (Refinance)",
        s: "Unlock the value in your home",
        d: "Tap the equity in your current home without selling it. Use it for further investment, home improvements, or capital plans. Our consultants help you weigh benefits and risks and structure the right refinance for your situation.",
    },
    {
        n: "04",
        t: "Non-Resident Mortgages",
        s: "Own freehold property from anywhere",
        d: "Tailor-made solutions for resale, off-plan, buyout and equity release — with finance up to 50% loan-to-value for individuals residing overseas. Investment or holiday home, we manage the entire journey.",
    },
    {
        n: "05",
        t: "Corporate Mortgages",
        s: "For businesses and investors",
        d: "Designed for entities purchasing or refinancing revenue-generating commercial property. Benefit from high loan amounts, flexible terms, competitive rates, and a quick turnaround backed by our direct bank relationships.",
    },
    {
        n: "06",
        t: "Commercial Real Estate Financing",
        s: "Offices · Warehouses · Retail",
        d: "Finance against completed or under-construction commercial assets — up to 60% of property value with flexible payment plans and tenure up to 15 years. Includes lease rental discounting and bespoke structures.",
    },
];

export function Services() {
    const [active, setActive] = useState<number | null>(null);
    return (
        <section id="services" className="relative px-6 py-32">
            <div className="mx-auto max-w-7xl">
                <SectionHeader
                    eyebrow="What we do"
                    title={
                        <>
                            Mortgages, engineered around <em className="text-gradient-gold not-italic">you.</em>
                        </>
                    }
                    sub="Six precise services covering every kind of property finance in the UAE — for residents, non-residents, and corporates."
                />

                <div className="mt-20 grid gap-px overflow-hidden rounded-3xl glass md:grid-cols-2 lg:grid-cols-3">
                    {services.map((s, i) => (
                        <motion.button
                            key={s.n}
                            onClick={() => setActive(active === i ? null : i)}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{ duration: 0.7, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                            className="group relative overflow-hidden bg-background/40 p-8 text-left transition-colors hover:bg-background/60"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 opacity-0 transition-opacity duration-500 group-hover:from-primary/[0.06] group-hover:to-transparent group-hover:opacity-100" />
                            <div className="relative">
                                <div className="flex items-center justify-between">
                                    <span className="font-display text-xs text-primary/70">{s.n}</span>
                                    <span className="text-xl text-muted-foreground transition-all group-hover:translate-x-1 group-hover:text-primary">
                                        →
                                    </span>
                                </div>
                                <h3 className="mt-8 font-display text-2xl">{s.t}</h3>
                                <p className="mt-2 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                                    {s.s}
                                </p>
                                <motion.div
                                    initial={false}
                                    animate={{ height: active === i ? "auto" : 0, opacity: active === i ? 1 : 0 }}
                                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                                    className="overflow-hidden"
                                >
                                    <p className="mt-6 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
                                </motion.div>
                                {active !== i && (
                                    <p className="mt-6 line-clamp-2 text-sm text-muted-foreground/70">{s.d}</p>
                                )}
                            </div>
                        </motion.button>
                    ))}
                </div>
            </div>
        </section>
    );
}

export function SectionHeader({
    eyebrow,
    title,
    sub,
}: {
    eyebrow: string;
    title: React.ReactNode;
    sub?: string;
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
        >
            <div className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-primary/80">
                <span className="h-px w-8 bg-primary/40" /> {eyebrow}
            </div>
            <h2 className="mt-6 text-4xl leading-[1.05] md:text-6xl">{title}</h2>
            {sub && <p className="mt-6 max-w-xl text-base text-muted-foreground">{sub}</p>}
        </motion.div>
    );
}
