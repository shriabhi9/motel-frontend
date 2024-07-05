import React, { useState } from "react";
import Footer from "../../Components/Footer";
import { Navbar } from "../../Components/Navbar/Navbar";
import { Login } from "./Login";
import Register from "./Register";

const Auth = () => {
  const [login, setLogin] = useState(false);

  return (
      <div className="w-full">
      <Navbar />
      <div className="mountain h-[400px] text-4xl flex items-center justify-center md:mt-[-4.2rem] mt-[-9rem] text-[#455d7a]">
        <p>Welcome To Motelo</p>
      </div>
      <div className="flex items-center justify-center flex-col px-8 py-12">
        {login ? <Login setLogin={setLogin} /> : <Register />}
        <p className="pb-4 text-xl">or</p>
        <div className="flex flex-row justify-between items-center w-[25rem] gap-2 px-8">
          <button
            className="flex items-center flex-col group bg-[#f95959] rounded-md px-8 py-2 transition-all duration-200 hover:text-[#233142] hover:bg-[#e3e3e3] text-[#e3e3e3] w-[200px]"
            onClick={() => {
              setLogin(true);
            }}
          >
            <span>login</span>
          </button>
          <button
            className="flex items-center flex-col group bg-[#f95959] rounded-md px-8 py-2 transition-all duration-200 hover:text-[#233142] hover:bg-[#e3e3e3] text-[#e3e3e3] w-[200px]"
            onClick={() => {
              setLogin(false);
            }}
          >
            <span>signup</span>
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Auth;
