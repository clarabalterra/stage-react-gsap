import useEmblaCarousel from "embla-carousel-react";
import { usePrevNextButtons } from "./usePrevNextButtons";
import { services } from "../../../data/services";
import { PrevButton } from "./PrevButton";
import { NextButton } from "./NextButton";

const EmblaCarousel = (props) => {
  const { options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <section className="">
      <div className="embla__viewport overflow-hidden" ref={emblaRef}>
        <div className="embla__container flex -ml-6">
          {services.map((_, index) => (
            <div key={index} className="embla__slide pl-6 flex-[0_0_30%]">
              <div className="embla__slide__number flex items-center justify-center h-130 select-none bg-coyote  rounded-2xl">
                {index + 1}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls grid grid-cols-[auto_1fr] justify-between gap-[1.2rem] mt-[1.8rem]">
        <div className="embla__buttons grid grid-cols-2 gap-[0.6rem] items-center">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;
