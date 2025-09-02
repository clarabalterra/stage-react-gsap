import { useState, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { getProjects } from "../../data/projects";
import { NextButton } from "./carousel-projects/NextButton";
import { PrevButton } from "./carousel-projects/PrevButton";
import { usePrevNextButtons } from "./carousel-projects/usePrevNextButtons";
import { useTranslation } from "react-i18next";
import Button from "../../components/Button";

const ProjectsSection = () => {
  const { t } = useTranslation("home");

  const options = { dragFree: false };
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const projects = getProjects();

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  // Actualiza el proyecto activo cuando se cambia de slide
  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect(); // Inicial
  }, [emblaApi]);

  return (
    <section className="px-6 lg:px-12">
      <div
        className="h-[calc(100vh-3rem)] lg:h-[calc(100vh-6rem)] 
        w-[calc(100vw-3rem)] lg:w-[calc(100vw-6rem)] 
        rounded-2xl bg-coyote 
        flex flex-col lg:flex-row lg:justify-between gap-6 
        px-6 py-6"
      >
        {/* LADO IZQUIERDO */}
        <div className="text-alabaster flex flex-col justify-between gap-12 lg:pl-6 w-fit lg:w-[40%]">
          <div className="pt-6">
            <h2 className="text-3xl md:text-5xl">
              {t("project-slider.title")}
            </h2>
            <p className="text-2xl opacity-70 pt-3">
              {projects[selectedIndex]?.title}
            </p>
          </div>

          {/* FLECHAS */}
          <div className="flex flex-col md:flex-row gap-12 justify-between">
            <Button text={t("projects-btn.cta")} to="/projects" color="light"/>

            <div className="embla__controls flex gap-6">
              <PrevButton
                onClick={onPrevButtonClick}
                disabled={prevBtnDisabled}
                bgColor="bg-alabaster"
                textColor="text-coyote"
              />
              <NextButton
                onClick={onNextButtonClick}
                disabled={nextBtnDisabled}
                bgColor="bg-alabaster"
                textColor="text-coyote"
              />
            </div>
          </div>
        </div>

        {/* LADO DERECHO: CARRUSEL */}
        <div
          className="embla__viewport overflow-hidden w-full lg:w-[55%] h-[70%] lg:h-full snap-x snap-mandatory"
          ref={emblaRef}
        >
          <div className="embla__container flex gap-6 h-full">
            {projects.map((project, index) => (
              <div
                key={index}
                className="embla__slide flex-[0_0_100%] h-full flex items-center snap-start"
              >
                <div
                  className="w-full h-full rounded-2xl bg-center bg-cover bg-no-repeat"
                  style={{ backgroundImage: `url(${project.image})` }}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="pt-12 flex justify-center">
        <Button text={t("projects-btn.cta")} to="/projects" />
      </div>
    </section>
  );
};

export default ProjectsSection;
