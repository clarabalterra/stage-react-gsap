import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import { paths } from "../utils/paths";
import LanguageSwitcher from "./LanguageSwitcher";

const Footer = () => {
  const { t } = useTranslation(["global"]);
  const location = useLocation();

  const currentLang = location.pathname.startsWith("/en") ? "en" : "es";

  return (
    <div className="px-6 lg:px-12 pb-6 lg:pb-12">
      <div className="bg-coyote text-alabaster rounded-2xl px-6 py-6 flex flex-col justify-between">
        <div className="flex flex-col gap-6 text-center lg:text-start items-center justify-center lg:flex-row lg:justify-between">
          <ul className="text-lg lg:text-3xl">
            <span className="lg:hidden opacity-70 text-base">
              {t("footer.nav")}
            </span>

            <li>
              <Link to={`/${currentLang}${paths[currentLang].projects}`}>
                {t("nav.projects")}
              </Link>
            </li>
            <li>
              <Link to={`/${currentLang}${paths[currentLang].services}`}>
                {t("nav.services")}
              </Link>
            </li>
            <li>
              <Link to={`/${currentLang}${paths[currentLang].about}`}>
                {t("nav.about")}
              </Link>
            </li>
            <li>
              <Link to={`/${currentLang}${paths[currentLang].contact}`}>
                {t("nav.contact")}
              </Link>
            </li>
          </ul>

          <div className="flex flex-col gap-3 lg:gap-6">
            <div className="flex flex-col">
              <span className="lg:hidden opacity-70">{t("cta.contact")}</span>
              <ul className="text-lg">
                <li>
                  <a href="mailto:contact@stagemediterraneo.com">
                    contact@stagemediterraneo.com
                  </a>
                </li>
                <li>+34 600 000 000</li>
              </ul>
            </div>

            <div className="flex flex-col">
              <ul className="text-lg">
                <li>Colón 13</li>
                <li>46004 Valencia España</li>
              </ul>
            </div>

            <ul className="text-lg flex justify-center gap-6 lg:hidden">
              <li>
                <a href="/">Instagram</a>
              </li>
              <li>
                <a href="/">TikTok</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="lg:text-lg">
          <div className="flex gap-2 justify-center lg:justify-end lg:pb-3 py-6">
            <LanguageSwitcher />
          </div>

          <div className="lg:flex justify-between">
            {/* legal */}
            <ul className="flex flex-col lg:flex-row lg:gap-12 text-center justify-center">
              <li>© Stagè Mediterráneo</li>
              <li>
                <Link to={`/${currentLang}${paths[currentLang].legal}`}>
                  {t("footer.legal")}
                </Link>
              </li>
              <li>
                <Link to={`/${currentLang}${paths[currentLang].privacy}`}>
                  {t("footer.privacy")}
                </Link>
              </li>
              <li>
                <Link to={`/${currentLang}${paths[currentLang].cookies}`}>
                  {t("footer.cookies")}
                </Link>
              </li>
            </ul>

            {/* rrss */}
            <ul className="hidden lg:flex gap-6">
              <li>
                <a href="/">Instagram</a>
              </li>
              <li>
                <a href="/">TikTok</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
