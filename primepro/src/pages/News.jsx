import React from 'react'
import Hero from '../components/Hero';
import CardsList from "../components/Cardlist"
import Footer from "../components/Footer"


const News = ()=> {
    const heroData ={
        title:"News",
        description: "Stay updated with PrimePro's latest services, features, and offers.",
        image: "https://images.pexels.com/photos/14231678/pexels-photo-14231678.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }

    return (
        <>
        <div className='relative z-[-1]'>
            <Hero heroData={heroData}/>
        </div>
        <div className='pt-10'>
            <CardsList/>
        </div>
        <Footer/>
        </>
      );
};

export default News;


  

