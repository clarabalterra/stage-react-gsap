import { useTranslation } from "react-i18next";
import TitleSubtitle from "../components/TitleSubtitle";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const Contact = () => {
  const { t, i18n } = useTranslation(["contact"]);

  const { lang } = useParams();
  useEffect(() => {
    if (lang && i18n.language !== lang) {
      i18n.changeLanguage(lang);
    }
  }, [lang, i18n]);

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
      <div className="pt-36 lg:pt-48 pb-24">
        <TitleSubtitle title={t("title")} subtitle={t("subtitle")} />
      </div>
    </>
  );
};

export default Contact;
