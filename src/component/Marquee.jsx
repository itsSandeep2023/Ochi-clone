import { motion } from "motion/react";
import React from "react";

function Marquee() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-.1"
      className="w-full py-[7vw] rounded-tl-3xl rounded-tr-3xl bg-[#004D43]"
    >
      <div className="text w-full h-[22.5vw] border-t-[1px] border-b-[1px] border-zinc-400 flex overflow-hidden whitespace-nowrap text-white tracking-tighter font-['Founders_Grotesk_X-Condensed']">
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 8 }}
          className=" text-[30vw] pr-[3vw] leading-[19vw] uppercase"
        >
          we are ochi
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 8 }}
          className="pr-[3vw] text-[30vw] leading-[19vw] uppercase"
        >
          we are ochi
        </motion.h1>
      </div>
    </div>
  );
}

export default Marquee;
