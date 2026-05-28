import { PageMotion } from "@/components/site/PageMotion";
import { SiteShell } from "@/components/site/SiteShell";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <SiteShell>
      <PageMotion>{children}</PageMotion>
    </SiteShell>
  );
}
