"use client";

import { useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";
import { PageShell } from "@/components/site/PageShell";
import { blogs, type Blog } from "@/lib/blogs";
import Link from "next/link";

export function BlogClient({ blog }: { blog: Blog }) {
    const { scrollYProgress } = useScroll();
    const [progress, setProgress] = useState(0);
    useEffect(() => scrollYProgress.on("change", setProgress), [scrollYProgress]);

    const related = blogs.filter((b) => b.slug !== blog.slug).slice(0, 3);

    return (
        <PageShell>
            {/* Reading progress */}
            <div className="fixed left-0 right-0 top-0 z-[60] h-0.5 bg-primary/10">
                <motion.div
                    style={{ scaleX: progress, transformOrigin: "0% 50%" }}
                    className="h-full bg-[var(--grad-gold)]"
                />
            </div>

            {/* Hero */}
            <section className="relative h-[78vh] min-h-[560px] w-full overflow-hidden">
                <motion.img
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
                    src={blog.hero}
                    alt={blog.title}
                    className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/40" />
                <div className="absolute inset-x-0 bottom-0 px-6 pb-16">
                    <div className="mx-auto max-w-4xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            className="inline-flex items-center gap-3 rounded-full border border-primary/40 bg-background/60 px-4 py-1.5 text-xs uppercase tracking-[0.22em] text-primary backdrop-blur-md"
                        >
                            {blog.category}
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                            className="mt-6 max-w-4xl text-4xl leading-[1.05] md:text-6xl"
                        >
                            {blog.title}
                        </motion.h1>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.9, delay: 0.5 }}
                            className="mt-7 flex items-center gap-4 text-xs uppercase tracking-widest text-muted-foreground"
                        >
                            <span>{blog.author}</span>
                            <span className="h-1 w-1 rounded-full bg-primary/50" />
                            <span>{blog.date}</span>
                            <span className="h-1 w-1 rounded-full bg-primary/50" />
                            <span>{blog.readTime}</span>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Body */}
            <article className="px-6 py-20">
                <div className="mx-auto max-w-3xl">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="font-display text-2xl leading-snug text-foreground/90 md:text-3xl"
                    >
                        {blog.excerpt}
                    </motion.p>

                    <div className="my-12 h-px w-24 bg-gradient-to-r from-primary/60 to-transparent" />

                    <div className="space-y-10">
                        {blog.content.map((c, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-60px" }}
                                transition={{ duration: 0.7, delay: i * 0.04 }}
                            >
                                {c.heading && (
                                    <h2 className="mb-4 text-2xl md:text-3xl">
                                        <span className="text-gradient-gold">{c.heading}</span>
                                    </h2>
                                )}
                                <p className="text-base leading-[1.85] text-muted-foreground md:text-lg">
                                    {c.body}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                    {/* CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="mt-16 rounded-3xl glass-strong p-10 text-center"
                    >
                        <div className="text-xs uppercase tracking-[0.28em] text-primary/80">
                            Ready to act on it?
                        </div>
                        <h3 className="mt-4 font-display text-3xl md:text-4xl">
                            Speak with a senior advisor today.
                        </h3>
                        <Link
                            href="/#contact"
                            className="mt-7 inline-flex rounded-full bg-[var(--grad-gold)] px-7 py-4 text-sm font-medium text-primary-foreground shadow-[var(--shadow-gold)]"
                        >
                            Book a confidential consultation →
                        </Link>
                    </motion.div>
                </div>
            </article>

            {/* Related */}
            <section className="px-6 pb-28">
                <div className="mx-auto max-w-7xl">
                    <h3 className="text-center text-3xl md:text-4xl">
                        Continue <em className="text-gradient-gold not-italic">reading.</em>
                    </h3>
                    <div className="mt-12 grid gap-6 md:grid-cols-3">
                        {related.map((b, i) => (
                            <motion.div
                                key={b.slug}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: i * 0.08 }}
                            >
                                <Link
                                    href={`/blogs/${b.slug}`}
                                    className="group block overflow-hidden rounded-3xl glass"
                                >
                                    <div className="relative aspect-[5/3] overflow-hidden">
                                        <img
                                            src={b.hero}
                                            alt={b.title}
                                            loading="lazy"
                                            className="h-full w-full object-cover transition-transform duration-[1.2s] group-hover:scale-105"
                                        />
                                    </div>
                                    <div className="p-6">
                                        <div className="text-[10px] uppercase tracking-widest text-primary/80">
                                            {b.category}
                                        </div>
                                        <h4 className="mt-2 text-lg leading-snug transition-colors group-hover:text-gradient-gold">
                                            {b.title}
                                        </h4>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </PageShell>
    );
}
