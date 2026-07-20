import Link from "next/link";

export default function NotFound() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 min-h-screen items-center justify-center">
      <div className="hidden md:block md:col-span-2 h-full">
        <img
          style={{ objectFit: "cover" }}
          width="100%"
          height="100%"
          src="/images/404.webp"
          alt="Hero Image"
          className="w-full h-full"
        />
      </div>
      <div className="w-full max-w-md h-100% rounded-2xl mx-auto">
        <h1 className="text-5xl font-extrabold md:text-7xl">404</h1>
        <p className="text-lg text-slate-600 mb-6">
          Oeps! De pagina die je zoekt bestaat niet.
        </p>
        <Link
          href="/"
          className="rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700"
        >
          Terug naar de homepage
        </Link>
      </div>
    </div>
  );
}
