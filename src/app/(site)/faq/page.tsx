import { PageBanner } from "@/components/site/PageBanner";
import { FAQ } from "@/components/site/FAQ";
import { breadcrumbJsonLd, faqPageJsonLd, pageSeo } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata = pageSeo.faq;

export default function FaqPage() {
  return (
    <main>
      <JsonLd data={[faqPageJsonLd(), breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "FAQ", path: "/faq" }])]} />
      <PageBanner
        eyebrow="FAQ's"
        title="We would be happy to assist you"
        description="We have great answers — ask us anything about mortgages in the UAE."
      />
      <FAQ />
    </main>
  );
}
