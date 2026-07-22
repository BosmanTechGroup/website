import { Email, Password } from "@/src/components/user-inputs";
import { Link } from "@/src/i18n/navigation";
import { companyInfo } from "@/src/lib/data";

import { useTranslations } from "next-intl";

export default function Login() {
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
        <h1 className="mb-6 text-center text-3xl font-bold">{tUser("login")}</h1>
        <form className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-slate-700"
            >
              {tUser("email")}
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
          <div className="flex items-center justify-between flex-wrap gap-2">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="remember-me"
                className="h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 block text-sm text-slate-700"
              >
                {tUser("remember")}
              </label>
            </div>
            <div className="text-sm">
              <Link
                href="/forgot-password"
                className="font-medium text-blue-600 hover:text-blue-500"
              >
                {tUser("forgot-password")}
              </Link>
            </div>
          </div>
          <button
            type="submit"
            className="w-full rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50"
          >
            Login
          </button>
          <div className="mt-4 text-center">
            <span className="text-sm text-slate-700 gap-1 flex justify-center">
              {tUser("no-account")}
              <Link
                href="/register"
                className="font-medium text-blue-600 hover:text-blue-500"
              >
                {tUser("register")}
              </Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}