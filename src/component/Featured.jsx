import { motion, useAnimation } from "motion/react";
import React, { useState } from "react";

function Featured() {
  const cards = [
    useAnimation(),
    useAnimation(),
    useAnimation(),
    useAnimation(),
  ];

  const handleHover = (index) => {
    cards[index].start({ y: 0 });
  };

  const handleHoverEnd = (index) => {
    cards[index].start({ y: "100%" });
  };

  return (
    <div className="w-full py-[8vw] font-['Neue_Montreal'] border-b-[1px] border-zinc-500">
      <div className="w-full px-[3vw] pb-10 border-b-[1px] border-zinc-400">
        <h1 className="text-7xl max-lg:text-5xl max-md:text-3xl font-['Neue_Montreal']">
          Featured proejects
        </h1>
      </div>

      <div className="w-full px-[3vw] py-15">
        <div className="cards w-full flex flex-col gap-10">
          {/* should be in pair of two */}

          {/* pair 1 */}
          <div className="flex flex-row max-md:flex-col justify-between items-center  gap-5">
            <div className="cardcontainer relative w-1/2 max-xl:w-full h-auto">
              <div className="title w-full mb-[1vw] flex items-center gap-2">
                <div className="w-[.8vw] h-[.8vw] rounded-full bg-zinc-800"></div>
                <h1 className="text-md max-xl:text-base max-lg:text-sm max-md:text-xs uppercase">
                  Salience Labs
                </h1>
              </div>
              <motion.div
                onHoverStart={() => handleHover(0)}
                onHoverEnd={() => handleHoverEnd(0)}
                className="card w-full rounded-xl overflow-hidden"
              >
                <h1 className="absolute flex overflow-hidden left-full max-md:left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 text-lime-300 uppercase leading-none tracking-tight text-9xl font-['Founders_Grotesk_X-Condensed']">
                  {"FYDE".split("").map((item, index) => (
                    <motion.span
                      key={index}
                      initial={{ y: "100%" }}
                      animate={cards[0]}
                      transition={{
                        ease: [0.76, 0, 0.2, 1],
                        delay: index * 0.06,
                      }}
                      className="inline-block"
                    >
                      {item}
                    </motion.span>
                  ))}
                </h1>
                <motion.img
                  whileHover={{
                    scale: 0.95,
                    transition: { duration: 0.5 },
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full h-full bg-cover rounded-2xl"
                  src="https://ochi.design/wp-content/uploads/2025/02/Salience_Website_cover-663x551.png"
                ></motion.img>
              </motion.div>
              <div className="buttons w-full mt-[1vw] flex flex-wrap gap-3">
                <div className="w-fit px-[.8vw] py-[.2vw] text-zinc-800 text-md max-xl:text-base max-lg:text-sm uppercase rounded-2xl border-1 hover:text-white hover:bg-zinc-900 duration-300 cursor-pointer">
                  brand identity
                </div>
                <div className="w-fit px-[.8vw] py-[.2vw] text-zinc-800 text-md max-xl:text-base max-lg:text-sm uppercase rounded-2xl border-1 hover:text-white hover:bg-zinc-900 duration-300 cursor-pointer">
                  pitch deck
                </div>
              </div>
            </div>

            <div className="cardcontainer items-stretch relative w-1/2 max-xl:w-full h-auto">
              <div className="w-[100%] pb-[1vw] flex items-center gap-2">
                <div className="w-[.8vw] h-[.8vw] rounded-full bg-zinc-800"></div>
                <h1 className="text-md max-2xl:text-base max-lg:text-sm max-md:text-xs uppercase">
                  Fyde
                </h1>
              </div>
              <motion.div
                onHoverStart={() => handleHover(1)}
                onHoverEnd={() => handleHoverEnd(1)}
                className="card w-full h-full rounded-xl overflow-hidden cursor-pointer"
              >
                <h1 className="absolute flex overflow-hidden left-0 max-md:left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 text-lime-300 uppercase leading-none tracking-tight text-9xl font-['Founders_Grotesk_X-Condensed']">
                  {"VISE".split("").map((item, index) => (
                    <motion.span
                      initial={{ y: "100%" }}
                      animate={cards[1]}
                      transition={{
                        ease: [0.76, 0, 0.2, 1],
                        delay: index * 0.06,
                      }}
                      className="inline-block"
                    >
                      {item}
                    </motion.span>
                  ))}
                </h1>
                <motion.img
                  whileHover={{
                    scale: 0.95,
                    transition: { duration: 0.5 },
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full h-full bg-cover rounded-2xl"
                  src="https://ochi.design/wp-content/uploads/2025/02/Fyde_Front-1-663x551.png"
                ></motion.img>
              </motion.div>
              <div className="buttons w-full mt-[1vw] flex flex-wrap gap-3">
                <div className="w-fit px-[.8vw] py-[.2vw] text-zinc-800 text-md max-xl:text-base max-lg:text-sm uppercase rounded-2xl border-1 hover:text-white hover:bg-zinc-900 duration-300 cursor-pointer">
                  audit
                </div>
                <div className="w-fit px-[.8vw] py-[.2vw] text-zinc-800 text-md max-xl:text-base max-lg:text-sm uppercase rounded-2xl border-1 hover:text-white hover:bg-zinc-900 duration-300 cursor-pointer">
                  sales deck
                </div>
              </div>
            </div>
          </div>

          {/* pair 2 */}
          <div className="flex flex-row max-md:flex-col justify-between items-center  gap-5">
            <div className="cardcontainer relative w-1/2 max-xl:w-full h-auto">
              <div className="title w-full mb-[1vw] flex items-center gap-2">
                <div className="w-[.8vw] h-[.8vw] rounded-full bg-zinc-800"></div>
                <h1 className="text-md max-xl:text-base max-lg:text-sm max-md:text-xs uppercase">
                  black book
                </h1>
              </div>
              <motion.div
                onHoverStart={() => handleHover(2)}
                onHoverEnd={() => handleHoverEnd(2)}
                className="card w-full rounded-xl overflow-hidden"
              >
                <h1 className="absolute flex overflow-hidden left-full max-md:left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 text-lime-300 uppercase leading-none tracking-tight text-9xl font-['Founders_Grotesk_X-Condensed']">
                  {"BLACK_BOOK".split("").map((item, index) => (
                    <motion.span
                      initial={{ y: "100%" }}
                      animate={cards[2]}
                      transition={{
                        ease: [0.76, 0, 0.2, 1],
                        delay: index * 0.06,
                      }}
                      className="inline-block"
                    >
                      {item}
                    </motion.span>
                  ))}
                </h1>
                <motion.img
                  whileHover={{
                    scale: 0.95,
                    transition: { duration: 0.5 },
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full h-full bg-cover rounded-2xl"
                  src="https://ochi.design/wp-content/uploads/2022/06/Frame-3876-663x551.jpg"
                ></motion.img>
              </motion.div>
              <div className="buttons w-full mt-[1vw] flex flex-wrap gap-3">
                <div className="w-fit px-[.8vw] py-[.2vw] text-zinc-800 text-md max-xl:text-base max-lg:text-sm uppercase rounded-2xl border-1 hover:text-white hover:bg-zinc-900 duration-300 cursor-pointer">
                  investor deck
                </div>
                <div className="w-fit px-[.8vw] py-[.2vw] text-zinc-800 text-md max-xl:text-base max-lg:text-sm uppercase rounded-2xl border-1 hover:text-white hover:bg-zinc-900 duration-300 cursor-pointer">
                  redesign
                </div>
                <div className="w-fit px-[.8vw] py-[.2vw] text-zinc-800 text-md max-xl:text-base max-lg:text-sm uppercase rounded-2xl border-1 hover:text-white hover:bg-zinc-900 duration-300 cursor-pointer">
                  review
                </div>
              </div>
            </div>

            <div className="cardcontainer items-stretch relative w-1/2 max-xl:w-full h-auto">
              <div className="w-[100%] pb-[1vw] flex items-center gap-2">
                <div className="w-[.8vw] h-[.8vw] rounded-full bg-zinc-800"></div>
                <h1 className="text-md max-2xl:text-base max-lg:text-sm max-md:text-xs uppercase">
                  Fyde
                </h1>
              </div>
              <motion.div
                onHoverStart={() => handleHover(3)}
                onHoverEnd={() => handleHoverEnd(3)}
                className="card w-full h-full rounded-xl overflow-hidden cursor-pointer"
              >
                <h1 className="absolute flex overflow-hidden left-0 max-md:left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 text-lime-300 uppercase leading-none tracking-tight text-9xl font-['Founders_Grotesk_X-Condensed']">
                  {"SOFTSTART".split("").map((item, index) => (
                    <motion.span
                      initial={{ y: "100%" }}
                      animate={cards[3]}
                      transition={{
                        ease: [0.76, 0, 0.2, 1],
                        delay: index * 0.06,
                      }}
                      className="inline-block"
                    >
                      {item}
                    </motion.span>
                  ))}
                </h1>
                <motion.img
                  whileHover={{
                    scale: 0.95,
                    transition: { duration: 0.5 },
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full h-full bg-cover rounded-2xl"
                  src="https://ochi.design/wp-content/uploads/2022/06/Frame-3898-1-663x551.jpg"
                ></motion.img>
              </motion.div>
              <div className="buttons w-full mt-[1vw] flex gap-3">
                <div className="w-fit px-[.8vw] py-[.2vw] text-zinc-800 text-md max-xl:text-base max-lg:text-sm uppercase rounded-2xl border-1 hover:text-white hover:bg-zinc-900 duration-300 cursor-pointer">
                  branded template
                </div>
                <div className="w-fit px-[.8vw] py-[.2vw] text-zinc-800 text-md max-xl:text-base max-lg:text-sm uppercase rounded-2xl border-1 hover:text-white hover:bg-zinc-900 duration-300 cursor-pointer">
                  sales deck
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center items-center">
        <div className="px-[1.5vw] py-[.5vw] rounded-2xl border-1 uppercase hover:text-white hover:bg-zinc-800 duration-200">
          view all case studies
        </div>
      </div>
    </div>
  );
}

export default Featured;
