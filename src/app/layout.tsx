import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { siteBaseUrl } from "@/lib/utils";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteBaseUrl),
  title: {
    default: "UK Job Tools | Practical Pay & Interview Helpers",
    template: "%s | UK Job Tools",
  },
  description:
    "Free UK pay calculators, CV help, and interview answers. Practical tools for hourly workers and job applicants.",
  openGraph: {
    title: "UK Job Tools",
    description:
      "Free UK pay calculators, CV help, and interview answers to help you prepare with confidence.",
    url: siteBaseUrl,
    siteName: "UK Job Tools",
    locale: "en_GB",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-slate-50 text-slate-900">
        <Header />
        <main className="mx-auto max-w-6xl px-4 pb-12 pt-8 sm:px-6 lg:px-8">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
