import React from "react";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Button from "../components/Button";
import ContactCard from "../components/ContactCard";

const Contact = () => {
    const heroData = {
        title: "Contact",
        description: "Stay updated with PrimePro's latest services,features and offers",
        image: "https://img.freepik.com/free-photo/brunette-businesswoman-showing-smartphone_23-2148142460.jpg?t=st=1721187346~exp=1721190946~hmac=3fb0d0a75d83d0eeabc5ffe5c2d8e1ba352e46cf2a127f730f79d28bf6738f29&w=996",
    };
    const contactCards =[
        {text:"General Inquiries",telno:"+94117433433",email:""},
        {text:"Media & Marketing",telno:"",email:"social@primepro.lk"},
        {text:"Inquiries on Affiliations",telno:"+94117433433",email:"registration@primepro.lk"},
        {text:"Business Inquiries",telno:"+94117433433",email:"business@primepro.lk"},
        {text:"Careers",telno:"",email:"careers@primepro.lk"},
       

    ]

    return(
        <>
        <div className="relative z-[-1]">
            <Hero heroData={heroData}/> 
        </div>

      
        <div className="flex items-center justify-center bg-white-0 p-4">
      <div className="w-full max-w-4xl bg-white   md:flex">
        <div className="w-full md:w-1/2 md:pr-8">
          <h2 className="text-2xl font-semibold mb-10 mt-10">Get in Touch</h2>
          <p className="text-gray-600 text-base mb-4">We would love to hear from you. Get in touch with us by email.</p>
          <form className="space-y-4">
            <div>
              <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" placeholder="Name" />
            </div>

            <div>
              <input type="email" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" placeholder="Email" />
            </div>

            <div>
              <textarea className="mt-1 block w-full p-2 border border-gray-300 rounded-md" rows="4" placeholder="Your Message"></textarea>
            </div>

            <div className="flex items-center justify-center">
            <Button>Submit</Button>
            </div>

          </form>
        </div>
        <div className="grid-rows-2  md:w-1/2 md:pl-8 mt-8 md:mt-0 ml-3">
          <h2 className="text-2xl font-semibold mb-10  mt-10">Hotlines</h2>
          <div className="columns-2 space-y-4">

            {contactCards.map((contactCard)=>
            <ContactCard key={contactCard.id} contactCard={contactCard}/>)}

            
            {/* <div>
              <h3 className="text-base">General Inquiries</h3>
              <p className="text-gray-600 text-xs mt-2">+94117433433</p>
            </div>
            <div>
              <h3 className="text-base">Business Inquiries</h3>
              <p className="text-gray-600 text-xs mt-2">+94117433433</p>
              <p className="text-blue-600 text-xs mt-2 ">business@primepro.lk</p>
            </div>
            <div>
              <h3 className=" flex text-base ">Media & Marketing</h3>
              <p className="text-blue-600 text-xs mt-2">social@primepro.lk</p>
            </div>
            <div className="">
              <h3 className="text-base">Careers</h3>
              <p className="text-blue-600 text-xs mt-2">careers@primepro.lk</p>
            </div>
            <div>
              <h3 className="text-base">Inquiries on Affiliations</h3>
              <p className="text-gray-600 text-xs mt-2">+94117433433</p>
              <p className="text-blue-600 text-xs mt-2">registration@primepro.lk</p>
            </div> */}
          </div>
        </div>
      </div>
    </div>

<Footer/>
        </>
    );



};

export default Contact;
