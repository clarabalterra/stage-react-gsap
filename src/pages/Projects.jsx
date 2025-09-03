import { useTranslation } from "react-i18next";

import TitleSubtitle from "../components/TitleSubtitle";
import GallerySection from "../sections/projects/GallerySection";

const Projects = () => {
  const { t } = useTranslation(["projects"]);
  
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
      <div>
        <div className="pt-36 lg:pt-48 pb-24">
          <TitleSubtitle
            title="Nuestros proyectos de Home Staging Sensorial"
            subtitle="Cada propiedad cuenta una historia de transformación: del espacio vacío al activo que genera"
          />
        </div>
        {/* Galeria */}
        <div className="pb-48">
          <GallerySection />
        </div>
      </div>
    </>
  );
};

export default Projects;
