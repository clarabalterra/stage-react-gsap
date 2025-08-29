import useEmblaCarousel from "embla-carousel-react";
import { useEffect } from "react";

const ServiceCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });

  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes()); // Access API
    }
  }, [emblaApi]);

  // Buttons


  return (
    <div>
      <div className="embla overflow-hidden" ref={emblaRef}>
        <div className="embla__container flex gap-6">
          <div className="embla__slide bg-coyote rounded-2xl w-120 h-170"></div>
          <div className="embla__slide  bg-coyote rounded-2xl w-120 h-170"></div>
          <div className="embla__slide bg-coyote rounded-2xl w-120 h-170"></div>
          <div className="embla__slide bg-coyote rounded-2xl w-120 h-170"></div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCarousel;
