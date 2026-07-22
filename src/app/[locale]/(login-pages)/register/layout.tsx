import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Register - Bosman Tech Group",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
