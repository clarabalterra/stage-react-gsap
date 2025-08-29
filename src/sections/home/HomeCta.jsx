import { Trans, useTranslation } from "react-i18next";

const HomeCta = () => {
  const { i18n } = useTranslation("home"); 

  return (
    <div className="flex flex-col items-center justify-center text-3xl md:text-5xl">
      <p className="text-center leading-tight p-5 lg:w-3/6">
        <Trans
          i18nKey="first-section.p"
          ns="home"
          components={{
            low: <span className="opacity-70" />,
          }}
        />
      </p>
    </div>
  );
};

export default HomeCta;
