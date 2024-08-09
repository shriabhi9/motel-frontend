import React from "react";
import { TbGridDots } from "react-icons/tb";
import { BiStar } from "react-icons/bi";
import { useState } from "react";

const SingleHotelDetails = ({ singleHotel }) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [name, setName] = useState("");
  const [checkInDate, setCheckInDate] = useState("");
  const [guest, setGuest] = useState(1);
  const [price, setPrice] = useState(singleHotel.price);

  const handlePrice = () => {};

  return (
    <section className="flex justify-between items-start py-8 flex-wrap gap-6">
      <div className="flex flex-col gap-6 text-[#455d7a]">
        <div className="flex flex-col gap-3">
          <p className="pl-2">Hosted by Abhishek</p>
          <p className="text-[#233142] ">
            6 guests. 1 bedroom. 2 bed. 2 bathroom
          </p>
        </div>
        <hr />
        <div className="flex flex-col gap-3">
          <p className="flex items-center gap-2 pl-2">
            <span>
              <TbGridDots />
            </span>
            Dedicated Workspace
          </p>
          <p className="text-[#233142]">
            A common area with wifi that is well suited for working
          </p>
        </div>
        <hr />
        <div className="flex flex-col gap-3">
          <p className="flex items-center gap-2 pl-2">
            {" "}
            <span>
              <TbGridDots />
            </span>
            Great Location
          </p>
          <p className="text-[#233142]">
            80% of recent guests gave the location 5-start rating
          </p>
        </div>
        <div className="flex flex-col gap-2 pl-2">
          <p className="flex items-center gap-2">
            {" "}
            <span>
              <TbGridDots />
            </span>
            Free cancellation before 7 days of booking
          </p>
        </div>
        <hr />
        <div className="flex flex-col gap-4">
          <p className="pl-2">What this place offers</p>
          <div className="grid grid-cols-2 grid-rows-3 gap-4 text-[#233142]">
            <p className="flex items-center gap-2">
              {" "}
              <span>
                <TbGridDots />
              </span>
              Kitchen
            </p>
            <p className="flex items-center gap-2">
              {" "}
              <span>
                <TbGridDots />
              </span>
              Free parking on premesis
            </p>
            <p className="flex items-center gap-2">
              {" "}
              <span>
                <TbGridDots />
              </span>
              Dedicated Workspace
            </p>
            <p className="flex items-center gap-2">
              {" "}
              <span>
                <TbGridDots />
              </span>
              Wifi
            </p>
            <p className="flex items-center gap-2">
              {" "}
              <span>
                <TbGridDots />
              </span>
              Washing Machine
            </p>
            <p className="flex items-center gap-2">
              {" "}
              <span>
                <TbGridDots />
              </span>
              Patio or Balcony
            </p>
          </div>
        </div>
      </div>

      <div className="shadow-xl py-10 px-8 text-[#455d7a] flex w-[400px]">
        <div className="flex flex-col gap-6 w-full">
          <div className="flex justify-between">
            <p className="flex gap-2 items-center w-full">
              <span className="flex font-bold text-xl">
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

          <div className="w-full">
            <div className="flex flex-col w-full">
              <label className="w-full">
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  placeholder="Enter your name"
                  className="outline-none py-2 px-3 w-full"
                />
              </label>
              <label className="">
                <input
                  type="text"
                  value={phoneNumber}
                  className="outline-none py-2 px-3"
                  onChange={(e) => {
                    if (/^\d{0,10}$/.test(e.target.value)) {
                      setPhoneNumber(e.target.value);
                    }
                  }}
                  placeholder="Enter 10-digit number"
                  required
                />
              </label>
            </div>
            <div className="flex flex-col">
              <label>
                <input
                  type="date"
                  value={checkInDate}
                  onChange={(e) => setCheckInDate(e.target.value)}
                  required
                  className="outline-none py-2 px-3"
                />
              </label>
              <label>
                {" "}
                <input
                  type="number"
                  placeholder="guest"
                  value={guest}
                  onChange={(e) => {
                    const guests = parseInt(e.target.value, 10);
                    setGuest(guests);
                    setPrice(guests * parseInt(singleHotel.price));
                  }}
                  max={6}
                  min={1}
                  required
                  className="outline-none py-2 px-3 w-[200px]"
                />
              </label>
            </div>
          </div>

          <div className="w-full">
            <button className="text-[#e3e3e3] bg-[#f95959] text-center w-full py-2 rounded-md hover:text-[#233142] hover:bg-[#e3e3e3] duration-200 transition-all">
              Reserve
            </button>
          </div>

          <div></div>
          <div className="flex justify-between">
            <p>Service fee</p>
            <p>Rs.150</p>
          </div>
          <hr />
          <div className="flex justify-between">
            <p>Total</p>
            <p>Rs.{price}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleHotelDetails;
