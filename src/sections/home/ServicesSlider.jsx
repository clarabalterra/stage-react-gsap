import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";

import EastRoundedIcon from "@mui/icons-material/EastRounded";
import WestRoundedIcon from "@mui/icons-material/WestRounded";

gsap.registerPlugin(Draggable);

const ServicesSlider = () => {
  const containerRef = useRef(null);
  const xRef = useRef(0);
  const itemWidth = 400; // Ajusta al ancho que quieras

  useEffect(() => {
    const container = containerRef.current;

    Draggable.create(container, {
      type: "x",
      edgeResistance: 0.85,
      inertia: true,
      onDrag() {
        xRef.current = this.x;
      },
      onThrowUpdate() {
        xRef.current = this.x;
      },
    });
  }, []);

  const move = (dir) => {
    const container = containerRef.current;
    xRef.current += dir * -itemWidth;
    gsap.to(container, { x: xRef.current, duration: 0.5 });
  };

  return (
    <div className="w-full overflow-hidden relative">
      <div
        className="flex gap-6 select-none w-max cursor-grab"
        ref={containerRef}
      >
        {[1, 2, 3, 4, 5, 6, 7].map((n) => (
          <div
            key={n}
            className="w-120 h-170 flex items-center justify-center bg-coyote rounded-2xl"
          >
            Item {n}
          </div>
        ))}
      </div>
      <div className="flex justify-center gap-4 mt-6">
        <button
          onClick={() => move(-1)}
          className="bg-coyote text-alabaster rounded-4xl px-4 py-2"
        >
          <WestRoundedIcon />
        </button>
        <button
          onClick={() => move(1)}
          className="bg-coyote text-alabaster rounded-4xl px-4 py-2"
        >
          <EastRoundedIcon />
        </button>
      </div>
    </div>
  );
};

export default ServicesSlider;
