import React from "react";

const introContent = {
  left: "PrimePro is the official brand of PrimePro Lanka (PVT) Ltd., connecting you to premier car wash and vehicle services since June 2024.",
  rightOne:
    "As a market leader and one of Sri Lanka's most successful startups, PrimePro aims to revolutionize the car wash and vehicle service industry using cutting-edge technology. Our vision is to elevate local standards to global levels through innovative solutions.",
  rightTwo:
    "PrimePro is the embodiment of this vision, driven by dynamic leadership and a talented team based in Colombo, Sri Lanka. Our platform seamlessly connects customers with service providers in real time, ensuring a smooth and efficient service experience.",
};

const Intro = () => {
  return (
    <div className="flex items-stretch flex-col md:flex-row">
      <div className="flex-1 bg-[#3970DA] px-10 py-20 text-white flex items-center justify-center order-first md:rounded-bl-[60px]">
        {introContent.left}
      </div>
      <div className="flex-1 bg-[#EBF0FF] px-10 py-20 text-[#222222] flex items-center justify-center order-last">
        <div className="flex flex-col">
          <div className="pb-6">{introContent.rightOne}</div>
          <div>{introContent.rightTwo}</div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
