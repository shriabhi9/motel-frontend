import React from "react";
import { Link } from "react-router-dom";
import { DropMenu } from "./DropMenu";
import { useLoginProperty } from "../../Context/Login-context";
import { BsPeople } from "react-icons/bs";
import { useState } from "react";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export const Navbar = () => {
  const { LoginProperty, setLoginProperty } = useLoginProperty();
  const [show, setShow] = useState(false);

  console.log(LoginProperty);
  return (
    <div className="sticky top-3 z-[10]">
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
              <button className="flex items-center flex-col group text-[#233142]">
                <span className="text-sm font-bold scale-100 group-hover:scale-95 duration-200 transition-all">
                  HOME
                </span>
                <div className="bg-[#233142] w-1 h-1 rounded-full scale-0 group-hover:scale-100 duration-200 transition-all"></div>
              </button>
            </Link>
            <Link to={"/Hotels"}>
              <button className="flex items-center flex-col group text-[#233142]">
                <span className="text-sm font-bold scale-100 group-hover:scale-95 duration-200 transition-all">
                  HOTELS
                </span>
                <div className="bg-[#233142] w-1 h-1 rounded-full scale-0 group-hover:scale-100 duration-200 transition-all"></div>
              </button>
            </Link>
            <Link to={"/About"}>
              <button className="flex items-center flex-col group text-[#233142]">
                <span className="text-sm font-bold scale-100 group-hover:scale-95 duration-200 transition-all">
                  ABOUT
                </span>
                <div className="bg-[#233142] w-1 h-1 rounded-full scale-0 group-hover:scale-100 duration-200 transition-all"></div>
              </button>
            </Link>
            <Link to={"/Contact"}>
              <button className="flex items-center flex-col group text-[#233142]">
                <span className="text-sm font-bold scale-100 group-hover:scale-95 duration-200 transition-all">
                  CONTACT
                </span>
                <div className="bg-[#233142] w-1 h-1 rounded-full scale-0 group-hover:scale-100 duration-200 transition-all"></div>
              </button>
            </Link>
          </div>
          <div className="flex items-center gap-10">
            {LoginProperty ? (
              <div className="flex">
                <button
                  className="flex items-center gap-2"
                  onClick={() => {
                    setShow(!show);
                  }}
                >
                  <p>Hi,</p>
                  <BsPeople className="text-xl" />
                </button>
              </div>
            ) : (
              <Link to={"/Login"}>
                <button className="flex items-center flex-col group bg-[#f95959] rounded-md px-6 py-2 transition-all duration-200 hover:text-[#233142] hover:bg-[#e3e3e3] text-[#e3e3e3]">
                  <span className="text-sm font-bold">LOGIN</span>
                </button>
              </Link>
            )}
          {show ? <button 
          onClick={()=>{
            setLoginProperty(false)
            setShow(!show)
            toast("Logout Succesfuly")
          }}
          className="absolute top-16 ">Logout</button> : ""}
          </div>
        </nav>
      </div>
    </div>
  );
};
