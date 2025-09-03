import comprehensive from "../assets/images/services/comprehensive.webp";
import visual from "../assets/images/services/visual-prod.webp";
import financeable from "../assets/images/services/financeable-furniture.webp";
import editorial from "../assets/images/services/editorial.webp";
import sensory from "../assets/images/services/sensory.webp";

export const getServices = (t) => [
  {
    image: comprehensive,
    title: t("list.1", { ns: "services" }),
  },
  {
    image: visual,
    title: t("list.2", { ns: "services" }),
  },
  {
    image: financeable,
    title: t("list.3", { ns: "services" }),
  },
  {
    image: editorial,
    title: t("list.4", { ns: "services" }),
  },
  {
    image: sensory,
    title: t("list.5", { ns: "services" }),
  },
];
