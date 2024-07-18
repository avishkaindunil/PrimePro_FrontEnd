import React from "react";
import Hero from "../../components/Hero";
import Intro from "../../components/aboutUs/Intro";
import Achievements from "../../components/aboutUs/Achievements";

const heroContent = {
  title: "ABOUT",
  subTitle:
    "PrimePro connects you to top car wash services for quick, reliable care.",
  image:
    "https://res.cloudinary.com/dejithzc7/image/upload/v1721156651/Prime%20Pro/aboutus.png",
};

const AboutUs = () => {
  return (
    <div>
      <div className="relative z-[-1]">
        <Hero content={heroContent} />
      </div>
      <div>
        <Intro />
      </div>
      <div className="py-20">
        <Achievements />
      </div>
    </div>
  );
};

export default AboutUs;
