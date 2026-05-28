import Link from "next/link";
import { Logo } from "./Logo";
import { MessageCircle, Phone } from "lucide-react";
import { aboutNav, site } from "@/lib/site-data";

const nav = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Calculator", href: "/calculator" },
  { label: "FAQ's", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="border-t hairline bg-background">
      <div className="section-pad !pb-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-5">
              <Logo size="footer" />
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
                Boutique mortgage consultancy affiliated with major banks across the UAE. Licensed
                under the Dubai Economy Department since {site.founded}.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                <a
                  href={`https://wa.me/${site.phoneTel.replace("+", "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-2 text-sm font-medium text-white"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </a>
                <a
                  href={`tel:${site.phoneTel}`}
                  className="inline-flex items-center gap-2 rounded-full border hairline px-4 py-2 text-sm font-medium"
                >
                  <Phone className="h-4 w-4 text-primary" />
                  Book a call
                </a>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8 md:col-span-7">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-foreground">Navigate</p>
                <ul className="mt-4 space-y-2">
                  {nav.map((l) => (
                    <li key={l.label}>
                      <Link href={l.href} className="text-sm text-muted-foreground hover:text-primary">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                  <li className="pt-2">
                    <p className="text-sm font-medium text-foreground">About</p>
                    <ul className="mt-2 space-y-2 pl-0">
                      {aboutNav.map((l) => (
                        <li key={l.href}>
                          <Link
                            href={l.href}
                            className="text-sm text-muted-foreground hover:text-primary"
                          >
                            {l.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                </ul>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-foreground">Contact</p>
                <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                  <li>
                    {site.address}. {site.poBox}
                  </li>
                  <li>
                    <a href={`tel:${site.phoneTel}`} className="hover:text-primary">
                      {site.phone}
                    </a>
                  </li>
                  <li>
                    <a href={`mailto:${site.email}`} className="hover:text-primary">
                      {site.email}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-12 flex flex-col gap-3 border-t hairline pt-8 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} {site.name} Mortgage Brokers · All rights reserved</p>
            <div className="flex gap-4">
              <a href={site.social.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                Facebook
              </a>
              <a href={site.social.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                Instagram
              </a>
              <a href={site.social.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                LinkedIn
              </a>
              <a href={site.privacyUrl} className="hover:text-primary">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
