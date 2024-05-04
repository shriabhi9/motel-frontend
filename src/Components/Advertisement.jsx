import React from "react";
import { bluryRoom } from "../Data";
import { FaPlayCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
export const Advertisement = () => {
  return (
    <section className="py-40 flex item-center justify-center md:gap-[8rem] gap-[4rem] flex-wrap">
      <div className="relative">
        <img
          src={bluryRoom}
          alt="bluryroom"
          className="md:w-[38em] md:h-[22em] w-[20em] h-[12em] rounded-xl grayscale duration-200"
        />
        <FaPlayCircle className=" absolute top-[45%] left-[45%] text-[#f95959] text-[4rem]" />
      </div>
      <div className="flex flex-col items-start justify-center gap-6">
        <h3 className="text-[#f95959] text-md font-extrabold">DREAM HOLIDAYS</h3>
        <p className="text-[#233142] text-[1.4rem] font-extrabold w-72">Enjoy unforgettable experiences in dream hotels.</p>
        <Link to={"/"}>
            <button className="flex items-center flex-col group bg-[#f95959] rounded-md md:px-8 md:py-4 px-5 py-3 transition-all duration-100 hover:bg-[#233142] hover:text-[#e3e3e3]" >
            <span className="text-[#e3e3e3] text-sm font-bold scale-100 group-hover:scale-95 duration-200 transition-all">
                Read more
            </span>
            </button>
        </Link>
      </div>
    </section>
  );
};
