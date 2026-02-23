import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

const notoSans = Noto_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-noto-sans",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  title: "Landscope — Sustainable Land Management",
  description:
    "Guiding our journey towards sustainable land management and environmental stewardship. Explore resources on land classification, agriculture, policies, and more.",
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: "Landscope — Sustainable Land Management",
    description:
      "Guiding our journey towards sustainable land management and environmental stewardship. Explore resources on land classification, agriculture, policies, and more.",
    url: "/",
    siteName: "Landscope",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Landscope — Sustainable Land Management",
    description:
      "Guiding our journey towards sustainable land management and environmental stewardship. Explore resources on land classification, agriculture, policies, and more.",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      id="top"
      className={notoSans.variable}
      suppressHydrationWarning
    >
      <body>
        <Header />
        <main className="relative">{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
