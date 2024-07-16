
import React from "react";

function Hero({content}) {
  return (
    <div className="w-full mt-10 h-[700px] ">
      <div className="relative h-[700px]">
        <div className="absolute top-0 left-0 w-full h-full bg-black/40 flex flex-col justify-center items-start text-white px-10">
          <h1 className="text-7xl font-bold mb-4 ml-60">{content.title}</h1>
          <p className="text-xl ml-60">
            {content.subTitle}
          </p>
        </div>
        <img
          src={content.image}
          alt="Car washing"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}

export default Hero;
