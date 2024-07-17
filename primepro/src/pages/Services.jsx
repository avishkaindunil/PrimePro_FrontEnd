import React from "react";
import Hero from "../components/Hero";
// import Button from "../components/Button";
// import AppStoreBadge from "../images/appStore.jpg";
// import GooglePlayBadge from "../images/playStore.jpg";
// import AppImage from "../images/phone.jpg";
import Footer from "../components/Footer";

const Services = () => {
  const heroData = {
    title: "Services",
    description: "Discover all available services with PrimePro.",
    image:
      "https://images.pexels.com/photos/6003/man-hand-car-black.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  };

  return (
    <>
      <div className="relative z-[-1]">
        <Hero heroData={heroData} />
      </div>

      <div className="justify-center ">
        <div className="flex">
           
            <div className="relative flex-none w-1/2" style={{ height: "650px" }}>
            <img
              src="https://images.pexels.com/photos/7629179/pexels-photo-7629179.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Service Center"
              className="absolute inset-0 object-cover w-full h-full rounded-br-3xl z-[-1]"
            />
            </div>
            {/* <div>
                <h2>Signup to provide services with PrimePro</h2>
                <input placeholder="Email:"/>
                <input placeholder="Service Center Name:"/>
                <input placeholder="Mobile Number:"/>
                <input placeholder="Owner's Name:"/>
                <input placeholder="Service Center Located District:"/>
                <input placeholder="Business Registration Number:"/>
            </div> */}
        </div>
      </div>

      <Footer/>
    </>
    );
};

export default Services;