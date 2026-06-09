import { PageBanner } from "@/components/site/PageBanner";
import { Calculator } from "@/components/site/Calculator";
import { breadcrumbJsonLd, calculatorWebAppJsonLd, pageSeo } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata = pageSeo.calculator;

export default function CalculatorPage() {
  return (
    <main>
      <JsonLd
        data={[
          calculatorWebAppJsonLd(),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Calculator", path: "/calculator" },
          ]),
        ]}
      />
      <PageBanner
        eyebrow="Calculator"
        title="Calculate your mortgage instantly"
        description="An online tool to help you calculate monthly mortgage payments and estimate overall affordability."
      />
      <Calculator />
    </main>
  );
}
