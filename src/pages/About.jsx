import { useTranslation } from "react-i18next";
import TitleSubtitle from "../components/TitleSubtitle";
import VideoHome from "../sections/home/VideoHome";
import Button from "../components/Button";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const About = () => {
  const { t, i18n } = useTranslation(["about"]);

  const { lang } = useParams();
  useEffect(() => {
    if (lang && i18n.language !== lang) {
      i18n.changeLanguage(lang);
    }
  });
  return (
    <>
      {/* Metadata SEO */}
      <title>{t("seo.title") || "Default Home Title"}</title>
      <meta
        name="description"
        content={t("seo.description") || "Default description for home"}
      />

      {/* Contenido de la pagina */}
      <div className="">
        <div className="pt-36 lg:pt-48 pb-12">
          <TitleSubtitle title={t("title")} subtitle={t("subtitle")} />
        </div>
        <VideoHome />

        <div className="pt-48 px-6 lg:px-12">
          <h3 className="opacity-70">{t("second-section.title")}</h3>
          <p className="text-2xl">{t("second-section.text")}</p>
        </div>

        <div className="pt-24 px-6 lg:px-12">
          <h3 className="opacity-70">{t("third-section.title")}</h3>
          <p className="text-2xl">{t("third-section.text")}</p>
        </div>

        <div className="pt-24 px-6 lg:px-12">
          <h3 className="opacity-70">{t("fourth-section.title")}</h3>
          <p className="text-2xl">{t("fourth-section.text")}</p>
        </div>

        <div className="pt-24 px-6 lg:px-12">
          <h3 className="opacity-70">{t("fifth-section.title")}</h3>
          <p className="text-2xl">{t("fifth-section.text")}</p>
        </div>

        <div className="pt-24 px-6 lg:px-12">
          <h3 className="opacity-70">Partners</h3>
          <p className="text-2xl">Loguitos de las empresas</p>
        </div>

        <div className="py-48">
          <TitleSubtitle
            title="Descubre cómo podemos potenciar tu propiedad"
            subtitle="Trabajemos juntos para transformar tus inmuebles en inversiones rentables y deseadas. Reserva tu asesoría personalizada y da el primer paso hacia resultados excepcionales."
          />
          <div className="flex justify-center pt-12">
            <Button text="Contáctanos" to="/contact" />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
