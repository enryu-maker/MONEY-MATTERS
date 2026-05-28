import consult from "@/assets/consult.jpg";
import { about, site } from "@/lib/site-data";

export function AboutIntro() {
  return (
    <section className="section-pad">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
        <div className="overflow-hidden rounded-2xl border hairline shadow-[var(--shadow-card)]">
          <img
            src={consult.src}
            alt="Money Matters mortgage consultants in Dubai, UAE"
            className="aspect-[4/3] w-full object-cover"
          />
        </div>
        <div>
          <h2 className="font-display text-3xl font-semibold md:text-4xl">About Us</h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">{about.intro}</p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">{about.detail}</p>
          <dl className="mt-8 grid grid-cols-2 gap-4">
            <div className="rounded-xl border hairline bg-card p-4">
              <dt className="text-xs uppercase tracking-widest text-muted-foreground">Founded</dt>
              <dd className="mt-1 font-display text-2xl font-semibold text-primary">{site.founded}</dd>
            </div>
            <div className="rounded-xl border hairline bg-card p-4">
              <dt className="text-xs uppercase tracking-widest text-muted-foreground">Licensed</dt>
              <dd className="mt-1 font-display text-lg font-semibold">DED · Dubai</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
