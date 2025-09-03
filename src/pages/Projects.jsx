import { useTranslation } from "react-i18next";

import TitleSubtitle from "../components/TitleSubtitle";
import GallerySection from "../sections/projects/GallerySection";
import Button from "../components/Button";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const Projects = () => {
  const { t, i18n } = useTranslation(["projects"]);

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
      <div>
        <div className="pt-36 lg:pt-48 pb-24">
          <TitleSubtitle title={t("title")} subtitle={t("subtitle")} />
        </div>
        {/* Galeria */}
        <div className="pb-48">
          <GallerySection />
        </div>

        <div className="pb-48">
          <TitleSubtitle title={t("cta.title")} subtitle={t("cta.subtitle")} />
          <div className="flex justify-center pt-12">
            <Button text={t("btn")} to="/" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
