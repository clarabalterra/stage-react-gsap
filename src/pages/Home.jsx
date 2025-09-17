import { useTranslation } from "react-i18next";
import HeroSection from "../sections/home/HeroSection";
import HomeCta from "../sections/home/HomeCta";
import NumbersSection from "../sections/home/NumbersSection";
import Process from "../sections/home/Process";
import ProjectsSection from "../sections/home/ProjectsSection";
import ServicesSection from "../sections/home/ServicesSection";
import VideoHome from "../sections/home/VideoHome";
import FinalCta from "../sections/home/FinalCta";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import ImageComparison from "../sections/home/ImageComparison";

const Home = () => {
  const { t, i18n } = useTranslation(["home"]);

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

      {/* Secciones */}
      <HeroSection />

      <div className="pt-48 pb-24">
        <HomeCta />
      </div>

      <div className="py-24">
        <VideoHome />
      </div>

      <div className="py-24 px-6 lg:px-12">
        <ServicesSection />
      </div>

      <div className="py-24">
        <ProjectsSection />
      </div>

      <div className="py-24">
        <ImageComparison />
      </div>

      <div className="py-24">
        <NumbersSection />
      </div>

      <div className="py-24">
        <Process />
      </div>

      <div className="pb-48 pt-24 px-6 lg:px-12">
        <FinalCta />
      </div>
    </>
  );
};

export default Home;
