import {
  ArrowRight,
  Cpu,
  Laptop,
  ShieldCheck,
  Wrench,
  Star,
  Phone,
} from "lucide-react";
import { companyInfo } from "@/src/lib/data";
import { useTranslations } from "next-intl";
import { Link } from "@/src/i18n/navigation";

const services = [
  {
    title: "Laptop Reparatie",
    description: "Schermen, batterijen, toetsenborden en meer.",
    icon: Laptop,
  },
  {
    title: "Desktop & Gaming",
    description: "Hardware upgrades, assemblage en onderhoud.",
    icon: Cpu,
  },
  {
    title: "Software Problemen",
    description: "Windows, drivers, virussen en prestaties.",
    icon: ShieldCheck,
  },
  {
    title: "Algemene Reparaties",
    description: "Diagnose, onderhoud en advies.",
    icon: Wrench,
  },
];

const features = [
  "Snelle service",
  "Transparante prijzen",
  "Ervaren technici",
  "Garantie op reparaties",
];

export default function Home() {
  const tBooking = useTranslations("Booking");
  return (
    <main className="bg-slate-50 text-slate-900">
      {/* HERO */}

      <section className="mx-auto flex min-h-[90vh] max-w-7xl items-center px-6">
        <div className="grid gap-16 lg:grid-cols-2">
          <div className="flex flex-col justify-center">
            <h2 className="text-5xl font-extrabold leading-tight md:text-7xl">
              Computerproblemen?
              <span className="text-blue-600"> Wij lossen ze op.</span>
            </h2>

            <p className="mt-6 max-w-xl text-lg text-slate-600">
              Van laptops en gaming pc&apos;s tot softwareproblemen en upgrades.
              Professionele ondersteuning voor particulieren en bedrijven.
            </p>

            <div className="mt-10 flex gap-4">
              <button className="flex items-center gap-2 rounded-xl bg-blue-600 px-7 py-4 font-semibold text-white hover:bg-blue-700">
                Maak afspraak
                <ArrowRight size={18} />
              </button>

              <button className="rounded-xl border border-slate-300 bg-white px-7 py-4 font-semibold hover:bg-slate-100">
                Bekijk diensten
              </button>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4">
              {features.map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <ShieldCheck className="text-green-500" size={18} />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* HERO IMAGE */}

        <div className="relative flex items-center justify-center">
          


        </div>
      </section>

      {/* SERVICES */}

      <section className="mx-auto max-w-7xl px-6 py-28">
        <div className="text-center">
          <h2 className="text-4xl font-bold">Onze Diensten</h2>

          <p className="mt-4 text-slate-600">
            Alles wat je nodig hebt voor je computer.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="group rounded-3xl bg-white p-8 shadow-lg transition hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100">
                  <Icon className="text-blue-600" size={30} />
                </div>

                <h3 className="text-xl font-bold">{service.title}</h3>

                <p className="mt-3 text-slate-600">{service.description}</p>

                <button className="mt-8 font-semibold text-blue-600">
                  Meer informatie →
                </button>
              </div>
            );
          })}
        </div>
      </section>

      {/* WHY US */}

      <section className="bg-slate-900 py-28 text-white">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2">
          <div>
            <h2 className="text-4xl font-bold">
              Waarom kiezen voor {companyInfo.name}?
            </h2>

            <p className="mt-6 text-slate-300">
              Wij combineren technische kennis met snelle service zodat je
              toestel zo snel mogelijk weer werkt.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {[
              {
                title: "5000+",
                subtitle: "Reparaties",
              },
              {
                title: "98%",
                subtitle: "Tevreden klanten",
              },
              {
                title: "12 Jaar",
                subtitle: "Ervaring",
              },
              {
                title: "24/7",
                subtitle: "Support",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-3xl bg-slate-800 p-8">
                <h3 className="text-5xl font-bold text-blue-400">
                  {item.title}
                </h3>

                <p className="mt-2 text-slate-400">{item.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}

      <section className="mx-auto max-w-7xl px-6 py-28">
        <h2 className="text-center text-4xl font-bold">
          Klanten beoordelen ons uitstekend
        </h2>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="rounded-3xl bg-white p-8 shadow-lg">
              <div className="mb-5 flex gap-1">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star
                    key={j}
                    fill="currentColor"
                    className="text-yellow-400"
                    size={18}
                  />
                ))}
              </div>

              <p className="text-slate-600">
                Geweldige service! Mijn laptop was dezelfde dag klaar.
              </p>

              <h4 className="mt-6 font-bold">Jan Peeters</h4>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}

      <section className="mx-auto max-w-7xl px-6 pb-28">
        <div className="rounded-[40px] bg-blue-600 p-16 text-center text-white">
          <h2 className="text-5xl font-bold">
            Klaar om je apparaat te laten repareren?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-blue-100">
            Neem vandaag nog contact op en ontvang snel een vrijblijvende
            diagnose.
          </p>

          <Link href="/booking">
            <button className="mt-10 rounded-xl bg-white px-8 py-4 font-bold text-blue-600">
              <span className="flex items-center gap-2">
                <Phone size={18} />
                {tBooking("meeting")}
              </span>
            </button>
          </Link>
        </div>
      </section>

      {/* FOOTER */}
    </main>
  );
}
