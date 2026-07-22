import { useTranslations } from "next-intl";
import { companyInfo } from "../lib/data";

export default function MaintenancePage() {
  const tMaintenancePage = useTranslations("MaintenancePage");
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50 px-6">
      <div className="mb-12">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">
          {companyInfo.name}
        </h1>
      </div>

      {/* Maintenance Content */}
      <div className="max-w-md text-center">
        <h2 className="mb-4 text-4xl font-bold text-gray-900">
          {tMaintenancePage("title")}
        </h2>

        <p className="mb-6 text-gray-600">{tMaintenancePage("message")}</p>
      </div>
    </main>
  );
}
