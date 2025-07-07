import { motion } from "motion/react";
import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";
import { FaEye } from "react-icons/fa6";

function LandingPage() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-0.3"
      className="w-full pt-1 my-15 "
    >
      <div className="textstructure mt-25 max-md:mt-0 pt-5 px-[3.5vw] font-['Founders_Grotesk_X-Condensed']">
        {["We Create", "-Opening", "Presentations"].map((item, index) => {
          return (
            <div key={index} className="masker over">
              <div className="w-full flex">
                {index === 1 && (
                  <motion.h1
                    initial={{ width: 0 }}
                    animate={{ width: "10vw" }}
                    transition={{ ease: [0.76, 0, 0.2, 1], duration: 1.5 }}
                    className="uppercase text-[9vw] text-green-600 leading-[6.7vw]  overflow-hidden"
                  >
                    eye
                  </motion.h1>
                )}
                <h1 className="uppercase text-[9vw] leading-[6.7vw] h-full">
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>

      <div className="border-t-[1px] border-zinc-400 mt-50 md:mt-40 flex max-md:flex-col gap-10 justify-between items-center max-md:items-start py-3 px-[3.5vw] font-['Neue_Montreal'] mb-[8vw]">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => (
          <p
            key={index}
            className="text-md max-md:text-base font-normal text-nowrap leading-none"
          >
            {item}
          </p>
        ))}
        <div className="start flex items-center gap-1.5 cursor-pointer hover:*:text-white hover:*:bg-zinc-800 *:duration-300">
          <div className="px-5 py-2 max-md:px-3 max-md:py-1 text-md max-md:text-xs text-nowrap uppercase border-[2px] border-zinc-500 rounded-full cursor-pointer">
            Start The Project
          </div>
          <div className="w-10 h-10 visible max-xl:invisible flex justify-center items-center border-[2px] border-zinc-500 rounded-full cursor-pointer">
            <span className="rotate-45">
              <FaArrowUpLong />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
