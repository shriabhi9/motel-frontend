import React from "react";
import { bluryRoom } from "../Data";
import { FaPlayCircle } from "react-icons/fa";
import { icons } from "../Data";
export const Advertisement = () => {
  return (
    <div>
      <section className="pt-32 pb-4 flex item-center justify-center md:gap-[8rem] gap-[4rem] flex-wrap">
        <div className="relative">
          <img
            src={bluryRoom}
            alt="bluryroom"
            className="md:w-[38em] md:h-[22em] w-[20em] h-[12em] rounded-xl grayscale duration-200"
          />
          <FaPlayCircle className=" absolute top-[45%] left-[45%] text-[#f95959] text-[2rem] md:text-[4rem]" />
        </div>
        <div className="flex flex-col items-start justify-center gap-6">
          <h3 className="text-[#f95959] text-md font-extrabold">
            DREAM HOLIDAYS
          </h3>
          <p className="text-[#233142] text-[1.4rem] font-extrabold w-72">
            Enjoy unforgettable experiences in dream hotels.
          </p>
          <a href="/">
            <button className="flex items-center flex-col group bg-[#f95959] rounded-md md:px-8 md:py-4 px-5 py-3 transition-all duration-100 hover:bg-[#233142] hover:text-[#e3e3e3]">
              <span className="text-[#e3e3e3] text-sm font-bold scale-100 group-hover:scale-95 duration-200 transition-all">
                Read more
              </span>
            </button>
          </a>
        </div>
      </section>

      <section className="flex flex-col justify-center items-center pt-32 pb-10 gap-10 px-10">
        <h4 className="text-2xl font-extrabold text-[#233142]">Why you choose us!</h4>
        <p className="w-[50%] text-center font-bold text-[#455d7a]">
          Naturally, it's becoming even more important for hotel and hospitality
          brands to stand out from the crowd. Content marketing remains a key
          way for hotels to do this.
        </p>
        <div className="flex item-center justify-center gap-10 md:flex-row flex-col">
          <div className="flex flex-col items-center justify-center gap-4 border py-8 min-w-[100px]">
            <span>
              <img src={icons.click} alt="click" className=" w-14"/>
            </span>
            <p className="text-xl font-bold text-[#233142] ">Easy Booking</p>
            <p className="w-[70%] text-center text-[#455d7a] text-sm">The booking process should include minimal steps.</p>
          </div>
          <div className="flex flex-col items-center gap-4 border py-8 justify-center">
            
            <span><img src={icons.interface} alt="interface"  className=" w-14"/></span>
            <p className="text-xl font-bold text-[#233142]">Friendly interface</p>
            <p className="w-[70%] text-center text-[#455d7a] text-sm">A hotel booking engine with a good user-friendly.</p>
          </div>
          <div className="flex flex-col items-center gap-4 border py-8 justify-center">
            <span><img src={icons.rensponsiblity} alt="responsiblity" className=" w-14"/></span>
            <p className="text-xl font-bold text-[#233142] ">Responsibility</p>
            <p className="w-[70%] text-center text-[#455d7a] text-sm">You should be able to add rooms to your system.</p>
          </div>
          <div className="flex flex-col items-center gap-4 border py-8 justify-center">
            <span><img src={icons.order} alt="oorder" className=" w-14"/></span>
            <p className="text-xl font-bold text-[#233142] ">Quick order supply</p>
            <p className="w-[70%] text-center text-[#455d7a] text-sm">The booking process should include minimal steps</p>
          </div>
        </div>
      </section>
    </div> 
  );
};
