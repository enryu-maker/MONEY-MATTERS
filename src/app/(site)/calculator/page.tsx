import { PageBanner } from "@/components/site/PageBanner";
import { Calculator } from "@/components/site/Calculator";
import { site } from "@/lib/site-data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `Mortgage Calculator — ${site.name}`,
  description:
    "Calculate your mortgage instantly. Estimate monthly payments and overall affordability for UAE property finance.",
};

export default function CalculatorPage() {
  return (
    <main>
      <PageBanner
        eyebrow="Calculator"
        title="Calculate your mortgage instantly"
        description="An online tool to help you calculate monthly mortgage payments and estimate overall affordability."
      />
      <Calculator />
    </main>
  );
}
