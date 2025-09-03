import { useLocation, useNavigate } from "react-router-dom";
import { paths } from "../utils/paths";

const LanguageSwitcher = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Detectamos el idioma actual
  const currentLang = location.pathname.startsWith("/en") ? "en" : "es";

  const switchLanguage = (newLang) => {
    // Quitamos el prefijo del idioma actual
    const pathWithoutLang = location.pathname.replace(/^\/(es|en)/, "") || "/";

    // Buscamos la clave de la página actual en paths
    const pageKey = Object.keys(paths[currentLang]).find(
      (key) => paths[currentLang][key] === pathWithoutLang
    );

    // Construimos la nueva URL usando el slug del nuevo idioma
    const newPath = `/${newLang}${paths[newLang][pageKey] || ""}`;

    navigate(newPath);
  };

  return (
    <div className="flex gap-2">
      <button
        onClick={() => switchLanguage("es")}
        className={currentLang === "es" ? "font-bold" : ""}
      >
        ES
      </button>
      <span>|</span>
      <button
        onClick={() => switchLanguage("en")}
        className={currentLang === "en" ? "font-bold" : ""}
      >
        EN
      </button>
    </div>
  );
};

export default LanguageSwitcher;
