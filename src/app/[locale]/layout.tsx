import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from 'next/navigation';
import { routing } from "@/src/i18n/routing";
import { Analytics as VercelAnalytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import MaintenanceMode from "@/src/components/maintenance-mode";
import MaintenancePage from "@/src/components/maintenance-page";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL!),
  title: "Bosman Tech Group",
  description: "Expertise in hardware and software solutions",
  openGraph: {
    title: "Bosman Tech Group",
    description: "Expertise in hardware and software solutions",
    siteName: "Bosman Tech Group",
    url: process.env.NEXT_PUBLIC_BASE_URL!,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bosman Tech Group",
    description: "Expertise in hardware and software solutions",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  return (
    <html
      lang={locale}
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <main className="bg-slate-50 text-slate-900">
          <NextIntlClientProvider>
            {process.env.MAINTENANCE_MODE === "true" &&
              process.env.MAINTENANCE_PAGE === "false" && <MaintenanceMode />}
            {process.env.MAINTENANCE_PAGE === "true" && <MaintenancePage />}
            {process.env.MAINTENANCE_PAGE !== "true" && children}
          </NextIntlClientProvider>
          <VercelAnalytics />
          <SpeedInsights />
        </main>
      </body>
    </html>
  );
}
