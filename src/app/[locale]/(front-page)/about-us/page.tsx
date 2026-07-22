import { companyInfo, socialIcons } from "@/src/lib/data";
import { useTranslations } from "next-intl";

export default function AboutUsPage() {
  const tEmployees = useTranslations("Employees");
  const tTeam = useTranslations("Team");
  const tAbout = useTranslations("Header");

  return (
    <section className="mx-auto max-w-7xl px-6 py-8">
      <div className="text-center">
        <div className="mb-16">
          <h2 className="text-4xl pb-2 font-bold">{tAbout("about-us")}</h2>
          <p>{companyInfo.name} {tTeam("bio")}</p>
        </div>
        <div>
          <h2 className="text-4xl pb-2 font-bold">{tTeam("team")}</h2>
          {companyInfo.employees.map((employee, index) => (
            <div key={employee.name} className="text-center mb-8">
              <div className="rounded-3xl bg-white p-8 shadow-lg">
                <div className="flex flex-col items-center gap-4 md:flex-row md:items-start">
                  <img
                    className="rounded-full"
                    src={
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
                      {tEmployees.raw(`${index}.position`).join(" / ")}
                    </p>
                    <p className="text-left">{tEmployees(`${index}.bio`)}</p>
                    {employee.socials && (
                      <div className="mt-2 flex justify-center gap-4">
                        {employee.socials.linkedin && (
                          <a
                            href={employee.socials.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <img
                              width={32}
                              height={32}
                              src={socialIcons.linkedin}
                              alt="LinkedIn"
                            />
                          </a>
                        )}
                        {employee.socials.github && (
                          <a
                            href={employee.socials.github}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <img
                              width={32}
                              height={32}
                              src={socialIcons.github}
                              alt="GitHub"
                            />
                          </a>
                        )}
                        {employee.email && (
                          <a
                            href={`mailto:${employee.email}`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <img
                              width={32}
                              height={32}
                              src={socialIcons.mail}
                              alt="Mail"
                            />
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        <div className="group rounded-3xl bg-white p-8 shadow-lg transition hover:-translate-y-2 hover:shadow-2xl">
          <h3 className="text-xl font-bold">test title</h3>

          <p className="mt-3 text-slate-600">test</p>

          <button className="mt-8 font-semibold text-blue-600">
            Meer informatie →
          </button>
        </div>

        <div className="group rounded-3xl bg-white p-8 shadow-lg transition hover:-translate-y-2 hover:shadow-2xl">
          <h3 className="text-xl font-bold">test title</h3>

          <p className="mt-3 text-slate-600">test</p>

          <button className="mt-8 font-semibold text-blue-600">
            Meer informatie →
          </button>
        </div>

        <div className="group rounded-3xl bg-white p-8 shadow-lg transition hover:-translate-y-2 hover:shadow-2xl">
          <h3 className="text-xl font-bold">test title</h3>

          <p className="mt-3 text-slate-600">test</p>

          <button className="mt-8 font-semibold text-blue-600">
            Meer informatie →
          </button>
        </div>

      </div>
    </section>
  );
}
