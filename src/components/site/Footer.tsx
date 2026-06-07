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
      <div className="section-container px-4 pb-[max(5.5rem,calc(4.5rem+env(safe-area-inset-bottom)))] pt-8 sm:px-6 sm:pb-10 sm:pt-10 md:pt-12 lg:px-8 lg:pb-10 lg:pt-14">
        <div className="flex flex-col gap-8 md:gap-10 lg:grid lg:grid-cols-12 lg:gap-10">
          {/* Brand */}
          <div className="flex flex-col items-center text-center sm:items-start sm:text-left lg:col-span-5">
            <div className="flex justify-center sm:justify-start">
              <Logo size="footer" />
            </div>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
              Money Matters Mortgage Brokers is affiliated with major banking partners across the UAE.
              Licensed under the Dubai Economy Department since {site.founded}.
            </p>
            <div className="mt-5 flex w-full max-w-sm flex-col gap-2.5 sm:max-w-none sm:flex-row sm:flex-wrap">
              <a
                href={`https://wa.me/${site.phoneWhatsAppTel.replace("+", "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-medium text-white sm:w-auto sm:justify-start"
              >
                <MessageCircle className="h-4 w-4 shrink-0" />
                WhatsApp
              </a>
              <a
                href={`tel:${site.phoneLandlineTel}`}
                className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full border hairline bg-card px-5 py-2.5 text-sm font-medium sm:w-auto sm:justify-start"
              >
                <Phone className="h-4 w-4 shrink-0 text-primary" />
                {site.phoneLandline}
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 sm:gap-x-8 md:gap-y-6 lg:col-span-7">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-foreground">
                Navigate
              </p>
              <ul className="mt-3 space-y-2 sm:mt-4 sm:space-y-2.5">
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
              <ul className="mt-3 space-y-2 sm:mt-4 sm:space-y-2.5">
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
              <ul className="mt-3 space-y-2.5 text-sm leading-relaxed text-muted-foreground sm:mt-4 sm:space-y-3">
                <li className="break-words sm:max-w-xs">
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

        {/* Bottom bar */}
        <div className="mt-8 flex flex-col gap-5 border-t hairline pt-6 text-xs text-muted-foreground sm:mt-10 sm:gap-4 md:mt-12 md:flex-row md:items-center md:justify-between md:pt-8">
          <div className="space-y-1.5 text-center sm:space-y-2 md:text-left">
            <p className="leading-relaxed" suppressHydrationWarning>
              © {new Date().getFullYear()} {site.name} Mortgage Brokers · All rights reserved
            </p>
            <p className="leading-relaxed">
              Made with ❤️ by{" "}
              <a
                href="https://nerdtech.in"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-foreground hover:text-primary"
              >
                nerdtech
              </a>
            </p>
          </div>
          <ul className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 sm:gap-x-5 md:justify-end">
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
