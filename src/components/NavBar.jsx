import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

import { useTranslation } from "react-i18next";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const NavBar = () => {
  const { t, i18n } = useTranslation(["global"]);
  const [isOpen, setIsOpen] = useState(false);
  const mobileMenuRef = useRef(null);
  const headerRef = useRef(null);

  // Animación del menú móvil
  useEffect(() => {
    if (mobileMenuRef.current) {
      if (isOpen) {
        gsap.fromTo(
          mobileMenuRef.current,
          { height: 0, opacity: 0 },
          { height: "auto", opacity: 1, duration: 0.4, ease: "power2.out" }
        );
      } else {
        gsap.to(mobileMenuRef.current, {
          height: 0,
          opacity: 0,
          duration: 0.4,
          ease: "power2.in",
        });
      }
    }
  }, [isOpen]);

  // Animación del header al hacer scroll (smooth)
  useEffect(() => {
    const header = headerRef.current;
    const headerHeight = header.offsetHeight;

    ScrollTrigger.create({
      start: "top top",
      end: "max",
      onUpdate: (self) => {
        if (self.direction === 1 && self.scroll() > 50) {
          // Scroll hacia abajo → esconder
          gsap.to(header, {
            y: -headerHeight,
            duration: 0.8,
            overwrite: "auto",
          });
        } else if (self.direction === -1) {
          // Scroll hacia arriba → mostrar
          gsap.to(header, {
            y: 0,
            duration: 0.4,
            overwrite: "auto",
          });
        }
      },
    });
  }, []);

  return (
    <nav
      ref={headerRef}
      className="fixed top-0 left-0 w-full z-50 px-6 py-6 md:px-6 text-alabaster"
    >
      <div className="grid grid-cols-3 backdrop-blur-xs rounded-4xl px-6 py-3">
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
          <button
            onClick={() => i18n.changeLanguage("es")}
            className={i18n.language === "es" ? "font-bold" : ""}
          >
            ES
          </button>
          <p>|</p>
          <button
            onClick={() => i18n.changeLanguage("en")}
            className={i18n.language === "en" ? "font-bold" : ""}
          >
            EN
          </button>
        </div>
        {/* CTA */}
        <Link
          to="/contact"
          className="bg-coyote text-alabaster rounded-4xl px-4 py-2 flex justify-center"
        >
          {t("cta.contact")}
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
