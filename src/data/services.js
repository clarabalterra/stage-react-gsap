import i18n from "i18next";

import comprehensive from "../assets/images/services/comprehensive.webp";
import visual from "../assets/images/services/visual-prod.webp";
import financeable from "../assets/images/services/financeable-furniture.webp";
import editorial from "../assets/images/services/editorial.webp";
import sensory from "../assets/images/services/sensory.webp";

export const getServices = () => [
  {
    image: comprehensive,
    title: i18n.t("services.1", { ns: "home" }),
  },
  {
    image: visual,
    title: i18n.t("services.2", { ns: "home" }),
  },
  {
    image: financeable,
    title: i18n.t("services.3", { ns: "home" }),
  },
  {
    image: editorial,
    title: i18n.t("services.4", { ns: "home" }),
  },
  {
    image: sensory,
    title: i18n.t("services.5", { ns: "home" }),
  },
];
