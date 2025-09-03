import { useTranslation } from "react-i18next";
import Button from "../../components/Button";
import TitleSubtitle from "../../components/TitleSubtitle";

const FinalCta = () => {
  const { t } = useTranslation(["home"]);

  return (
    <div>
      <TitleSubtitle
        title={t("final-cta.title")}
        subtitle={t("final-cta.subtitle")}
      />
      <div className="flex justify-center pt-12">
        <Button text={t("cta.contact")} to="/" />
      </div>
    </div>
    // <div
    //   className="bg-coyote
    //     h-[calc(75vh-3rem)] lg:h-[calc(75vh-6rem)]
    //     w-[calc(100vw-3rem)] lg:w-[calc(100vw-6rem)]
    //     rounded-2xl"
    // >
    //   <div className="text-alabaster">
    //     <h2 className="text-3xl md:text-5xl">{t("final-cta.title")}</h2>
    //     <p className="text-2xl opacity-70">{t("final-cta.subtitle")}</p>
    //   </div>
    //   <Button text="" to="" color="light" />
    // </div>
  );
};

export default FinalCta;
