import React from "react";
import Hero from "../../components/Hero";

const heroContent = {
  title: "SERVICES",
  subTitle:
    "Stay updated with PrimePro's latest services, features, and offers.",
  image:
    "https://images.pexels.com/photos/14231678/pexels-photo-14231678.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
};

const Services = () => {
  return (
    <div>
      <div className="relative z-[-1]">
        <Hero content={heroContent} />
      </div>
    </div>
  );
};

export default Services;
