import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation(["about"]);
  return (
    <>
      {/* Metadata SEO */}
      <title>{t("seo.title") || "Default Home Title"}</title>
      <meta
        name="description"
        content={
          t("seo.description") || "Default description for home"
        }
      />

      {/* Contenido de la pagina */}
      <div></div>
    </>
  );
};

export default About;
