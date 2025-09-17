import gsap from "gsap";
import { Draggable } from "gsap/all";
import { useRef, useEffect } from "react";

import antes from "../../assets/images/projects/antes.jpg";
import despues from "../../assets/images/projects/despues.jpg";

gsap.registerPlugin(Draggable);

const ImageComparison = () => {
  const clipped = useRef(null);
  const gallery = useRef(null);
  const dragger = useRef(null);
  let ratio = 0.5;

  useEffect(() => {
    const draggable = Draggable.create(dragger.current, {
      type: "x",
      bounds: gallery.current,
      onDrag: onDrag,
    })[0];

    window.addEventListener("resize", onResize);
    onResize();

    function onDrag() {
      const width = gallery.current.getBoundingClientRect().width;
      gsap.set(clipped.current, {
        clipPath: `inset(0px ${width - draggable.x}px 0px 0px)`,
      });
      ratio = draggable.x / width;
    }

    function onResize() {
      const width = gallery.current.getBoundingClientRect().width;
      const x = ratio * width;

      gsap.set(dragger.current, { x });
      gsap.set(clipped.current, {
        clipPath: `inset(0px ${width - x}px 0px 0px)`,
      });

      draggable.update(true);
    }

    return () => {
      window.removeEventListener("resize", onResize);
      draggable.kill();
    };
  }, []);

  return (
    <div className="flex justify-center lg:px-12 rounded-2xl">
      <div
        className="bg-coyote 
          h-[calc(100vh-3rem)] lg:h-[calc(100vh-6rem)] 
          w-[calc(100vw-3rem)] lg:w-[calc(100vw-6rem)] 
          rounded-2xl"
      >
        <div
          ref={gallery}
          className="relative w-full h-full overflow-hidden  rounded-2xl"
        >
          {/* Imagen base */}
          <img
            src={antes}
            className="absolute top-0 left-0 w-full h-full object-cover rounded-2xl"
          />
          {/* Imagen recortada */}
          <img
            ref={clipped}
            src={despues}
            className="absolute top-0 left-0 w-full h-full object-cover  rounded-2xl"
          />
          {/* Barra draggable */}
          <div
            ref={dragger}
            className="absolute top-0 bottom-0 w-2 bg-alabaster cursor-col-resize transform -translate-x-1/2"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default ImageComparison;
