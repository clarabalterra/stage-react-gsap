import { t } from "i18next";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
t;
const Filter = () => {
  const { t } = useTranslation("projects");

  return (
    <div>
      <div className="flex justify-center gap-6">
        <Link
          to="{to}"
          className="bg-coyote  text-alabaster rounded-4xl text-xl px-6 py-3 w-fit"
        >
          {t("filter.all")}
        </Link>
        <Link
          to="{to}"
          className="bg-alabaster border-coyote/70 border-2 text-coyote rounded-4xl text-xl px-6 py-3 w-fit"
        >
          {t("filter.flats")}
        </Link>
        <Link
          to="{to}"
          className="bg-alabaster border-coyote/70 border-2 text-coyote rounded-4xl text-xl px-6 py-3 w-fit"
        >
          {t("filter.houses")}
        </Link>{" "}
        <Link
          to="{to}"
          className="bg-alabaster border-coyote/70 border-2 text-coyote rounded-4xl text-xl px-6 py-3 w-fit"
        >
          {t("filter.empty")}
        </Link>
        <Link
          to="{to}"
          className="bg-alabaster border-coyote/70 border-2 text-coyote rounded-4xl text-xl px-6 py-3 w-fit"
        >
          {t("filter.furnished")}
        </Link>
      </div>
    </div>
  );
};

export default Filter;
