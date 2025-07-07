import React from "react";

function Cards() {
  return (
    <div className="w-full min-h-[30vw] px-[3vw] py-10 bg-zinc-100 flex flex-row max-xl:flex-col items-start max-xl:items-center gap-4">
      <div className="cardcontainer w-1/2 max-xl:w-full aspect-video max-xl:aspect-[5/2] hover:scale-98 duration-300">
        <div className="card w-full h-full bg-[#004D43] rounded-xl flex justify-center items-center">
          <h1 className="text-[4vw] max-xl:text-6xl max-md:text-5xl max-sm:text-3xl font-semibold tracking-wide text-lime-200 font-['neue_montreal']">
            ochi
          </h1>
        </div>
      </div>

      <div className="cardcontainer w-1/2 max-xl:w-full aspect-video max-xl:aspect-[5/2] flex gap-4">
        <div className="card w-1/2 h-full bg-[#212121] rounded-xl flex justify-center items-center hover:scale-98 duration-300">
          <img
            className="w-1/3"
            src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
            alt=""
          />
        </div>
        <div className="card w-1/2 h-full bg-[#212121] rounded-xl flex justify-center items-center hover:scale-98 duration-300">
          <img
            className="w-1/4"
            src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Cards;
