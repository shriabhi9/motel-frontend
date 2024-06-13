import React, { useState } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";
export const DropMenu = () => {
  const [dMenu, setdMenu] = useState(false);

  function dropMenuHandler() {
    setdMenu(!dMenu);
    console.log(dMenu);
  }

  return (
    <div className="h-full w-full">
      <div className="flex items-center justify-center w-full h-full">
        <div className="md:hidden right md:scale-0 scale-100 pt-6 w-[75%] flex items-center justify-around backdrop-blur-sm">
          <Link to={"/"}>
            <button className="flex items-center flex-col group">
              <span className="text-[#f95959] text-md font-bold scale-100 group-hover:scale-95 duration-200 transition-all">
                MOTELO
              </span>
              <div className="bg-black w-1 h-1 rounded-full scale-0 group-hover:scale-100 duration-200 transition-all"></div>
            </button>
          </Link>

          <button
            className="transition-all duration-300"
            onClick={dropMenuHandler}
          >
            <span className="text-xl">
              {dMenu ? <button onClick={dropMenuHandler}>
          <RxCross2 className="transition-all duration-300" />
        </button> : <FaBarsStaggered />}
            </span>
          </button>
        </div>
      </div>

      <div
        className={
          dMenu
            ? "w-[80%] flex items-center flex-col justify-center gap-10 backdrop-blur-sm py-8 overflow-hidden absolute z-[10] left-10 md:hidden px-10 rounded-md"
            : "hidden"
        }
      >
        
        <Link to={"/"}>
          <button className="flex items-center flex-col group text-[#233142]">
            <span className="text-sm font-bold scale-100 group-hover:scale-95 duration-200 transition-all">
              HOME
            </span>
          </button>
        </Link>
        <Link to={"/Hotels"}>
          <button className="flex items-center flex-col group text-[#233142]">
            <span className="text-sm font-bold scale-100 group-hover:scale-95 duration-200 transition-all">
              HOTLES
            </span>
          </button>
        </Link>
        <Link to={"/About"}>
          <button className="flex items-center flex-col group text-[#233142]">
            <span className="text-sm font-bold scale-100 group-hover:scale-95 duration-200 transition-all">
              ABOUT
            </span>
          </button>
        </Link>
        <Link to={"/Contact"}>
          <button className="flex items-center flex-col group text-[#233142]">
            <span className="text-sm font-bold scale-100 group-hover:scale-95 duration-200 transition-all">
              CONTACT
            </span>
          </button>
        </Link>

        <button className="flex items-center  flex-col group text-[#233142]">
          <span className="text-sm font-bold scale-100 group-hover:scale-95 duration-200 transition-all">
            LOGIN
          </span>
        </button>
        <Link to={""}>
          <button className="flex items-center flex-col group bg-[#f95959] rounded-md px-8 py-4 transition-all duration-100 hover:text-[#233142] hover:bg-[#e3e3e3] text-[#e3e3e3]">
            <span className="text-sm font-bold scale-100 group-hover:scale-95 duration-200 transition-all">
              SIGN UP
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
};
