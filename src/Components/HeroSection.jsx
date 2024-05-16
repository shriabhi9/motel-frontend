import React from "react";

export const HeroSection = () => {
    return (
    <section className="text-[#e3e3e3] md:pl-[9rem] pl-[3rem] flex flex-col gap-4 justify-center py-[6rem] duration-200 h-full -mt-16">
      <h3 className="text-[#f95959] text-xl font-bold">SERENITY</h3>
      <h2 className="text-[2em] md:text-[4em] duration-200 w-[30rem]">
        Stay with us feel like <span className="text-[#f95959]">home.</span>
      </h2>
      <p className="md:text-[18px] text-[14px] pr-4 w-[30rem]">
        Pet-friendly hotels are becoming increasingly popular, appealing to
        travellers who can't bear to be parted
      </p>
      <a href="/">
        <button className="flex items-center flex-col group bg-[#f95959] rounded-md md:px-8 md:py-4 px-5 py-3 transition-all duration-100 hover:text-[#233142] hover:bg-[#e3e3e3]" >
          <span className="text-sm font-bold scale-100 group-hover:scale-95 duration-200 transition-all">
            Read more
          </span>
        </button>
      </a>
    </section>
  );
};
