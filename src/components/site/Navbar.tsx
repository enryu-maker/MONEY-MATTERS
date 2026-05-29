"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Calculator,
  ChevronDown,
  BookOpen,
  HelpCircle,
  Home,
  Landmark,
  Mail,
  Menu,
  Phone,
  Users,
  X,
  type LucideIcon,
} from "lucide-react";
import { AboutMegaMenu } from "./AboutMegaMenu";
import { Logo } from "./Logo";
import { site } from "@/lib/site-data";

const mainLinks: { label: string; href: string; icon: LucideIcon }[] = [
  { label: "Home", href: "/", icon: Home },
  { label: "Services", href: "/services", icon: Landmark },
  { label: "Calculator", href: "/calculator", icon: Calculator },
  { label: "Blog", href: "/blog", icon: BookOpen },
  { label: "FAQ's", href: "/faq", icon: HelpCircle },
  { label: "Contact", href: "/contact", icon: Mail },
];

const spring = { type: "spring" as const, stiffness: 380, damping: 32 };
const easeOut = [0.16, 1, 0.3, 1] as const;

const backdropVariants = {
  hidden: { opacity: 0, backdropFilter: "blur(0px)" },
  visible: {
    opacity: 1,
    backdropFilter: "blur(8px)",
    transition: { duration: 0.35, ease: easeOut },
  },
  exit: { opacity: 0, backdropFilter: "blur(0px)", transition: { duration: 0.25 } },
};

const drawerVariants = {
  hidden: { x: "100%", boxShadow: "0 0 0 rgba(0,0,0,0)" },
  visible: {
    x: 0,
    boxShadow: "-24px 0 48px rgba(0,0,0,0.12)",
    transition: { ...spring, staggerChildren: 0.055, delayChildren: 0.06 },
  },
  exit: { x: "100%", transition: { duration: 0.28, ease: easeOut } },
};

const fadeSlideRight = {
  hidden: { opacity: 0, x: 28, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: { ...spring, opacity: { duration: 0.25 } },
  },
  exit: { opacity: 0, x: 16, transition: { duration: 0.15 } },
};

function cn(...classes: (string | false | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

type NavbarProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function Navbar({ open, onOpenChange }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [aboutMobileOpen, setAboutMobileOpen] = useState(false);
  const aboutRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pathname = usePathname();

  const aboutActive = pathname.startsWith("/about");
  const setOpen = onOpenChange;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    onOpenChange(false);
    setAboutOpen(false);
    setAboutMobileOpen(false);
  }, [pathname, onOpenChange]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!aboutOpen) return;
    const onPointerDown = (e: PointerEvent) => {
      if (aboutRef.current && !aboutRef.current.contains(e.target as Node)) {
        setAboutOpen(false);
      }
    };
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [aboutOpen]);

  const openAbout = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setAboutOpen(true);
  };

  const scheduleCloseAbout = () => {
    closeTimer.current = setTimeout(() => setAboutOpen(false), 120);
  };

  const isActive = (href: string, exact = false) => {
    if (href === "/") return pathname === "/";
    return exact ? pathname === href : pathname === href || pathname.startsWith(`${href}/`);
  };

  const navPill = (href: string, label: string, exact = false) => {
    const active = isActive(href, exact);
    return (
      <Link
        href={href}
        className={cn(
          "relative rounded-full px-4 py-2 text-sm font-medium transition-all duration-200",
          active
            ? "bg-background text-foreground shadow-sm"
            : "text-muted-foreground hover:text-foreground",
        )}
      >
        {label}
      </Link>
    );
  };

  return (
    <header className="sticky top-0 z-50">
      <motion.div
        layout
        className={cn(
          "transition-[padding] duration-300",
          scrolled ? "px-3 py-2 md:px-4" : "px-0 py-0",
        )}
      >
        <motion.div
          layout
          transition={spring}
          className={cn(
            "mx-auto flex max-w-7xl items-center justify-between gap-4",
            scrolled
              ? "rounded-2xl border hairline bg-background/95 px-3 py-2 shadow-[var(--shadow-card)] backdrop-blur-xl md:px-4"
              : "border-b hairline bg-background px-4 py-3 md:px-6",
          )}
        >
          <motion.div
            className="relative z-10 shrink-0"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={spring}
          >
            <Logo />
          </motion.div>

          <nav
            className="hidden items-center gap-1 rounded-full border hairline bg-muted/50 p-1 lg:flex"
            aria-label="Main"
          >
            {navPill("/", "Home")}

            <div
              ref={aboutRef}
              className="relative"
              onMouseEnter={openAbout}
              onMouseLeave={scheduleCloseAbout}
            >
              <button
                type="button"
                aria-expanded={aboutOpen}
                aria-haspopup="true"
                onClick={() => setAboutOpen((v) => !v)}
                className={cn(
                  "inline-flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition-all duration-200",
                  aboutActive
                    ? "bg-background text-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                About
                <motion.span animate={{ rotate: aboutOpen ? 180 : 0 }} transition={spring}>
                  <ChevronDown className="h-3.5 w-3.5" />
                </motion.span>
              </button>

              <AnimatePresence>
                {aboutOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.96 }}
                    transition={{ duration: 0.22, ease: easeOut }}
                    className="absolute left-1/2 top-[calc(100%+0.5rem)] z-50 w-[min(22rem,calc(100vw-2rem))] -translate-x-1/2"
                    onMouseEnter={openAbout}
                    onMouseLeave={scheduleCloseAbout}
                  >
                    <div className="overflow-hidden rounded-2xl border hairline bg-background shadow-[var(--shadow-card)]">
                      <AboutMegaMenu pathname={pathname} onNavigate={() => setAboutOpen(false)} />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {mainLinks.slice(1, -1).map((l) => (
              <span key={l.href}>{navPill(l.href, l.label)}</span>
            ))}
          </nav>

          <div className="hidden items-center gap-2 lg:flex">
            <a
              href={`tel:${site.phoneLandlineTel}`}
              className="inline-flex items-center gap-2 rounded-full border hairline px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-primary/30 hover:bg-secondary"
            >
              <Phone className="h-4 w-4 text-primary" />
              <span className="hidden xl:inline">{site.phoneLandline}</span>
              <span className="xl:hidden">Call</span>
            </a>
            <Link
              href="/contact"
              className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-cta)] transition-opacity hover:opacity-90"
            >
              Contact Now
            </Link>
          </div>

          <motion.button
            type="button"
            aria-label="Open menu"
            aria-expanded={open}
            className={cn(
              "relative grid h-11 w-11 place-items-center overflow-hidden rounded-xl border hairline bg-background lg:hidden",
              open && "pointer-events-none invisible",
            )}
            onClick={() => setOpen(true)}
            whileHover={{ scale: 1.05, borderColor: "var(--primary)" }}
            whileTap={{ scale: 0.92 }}
            transition={spring}
          >
            <motion.span
              className="absolute inset-0 bg-primary/5"
              initial={{ scale: 0, opacity: 0 }}
              whileHover={{ scale: 1.5, opacity: 1 }}
              transition={{ duration: 0.4 }}
            />
            <motion.div
              animate={{ rotate: [0, -8, 8, 0] }}
              transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 4 }}
            >
              <Menu className="relative h-5 w-5" />
            </motion.div>
          </motion.button>
        </motion.div>
      </motion.div>

      <AnimatePresence mode="wait">
        {open && (
          <>
            <motion.button
              type="button"
              aria-label="Close menu"
              variants={backdropVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed inset-0 z-[60] bg-foreground/40 lg:hidden"
              onClick={() => setOpen(false)}
            />
            <motion.aside
              variants={drawerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed inset-y-0 right-0 z-[70] flex w-full max-w-[min(100%,20.5rem)] flex-col overflow-hidden bg-background lg:hidden"
              style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
            >
              <motion.div
                variants={fadeSlideRight}
                className="relative flex shrink-0 items-center justify-between border-b hairline px-4 py-4"
              >
                <motion.span
                  className="font-display text-lg font-semibold"
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, ...spring }}
                >
                  Menu
                </motion.span>
                <motion.button
                  type="button"
                  aria-label="Close menu"
                  className="grid h-11 w-11 place-items-center rounded-xl border hairline bg-secondary/50"
                  onClick={() => setOpen(false)}
                  whileHover={{ scale: 1.08, rotate: 90, backgroundColor: "var(--secondary)" }}
                  whileTap={{ scale: 0.9, rotate: 0 }}
                  transition={spring}
                >
                  <X className="h-5 w-5" />
                </motion.button>
                <motion.div
                  className="pointer-events-none absolute bottom-0 left-4 right-4 h-px bg-primary/30"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.2, duration: 0.5, ease: easeOut }}
                />
              </motion.div>

              <nav className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-3 py-4" aria-label="Mobile">
                <motion.ul
                  className="space-y-1.5"
                  variants={{
                    hidden: {},
                    visible: { transition: { staggerChildren: 0.07, delayChildren: 0.14 } },
                  }}
                  initial="hidden"
                  animate="visible"
                >
                  <MobileNavLink
                    href="/"
                    label="Home"
                    icon={Home}
                    active={isActive("/")}
                    onNavigate={() => setOpen(false)}
                  />

                  <motion.li variants={fadeSlideRight}>
                    <motion.button
                      type="button"
                      aria-expanded={aboutMobileOpen}
                      onClick={() => setAboutMobileOpen((v) => !v)}
                      className={cn(
                        "flex min-h-[3rem] w-full items-center gap-3 rounded-xl px-4 text-base font-medium",
                        aboutActive ? "bg-primary/10 text-primary" : "text-foreground",
                      )}
                      whileHover={{ x: 4, backgroundColor: "var(--secondary)" }}
                      whileTap={{ scale: 0.98 }}
                      transition={spring}
                    >
                      <MobileIconBox icon={Users} active={aboutActive} />
                      <span className="flex-1 text-left">About</span>
                      <motion.span
                        animate={{ rotate: aboutMobileOpen ? 180 : 0 }}
                        transition={spring}
                      >
                        <ChevronDown className="h-5 w-5 shrink-0 opacity-60" />
                      </motion.span>
                    </motion.button>
                    <AnimatePresence initial={false}>
                      {aboutMobileOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35, ease: easeOut }}
                          className="overflow-hidden"
                        >
                          <AboutMegaMenu
                            pathname={pathname}
                            variant="mobile"
                            animated
                            onNavigate={() => {
                              setOpen(false);
                              setAboutMobileOpen(false);
                            }}
                          />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.li>

                  {mainLinks.slice(1).map((l) => (
                    <MobileNavLink
                      key={l.href}
                      href={l.href}
                      label={l.label}
                      icon={l.icon}
                      active={isActive(l.href)}
                      onNavigate={() => setOpen(false)}
                    />
                  ))}
                </motion.ul>
              </nav>

              <motion.div
                variants={fadeSlideRight}
                className="shrink-0 space-y-3 border-t hairline bg-background px-4 py-5"
              >
                <motion.a
                  href={`tel:${site.phoneLandlineTel}`}
                  className="flex min-h-[3rem] items-center justify-center gap-2 rounded-xl border hairline bg-card text-sm font-semibold"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  transition={spring}
                >
                  <motion.span
                    animate={{ rotate: [0, -12, 12, 0] }}
                    transition={{ duration: 0.6, repeat: Infinity, repeatDelay: 3 }}
                  >
                    <Phone className="h-4 w-4 text-primary" />
                  </motion.span>
                  {site.phoneLandline}
                </motion.a>
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }} transition={spring}>
                  <Link
                    href="/contact"
                    className="flex min-h-[3rem] items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground shadow-[var(--shadow-cta)]"
                    onClick={() => setOpen(false)}
                  >
                    Contact Now
                  </Link>
                </motion.div>
              </motion.div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}

function MobileIconBox({ icon: Icon, active }: { icon: LucideIcon; active: boolean }) {
  return (
    <motion.span
      className={cn(
        "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg",
        active ? "bg-primary/15 text-primary" : "bg-secondary text-muted-foreground",
      )}
      whileHover={{ scale: 1.1, rotate: 5 }}
      whileTap={{ scale: 0.9 }}
      transition={spring}
    >
      <Icon className="h-4 w-4" />
    </motion.span>
  );
}

function MobileNavLink({
  href,
  label,
  icon: Icon,
  active,
  onNavigate,
}: {
  href: string;
  label: string;
  icon: LucideIcon;
  active: boolean;
  onNavigate: () => void;
}) {
  return (
    <motion.li variants={fadeSlideRight}>
      <Link href={href} onClick={onNavigate} className="block">
        <motion.span
          className={cn(
            "relative flex min-h-[3rem] items-center gap-3 overflow-hidden rounded-xl px-4 text-base font-medium",
            active ? "bg-primary/10 text-primary" : "text-foreground",
          )}
          whileHover={{ x: 6 }}
          whileTap={{ scale: 0.98 }}
          transition={spring}
        >
          {active && (
            <motion.span
              layoutId="mobile-nav-active"
              className="absolute inset-0 rounded-xl bg-primary/10"
              transition={spring}
            />
          )}
          <MobileIconBox icon={Icon} active={active} />
          <span className="relative">{label}</span>
          {active && (
            <motion.span
              className="relative ml-auto h-2 w-2 rounded-full bg-primary"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={spring}
            />
          )}
        </motion.span>
      </Link>
    </motion.li>
  );
}
