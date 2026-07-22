import { Email, Password } from "@/src/components/user-inputs";
import { companyInfo } from "@/src/lib/data";
import { Link } from "@/src/i18n/navigation";
import { useTranslations } from "next-intl";

export default function Register() {
  const tUser = useTranslations("User");

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 min-h-screen items-center justify-center">
      <div className="hidden md:block md:col-span-2 h-full">
        <img
          style={{ objectFit: "cover" }}
          width="100%"
          height="100%"
          src="/images/cyberstuff.webp"
          alt="Hero Image"
          className="w-full h-full"
        />
      </div>
      <div className="w-full max-w-md rounded-2xl mx-auto px-4 py-8 md:py-0">
        <Link href="/">
          <h1 className="mb-6 text-center text-3xl font-bold">
            {companyInfo.name}
          </h1>
        </Link>
        <h1 className="mb-6 text-center text-3xl font-bold">{tUser("register")}</h1>
        <form className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-slate-700"
            >
              Email
            </label>
            <Email id="email" />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-slate-700"
            >
              {tUser("password")}
            </label>
            <Password id="password" />
          </div>
          <button
            type="submit"
            className="w-full rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50"
          >
            {tUser("register")}
          </button>
          <div className="mt-4 text-center">
            <span className="text-sm text-slate-700 gap-1 flex justify-center">
              {tUser("existing-account")}
              <Link
                href="/login"
                className="font-medium text-blue-600 hover:text-blue-500"
              >
                {tUser("login")}
              </Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}
