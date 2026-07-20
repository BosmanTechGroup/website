import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="nl"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <main className="bg-slate-50 text-slate-900">
          {children}
        </main>
      </body>
    </html>
  );
}
