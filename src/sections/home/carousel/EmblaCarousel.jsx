import useEmblaCarousel from "embla-carousel-react";
import { usePrevNextButtons } from "./usePrevNextButtons";
import { getServices } from "../../../data/services";
import { PrevButton } from "./PrevButton";
import { NextButton } from "./NextButton";
import { useTranslation } from "react-i18next";

const EmblaCarousel = (props) => {
  const { options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  const { t } = useTranslation("services");
  const services = getServices(t);

  return (
    <section className="">
      <div className="embla__viewport overflow-hidden" ref={emblaRef}>
        <div className="embla__container flex -ml-4 md:-ml-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="
          embla__slide 
          pl-4 md:pl-6
          flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_30%]
        "
            >
              <div
                className="h-64 md:h-80 lg:h-96 rounded-2xl bg-center bg-cover bg-no-repeat"
                style={{ backgroundImage: `url(${service.image})` }}
              ></div>
              <p className="pt-3 text-lg md:text-xl lg:text-2xl">
                {service.title}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="embla__buttons flex justify-center  gap-6 pt-12">
        <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
        <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
      </div>
    </section>
  );
};

export default EmblaCarousel;
