import { useEffect, useRef } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(SplitText, ScrollTrigger);

const TitleSubtitle = ({ title, subtitle }) => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  useEffect(() => {
    document.fonts.ready.then(() => {
      // Animación del título
      const splitTitle = new SplitText(titleRef.current, { type: "lines" });
      gsap.from(splitTitle.lines, {
        y: 30,
        autoAlpha: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      });

      // Animación del subtítulo
      const splitSubtitle = new SplitText(subtitleRef.current, {
        type: "lines",
      });
      gsap.from(splitSubtitle.lines, {
        y: 30,
        autoAlpha: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.05,
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
      className="text-center flex flex-col gap-3 items-center"
    >
      <h2
        aria-label={title}
        ref={titleRef}
        className="text-3xl md:text-5xl px-4"
      >
        {title}
      </h2>
      <p
        aria-label={subtitle}
        ref={subtitleRef}
        className="text-xl lg:text-2xl opacity-70 lg:w-1/2 px-3"
      >
        {subtitle}
      </p>
    </div>
  );
};

export default TitleSubtitle;
