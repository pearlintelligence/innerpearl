import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pearl — Your Personal Spirit Guide",
  description:
    "Pearl weaves astrology, Human Design, Gene Keys, Kabbalah, and numerology into a single living map of who you are. Discover your cosmic fingerprint.",
  keywords: [
    "astrology",
    "human design",
    "gene keys",
    "kabbalah",
    "numerology",
    "spirit guide",
    "cosmic fingerprint",
    "self-discovery",
  ],
  openGraph: {
    title: "Pearl — Your Personal Spirit Guide",
    description:
      "The cosmos knew you before you knew yourself. Discover your cosmic fingerprint with Pearl.",
    type: "website",
    url: "https://innerpearl.ai",
    siteName: "Pearl",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pearl — Your Personal Spirit Guide",
    description:
      "The cosmos knew you before you knew yourself. Discover your cosmic fingerprint with Pearl.",
  },
  metadataBase: new URL("https://innerpearl.ai"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body className="font-body bg-void text-pearl-white antialiased">
        <Navigation />
        <main>{children}</main>
        <Footer />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
