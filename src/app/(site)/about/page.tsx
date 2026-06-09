import { PageBanner } from "@/components/site/PageBanner";
import { AboutIntro } from "@/components/site/AboutIntro";
import { WhyUs } from "@/components/site/WhyUs";
import { GallerySection } from "@/components/site/GallerySection";
import { TeamSection } from "@/components/site/TeamSection";
import { about } from "@/lib/site-data";
import { breadcrumbJsonLd, pageSeo, webPageJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata = pageSeo.about;

export default function AboutPage() {
  return (
    <main>
      <JsonLd
        data={[
          webPageJsonLd({
            name: "About Money Matters — Licensed UAE Mortgage Brokers",
            path: "/about",
            description: pageSeo.about.description ?? about.intro,
          }),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
          ]),
        ]}
      />
      <PageBanner eyebrow="About" title="Our company" description={about.intro} />
      <AboutIntro />
      <TeamSection showViewAll />
      <GallerySection />
      <WhyUs />
    </main>
  );
}
