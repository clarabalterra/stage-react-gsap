import { useTranslation } from "react-i18next";
import TitleSubtitle from "../../components/TitleSubtitle";
import Button from "../../components/Button";

const NumbersSection = () => {
  const { t } = useTranslation("home");

  return (
    <div>
      <TitleSubtitle
        title={t("service-slider.title")}
        subtitle={t("service-slider.subtitle")}
      />

      <div className="flex flex-col lg:flex-row px-6 lg:px-12 gap-12 py-12">
        <div className="rounded-2xl bg-coyote h-120 w-full"></div>
        <div className="rounded-2xl bg-coyote h-120 w-full"></div>
      </div>

      <div className="flex justify-center">
        <Button text={t("numbers-btn.cta")} to="/contact" />
      </div>
    </div>
  );
};

export default NumbersSection;
