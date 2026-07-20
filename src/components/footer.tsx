import { companyInfo, socialIcons } from "@/src/lib/data";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-white">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 px-6 py-10 md:flex-row">
        <div>
          <h3 className="text-2xl font-bold text-blue-600">
            {companyInfo.name}
          </h3>

          <p className="mt-2 text-slate-500">
            Hardware & Software oplossingen.
          </p>

          {companyInfo.socialMedia && (
            <div className="mt-2 flex justify-center gap-4">
              {companyInfo.socialMedia.linkedin && (
                <a
                  href={companyInfo.socialMedia.linkedin}
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
              {companyInfo.socialMedia.instagram && (
                <a
                  href={companyInfo.socialMedia.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    width={32}
                    height={32}
                    src={socialIcons.instagram}
                    alt="Instagram"
                  />
                </a>
              )}
              {companyInfo.socialMedia.facebook && (
                <a
                  href={companyInfo.socialMedia.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    width={32}
                    height={32}
                    src={socialIcons.facebook}
                    alt="Facebook"
                  />
                </a>
              )}
              {companyInfo.socialMedia.twitter && (
                <a
                  href={companyInfo.socialMedia.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img width={32} height={32} src={socialIcons.x} alt="X" />
                </a>
              )}
            </div>
          )}
        </div>
        <div className="mx-auto flex max-w-7xl gap-8 px-6">
          <a href="/privacy" className="hover:underline">
            Privacy Policy
          </a>
          <a href="/terms" className="hover:underline">
            Terms of Service
          </a>
        </div>
        <div className="text-slate-500">
          © {currentYear} {companyInfo.name}. Alle rechten voorbehouden.
        </div>
      </div>
      <div className="text-center mb-4 text-slate-500">
        © {currentYear} {companyInfo.name}. Alle rechten voorbehouden.
      </div>
    </footer>
  );
}
