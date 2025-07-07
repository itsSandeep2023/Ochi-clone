import React, { useEffect, useRef, useState } from "react";

function Eyes() {
  const divRef1 = useRef(null);
  const divRef2 = useRef(null);
  const eyeRef1 = useRef(null);
  const eyeRef2 = useRef(null);

  const [rotate1, setRotate1] = useState(0);
  const [rotate2, setRotate2] = useState(0);
  const [offset1, setOffset1] = useState({ x: 0, y: 0 });
  const [offset2, setOffset2] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      const computeRotation = (ref, setRotate) => {
        if (ref.current) {
          const rect = ref.current.getBoundingClientRect();
          const centerX = rect.left + rect.width / 2;
          const centerY = rect.top + rect.height / 2;

          const deltaX = mouseX - centerX;
          const deltaY = mouseY - centerY;
          const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
          setRotate(angle - 180);
        }
      };

      const computeMagneticOffset = (ref, setOffset) => {
        if (ref.current) {
          const rect = ref.current.getBoundingClientRect();
          const centerX = rect.left + rect.width / 2;
          const centerY = rect.top + rect.height / 2;

          const deltaX = mouseX - centerX;
          const deltaY = mouseY - centerY;

          const maxDistance = rect.width * 0.2;
          const distance = Math.min(
            maxDistance,
            Math.sqrt(deltaX ** 2 + deltaY ** 2) * 0.03
          );
          const angle = Math.atan2(deltaY, deltaX);

          const offsetX = distance * Math.cos(angle);
          const offsetY = distance * Math.sin(angle);
          setOffset({ x: offsetX, y: offsetY });
        }
      };

      computeRotation(divRef1, setRotate1);
      computeRotation(divRef2, setRotate2);

      computeMagneticOffset(eyeRef1, setOffset1);
      computeMagneticOffset(eyeRef2, setOffset2);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="eyes w-full overflow-hidden flex justify-center items-center font-['Neue_Montreal']">
      <div className="relative w-full h-[60vw] bg-cover bg-center bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg')]">
        <div
          data-scroll
          data-scroll-speed=".05"
          className="absolute flex gap-[3vw] top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]"
        >
          {/* Left Eye */}
          <div className="relative flex justify-center items-center w-[14vw] h-[14vw] rounded-full bg-zinc-100">
            <h1 className="text-[1.5vw] text-zinc-100 uppercase z-9">play</h1>
            <div
              ref={eyeRef1}
              className="eye absolute flex items-center w-2/3 h-2/3 rounded-full bg-zinc-900"
              style={{
                transform: `translate(${offset1.x}px, ${offset1.y}px)`,
                transition: "transform 0.1s linear",
              }}
            >
              <div
                ref={divRef1}
                style={{
                  transform: `rotate(${rotate1}deg)`,
                }}
                className="line top-1/2 left-1/2 w-full h-1/6"
              >
                <div className="w-1/7 aspect-square rounded-full bg-zinc-100"></div>
              </div>
            </div>
          </div>

          {/* Right Eye */}
          <div className="relative flex justify-center items-center w-[14vw] h-[14vw] rounded-full bg-zinc-100">
            <h1 className="text-[1.5vw] text-zinc-100 uppercase z-9">play</h1>
            <div
              ref={eyeRef2}
              className="eye absolute flex items-center justify-center w-2/3 h-2/3 rounded-full bg-zinc-900"
              style={{
                transform: `translate(${offset2.x}px, ${offset2.y}px)`,
                transition: "transform 0.1s linear",
              }}
            >
              <div
                ref={divRef2}
                style={{
                  transform: `rotate(${rotate2}deg)`,
                }}
                className="line top-1/2 left-1/2 w-full h-1/6"
              >
                <div className="w-1/7 aspect-square rounded-full bg-zinc-100"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Eyes;
