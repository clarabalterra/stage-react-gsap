import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

import { useTranslation } from "react-i18next";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import logo from "../assets/stage-h.svg";
import { paths } from "../utils/paths";
import LanguageSwitcher from "./LanguageSwitcher";

gsap.registerPlugin(ScrollTrigger);

const NavBar = () => {
  const { t, i18n } = useTranslation(["global"]);
  const [isOpen, setIsOpen] = useState(false);
  const mobileMenuRef = useRef(null);
  const headerRef = useRef(null);

  const currentLang = ["es", "en"].includes(i18n.language)
    ? i18n.language
    : "es";

  // Animación del menú móvil
  useEffect(() => {
    if (!mobileMenuRef.current) return;
    if (isOpen) {
      gsap.set(mobileMenuRef.current, { height: 0, opacity: 0 });
      gsap.to(mobileMenuRef.current, {
        height: "auto",
        opacity: 1,
        duration: 0.4,
        ease: "power2.out",
      });
    } else {
      gsap.to(mobileMenuRef.current, {
        height: 0,
        opacity: 0,
        duration: 0.4,
        ease: "power2.in",
      });
    }
  }, [isOpen]);

  // Cerrar menú al click fuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target) &&
        !event.target.closest("button")
      ) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [isOpen]);

  // Animación del header al hacer scroll
  useEffect(() => {
    const header = headerRef.current;
    const headerHeight = header.offsetHeight;

    ScrollTrigger.create({
      start: "top top",
      end: "max",
      onUpdate: (self) => {
        if (self.direction === 1 && self.scroll() > 50) {
          gsap.to(header, {
            y: -headerHeight,
            duration: 0.8,
            overwrite: "auto",
          });
        } else if (self.direction === -1) {
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
      <div className="grid grid-cols-3 backdrop-blur-xs rounded-full px-6 py-3 bg-coyote/40 text-lg">
        {/* Logo */}
        <div className="flex items-start pb-1 lg:pt-2">
          <Link to={`/${currentLang}${paths[currentLang]?.home || "/"}`}>
            <img src={logo} alt="Logo Stage Mediterraneo" className="h-8" />
          </Link>
        </div>

        {/* Nav desktop */}
        <div className="hidden lg:flex gap-4 items-center justify-self-center text-center">
          <Link to={`/${currentLang}${paths[currentLang].projects}`}>
            {t("nav.projects")}
          </Link>
          <Link to={`/${currentLang}${paths[currentLang].services}`}>
            {t("nav.services")}
          </Link>
          <Link to={`/${currentLang}${paths[currentLang].about}`}>
            {t("nav.about")}
          </Link>
        </div>

        {/* Lang y CTA desktop */}
        <div className="hidden lg:flex gap-4 justify-self-end items-center">
          <LanguageSwitcher />
          <Link
            to={`/${currentLang}${paths[currentLang].contact}`}
            className="bg-alabaster text-coyote rounded-4xl text-xl px-6 py-3 w-60 flex justify-center"
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
        style={{ height: 0, opacity: 0 }}
      >
        <Link to={`/${currentLang}${paths[currentLang].projects}`}>
          {t("nav.projects")}
        </Link>
        <Link to={`/${currentLang}${paths[currentLang].services}`}>
          {t("nav.services")}
        </Link>
        <Link to={`/${currentLang}${paths[currentLang].about}`}>
          {t("nav.about")}
        </Link>

        {/* Lang mobile */}
        <LanguageSwitcher />

        {/* CTA mobile */}
        <Link
          to={`/${currentLang}${paths[currentLang].contact}`}
          className="bg-coyote text-alabaster rounded-4xl px-4 py-2 flex justify-center"
        >
          {t("cta.contact")}
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
