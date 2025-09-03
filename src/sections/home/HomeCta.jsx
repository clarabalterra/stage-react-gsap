import gsap, { SplitText } from "gsap/all";
import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

// import { Trans } from "react-i18next";

const HomeCta = () => {
  const ctaRef = useRef(null);
  const containerRef = useRef(null);

  const { t } = useTranslation(["home"]);

  useEffect(() => {
    document.fonts.ready.then(() => {
      // Animación del título
      const splitTitle = new SplitText(ctaRef.current, { type: "lines" });

      gsap.from(splitTitle.lines, {
        y: 30,
        autoAlpha: 0,
        // rotation: "random(-20, 20)",
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      });
    });
  }, []);

  return (
    <div
      ref={containerRef}
      className="flex flex-col items-center justify-center text-3xl md:text-5xl"
    >
      <p ref={ctaRef} className="text-center leading-tight p-5 lg:w-3/6">
        {/* <Trans
          i18nKey="first-section.p"
          ns="home"
          components={{
            low: <span className="opacity-70" />,
          }}
        /> */}
        {t("first-section.p")}
      </p>
    </div>
  );
};

export default HomeCta;
