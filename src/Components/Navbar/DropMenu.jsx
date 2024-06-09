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
    <div>
      <div className="md:hidden right md:scale-0 scale-100 py-6 w-full flex items-center justify-around backdrop-blur-xl">
        <Link to={"/"}>
          <button className="flex items-center flex-col group">
            <span className="text-[#e3e3e3] text-sm font-bold scale-100 group-hover:scale-95 duration-200 transition-all">
              MOTELO
            </span>
            <div className="bg-white w-1 h-1 rounded-full scale-0 group-hover:scale-100 duration-200 transition-all"></div>
          </button>
        </Link>

        <button
          className="transition-all duration-300"
          onClick={dropMenuHandler}
        >
          <span className="text-[#e3e3e3] text-xl">
            {dMenu ? <div className="absolute"></div> : <FaBarsStaggered />}
          </span>
        </button>
      </div>

      
        <div className={dMenu ? "w-[100%] h-[100%] absolute top-0 flex items-center flex-col justify-center gap-10 backdrop-blur-3xl py-8 overflow-hidden z-10":"hidden"}>
          <Link to={"/"}>
            <button className="flex items-center flex-col group">
              <span className="text-sm font-bold scale-100 group-hover:scale-95 duration-200 transition-all">
                HOME
              </span>
            </button>
          </Link>
          <Link to={"/Rooms"}>
            <button className="flex items-center flex-col group">
              <span className="text-sm font-bold scale-100 group-hover:scale-95 duration-200 transition-all">
                ROOMS
              </span>
            </button>
          </Link>
          <Link to={"/About"}>
            <button className="flex items-center flex-col group">
              <span className="text-sm font-bold scale-100 group-hover:scale-95 duration-200 transition-all">
                ABOUT
              </span>
            </button>
          </Link>
          <Link to={"/Contact"}>
            <button className="flex items-center flex-col group">
              <span className="text-sm font-bold scale-100 group-hover:scale-95 duration-200 transition-all">
                CONTACT
              </span>
            </button>
          </Link>

          <button className="flex items-center  flex-col group">
            <span className="text-sm font-bold scale-100 group-hover:scale-95 duration-200 transition-all">
              LOGIN
            </span>
          </button>
          <Link to={""}>
            <button className="flex items-center flex-col group bg-[#f95959] rounded-md px-8 py-4 transition-all duration-100 hover:text-[#233142] hover:bg-[#e3e3e3]">
              <span className="text-sm font-bold scale-100 group-hover:scale-95 duration-200 transition-all">
                SIGN UP
              </span>
            </button>
          </Link>
          <button onClick={dropMenuHandler} className="absolute right-5 top-10">
            <RxCross2 className="transition-all duration-300" />
          </button>
        </div>
    </div>
  );
};
