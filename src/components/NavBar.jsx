import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

import { useTranslation } from "react-i18next";

import gsap from "gsap";

const NavBar = () => {
  const { t, i18n } = useTranslation(["global"]);
  const [isOpen, setIsOpen] = useState(false);
  const mobileMenuRef = useRef(null);

  useEffect(() => {
    if (mobileMenuRef.current) {
      if (isOpen) {
        gsap.fromTo(
          mobileMenuRef.current,
          { height: 0, opacity: 0 },
          { height: "auto", opacity: 1, duration: 0.3, ease: "power2.out" }
        );
      } else {
        gsap.to(mobileMenuRef.current, {
          height: 0,
          opacity: 0,
          duration: 0.3,
          ease: "power2.in",
        });
      }
    }
  }, [isOpen]);

  return (
    <nav className="absolute w-full z-50 px-6 py-6 md:px-12 md:pt-8 text-alabaster">
      <div className="grid grid-cols-3">
        {/* Logo */}
        <div className="flex items-center">
          <a href="/">STAGÈ</a>
        </div>

        {/* Nav */}
        <div className="hidden lg:flex gap-4 items-center justify-self-center text-center">
          <a href="/projects">{t("header.projects")}</a>
          <a href="/services">{t("header.services")}</a>
          <a href="/about">{t("header.about")}</a>
        </div>

        {/* Lang y CTA */}
        <div className="hidden lg:flex gap-4 justify-self-end items-center">
          <div className="flex gap-2">
            <button
              onClick={() => i18n.changeLanguage("es")}
              className={i18n.language === "es" ? "font-bold" : ""}
            >
              es
            </button>
            <span>|</span>
            <button
              onClick={() => i18n.changeLanguage("en")}
              className={i18n.language === "en" ? "font-bold" : ""}
            >
              en
            </button>
          </div>

          <Link
            to="/contact"
            className="bg-alabaster text-coyote rounded-4xl px-4 py-2 w-45 flex justify-center"
          >
            {t("cta.contact")}
          </Link>
        </div>

        {/* Botón Mobile */}
        <button
          className="lg:hidden col-start-3 justify-self-end"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <CloseRoundedIcon /> : <MenuRoundedIcon />}
        </button>
      </div>

      {/* Menu Mobile */}
      <div
        ref={mobileMenuRef}
        className="lg:hidden overflow-hidden flex flex-col gap-3 bg-alabaster text-coyote rounded-2xl px-4 py-4 mt-3"
      >
        <div className="grid grid-cols-3">
          <a href="/projects" className="col-start-1 justify-self-start">
            {t("header.projects")}
          </a>
          <a href="/services" className="col-start-2 justify-self-center">
            {t("header.services")}
          </a>
          <a href="/about" className="col-start-3 justify-self-end">
            {t("header.about")}
          </a>
        </div>
        {/* LANG */}
        <div className="flex gap-2">
          <button onClick={() => i18n.changeLanguage("es")} className={i18n.language === "es" ? "font-bold" : ""}>ES</button>
          <p>|</p>
          <button onClick={() => i18n.changeLanguage("en")} className={i18n.language === "en" ? "font-bold" : ""}>EN</button>
        </div>
        {/* CTA */}
        <Link
          to="/contact"
          className="bg-coyote text-alabaster rounded-4xl px-4 py-2 flex justify-center"
        >
          {t("cta.contact")}
        </Link>{" "}
      </div>
    </nav>
  );
};

export default NavBar;
