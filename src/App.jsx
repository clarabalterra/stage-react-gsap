import { Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Services from "./pages/Services";
import Contact from "./pages/Contact";

import { paths } from "./utils/paths"; // Importamos los slugs traducidos

const App = () => {
  return (
    <Suspense fallback="">
      <NavBar />
      <Routes>
        {/* Redirige la raíz al idioma por defecto */}
        <Route path="/" element={<Navigate to="/es" />} />

        {/* Home */}
        <Route path="/:lang" element={<Home />} />

        {/* Otras páginas usando los slugs de paths.js */}
        <Route path={`/:lang${paths.es.projects}`} element={<Projects />} />
        <Route path={`/:lang${paths.en.projects}`} element={<Projects />} />

        <Route path={`/:lang${paths.es.services}`} element={<Services />} />
        <Route path={`/:lang${paths.en.services}`} element={<Services />} />

        <Route path={`/:lang${paths.es.about}`} element={<About />} />
        <Route path={`/:lang${paths.en.about}`} element={<About />} />

        <Route path={`/:lang${paths.es.contact}`} element={<Contact />} />
        <Route path={`/:lang${paths.en.contact}`} element={<Contact />} />
      </Routes>
      <Footer />
    </Suspense>
  );
};

export default App;
