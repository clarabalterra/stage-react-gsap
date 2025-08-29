import { useTranslation } from "react-i18next";
import TitleSubtitle from "../../components/TitleSubtitle";
import ServicesSlider from "./ServicesSlider";
import Button from "../../components/Button";

const ServicesSection = () => {
  const { t } = useTranslation("home");

  return (
    <div>
      <TitleSubtitle
        title={t("service-slider.title")}
        subtitle={t("service-slider.subtitle")}
      />

      <div className="py-25">
        <ServicesSlider />
      </div>
      
      <div className="flex justify-center">
        <Button text={t("service-btn.cta")} to="/services" />
      </div>
    </div>
  );
};

export default ServicesSection;
