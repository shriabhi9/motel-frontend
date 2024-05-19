import React, { useState } from "react";
import { useEffect } from "react";
import { Gallerycard } from "./Gallerycard";
import { Link } from "react-router-dom";

export const Gallery = () => {
  const [galleryHotel, setGalleryHotels] = useState([]);

  async function fetchingHotelData() {
    try {
      const response = await fetch(
        "https://hotello-backend-xivc.onrender.com/api/hotels"
      );
      const data = await response.json();

      const firstFiveHotel = await data.slice(0, 5);
      setGalleryHotels(firstFiveHotel);
    } catch (error) {
      console.log("Error fetching in hotels", error);
    }
  }

  useEffect(() => {
    fetchingHotelData();
  }, []);
  console.log(galleryHotel);
  return (
    <section className="w-full mt-10 mb-10 md:pl-44 md:pr-44">
      <div className=" flex flex-wrap justify-center w-full gap-10 mt-4 mb-4">
        <div className="w-[250px] flex flex-col justify-center gap-8 mr-6">
          <h1 className="font-bold text-2xl">About hotel gallery</h1>
          <p className="text-sm text-[#969494]">
            while some of these examples are real-actually offering guests a
            stay in the locations advertised - it's mainly just a way
          </p>
          <Link to={"/Rooms"}>
            <button className="flex items-center flex-col group bg-[#f95959] rounded-md md:px-8 md:py-4 px-5 py-3 transition-all duration-100 hover:bg-[#233142] hover:text-[#e3e3e3]">
              <span className="text-[#e3e3e3] text-sm font-bold scale-100 group-hover:scale-95 duration-200 transition-all">
                View more
              </span>
            </button>
          </Link>
        </div>
        {galleryHotel.map((hotel) => {
          return <Gallerycard hotel={hotel} key={hotel._id} />;
        })}
      </div>
    </section>
  );
};
