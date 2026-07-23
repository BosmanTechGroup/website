"use client";
import { companyInfo } from "../lib/data";

export default function Logo({ isHeader }: { isHeader?: boolean }) {
  return (
    <img
      src={isHeader ? companyInfo.logo : companyInfo.logoText}
      alt={companyInfo.name}
      className={isHeader ? "h-16 w-auto" : "sm:h-32 lg:h-24 w-auto"}
      width={128}
      height={128}
    />
  );
}
