import Link from "next/link";
import { Logo } from "./Logo";
import { MessageCircle, Phone } from "lucide-react";
import { aboutNav, site } from "@/lib/site-data";

const navigateLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Calculator", href: "/calculator" },
  // { label: "Blog", href: "/blog" },
  { label: "FAQ's", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="mt-auto border-t hairline bg-background">
      <div className="mx-auto max-w-7xl px-4 pb-[max(6rem,calc(4.5rem+env(safe-area-inset-bottom)))] pt-10 md:px-6 md:pb-10 md:pt-14 lg:pb-10">
        <div className="flex flex-col gap-10 lg:grid lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <Logo size="footer" />
            <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
              Money Matters Mortgage Brokers is affiliated with major banking partners across the UAE.
              Licensed under the Dubai Economy Department since {site.founded}.
            </p>
            <div className="mt-6 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap">
              <a
                href={`https://wa.me/${site.phoneWhatsAppTel.replace("+", "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-medium text-white sm:justify-start"
              >
                <MessageCircle className="h-4 w-4 shrink-0" />
                WhatsApp
              </a>
              <a
                href={`tel:${site.phoneLandlineTel}`}
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border hairline bg-card px-5 py-2.5 text-sm font-medium sm:justify-start"
              >
                <Phone className="h-4 w-4 shrink-0 text-primary" />
                {site.phoneLandline}
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:gap-10 lg:col-span-7 lg:grid-cols-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-foreground">
                Navigate
              </p>
              <ul className="mt-4 space-y-2.5">
                {navigateLinks.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className={`inline-flex min-h-9 items-center text-sm hover:text-primary ${
                        l.href === "/" ? "font-medium text-foreground" : "text-muted-foreground"
                      }`}
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-foreground">
                About
              </p>
              <ul className="mt-4 space-y-2.5">
                {aboutNav.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="inline-flex min-h-9 items-center text-sm text-muted-foreground hover:text-primary"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <p className="text-xs font-semibold uppercase tracking-widest text-foreground">
                Contact
              </p>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground">
                <li className="max-w-xs break-words">
                  {site.address}
                  <br />
                  {site.poBox}
                </li>
                <li>
                  <a
                    href={`tel:${site.phoneLandlineTel}`}
                    className="inline-flex min-h-9 items-center font-medium text-foreground hover:text-primary"
                  >
                    {site.phoneLandline}
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${site.email}`}
                    className="inline-flex min-h-9 items-center break-all font-medium text-foreground hover:text-primary"
                  >
                    {site.email}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t hairline pt-8 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between md:mt-12">
          <p className="leading-relaxed" suppressHydrationWarning>
            © {new Date().getFullYear()} {site.name} Mortgage Brokers · All rights reserved
          </p>
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            <li>
              <a
                href={site.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-9 items-center hover:text-primary"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href={site.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-9 items-center hover:text-primary"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href={site.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-9 items-center hover:text-primary"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <Link href="/privacy-policy" className="inline-flex min-h-9 items-center hover:text-primary">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
