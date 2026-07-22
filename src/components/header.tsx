"use client";
import { useTranslations } from "next-intl";
import { companyInfo } from "@/src/lib/data";
import { Link } from '@/src/i18n/navigation';
import Button from "@/src/components/ui/button";

export default function Header() {
  const tHeader = useTranslations("Header");

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/">
          <h1 className="text-2xl font-bold text-blue-600">
            {companyInfo.name}
          </h1>
        </Link>

        <div className="hidden gap-8 md:flex">
          <Link href="/" className="hover:text-blue-600">
            Home
          </Link>
          <Link href="/services" className="hover:text-blue-600">
            {tHeader("services")}
          </Link>
          <Link href="/repairs" className="hover:text-blue-600">
            Reparaties
          </Link>
          <Link href="/about-us" className="hover:text-blue-600">
            {tHeader("about-us")}
          </Link>
          <Link href="/contact" className="hover:text-blue-600">
            Contact
          </Link>
        </div>

        <Button onClick={() => (window.location.href = "/login")}>Login</Button>
      </div>
    </nav>
  );
}
