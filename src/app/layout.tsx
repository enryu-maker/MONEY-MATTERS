import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MoneyMatters",
  description: "Redesigned site",
  authors: [{ name: "Lovable" }],
  openGraph: {
    title: "MoneyMatters",
    description: "Redesigned site",
    type: "website",
    images: ["https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/6d05b460-3b08-4df1-970b-c4797ca63013/id-preview-4b6965da--33c28504-b4c0-4ece-bfae-90e60390b5ef.lovable.app-1779558883966.png"]
  },
  twitter: {
    card: "summary",
    site: "@Lovable",
    title: "MoneyMatters",
    description: "Redesigned site",
    images: ["https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/6d05b460-3b08-4df1-970b-c4797ca63013/id-preview-4b6965da--33c28504-b4c0-4ece-bfae-90e60390b5ef.lovable.app-1779558883966.png"]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased dark">
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}
