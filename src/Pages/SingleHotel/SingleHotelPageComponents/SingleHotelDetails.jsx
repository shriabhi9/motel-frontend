import React from "react";
import { TbGridDots } from "react-icons/tb";
import { BiStar } from "react-icons/bi";

const SingleHotelDetails = ({ singleHotel }) => {
  return (
    <section className="flex justify-between items-start py-8 flex-wrap">
      <div className="flex flex-col gap-6 text-[#455d7a]">
        <div className="flex flex-col gap-3">
          <p className="pl-2">Hosted by Abhishek</p>
          <p className="text-[#233142] ">6 guests. 1 bedroom. 2 bed. 2 bathroom</p>
        </div>
        <hr />
        <div className="flex flex-col gap-3">
          <p className="flex items-center gap-2 pl-2"><span><TbGridDots /></span>Dedicated Workspace</p>
          <p className="text-[#233142]">A common area with wifi that is well suited for working</p>
        </div>
        <hr />
        <div className="flex flex-col gap-3">
          <p className="flex items-center gap-2 pl-2"> <span><TbGridDots /></span>Great Location</p>
          <p className="text-[#233142]">80% of recent guests gave the location 5-start rating</p>
        </div>
        <div className="flex flex-col gap-2 pl-2">
          <p className="flex items-center gap-2"> <span><TbGridDots /></span>Free cancellation before 7 days of booking</p>
        </div>
        <hr />
        <div className="flex flex-col gap-4">
          <p className="pl-2">What this place offers</p>
          <div className="grid grid-cols-2 grid-rows-3 gap-4 text-[#233142]">
            <p className="flex items-center gap-2"> <span><TbGridDots /></span>Kitchen</p>
            <p className="flex items-center gap-2"> <span><TbGridDots /></span>Free parking on premesis</p>
            <p className="flex items-center gap-2"> <span><TbGridDots /></span>Dedicated Workspace</p>
            <p className="flex items-center gap-2"> <span><TbGridDots /></span>Wifi</p>
            <p className="flex items-center gap-2"> <span><TbGridDots /></span>Washing Machine</p>
            <p className="flex items-center gap-2"> <span><TbGridDots /></span>Patio or Balcony</p>
          </div>
        </div>
      </div>

      <div className="shadow-xl px-10 py-10 text-[#455d7a]">
        <div className="flex flex-col gap-6">
          <div className="flex gap-28">
            <p className="flex gap-2 items-center">
              <span className="flex font-bold text-xl ">
                <p>₹</p>
                {singleHotel.price}
              </span>
              <p>night</p>
            </p>
            <div className="flex gap-1">
              <BiStar className="text-[18px]" />
              <h3> {singleHotel.rating}</h3>
            </div>
          </div>

          <div className="flex justify-between">
            <div className="">
              <p>Check in</p>
            </div>
            <div>Check out</div>
          </div>

          <div className="w-full">
            <button className="text-[#e3e3e3] bg-[#f95959] text-center w-full py-2 rounded-md hover:text-[#233142] hover:bg-[#e3e3e3] duration-200 transition-all">
              Reserve
            </button>
          </div>

          <div></div>
          <div className="flex flex-col gap-2">
            <p>Service fee</p>
            <p>Rs.150</p>
          </div>
          <hr />
          <div>
            <p>Total</p>
            <p></p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleHotelDetails;
