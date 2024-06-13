import React from "react";
import { NavLink } from "react-router-dom";

export const HeroSection = () => {
    return (
    <section className="text-[#e3e3e3] md:pl-[9rem] pl-[3rem] flex flex-col flex-wrap gap-4 justify-center py-[6rem] duration-200 ">
      <h3 className="text-[#f95959] text-xl font-bold">SERENITY</h3>
      <h2 className="text-[2em] md:text-[4em] duration-200 md:w-[30rem] w-[20rem]">
        Stay with us feel like <span className="text-[#f95959]">home.</span>
      </h2>
      <p className="md:text-[18px] text-[12px] pr-4 md:w-[30rem] w-[16rem] ">
        Pet-friendly hotels are becoming increasingly popular, appealing to
        travellers who can't bear to be parted
      </p>
      <NavLink to={"/"}>
        <button className="flex items-center flex-col group bg-[#f95959] rounded-md md:px-8 md:py-4 px-5 py-3 transition-all duration-100 hover:text-[#233142] hover:bg-[#e3e3e3] text-white relative z-[0]" >
          <span className="text-sm font-bold scale-100 group-hover:scale-95 duration-200 transition-all">
            <p>Read more</p>
          </span>
        </button>
      </NavLink>
    </section>
  );
};
