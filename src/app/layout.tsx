import type { Metadata } from "next";
import { Inter, Urbanist } from "next/font/google";
import { about, site } from "@/lib/site-data";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-urbanist",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${site.name} — Trusted Mortgage Consultancy in UAE`,
    template: `%s · ${site.name}`,
  },
  description: about.intro,
  icons: {
    icon: "/logo-mark.png",
    apple: "/logo-mark.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`h-full antialiased ${inter.variable} ${urbanist.variable}`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
