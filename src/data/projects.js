import i18n from "i18next";

import oliva from "../assets/images/projects/casa-oliva.webp";
import aire from "../assets/images/projects/aire-abierto.webp";
import sierra from "../assets/images/projects/luz-sierra.webp";
import brisa from "../assets/images/projects/brisa-mar.webp";
import lavanda from "../assets/images/projects/casa-lavanda.webp";
import calma from "../assets/images/projects/calma-brava.webp";

export const getProjects = () => [
  {
    image: oliva,
    title: i18n.t("projects.1", { ns: "home" }),
  },
  {
    image: aire,
    title: i18n.t("projects.2", { ns: "home" }),
  },
  {
    image: sierra,
    title: i18n.t("projects.3", { ns: "home" }),
  },
  {
    image: brisa,
    title: i18n.t("projects.4", { ns: "home" }),
  },
  {
    image: lavanda,
    title: i18n.t("projects.5", { ns: "home" }),
  },
  {
    image: calma,
    title: i18n.t("projects.6", { ns: "home" }),
  },
];
