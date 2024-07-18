
import React from "react";

function Hero({heroData}) {
  return (
    <div className="w-full mt-10 h-[700px] ">
      <div className="relative h-[700px]">
        <div className="absolute top-0 left-0 flex flex-col items-start justify-center w-full h-full px-10 text-white bg-black/40">
          <h1 className="mb-4 font-bold text-7xl ml-60">{heroData.title}</h1>
          <p className="text-xl ml-60">
            {heroData.description}
          </p>
        </div>
        <img
          src={heroData.image}
          alt="Car washing"
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
}

export default Hero;
