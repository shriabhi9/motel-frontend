import React from "react";

export const StayInTouch = () => {
  return (
    <div className="flex flex-col items-center pt-10 pb-20 gap-5 w-full">
      <h2 className="font-bold  text-[#455d7a]">STAY IN TOUCH</h2>
      <p  className="text-[#233142] md:text-2xl font-bold text-xl md:w-full w-[25rem] text-center transition-all duration-300">Join our email. First to know about specials, event and more!</p>
      <label className="flex flex-wrap gap-4 items-center justify-center">
        <input
          type="email"
          className="border rounded-md w-[300px] px-2 py-2 "
          placeholder="john@gmail.com"
        />
        <a href="/">
          <button className="flex items-center flex-col group bg-[#f95959] rounded-md md:px-8 md:py-3 px-5 py-3 transition-all duration-100 hover:bg-[#233142] hover:text-[#e3e3e3]">
            <span className="text-[#e3e3e3] text-sm font-bold scale-100 group-hover:scale-95 duration-200 transition-all">
              Submit
            </span>
          </button>
        </a>
      </label>
    </div>
  );
};
