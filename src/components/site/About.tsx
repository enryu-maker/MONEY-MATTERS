"use client";
import { motion } from "framer-motion";
import consult from "@/assets/consult.jpg";

export function About() {
    return (
        <section id="about" className="relative px-6 py-32">
            <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-12 lg:gap-20">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                    className="relative lg:col-span-6"
                >
                    <div className="relative overflow-hidden rounded-3xl glass">
                        <img
                            src={consult.src}
                            alt="Luxury Dubai penthouse consultation setting"
                            loading="lazy"
                            width={1536}
                            height={1024}
                            className="aspect-[4/5] w-full object-cover opacity-90"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.3 }}
                        className="absolute -bottom-8 -right-4 max-w-xs rounded-2xl glass-strong p-6 shadow-[var(--shadow-luxe)] md:-right-8"
                    >
                        <div className="text-xs uppercase tracking-[0.22em] text-primary">Licensed</div>
                        <p className="mt-2 text-sm text-muted-foreground">
                            Licensed entity under the Dubai Economy Department. Affiliated with every major UAE bank.
                        </p>
                    </motion.div>
                </motion.div>

                <div className="lg:col-span-6">
                    <div className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-primary/80">
                        <span className="h-px w-8 bg-primary/40" /> About us
                    </div>
                    <h2 className="mt-6 text-4xl leading-[1.05] md:text-6xl">
                        A boutique consultancy for
                        <br />
                        <em className="text-gradient-gold not-italic">serious property capital.</em>
                    </h2>
                    <div className="mt-8 space-y-5 text-base leading-relaxed text-muted-foreground">
                        <p>
                            Money Matters is a boutique mortgage consultancy affiliated with the major
                            banks across the UAE financial sector — specialising in mortgages for every
                            property class: retail and corporate, residential and commercial.
                        </p>
                        <p>
                            Based in Business Bay, Dubai, we are a licensed entity under the Dubai
                            Economy Department. Since 2016, we have provided sound professional advice
                            to an ever-growing clientele on the widest range of mortgage offers and
                            products available in the market.
                        </p>
                        <p>
                            We work directly with our clients, catering to their specific needs — and
                            navigating the world of mortgage overlays so they don&apos;t have to.
                        </p>
                    </div>

                    <div className="mt-10 grid grid-cols-3 gap-px overflow-hidden rounded-2xl glass">
                        {[
                            { v: "2016", l: "Founded" },
                            { v: "Business Bay", l: "Headquartered" },
                            { v: "DED Licensed", l: "Regulated" },
                        ].map((s) => (
                            <div key={s.l} className="bg-background/40 p-5">
                                <div className="font-display text-xl text-gradient-gold">{s.v}</div>
                                <div className="mt-1 text-[10px] uppercase tracking-widest text-muted-foreground">
                                    {s.l}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
