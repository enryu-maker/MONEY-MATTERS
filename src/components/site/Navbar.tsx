"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";

type NavLink = { label: string; href?: string };

const aboutItems: { label: string; href: string; desc: string }[] = [
    { label: "Profile", href: "/about/profile", desc: "Our story, principles & boutique approach" },
    { label: "Team", href: "/about/team", desc: "Senior advisors with decades of UAE expertise" },
    { label: "Our Partners", href: "/about/partners", desc: "Direct access to every major UAE bank" },
    { label: "Our Clients", href: "/about/clients", desc: "Residents, non-residents & corporates" },
];

const primary: (NavLink | { label: "About"; dropdown: true })[] = [
    { label: "Home", href: "/" },
    { label: "About", dropdown: true } as const,
    { label: "Blogs", href: "/blogs" },
    { label: "Services", href: "/#services" },
    { label: "Calculator", href: "/#calculator" },
    { label: "Career", href: "/career" },
    { label: "FAQ's", href: "/faq" },
    { label: "Contact", href: "/#contact" },
];

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);
    const [aboutOpen, setAboutOpen] = useState(false);
    const [mobileAbout, setMobileAbout] = useState(false);
    const pathname = usePathname();
    const hash = typeof window !== "undefined" ? window.location.hash : "";

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 24);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setOpen(false);
        setAboutOpen(false);
        setMobileAbout(false);
    }, [pathname, hash]);

    const isAboutActive = pathname.startsWith("/about");

    return (
        <motion.header
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled || open ? "py-3" : "py-5"}`}
        >
            <div className="mx-auto max-w-7xl px-4 md:px-6">
                <div
                    className={`flex items-center justify-between rounded-full px-4 py-2.5 md:px-6 md:py-3 transition-all duration-500 ${scrolled || open ? "glass-strong shadow-[0_10px_40px_-15px_rgba(0,0,0,0.6)]" : ""
                        }`}
                >
                    <Link href="/" className="flex items-center gap-2.5">
                        <span className="grid h-8 w-8 place-items-center rounded-full border border-primary/30 bg-primary/5">
                            <span className="font-display text-base text-gradient-gold">M</span>
                        </span>
                        <span className="font-display text-lg tracking-tight">
                            Money <span className="text-gradient-gold">Matters</span>
                        </span>
                    </Link>

                    <nav className="hidden items-center gap-1 lg:flex">
                        {primary.map((item) => {
                            if ("dropdown" in item) {
                                return (
                                    <div
                                        key="about"
                                        className="relative"
                                        onMouseEnter={() => setAboutOpen(true)}
                                        onMouseLeave={() => setAboutOpen(false)}
                                    >
                                        <button
                                            className={`inline-flex items-center gap-1 rounded-full px-3 py-1.5 text-sm transition-colors ${isAboutActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                                                }`}
                                        >
                                            About
                                            <ChevronDown
                                                className={`h-3.5 w-3.5 transition-transform duration-300 ${aboutOpen ? "rotate-180" : ""}`}
                                            />
                                        </button>
                                        <AnimatePresence>
                                            {aboutOpen && (
                                                <motion.div
                                                    initial={{ opacity: 0, y: 8, scale: 0.98 }}
                                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                                    exit={{ opacity: 0, y: 8, scale: 0.98 }}
                                                    transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                                                    className="absolute left-1/2 top-full z-50 mt-3 w-[380px] -translate-x-1/2"
                                                >
                                                    <div className="glass-strong rounded-2xl p-2 shadow-[var(--shadow-luxe)]">
                                                        <div className="absolute -top-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rotate-45 border-l border-t hairline bg-background/60 backdrop-blur" />
                                                        {aboutItems.map((a) => (
                                                            <Link
                                                                key={a.href}
                                                                href={a.href}
                                                                className="group flex flex-col gap-0.5 rounded-xl px-4 py-3 transition-colors hover:bg-primary/10"
                                                            >
                                                                <span className="text-sm text-foreground group-hover:text-gradient-gold">
                                                                    {a.label}
                                                                </span>
                                                                <span className="text-xs text-muted-foreground">{a.desc}</span>
                                                            </Link>
                                                        ))}
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                );
                            }
                            const active =
                                item.href === "/"
                                    ? pathname === "/" && !hash
                                    : item.href?.startsWith("/#")
                                        ? pathname === "/" && hash === item.href.replace("/", "")
                                        : pathname === item.href;
                            return (
                                <Link
                                    key={item.label}
                                    href={item.href!}
                                    className={`rounded-full px-3 py-1.5 text-sm transition-colors ${active ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                                        }`}
                                >
                                    {item.label}
                                </Link>
                            );
                        })}
                    </nav>

                    <div className="flex items-center gap-2">
                        <Link
                            href="/#contact"
                            className="hidden rounded-full border border-primary/40 bg-primary/10 px-4 py-2 text-xs md:inline-block hover:border-primary/70 hover:bg-primary/15 transition-all"
                        >
                            Book Consultation
                        </Link>
                        <button
                            aria-label="Menu"
                            onClick={() => setOpen((v) => !v)}
                            className="grid h-9 w-9 place-items-center rounded-full border hairline lg:hidden"
                        >
                            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
                        </button>
                    </div>
                </div>

                {/* Mobile menu */}
                <AnimatePresence>
                    {open && (
                        <motion.div
                            initial={{ opacity: 0, y: -8, height: 0 }}
                            animate={{ opacity: 1, y: 0, height: "auto" }}
                            exit={{ opacity: 0, y: -8, height: 0 }}
                            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                            className="mt-3 overflow-hidden rounded-2xl glass-strong lg:hidden"
                        >
                            <div className="flex flex-col p-3">
                                {primary.map((item) => {
                                    if ("dropdown" in item) {
                                        return (
                                            <div key="m-about" className="rounded-xl">
                                                <button
                                                    onClick={() => setMobileAbout((v) => !v)}
                                                    className="flex w-full items-center justify-between px-4 py-3 text-sm text-foreground"
                                                >
                                                    About
                                                    <ChevronDown
                                                        className={`h-4 w-4 transition-transform ${mobileAbout ? "rotate-180" : ""}`}
                                                    />
                                                </button>
                                                <AnimatePresence>
                                                    {mobileAbout && (
                                                        <motion.div
                                                            initial={{ height: 0, opacity: 0 }}
                                                            animate={{ height: "auto", opacity: 1 }}
                                                            exit={{ height: 0, opacity: 0 }}
                                                            transition={{ duration: 0.3 }}
                                                            className="overflow-hidden pl-3"
                                                        >
                                                            {aboutItems.map((a) => (
                                                                <Link
                                                                    key={a.href}
                                                                    href={a.href}
                                                                    className="block rounded-lg px-4 py-2.5 text-sm text-muted-foreground hover:bg-primary/10 hover:text-foreground"
                                                                >
                                                                    {a.label}
                                                                </Link>
                                                            ))}
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </div>
                                        );
                                    }
                                    return (
                                        <Link
                                            key={item.label}
                                            href={item.href!}
                                            className="rounded-xl px-4 py-3 text-sm text-muted-foreground hover:bg-primary/10 hover:text-foreground"
                                        >
                                            {item.label}
                                        </Link>
                                    );
                                })}
                                <Link
                                    href="/#contact"
                                    className="mt-2 rounded-full bg-[var(--grad-gold)] px-4 py-3 text-center text-sm font-medium text-primary-foreground"
                                >
                                    Book Consultation
                                </Link>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.header>
    );
}
