import React, { useState } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";
import { useLoginProperty } from "../../Context/Login-context";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export const DropMenu = () => {
  const [dMenu, setdMenu] = useState(false);
  const { LoginProperty,setLoginProperty } = useLoginProperty();

  function dropMenuHandler() {
    setdMenu(!dMenu);
    console.log(dMenu);
  }

  return (
    <div className="h-full w-full">
      <div className="flex items-center justify-center w-full h-full">
        <div className="md:hidden right md:scale-0 scale-100 py-3 w-[75%] flex justify-around backdrop-blur-sm">
          <Link to={"/"}>
            <button className="flex items-center flex-col group">
              <span className="text-[#f95959] text-md font-bold scale-100 group-hover:scale-95 duration-200 transition-all">
                MOTELO
              </span>
              <div className="bg-[#f95959] w-1 h-1 rounded-full scale-0 group-hover:scale-100 duration-200 transition-all"></div>
            </button>
          </Link>

          <div className="flex gap-4 items-baseline justify-center">
            <button
              className="transition-all duration-300"
              onClick={dropMenuHandler}
            >
              <span className="text-xl">
                {dMenu ? (
                  <button onClick={dropMenuHandler}>
                    <RxCross2 className="transition-all duration-300" />
                  </button>
                ) : (
                  <FaBarsStaggered />
                )}
              </span>
            </button>
          </div>
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

        <div>
          {LoginProperty ? (
            <button onClick={()=>{
              setLoginProperty(false)
              toast("Logout successfuly")
            }} className="flex items-center flex-col group bg-[#f95959] rounded-md px-6 py-2 transition-all duration-200 hover:text-[#233142] hover:bg-[#e3e3e3] text-[#e3e3e3]">
              <span className="text-sm font-bold scale-100 group-hover:scale-95 duration-200 transition-all">
                LOGOUT
              </span>
            </button>
          ) : (
            <Link to={"/Login"}>
              <button className="flex items-center flex-col group bg-[#f95959] rounded-md px-6 py-2 transition-all duration-200 hover:text-[#233142] hover:bg-[#e3e3e3] text-[#e3e3e3]">
                <span className="text-sm font-bold scale-100 group-hover:scale-95 duration-200 transition-all">
                  LOGIN
                </span>
              </button>
            </Link>
          )}
        </div>
      </div>
    
    </div>
  );
};
