import React, { useRef, useState } from "react";
import { FaArrowUpLong } from "react-icons/fa6";

function About() {
  const refd = useRef(null);
  const [hovered, setHovered] = useState(false);

  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-.05"
      className="w-full py-[5vw] bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl font-['Neue_Montreal']"
    >
      <h1 className="px-[3vw] font-['Neue_Montreal'] text-[3.5vw] leading-[4vw]">
        Ochi is a strategic presentation agency for forward-thinking businesses
        that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and
        hire great peo­ple.
      </h1>
      <div className="px-[3vw] w-full flex gap-[3vw] border-t-[1px] pt-[1vw] mt-[4vw] border-[#99AD53]">
        <div className="w-1/2">
          <h1 className="text-[3.5vw]">Our approach:</h1>
          <button
            className="flex gap-[2vw] items-center px-[1.7vw] mt-[1vw] py-[1.3vw] bg-zinc-900 rounded-full text-[1vw] text-white uppercase cursor-pointer hover:*:scale-450 *:duration-300 *:*:invisible hover:*:*:visible"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            Read More
            <div className="rotate-45 w-[.7vw] h-[.7vw] bg-zinc-100 rounded-full flex justify-center items-center">
              <FaArrowUpLong className="w-[.3vw] h-[.3vw] text-zinc-700" />
            </div>
          </button>
        </div>
        <div
          ref={refd}
          className={`w-[50vw] rounded-xl overflow-hidden bg-[#b2ca59] duration-1000 ${
            hovered ? "scale-[0.95]" : "scale-100"
          }`}
        >
          <img
            className={`w-full duration-1000 ${
              hovered ? "scale-110" : "scale-100"
            }`}
            src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default About;
