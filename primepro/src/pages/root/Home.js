import React from "react";
import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import CardsList from "../../components/Cardlist";
import Footer from "../../components/Footer";

const Home = () => {
  return (
    <>
      {/* <Navbar /> */}
      <div className="relative z-[-1]">
        <Hero />
      </div>
      <div className="pt-10">
        <CardsList />
      </div>

      {/* <Footer /> */}
    </>
  );
};

export default Home;
