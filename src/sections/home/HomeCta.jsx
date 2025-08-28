import { useTranslation } from "react-i18next";

const HomeCta = () => {
  const { t } = useTranslation(["home"]);

  return (
    <div className="flex items-center justify-center h-150">
      <p className="text-5xl w-3/5 text-center leading-tight">{t('first-section.p')}</p>
    </div>
  );
};

export default HomeCta;
