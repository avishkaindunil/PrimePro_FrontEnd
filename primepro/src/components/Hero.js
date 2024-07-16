
import React from "react";

function Hero() {
  return (
    <div className="w-full mt-10 h-[700px] ">
      <div className="relative h-[700px]">
        <div className="absolute top-0 left-0 w-full h-full bg-black/40 flex flex-col justify-center items-start text-white px-10">
          <h1 className="text-7xl font-bold mb-4 ml-60">News</h1>
          <p className="text-xl ml-60">
            Stay updated with PrimePro's latest services, features, and offers.
          </p>
        </div>
        <img
          src="https://images.pexels.com/photos/14231678/pexels-photo-14231678.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Car washing"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}

export default Hero;
