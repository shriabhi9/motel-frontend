import React from "react";
import { Navbar } from "../Components/Navbar";
import { HeroSection } from "../Components/HeroSection";
import { Advertisement } from "../Components/Advertisement";
import Footer from "../Components/Footer";
import { Testimonials } from "../Components/Testimonials/Testimonials";
import { StayInTouch } from "../Components/StayInTouch";
import { Gallery } from "../Components/Gallery/Gallery";


export const Home = () => {

  return (
    <div className="h-full">
      <div className="h-[100%] hotel">
        <Navbar />
        <HeroSection />
      </div>
      <Advertisement/>
      <Gallery/>
      <Testimonials/>

      <StayInTouch/>
      <Footer/>
    </div>
  );
};
