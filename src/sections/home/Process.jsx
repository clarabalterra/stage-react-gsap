import TitleSubtitle from "../../components/TitleSubtitle";
import { useTranslation } from "react-i18next";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import TipsAndUpdatesRoundedIcon from "@mui/icons-material/TipsAndUpdatesRounded";
import HandymanRoundedIcon from "@mui/icons-material/HandymanRounded";
import CameraEnhanceRoundedIcon from "@mui/icons-material/CameraEnhanceRounded";
import AutoGraphRoundedIcon from "@mui/icons-material/AutoGraphRounded";

gsap.registerPlugin(ScrollTrigger);

const Process = () => {
  const { t } = useTranslation("home");

  useEffect(() => {
    const steps = gsap.utils.toArray(".process-step");

    gsap.set(steps, { autoAlpha: 0, y: 70 });

    steps.forEach((step, i) => {
      gsap.to(step, {
        autoAlpha: 1,
        y: 0,
        duration: 0.5,
        ease: "power2.out",
        delay: i * 0.15, // mantiene un pequeño stagger entre pasos
        scrollTrigger: {
          trigger: step,
          start: "top 80%", // se activa cuando cada bloque entra
          toggleActions: "play none none none",
        },
      });
    });
  }, []);

  return (
    <div>
      <TitleSubtitle
        title={t("process-section.title")}
        subtitle={t("process-section.subtitle")}
      />

      <div
        id="container"
        className="flex flex-col lg:flex-row gap-6 px-6 lg:px-12 py-12 text-alabaster"
      >
        {/* 01 First Step */}
        <div className="process-step bg-coyote w-full lg:flex-1 h-60 rounded-2xl flex flex-col justify-between py-6 px-6">
          <div className="text-2xl flex justify-between">
            <div>
              <span>01</span>
              <h3>{t("process-steps.first.title")}</h3>
            </div>
            <div className="text-5xl">
              <SearchRoundedIcon fontSize="inherit" />
            </div>
          </div>
          <p className="text-lg opacity-70">
            {t("process-steps.first.subtitle")}
          </p>
        </div>

        {/* 02 Second Step */}
        <div className="process-step bg-coyote w-full lg:flex-1 h-60 rounded-2xl flex flex-col justify-between py-6 px-6">
          <div className="text-2xl flex justify-between">
            <div>
              <span>02</span>
              <h3>{t("process-steps.second.title")}</h3>
            </div>
            <div className="text-5xl">
              <TipsAndUpdatesRoundedIcon fontSize="inherit" />
            </div>
          </div>
          <p className="text-lg opacity-70">
            {t("process-steps.second.subtitle")}
          </p>
        </div>

        {/* 03 Third Step */}
        <div className="process-step bg-coyote w-full lg:flex-1 h-60 rounded-2xl flex flex-col justify-between py-6 px-6">
          <div className="text-2xl flex justify-between">
            <div>
              <span>03</span>
              <h3>{t("process-steps.third.title")}</h3>
            </div>
            <div className="text-5xl">
              <HandymanRoundedIcon fontSize="inherit" />
            </div>
          </div>
          <p className="text-lg opacity-70">
            {t("process-steps.third.subtitle")}
          </p>
        </div>

        {/* 04 Fourth Step */}
        <div className="process-step bg-coyote w-full lg:flex-1 h-60 rounded-2xl flex flex-col justify-between py-6 px-6">
          <div className="text-2xl flex justify-between">
            <div>
              <span>04</span>
              <h3>{t("process-steps.fourth.title")}</h3>
            </div>
            <div className="text-5xl">
              <CameraEnhanceRoundedIcon fontSize="inherit" />
            </div>
          </div>
          <p className="text-lg opacity-70">
            {t("process-steps.fourth.subtitle")}
          </p>
        </div>

        {/* 05 Fifth Step */}
        <div className="process-step bg-coyote w-full lg:flex-1 h-60 rounded-2xl flex flex-col justify-between py-6 px-6">
          <div className="text-2xl flex justify-between">
            <div>
              <span>05</span>
              <h3>{t("process-steps.fifth.title")}</h3>
            </div>
            <div className="text-5xl">
              <AutoGraphRoundedIcon fontSize="inherit" />
            </div>
          </div>
          <p className="text-lg opacity-70">
            {t("process-steps.fifth.subtitle")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Process;
