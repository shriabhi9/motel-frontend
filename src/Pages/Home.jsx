import React from "react";
import { Navbar } from "../Components/Navbar";
import { HeroSection } from "../Components/HeroSection";
import { Advertisement } from "../Components/Advertisement";


export const Home = () => {
  return (
    <div className="h-full">
      <div className="h-[100%] hotel">
        <Navbar />
        <HeroSection />
      </div>
      <Advertisement/>
    </div>
  );
};