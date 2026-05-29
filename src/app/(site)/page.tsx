import { Hero } from "@/components/site/Hero";
import { BankMarquee } from "@/components/site/BankMarquee";
import { ServicesPreview } from "@/components/site/ServicesPreview";
import { Testimonials } from "@/components/site/Testimonials";
import { ContactCTA } from "@/components/site/ContactCTA";
import { site } from "@/lib/site-data";
import { pageSeo } from "@/lib/seo";

export const metadata = pageSeo.home;

export default function HomePage() {
  return (
    <main>
      <Hero />
      <BankMarquee label={`Affiliated with major UAE banks since ${site.founded}`} />
      <ServicesPreview />
      <Testimonials />
      <ContactCTA />
    </main>
  );
}
