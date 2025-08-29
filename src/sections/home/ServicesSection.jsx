import { useTranslation } from "react-i18next";
import TitleSubtitle from "../../components/TitleSubtitle";
import Button from "../../components/Button";
import EmblaCarousel from "../home/carousel/EmblaCarousel"

const ServicesSection = () => {
  const { t } = useTranslation("home");

  const options = { dragFree: true };

  return (
    <div>
      <TitleSubtitle
        title={t("service-slider.title")}
        subtitle={t("service-slider.subtitle")}
      />

      <div className="pt-15">
        <EmblaCarousel options={options} />
      </div>

      <div className="flex justify-center">
        <Button text={t("service-btn.cta")} to="/services" />
      </div>
    </div>
  );
};

export default ServicesSection;
