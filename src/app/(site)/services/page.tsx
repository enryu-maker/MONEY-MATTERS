import { PageBanner } from "@/components/site/PageBanner";
import { Services } from "@/components/site/Services";
import { BankMarquee } from "@/components/site/BankMarquee";
import { breadcrumbJsonLd, pageSeo } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata = pageSeo.services;

export default function ServicesPage() {
  return (
    <main>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
        ])}
      />
      <PageBanner
        eyebrow="Services"
        title="Our services"
        description="Mortgages for all kinds of properties — retail and corporate, residential and commercial."
      />
      <Services />
      <BankMarquee label="Meet our banking partners" />
    </main>
  );
}
