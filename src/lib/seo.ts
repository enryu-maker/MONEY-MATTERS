import type { Metadata } from "next";
import { blogPosts } from "@/lib/blog-data";
import { about, faqs, site, services } from "@/lib/site-data";

/** Canonical production URL — override with NEXT_PUBLIC_SITE_URL when deploying */
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://moneymatters.ae"
).replace(/\/$/, "");

export const brand = {
  legalName: "Money Matters Mortgage Consultant",
  shortName: site.name,
  tagline: site.tagline,
} as const;

/** Primary UAE search intents — used across meta keywords & copy */
export const uaeKeywords = [
  "mortgage broker Dubai",
  "mortgage consultant UAE",
  "home loan Dubai",
  "property finance UAE",
  "mortgage advisor Business Bay",
  "Dubai mortgage rates",
  "UAE home loan calculator",
  "non-resident mortgage UAE",
  "mortgage buyout Dubai",
  "equity release mortgage UAE",
  "commercial mortgage Dubai",
  "self-employed mortgage UAE",
  "mortgage pre-approval Dubai",
  "licensed mortgage broker UAE",
] as const;

/** SEO-friendly URL registry — all public routes use lowercase kebab-case paths */
export const routes = [
  { path: "/", priority: 1, changeFrequency: "weekly" as const },
  { path: "/services", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/calculator", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/contact", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/faq", priority: 0.85, changeFrequency: "monthly" as const },
  { path: "/blog", priority: 0.85, changeFrequency: "weekly" as const },
  { path: "/about", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/about/team", priority: 0.75, changeFrequency: "monthly" as const },
  { path: "/about/partners", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/privacy-policy", priority: 0.6, changeFrequency: "yearly" as const },
] as const;

const ogImage = "/about/about-hero.png";
const ogImageAlt = `${site.name} — licensed mortgage consultants in Dubai, UAE`;
const logoImage = "/logo-full.png";

export const defaultDescription =
  "Founded in 2016, we are proud to be one of the oldest mortgage broker firms in the UAE. Compare home loans from major UAE banks — resale, buyout, equity release, non-resident & commercial finance. Free expert advice in Business Bay.";

type PageMetaInput = {
  title: string;
  description: string;
  path: `/${string}` | "/";
  keywords?: readonly string[];
  includeBrandInTitle?: boolean;
  ogType?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  noIndex?: boolean;
};

export function absoluteUrl(path: string) {
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${siteUrl}${p === "/" ? "" : p}`;
}

function ogImages(alt = ogImageAlt) {
  return [
    {
      url: ogImage,
      width: 1200,
      height: 630,
      alt,
      type: "image/png",
    },
    {
      url: logoImage,
      width: 800,
      height: 560,
      alt: `${site.name} logo`,
      type: "image/png",
    },
  ];
}

export function buildPageMetadata({
  title,
  description,
  path,
  keywords = [],
  includeBrandInTitle = true,
  ogType = "website",
  publishedTime,
  modifiedTime,
  noIndex = false,
}: PageMetaInput): Metadata {
  const canonical = absoluteUrl(path);
  const fullTitle = includeBrandInTitle ? `${title} · ${site.name}` : title;
  const keywordSet = [...new Set([...uaeKeywords.slice(0, 8), ...keywords])];

  return {
    title: includeBrandInTitle ? title : { absolute: fullTitle },
    description,
    keywords: keywordSet,
    authors: [{ name: brand.legalName, url: siteUrl }],
    creator: brand.legalName,
    publisher: brand.legalName,
    category: "Finance",
    alternates: {
      canonical,
      languages: { "en-AE": canonical },
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
          },
        },
    openGraph: {
      type: ogType,
      locale: "en_AE",
      url: canonical,
      siteName: site.name,
      title: fullTitle,
      description,
      images: ogImages(`${fullTitle} — ${site.tagline}`),
      ...(ogType === "article" && publishedTime
        ? { publishedTime, modifiedTime: modifiedTime ?? publishedTime }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImage],
    },
  };
}

export function buildBlogPostMetadata(post: {
  title: string;
  description: string;
  slug: string;
  keywords: string[];
  publishedAt: string;
  updatedAt: string;
}): Metadata {
  return buildPageMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
    keywords: post.keywords,
    ogType: "article",
    publishedTime: post.publishedAt,
    modifiedTime: post.updatedAt,
  });
}

const googleVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;
const bingVerification = process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION;

/** Root layout defaults */
export const rootMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `Mortgage Broker Dubai & UAE | ${brand.shortName}`,
    template: `%s · ${brand.shortName}`,
  },
  description: defaultDescription,
  keywords: [...uaeKeywords],
  applicationName: site.name,
  authors: [{ name: brand.legalName, url: siteUrl }],
  creator: brand.legalName,
  publisher: brand.legalName,
  category: "Finance",
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
    languages: { "en-AE": siteUrl },
  },
  openGraph: {
    type: "website",
    locale: "en_AE",
    url: siteUrl,
    siteName: site.name,
    title: `Mortgage Broker Dubai & UAE | ${site.name}`,
    description: defaultDescription,
    images: ogImages(),
  },
  twitter: {
    card: "summary_large_image",
    title: `Mortgage Broker Dubai & UAE | ${site.name}`,
    description: defaultDescription,
    images: [ogImage],
  },
  ...(googleVerification || bingVerification
    ? {
        verification: {
          ...(googleVerification ? { google: googleVerification } : {}),
          ...(bingVerification ? { other: { "msvalidate.01": bingVerification } } : {}),
        },
      }
    : {}),
  other: {
    "geo.region": "AE-DU",
    "geo.placename": "Dubai",
    "geo.position": "25.1865;55.2663",
    ICBM: "25.1865, 55.2663",
  },
};

export function globalJsonLdGraph() {
  const logoUrl = absoluteUrl("/logo-wordmark.png");
  const imageUrl = absoluteUrl(ogImage);

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: site.name,
        description: defaultDescription,
        inLanguage: "en-AE",
        publisher: { "@id": `${siteUrl}/#organization` },
      },
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: brand.legalName,
        alternateName: site.name,
        url: siteUrl,
        logo: { "@type": "ImageObject", url: logoUrl },
        image: imageUrl,
        email: site.email,
        telephone: site.phoneLandlineTel,
        foundingDate: String(site.founded),
        sameAs: [site.social.facebook, site.social.instagram, site.social.linkedin],
        address: {
          "@type": "PostalAddress",
          streetAddress: site.address,
          addressLocality: "Business Bay",
          addressRegion: "Dubai",
          postalCode: "120380",
          addressCountry: "AE",
        },
        areaServed: [
          { "@type": "Country", name: "United Arab Emirates" },
          { "@type": "City", name: "Dubai" },
          { "@type": "City", name: "Abu Dhabi" },
        ],
      },
      {
        "@type": ["FinancialService", "LocalBusiness"],
        "@id": `${siteUrl}/#localbusiness`,
        name: brand.legalName,
        alternateName: site.name,
        description: about.intro,
        url: siteUrl,
        image: imageUrl,
        telephone: site.phoneLandlineTel,
        email: site.email,
        priceRange: "$$",
        currenciesAccepted: "AED",
        address: {
          "@type": "PostalAddress",
          streetAddress: "1009, Tamani Art Office Tower, Business Bay",
          addressLocality: "Dubai",
          addressRegion: "Dubai",
          postalCode: "120380",
          addressCountry: "AE",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 25.1865,
          longitude: 55.2663,
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
            opens: "09:00",
            closes: "18:00",
          },
        ],
        parentOrganization: { "@id": `${siteUrl}/#organization` },
        areaServed: { "@type": "Country", name: "United Arab Emirates" },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "UAE mortgage & property finance",
          itemListElement: services.map((s, i) => ({
            "@type": "Offer",
            position: i + 1,
            itemOffered: {
              "@type": "Service",
              name: s.title,
              description: s.summary,
              areaServed: "United Arab Emirates",
              provider: { "@id": `${siteUrl}/#organization` },
            },
          })),
        },
      },
    ],
  };
}

export function webPageJsonLd({
  name,
  path,
  description,
}: {
  name: string;
  path: `/${string}` | "/";
  description: string;
}) {
  const url = absoluteUrl(path);
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name,
    description,
    isPartOf: { "@id": `${siteUrl}/#website` },
    about: { "@id": `${siteUrl}/#organization` },
    inLanguage: "en-AE",
  };
}

export function contactPageJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": `${absoluteUrl("/contact")}#contactpage`,
    url: absoluteUrl("/contact"),
    name: `Contact ${site.name}`,
    description: pageSeo.contact.description,
    isPartOf: { "@id": `${siteUrl}/#website` },
    mainEntity: { "@id": `${siteUrl}/#localbusiness` },
    inLanguage: "en-AE",
  };
}

export function servicesItemListJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `${site.name} mortgage services`,
    description: pageSeo.services.description,
    itemListElement: services.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Service",
        name: s.title,
        description: s.description,
        provider: { "@id": `${siteUrl}/#organization` },
        areaServed: { "@type": "Country", name: "United Arab Emirates" },
        url: absoluteUrl("/services"),
      },
    })),
  };
}

export function calculatorWebAppJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "UAE Mortgage EMI Calculator",
    description: pageSeo.calculator.description,
    applicationCategory: "FinanceApplication",
    operatingSystem: "Any",
    browserRequirements: "Requires JavaScript",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "AED",
    },
    provider: { "@id": `${siteUrl}/#organization` },
    url: absoluteUrl("/calculator"),
    inLanguage: "en-AE",
  };
}

export function blogCollectionJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${absoluteUrl("/blog")}#collection`,
    url: absoluteUrl("/blog"),
    name: "Mortgage guides & insights",
    description: pageSeo.blog.description,
    isPartOf: { "@id": `${siteUrl}/#website` },
    hasPart: blogPosts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      description: post.description,
      url: absoluteUrl(`/blog/${post.slug}`),
      datePublished: post.publishedAt,
      dateModified: post.updatedAt,
      author: { "@id": `${siteUrl}/#organization` },
    })),
    inLanguage: "en-AE",
  };
}

export function blogPostingJsonLd(post: {
  title: string;
  description: string;
  slug: string;
  keywords: string[];
  publishedAt: string;
  updatedAt: string;
  author: string;
}) {
  const url = absoluteUrl(`/blog/${post.slug}`);
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${url}#article`,
    headline: post.title,
    description: post.description,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    author: {
      "@type": "Organization",
      name: post.author,
      url: siteUrl,
    },
    publisher: {
      "@type": "Organization",
      name: site.name,
      url: siteUrl,
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl("/logo-wordmark.png"),
      },
    },
    image: absoluteUrl(ogImage),
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    keywords: post.keywords.join(", "),
    inLanguage: "en-AE",
  };
}

export function faqPageJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export const pageSeo = {
  home: buildPageMetadata({
    title: "Mortgage Broker Dubai & UAE | Home Loans & Property Finance",
    description: defaultDescription,
    path: "/",
    includeBrandInTitle: false,
    keywords: ["best mortgage broker Dubai", "compare UAE home loans"],
  }),
  about: buildPageMetadata({
    title: "About Us — Licensed Mortgage Brokers in Dubai Since 2016",
    description:
      "Founded in 2016, we are proud to be one of the oldest mortgage broker firms in the UAE. Money Matters is a Dubai Economic Department, Dubai licensed mortgage consultancy and fully certified RERA Mortgage Broker.",
    path: "/about",
    keywords: ["licensed mortgage broker Dubai", "Business Bay mortgage consultant"],
  }),
  team: buildPageMetadata({
    title: "Our Team — Expert Mortgage Advisors in Dubai",
    description:
      "Meet experienced UAE mortgage specialists at Money Matters — 15+ years in banking, corporate finance & property loans. Personal advice for Dubai & UAE buyers.",
    path: "/about/team",
    keywords: ["mortgage advisor Dubai team", "UAE mortgage specialist"],
  }),
  partners: buildPageMetadata({
    title: "Bank Partners — Emirates NBD, FAB, ADCB & More",
    description:
      "We compare mortgages across leading UAE banks — Emirates NBD, Mashreq, ADCB, FAB, DIB, Standard Chartered & more. One window for competitive home loan rates.",
    path: "/about/partners",
    keywords: ["UAE bank mortgage partners", "compare bank home loans Dubai"],
  }),
  services: buildPageMetadata({
    title: "Mortgage Services — Home Loans, Buyout, Non-Resident & Commercial",
    description:
      "Resale & off-plan purchase, mortgage buyout, equity release, non-resident loans up to 50% LTV, corporate & commercial property finance across Dubai and the UAE.",
    path: "/services",
    keywords: [
      "mortgage buyout UAE",
      "non-resident property loan Dubai",
      "commercial real estate finance UAE",
    ],
  }),
  calculator: buildPageMetadata({
    title: "UAE Mortgage Calculator — Estimate Monthly EMI in AED",
    description:
      "Free Dubai & UAE mortgage calculator. Estimate monthly EMI, total interest & repayment for any property price, down payment & loan tenure — plan your home loan.",
    path: "/calculator",
    keywords: ["mortgage EMI calculator UAE", "home loan calculator Dubai AED"],
  }),
  faq: buildPageMetadata({
    title: "Mortgage FAQ — Pre-Approval, Down Payment & UAE Home Loans",
    description:
      "Answers on UAE mortgage pre-approval, down payments (20–40%), non-resident eligibility, self-employed loans, maximum tenure & why use a Dubai mortgage broker.",
    path: "/faq",
    keywords: ["UAE mortgage FAQ", "down payment Dubai property", "mortgage pre-approval UAE"],
  }),
  contact: buildPageMetadata({
    title: "Contact — Speak to a Dubai Mortgage Consultant Today",
    description: `Visit ${site.address}. Call ${site.phoneLandline}, WhatsApp ${site.phone}, or email ${site.email}. Free mortgage advice for UAE property buyers.`,
    path: "/contact",
    keywords: ["mortgage consultation Dubai", "contact mortgage broker UAE"],
  }),
  blog: buildPageMetadata({
    title: "Mortgage Guides & Insights — Dubai & UAE Home Loans",
    description:
      "Expert articles on Dubai mortgage down payments, non-resident home loans, buyout & refinance — written by licensed UAE mortgage consultants at Money Matters.",
    path: "/blog",
    keywords: ["UAE mortgage blog", "Dubai home loan guides", "mortgage tips UAE"],
  }),
  privacy: buildPageMetadata({
    title: "Privacy Policy",
    description:
      "Read how Money Matters collects, uses, and protects personal information submitted through our website and mortgage consultation forms.",
    path: "/privacy-policy",
    keywords: ["privacy policy", "data protection", "Money Matters UAE"],
  }),
} as const;
