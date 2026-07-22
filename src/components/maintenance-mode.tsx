import { useTranslations } from "next-intl";

export default function MaintenanceMode() {
  const tMaintenanceMode = useTranslations("MaintenanceMode");
  return (
    <div className="bg-yellow-100 text-yellow-800 p-4 text-center">
      <strong>{tMaintenanceMode("title")}:</strong> {tMaintenanceMode("message")}
    </div>
  );
}
