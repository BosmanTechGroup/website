import Button from "@/src/components/ui/Button";
import { companyInfo } from "@/src/lib/data";
import Link from "next/link";

export default function Booking() {
  return (
    <section>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-4xl font-bold mb-4">Boek een afspraak</h1>
        <p className="text-lg text-slate-600 mb-8">
          Selecteer een medewerker om een afspraak te boeken. Klik op de
          onderstaande knop om een afspraak te boeken met de geselecteerde
          medewerker!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {companyInfo.employees.map((employee) => (
          <div key={employee.name} className="text-center mb-8">
            <div className="rounded-3xl bg-white p-8 shadow-lg">
              <div className="flex flex-col items-center gap-4 md:flex-row md:items-start">
                <img
                  className="rounded-full"
                  src={
                    employee.image ||
                    "/images/about-us/" +
                      employee.firstName.toLowerCase() +
                      ".webp"
                  }
                  alt={employee.firstName}
                  width={200}
                  height={200}
                />
                <div className="flex flex-col items-center pl-5 gap-2 md:items-start">
                    <h3 className="text-2xl font-bold">{employee.name}</h3>
                    <p className="text-lg text-slate-600">
                      {employee.positions.join(" / ")}
                    </p>
                    <Link href={`/booking/${employee.firstName.toLowerCase()}`}>
                        <Button>Boek een afspraak</Button>
                    </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
        </div>
      </div>
    </section>
  );
}
