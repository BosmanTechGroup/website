import Calendly from "@/src/components/calendly";
import { companyInfo } from "@/src/lib/data";
import { redirect } from "next/navigation";

export default async function Booking({ params }: { params: { slug: string } }) {
  const { slug } = await params
  const employee = companyInfo.employees.reduce((acc, employee) => {
    if (employee.firstName.toLowerCase() === slug) {
      acc.push(employee.name);
    }
    return acc;
  }, [] as string[]).join(", ");
  const employeeCalendly = companyInfo.employees.reduce((acc, employee) => {
    if (employee.firstName.toLowerCase() === slug) {
      acc.push(employee.calendly);
    }
    return acc;
  }, [] as string[]).join(", ");

  if (!employee) {
    redirect("/booking");
  }

  return (
    <section>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-4xl font-bold mb-4">Boek een afspraak</h1>
        <p className="text-lg text-slate-600 mb-8">
          Klik op de onderstaande knop om een afspraak te boeken met{" "}
          {employee}!
        </p>
        <Calendly calendlyUrl={employeeCalendly} />
      </div>
    </section>
  );
}
