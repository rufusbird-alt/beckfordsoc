import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-display-next",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body-next",
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://beckfordsociety.org";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "The Beckford Society",
    template: "%s — The Beckford Society",
  },
  description:
    "The Beckford Society — dedicated to the life, work, and world of William Thomas Beckford (1760–1844): author of Vathek, builder of Fonthill Abbey, and one of the most extraordinary figures of Regency England.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "The Beckford Society",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-GB" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
