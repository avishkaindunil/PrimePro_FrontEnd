import React from "react";
import Hero from "../components/Hero";
import Input from "../components/Input";
import Button from "../components/Button";
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
  
  const inputFeilds=[
    {placeholder:"Email",id:"email"},
    {placeholder:"Service Center Name",id:"center_name"},
    {placeholder:"Mobile Number",id:"mobile_number"},
    {placeholder:"Owner's Name",id:"owners_name"},
    {placeholder:"Service Center Located District",id:"district"},
    {placeholder:"Business Registration Number",id:"registration_number"}
  ];

  return (
    <>
      <div className="relative z-[-1]">
        <Hero heroData={heroData} />
      </div>

      <div className="justify-center ">
        <div className="flex">
           
            <div className="relative flex-none w-1/2">
            <img
              src="https://images.pexels.com/photos/7629179/pexels-photo-7629179.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Service Center"
              className="absolute inset-0 object-cover w-full h-full rounded-br-3xl z-[-1]"
            />
            </div >
            <div className="flex-auto p-8">
                <h2 className="m-4 mb-6 text-4xl font-bold text-center">Signup to provide services with PrimePro</h2>
                <div className="flex-none">
                    <form>
                        {inputFeilds.map((inputFeild)=>(
                            <Input key={inputFeild.id} inputData={inputFeild}/>
                        ))}
                        <div className="flex items-center justify-center pt-5">
                        <Button>Register</Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
      </div>

      <Footer/>
    </>
    );
};

export default Services;