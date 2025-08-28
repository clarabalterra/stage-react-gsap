import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const { t } = useTranslation(["home"]);

  return (
    <div>
      <section
        className="h-screen 
      bg-[url('./assets/images/home/hero-home.jpg')] bg-cover bg-center 
      relative flex flex-col justify-end 
      px-6 pb-18 md:px-12 md:pb-18"
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 z-10"></div>

        {/* Texto */}
        <div className="text-alabaster relative z-20">
          <h2 className="text-xl uppercase">Sensorial Home Staging</h2>
          <h1 className="text-4xl md:text-6xl md:uppercase">
            {t("hero.h1")} <br />
            {t("hero.h12")}
          </h1>
          <p className="lg:w-1/5 my-8 leading-tight">
            {t('hero.cta')}
          </p>
          <Link
            to="/contact"
            className="bg-alabaster text-coyote rounded-4xl px-4 py-2 w-45 flex justify-center"
          >
            {t("cta.contact")}
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
