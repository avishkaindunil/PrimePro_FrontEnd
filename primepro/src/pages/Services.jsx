import React from "react";
import Hero from "../components/Hero";
import Input from "../components/Input";
import Button from "../components/Button";
import AppStoreBadge from "../images/android.png";
import GooglePlayBadge from "../images/apple.png";
import AppImage from "../images/Mobile App.png";
import Servicecenter from "../images/servicecenter.png";
import Footer from "../components/Footer";

const Services = () => {
  const heroData = {
    title: "Services",
    description: "Discover all available services with PrimePro.",
    image:
      "https://img.freepik.com/free-photo/front-view-male-lifting-up-car-inspection_23-2148327520.jpg?t=st=1721204669~exp=1721208269~hmac=05a4ec130205bc9e47d29bf2a37979a2cd68355f5bdb5664fd21a729b491ea4e&w=1060",
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
              src={Servicecenter}
              alt="Service Center"
              className="absolute inset-0 object-cover w-full h-full z-[-1]" style={{borderBottomRightRadius:"60px"}}/>
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
      
      <div className="bg-[#EBF0FF] flex justify-center">
        <div className="p-8 m-4 text-lg md:w-1/2">
            <h2 className="mt-4 mb-4 text-4xl font-bold">
                Opportunities are Endless with PrimPro
            </h2>
            <p className="mb-6 text-xl">If you own a car wash or vehicle service center, PrimePro is for you! Join the largest network of service providers in the country and boost your business.</p>
            <ul className="pl-6 space-y-4 text-xl list-disc list-inside">
                <li>Earn Over 100,000 Rupees Monthly: Enjoy substantial income opportunities.</li>
                <li>Life Insurance Cover of 3,000,000 Rupees: Including COVID coverage.</li>
                <li>Maximize your earnings with regular incentives.</li>
                <li>Get paid quickly, regardless of payment method.</li>
                <li>Keep more of what you earn.</li>
            </ul>
        </div>
        <div className="flex justify-center object-cover mt-6 md:w-1/2 md:mt-0">
            <div className="bg-[#3970DA] h-full  z-1 flex justify-center items-center p-8 pl-1 object-cover"  style={{borderTopLeftRadius:"60px"}}>
                <div>
                    <img src={AppImage}
                    alt="Mobile App"
                    className="w-full h-full "/>
                </div>
                <div className="">
                    <h2 className="text-[4vh] font-bold text-center">Download The App</h2>
                    <img src={AppStoreBadge}
                    className="p-7"/>
                    <img src={GooglePlayBadge}
                    className="p-7"/>
                </div>
            </div>
        </div>
      </div>

      <Footer/>
    </>
    );
};

export default Services;