import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import useEmblaCarousel from "embla-carousel-react";

const Filter = () => {
  const { t } = useTranslation("projects");
  const [emblaRef] = useEmblaCarousel({
    dragFree: true,
    containScroll: "trimSnaps",
  });

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex gap-6">
        <Link
          to=""
          className="bg-coyote text-alabaster rounded-4xl text-xl px-6 py-3 w-fit flex-shrink-0"
        >
          {t("filter.all")}
        </Link>
        <Link
          to=""
          className="bg-alabaster border-coyote/70 border-2 text-coyote rounded-4xl text-xl px-6 py-3 w-fit flex-shrink-0"
        >
          {t("filter.flats")}
        </Link>
        <Link
          to=""
          className="bg-alabaster border-coyote/70 border-2 text-coyote rounded-4xl text-xl px-6 py-3 w-fit flex-shrink-0"
        >
          {t("filter.houses")}
        </Link>
        <Link
          to=""
          className="bg-alabaster border-coyote/70 border-2 text-coyote rounded-4xl text-xl px-6 py-3 w-fit flex-shrink-0"
        >
          {t("filter.empty")}
        </Link>
        <Link
          to=""
          className="bg-alabaster border-coyote/70 border-2 text-coyote rounded-4xl text-xl px-6 py-3 w-fit flex-shrink-0"
        >
          {t("filter.furnished")}
        </Link>
      </div>
    </div>
  );
};

export default Filter;
