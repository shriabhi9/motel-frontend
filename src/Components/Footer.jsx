import React from "react";

const Footer = () => {
  return (
    <footer className="fourth-color md:px-[6rem] px-[2rem] py-[4rem] flex justify-between flex-wrap gap-10">
      <div className="flex flex-col gap-5">
        <a href="/">
          <h2 className="text-2xl font-extrabold text-[#f95959]">Motelo</h2>
        </a>
        <div className="flex flex-col items-start justify-center gap-1">
          <p className="text-[#233142] font-bold text-sm">
            Travels deals on hotel and vacation packages
          </p>
          <p className="text-[#233142] font-bold text-sm">
            info.motelo@gmail.com
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <a href="/" className="font-bold text-[#152539]">
          Home
        </a>
        <div className="flex flex-col gap-1">
          <a href="/" className="text-[#233142] font-bold text-sm">
            Accesibility
          </a>
          <a href="/" className="text-[#233142] font-bold text-sm">
            Lertifiotion
          </a>
          <a href="/" className="text-[#233142] font-bold text-sm">
            Knowledge
          </a>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <a href="/" className="font-bold text-[#392915]">
          Pages
        </a>
        <div className="flex flex-col gap-1">
          <a href="/" className="text-[#233142] font-bold text-sm">
            Blogs
          </a>
          <a href="/" className="text-[#233142] font-bold text-sm">
            Careers
          </a>
          <a href="/" className="text-[#233142] font-bold text-sm">
            Community
          </a>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="font-bold text-[#392915">Subscribe</h2>
        <label className="flex items-center md:items-end gap-4 flex-col">
          <input type="email" className="outline-none rounded-md w-[300px] px-2 py-2" placeholder="john@gmail.com"/>
          <a href="/">
            <button className="flex items-center flex-col group bg-[#f95959] rounded-md md:px-8 md:py-3 px-5 py-3 transition-all duration-100 hover:bg-[#233142] hover:text-[#e3e3e3]">
              <span className="text-[#e3e3e3] text-sm font-bold scale-100 group-hover:scale-95 duration-200 transition-all">
                Submit
              </span>
            </button>
          </a>
        </label>
      </div>
    </footer>
  );
};

export default Footer;
