import { companyInfo, socialIcons } from "@/src/lib/data";
import { useTranslations } from "next-intl";
import { Link } from "../i18n/navigation";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const tFooter = useTranslations("Footer");

  return (
    <footer className="border-t bg-white">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 px-6 py-10 md:flex-row">
        <div>
          <h3 className="text-2xl font-bold text-blue-600">
            {companyInfo.name}
          </h3>

          <p className="mt-2 text-slate-500">
            {tFooter("solutions")}
          </p>
          {/* Social media icons */}
          {companyInfo.socialMedia && (
            <div className="mt-2 flex justify-center gap-3">
              {/* YouTube */}
              {companyInfo.socialMedia.youtube && (
                <a
                  href={companyInfo.socialMedia.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    width={32}
                    height={32}
                    src={socialIcons.youtube}
                    alt="YouTube"
                  />
                </a>
              )}
              {/* LinkedIn */}
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
              {/* Instagram */}
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
              {/* Facebook */}
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
              {/* X (formerly Twitter) */}
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
          <Link href="/privacy" className="hover:underline">
            {tFooter("privacy")}
          </Link>
          <Link href="/terms" className="hover:underline">
            {tFooter("terms")}
          </Link>
        </div>
        <div className="text-slate-500">
          © {currentYear} {companyInfo.name}. {tFooter("rights-reserved")}
        </div>
      </div>
      <div className="text-center mb-4 text-slate-500">
        © {currentYear} {companyInfo.name}. {tFooter("rights-reserved")}
      </div>
    </footer>
  );
}
