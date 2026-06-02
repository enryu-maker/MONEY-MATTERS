import { PageBanner } from "@/components/site/PageBanner";
import { PartnersSection } from "@/components/site/PartnersSection";
import { breadcrumbJsonLd, pageSeo } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata = pageSeo.partners;

export default function PartnersPage() {
  return (
    <main>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
          { name: "Partners", path: "/about/partners" },
        ])}
      />
      <PageBanner
        eyebrow="About / Partners"
        title="Our partners"
        description="Partnered with major UAE banks since 2016 — plus trusted industry partners across the region."
      />
      <PartnersSection />
    </main>
  );
}
