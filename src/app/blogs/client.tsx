"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { PageShell } from "@/components/site/PageShell";
import { PageHero } from "@/components/site/PageHero";
import { blogs, blogCategories } from "@/lib/blogs";
import Link from "next/link";

export function BlogsClient() {
    const [cat, setCat] = useState("All");
    const featured = blogs[0];
    const rest = (cat === "All" ? blogs.slice(1) : blogs.filter((b) => b.category === cat));

    return (
        <PageShell>
            <PageHero
                eyebrow="Journal"
                title="Market briefings &"
                highlight="editorial insight."
                description="Concise, considered analysis from the Money Matters desk — written for borrowers who treat property as a financial decision."
            />

            {/* Featured */}
            <section className="px-6 pb-16">
                <div className="mx-auto max-w-7xl">
                    <Link
                        href={`/blogs/${featured.slug}`}
                        className="group block overflow-hidden rounded-3xl glass-strong"
                    >
                        <div className="grid lg:grid-cols-2">
                            <div className="relative aspect-[4/3] overflow-hidden lg:aspect-auto">
                                <img
                                    src={featured.hero}
                                    alt={featured.title}
                                    loading="lazy"
                                    className="h-full w-full object-cover transition-transform duration-[1.2s] group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
                            </div>
                            <div className="flex flex-col justify-center p-8 md:p-12">
                                <div className="flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-primary/80">
                                    Featured · {featured.category}
                                </div>
                                <h2 className="mt-5 text-3xl leading-tight md:text-5xl">{featured.title}</h2>
                                <p className="mt-5 text-sm leading-relaxed text-muted-foreground md:text-base">
                                    {featured.excerpt}
                                </p>
                                <div className="mt-7 flex items-center gap-4 text-xs text-muted-foreground">
                                    <span>{featured.date}</span>
                                    <span className="h-1 w-1 rounded-full bg-primary/50" />
                                    <span>{featured.readTime}</span>
                                </div>
                                <span className="mt-8 inline-flex items-center gap-2 text-sm text-gradient-gold">
                                    Read article{" "}
                                    <span className="transition-transform group-hover:translate-x-1">→</span>
                                </span>
                            </div>
                        </div>
                    </Link>
                </div>
            </section>

            {/* Categories */}
            <section className="px-6 pb-10">
                <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-2">
                    {blogCategories.map((c) => (
                        <button
                            key={c}
                            onClick={() => setCat(c)}
                            className={`relative rounded-full border px-5 py-2 text-xs uppercase tracking-widest transition-all ${cat === c
                                    ? "border-primary/60 bg-primary/10 text-foreground"
                                    : "hairline text-muted-foreground hover:border-primary/40 hover:text-foreground"
                                }`}
                        >
                            {c}
                        </button>
                    ))}
                </div>
            </section>

            {/* Grid */}
            <section className="px-6 pb-28">
                <div className="mx-auto max-w-7xl">
                    <AnimatePresence mode="popLayout">
                        <motion.div
                            key={cat}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.4 }}
                            className="grid gap-7 md:grid-cols-2 lg:grid-cols-3"
                        >
                            {rest.map((b, i) => (
                                <motion.article
                                    key={b.slug}
                                    initial={{ opacity: 0, y: 24 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: i * 0.06 }}
                                    whileHover={{ y: -6 }}
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
                                            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                                            <div className="absolute left-5 top-5 rounded-full border border-primary/40 bg-background/60 px-3 py-1 text-[10px] uppercase tracking-widest backdrop-blur-md">
                                                {b.category}
                                            </div>
                                        </div>
                                        <div className="p-7">
                                            <h3 className="text-xl leading-snug transition-colors group-hover:text-gradient-gold">
                                                {b.title}
                                            </h3>
                                            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                                                {b.excerpt}
                                            </p>
                                            <div className="mt-6 flex items-center gap-3 text-[11px] uppercase tracking-widest text-muted-foreground">
                                                <span>{b.date}</span>
                                                <span className="h-1 w-1 rounded-full bg-primary/50" />
                                                <span>{b.readTime}</span>
                                            </div>
                                        </div>
                                    </Link>
                                </motion.article>
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </section>
        </PageShell>
    );
}
