import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Disable image optimizer cache so new local assets appear immediately.
    unoptimized: true,
  },
  async redirects() {
    return [
      { source: "/faqs", destination: "/faq", permanent: true },
      { source: "/faq-s", destination: "/faq", permanent: true },
      { source: "/privacy", destination: "/privacy-policy", permanent: true },
      { source: "/privacy-policy/", destination: "/privacy-policy", permanent: true },
      { source: "/mortgage-calculator", destination: "/calculator", permanent: true },
      { source: "/emi-calculator", destination: "/calculator", permanent: true },
      { source: "/about-us", destination: "/about", permanent: true },
      { source: "/our-team", destination: "/about/team", permanent: true },
      { source: "/our-partners", destination: "/about/partners", permanent: true },
      { source: "/home", destination: "/", permanent: true },
      { source: "/index", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
