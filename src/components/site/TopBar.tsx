import { Mail, MapPin, Phone } from "lucide-react";
import { site } from "@/lib/site-data";

export function TopBar() {
  return (
    <div className="hidden border-b border-white/10 bg-primary text-[11px] text-primary-foreground/90 md:block">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-2 md:px-6">
        <div className="flex flex-wrap items-center gap-5">
          <a
            href={`tel:${site.phoneLandlineTel}`}
            className="inline-flex items-center gap-1.5 font-medium transition-opacity hover:opacity-80"
          >
            <Phone className="h-3.5 w-3.5" aria-hidden />
            {site.phoneLandline}
          </a>
          <span className="text-primary-foreground/80">Mon-Fri 9 am to 6 pm GST</span>
          <a
            href={`mailto:${site.email}`}
            className="inline-flex items-center gap-1.5 transition-opacity hover:opacity-80"
          >
            <Mail className="h-3.5 w-3.5" aria-hidden />
            {site.email}
          </a>
        </div>
        <a
          href={site.addressUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-primary-foreground/80 transition-all hover:text-primary-foreground hover:underline hover:underline-offset-2 active:opacity-70"
        >
          <MapPin className="h-3.5 w-3.5 shrink-0" aria-hidden />
          <span className="truncate">
            {site.address} · {site.poBox}
          </span>
        </a>
      </div>
    </div>
  );
}
