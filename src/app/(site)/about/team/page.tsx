import { PageBanner } from "@/components/site/PageBanner";
import { TeamSection } from "@/components/site/TeamSection";
import { breadcrumbJsonLd, pageSeo } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata = pageSeo.team;

export default function TeamPage() {
  return (
    <main>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
          { name: "Our team", path: "/about/team" },
        ])}
      />
      <PageBanner
        eyebrow="About / Team"
        title="Our team"
        description="We would be happy to assist you with expert mortgage advice across the UAE."
      />
      <TeamSection showAll />
    </main>
  );
}
