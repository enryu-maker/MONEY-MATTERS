import type { MetadataRoute } from "next";
import { defaultDescription, siteUrl } from "@/lib/seo";
import { site } from "@/lib/site-data";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${site.name} — ${site.tagline}`,
    short_name: site.name,
    description: defaultDescription,
    start_url: "/",
    scope: "/",
    id: siteUrl,
    display: "standalone",
    background_color: "#fcfcfb",
    theme_color: "#b91c1c",
    orientation: "portrait-primary",
    lang: "en-AE",
    categories: ["finance", "business"],
    icons: [
      { src: "/icon.png", sizes: "32x32", type: "image/png" },
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
      { src: "/apple-icon.png", sizes: "180x180", type: "image/png", purpose: "any" },
    ],
  };
}
