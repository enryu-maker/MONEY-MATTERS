import { Mail, MapPin, Phone } from "lucide-react";
import { site } from "@/lib/site-data";

export function ContactDetails() {
  return (
    <section className="section-pad">
      <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
        <a
          href={`tel:${site.phoneTel}`}
          className="rounded-2xl border hairline bg-card p-7 shadow-[var(--shadow-soft)] transition-shadow hover:shadow-[var(--shadow-card)]"
        >
          <Phone className="h-5 w-5 text-primary" />
          <p className="mt-4 text-xs uppercase tracking-widest text-muted-foreground">Call us</p>
          <p className="mt-2 font-display text-2xl font-semibold">{site.phone}</p>
          <p className="mt-2 text-sm text-muted-foreground">Sun – Thu · 9am to 6pm GST</p>
        </a>
        <a
          href={`mailto:${site.email}`}
          className="rounded-2xl border hairline bg-card p-7 shadow-[var(--shadow-soft)] transition-shadow hover:shadow-[var(--shadow-card)]"
        >
          <Mail className="h-5 w-5 text-primary" />
          <p className="mt-4 text-xs uppercase tracking-widest text-muted-foreground">Email</p>
          <p className="mt-2 font-display text-xl font-semibold break-all">{site.email}</p>
          <p className="mt-2 text-sm text-muted-foreground">We respond within one business day</p>
        </a>
        <div className="rounded-2xl border hairline bg-card p-7 shadow-[var(--shadow-soft)]">
          <MapPin className="h-5 w-5 text-primary" />
          <p className="mt-4 text-xs uppercase tracking-widest text-muted-foreground">Visit</p>
          <p className="mt-2 text-base leading-relaxed">
            {site.address}
            <br />
            {site.poBox}
          </p>
        </div>
      </div>
    </section>
  );
}
