import React from "react";
import { Link } from "react-router-dom";
import { DropMenu } from "./DropMenu";

export const Navbar = () => {
  return (
    <div className="sticky top-3 z-[10] w-full">
        <DropMenu />
      <div className="flex items-center justify-center z-[20]">
        <nav className="md:scale-100 scale-0 flex items-center justify-around w-[75%] py-4 backdrop-blur-sm rounded-xl">
          <Link to={"/"}>
            <button className="flex items-center flex-col group">
              <span className="text-md text-[#f95959] font-extrabold scale-100 group-hover:scale-95 duration-200 transition-all">
                MOTELO
              </span>
              <div className="bg-[#f95959] w-1 h-1 rounded-full scale-0 group-hover:scale-100 duration-200 transition-all"></div>
            </button>
          </Link>
          <div className="flex gap-10">
            <Link to={"/"}>
              <button className="flex items-center flex-col group">
                <span className="text-sm font-bold scale-100 group-hover:scale-95 duration-200 transition-all">
                  HOME
                </span>
                <div className="bg-black w-1 h-1 rounded-full scale-0 group-hover:scale-100 duration-200 transition-all"></div>
              </button>
            </Link>
            <Link to={"/Hotels"}>
              <button className="flex items-center flex-col group">
                <span className="text-sm font-bold scale-100 group-hover:scale-95 duration-200 transition-all">
                  HOTELS
                </span>
                <div className="bg-black w-1 h-1 rounded-full scale-0 group-hover:scale-100 duration-200 transition-all"></div>
              </button>
            </Link>
            <Link to={"/About"}>
              <button className="flex items-center flex-col group">
                <span className="text-sm font-bold scale-100 group-hover:scale-95 duration-200 transition-all">
                  ABOUT
                </span>
                <div className="bg-black w-1 h-1 rounded-full scale-0 group-hover:scale-100 duration-200 transition-all"></div>
              </button>
            </Link>
            <Link to={"/Contact"}>
              <button className="flex items-center flex-col group">
                <span className="text-sm font-bold scale-100 group-hover:scale-95 duration-200 transition-all">
                  CONTACT
                </span>
                <div className="bg-black w-1 h-1 rounded-full scale-0 group-hover:scale-100 duration-200 transition-all"></div>
              </button>
            </Link>
          </div>
          <div className="flex items-center gap-10">
            <button className="flex items-center  flex-col group">
              <span className="text-sm font-bold scale-100 group-hover:scale-95 duration-200 transition-all">
                LOGIN
              </span>
              <div className="bg-black w-1 h-1 rounded-full scale-0 group-hover:scale-100 duration-200 transition-all"></div>
            </button>
            <Link to={""}>
              <button className="flex items-center flex-col group bg-[#f95959] rounded-md px-6 py-2 transition-all duration-100 hover:text-[#233142] hover:bg-[#e3e3e3] text-[#e3e3e3]">
                <span className="text-sm font-bold scale-100 group-hover:scale-95 duration-200 transition-all">
                  SIGN UP
                </span>
              </button>
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
};
