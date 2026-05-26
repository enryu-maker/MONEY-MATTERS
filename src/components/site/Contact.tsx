"use client";
import { motion } from "framer-motion";

export function Contact() {
    return (
        <section id="contact" className="relative overflow-hidden px-6 py-32">
            <div className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute left-1/2 top-1/2 h-[700px] w-[1200px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--grad-sunset)] opacity-40 blur-[140px]" />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className="relative mx-auto max-w-5xl overflow-hidden rounded-[2rem] glass-strong p-10 text-center md:p-20"
            >
                <div className="text-xs uppercase tracking-[0.3em] text-primary/80">Let&apos;s talk</div>
                <h2 className="mt-6 text-4xl leading-[1.05] md:text-7xl">
                    A complete mortgage solution,
                    <br />
                    <em className="text-gradient-gold not-italic">on your terms.</em>
                </h2>
                <p className="mx-auto mt-8 max-w-xl text-base text-muted-foreground">
                    Speak with a senior consultant. Free, confidential, and tailored to your
                    property goals in the UAE.
                </p>

                <div className="mt-12 grid gap-4 md:grid-cols-2">
                    <a
                        href="tel:+97145850565"
                        className="group rounded-2xl border hairline bg-background/40 p-6 text-left backdrop-blur-md transition-all hover:border-primary/40"
                    >
                        <div className="text-xs uppercase tracking-widest text-muted-foreground">Call us</div>
                        <div className="mt-2 font-display text-2xl text-gradient-gold">+971 4 585 0565</div>
                        <div className="mt-1 text-sm text-muted-foreground transition-colors group-hover:text-foreground">
                            Sun – Thu · 9am to 6pm GST
                        </div>
                    </a>
                    <a
                        href="mailto:admin@moneymatters.ae"
                        className="group rounded-2xl border hairline bg-background/40 p-6 text-left backdrop-blur-md transition-all hover:border-primary/40"
                    >
                        <div className="text-xs uppercase tracking-widest text-muted-foreground">Email</div>
                        <div className="mt-2 font-display text-2xl text-gradient-gold">admin@moneymatters.ae</div>
                        <div className="mt-1 text-sm text-muted-foreground transition-colors group-hover:text-foreground">
                            Response within one business hour
                        </div>
                    </a>
                </div>

                <div className="mt-10 rounded-2xl border hairline bg-background/40 p-6 text-left">
                    <div className="text-xs uppercase tracking-widest text-muted-foreground">Visit</div>
                    <div className="mt-2 font-display text-xl">
                        1009, Tamani Art Office Tower, Business Bay, Dubai · P.O. Box 120380
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
