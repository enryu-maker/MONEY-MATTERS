"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import hero from "@/assets/hero-dubai.jpg";

export function Hero() {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

    return (
        <section ref={ref} id="top" className="relative min-h-svh w-full overflow-hidden">
            <motion.div style={{ y, scale }} className="absolute inset-0">
                <img
                    src={hero.src}
                    alt="Dubai skyline at twilight with Burj Khalifa silhouette"
                    className="h-full w-full object-cover opacity-65"
                />
                <div className="absolute inset-0 bg-linear-to-b from-background/40 via-background/30 to-background" />
                <div className="absolute inset-0 bg-linear-to-r from-background via-transparent to-background/60" />
            </motion.div>

            <motion.div
                style={{ opacity }}
                className="relative z-10 mx-auto flex min-h-svh max-w-7xl flex-col justify-center px-6 pt-32"
            >
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-primary"
                >
                    <span className="h-1 w-1 rounded-full bg-primary" />
                    Boutique Mortgage Consultancy · Dubai, UAE
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="max-w-5xl text-5xl leading-[0.95] tracking-tight md:text-7xl lg:text-[5.5rem]"
                >
                    Financing the skyline
                    <br />
                    <span className="text-gradient-gold italic">of your ambition.</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, delay: 0.55 }}
                    className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground"
                >
                    Since 2016, Money Matters has guided discerning clients through the UAE
                    property market — engineering bespoke mortgage solutions across residential,
                    commercial, and corporate real estate, with direct access to every major bank.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, delay: 0.7 }}
                    className="mt-10 flex flex-wrap items-center gap-4"
                >
                    <a
                        href="#calculator"
                        className="group relative inline-flex items-center gap-3 rounded-full bg-[var(--grad-gold)] px-7 py-4 text-sm font-medium text-primary-foreground shadow-[var(--shadow-gold)] transition-transform hover:scale-[1.02]"
                    >
                        Calculate your mortgage
                        <span className="transition-transform group-hover:translate-x-1">→</span>
                    </a>
                    <a
                        href="#contact"
                        className="rounded-full border border-foreground/15 bg-foreground/5 px-7 py-4 text-sm text-foreground backdrop-blur-md transition-all hover:border-foreground/30 hover:bg-foreground/10"
                    >
                        Speak with an advisor
                    </a>
                </motion.div>

                <FloatingStats />
            </motion.div>

            {/* Animated scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
            >
                <div className="flex h-10 w-6 items-start justify-center rounded-full border border-foreground/20 p-1.5">
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ duration: 1.8, repeat: Infinity }}
                        className="h-1.5 w-1 rounded-full bg-primary"
                    />
                </div>
            </motion.div>
        </section>
    );
}

function FloatingStats() {
    const stats = [
        { v: "9+", l: "Years in UAE" },
        { v: "20+", l: "Bank partners" },
        { v: "AED 2B+", l: "Funded" },
        { v: "98%", l: "Approval rate" },
    ];
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.95 }}
            className="mt-16 grid w-full max-w-3xl grid-cols-2 gap-px overflow-hidden rounded-2xl glass md:grid-cols-4"
        >
            {stats.map((s) => (
                <div key={s.l} className="bg-background/40 p-5 backdrop-blur-md">
                    <div className="font-display text-3xl text-gradient-gold">{s.v}</div>
                    <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{s.l}</div>
                </div>
            ))}
        </motion.div>
    );
}
