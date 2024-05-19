import React from "react";
import { Link } from "react-router-dom";
import { FaBarsStaggered } from "react-icons/fa6";

export const Navbar = () => {

  return (
    <>
      <div className="w-full z-[2] absolute top-5 right-18 right flex justify-around md:scale-0 scale-100">
      <Link to={"/"}>
          <button className="flex items-center flex-col group">
            <span className="text-[#e3e3e3] text-sm font-bold scale-100 group-hover:scale-95 duration-200 transition-all">
              MOTELO
            </span>
            <div className="bg-white w-1 h-1 rounded-full scale-0 group-hover:scale-100 duration-200 transition-all"></div>
          </button>
        </Link>
        <button >
          <span className="text-[#e3e3e3] text-xl"><FaBarsStaggered /></span>
        </button>
      </div>


      <nav className="md:scale-100 scale-0 flex items-center justify-around py-4 text-[#e3e3e3] backdrop-blur-xl sticky top-0 w-full">
        <Link to={"/"}>
          <button className="flex items-center flex-col group">
            <span className="text-sm font-bold scale-100 group-hover:scale-95 duration-200 transition-all">
              MOTELO
            </span>
            <div className="bg-white w-1 h-1 rounded-full scale-0 group-hover:scale-100 duration-200 transition-all"></div>
          </button>
        </Link>
        <div className="flex gap-10">
          <Link to={"/"}>
            <button className="flex items-center flex-col group">
              <span className="text-sm font-bold scale-100 group-hover:scale-95 duration-200 transition-all">
                HOME
              </span>
              <div className="bg-white w-1 h-1 rounded-full scale-0 group-hover:scale-100 duration-200 transition-all"></div>
            </button>
          </Link>
          <Link to={"/Rooms"}>
            <button className="flex items-center flex-col group">
              <span className="text-sm font-bold scale-100 group-hover:scale-95 duration-200 transition-all">
                ROOMS
              </span>
              <div className="bg-white w-1 h-1 rounded-full scale-0 group-hover:scale-100 duration-200 transition-all"></div>
            </button>
          </Link>
          <Link to={"/About"}>
            <button className="flex items-center flex-col group">
              <span className="text-sm font-bold scale-100 group-hover:scale-95 duration-200 transition-all">
                ABOUT
              </span>
              <div className="bg-white w-1 h-1 rounded-full scale-0 group-hover:scale-100 duration-200 transition-all"></div>
            </button>
          </Link>
          <Link to={"/Contact"}>
            <button className="flex items-center flex-col group">
              <span className="text-sm font-bold scale-100 group-hover:scale-95 duration-200 transition-all">
                CONTACT
              </span>
              <div className="bg-white w-1 h-1 rounded-full scale-0 group-hover:scale-100 duration-200 transition-all"></div>
            </button>
          </Link>
        </div>
        <div className="flex items-center gap-10">
          <button className="flex items-center  flex-col group">
            <span className="text-sm font-bold scale-100 group-hover:scale-95 duration-200 transition-all">
              LOGIN
            </span>
            <div className="bg-white w-1 h-1 rounded-full scale-0 group-hover:scale-100 duration-200 transition-all"></div>
          </button>
          <Link to={""}>
            <button className="flex items-center flex-col group bg-[#f95959] rounded-md px-8 py-4 transition-all duration-100 hover:text-[#233142] hover:bg-[#e3e3e3]">
              <span className="text-sm font-bold scale-100 group-hover:scale-95 duration-200 transition-all">
                SIGN UP
              </span>
            </button>
          </Link>
        </div>
      </nav>
    </>
  );
};
