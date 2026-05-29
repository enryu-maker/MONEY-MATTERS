import { PageBanner } from "@/components/site/PageBanner";
import { AboutIntro } from "@/components/site/AboutIntro";
import { WhyUs } from "@/components/site/WhyUs";
import { TeamSection } from "@/components/site/TeamSection";
import { about } from "@/lib/site-data";
import { breadcrumbJsonLd, pageSeo } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata = pageSeo.about;

export default function AboutPage() {
  return (
    <main>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ])}
      />
      <PageBanner eyebrow="About" title="Our company" description={about.intro} />
      <AboutIntro />
      <TeamSection showViewAll />
      <WhyUs />
    </main>
  );
}
