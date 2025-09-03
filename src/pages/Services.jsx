import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";

const Services = () => {
  const { t, i18n } = useTranslation(["services"]);

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
      <div></div>
    </>
  );
};

export default Services;
