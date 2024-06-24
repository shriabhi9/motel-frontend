import React, { useState, useRef } from "react";
import { useEffect } from "react";
import { HotelCard } from "./HotelCard";
import { Link } from "react-router-dom";
import axios from "axios";
import SkeletonGalleryCard from "../utilities/skeletonGalleryCard";
import { getRandomSubset } from "../../Data";

export const Gallery = () => {
  const [galleryHotel, setGalleryHotels] = useState([]);
  const [loading, setLoading] = useState(true);
  const previousFetchedIds = useRef(new Set());

  async function fetchingHotelData() {
    try {
      const response = await axios.get(
        "https://hotello-backend-xivc.onrender.com/api/hotels"
      );
      const data = response.data;

      const filteredData = data.filter(
        (hotel) => !previousFetchedIds.current.has(hotel._id)
      );

      const randomFiveHotel = getRandomSubset(filteredData, 5);

      randomFiveHotel.forEach((hotel) =>
        previousFetchedIds.current.add(hotel._id)
      );

      setGalleryHotels(randomFiveHotel);
      setLoading(false);
    } catch (error) {
      console.log("Error fetching hotels", error);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchingHotelData();
  }, []);

  return (
    <section className="w-full mt-10 mb-10 md:pl-44 md:pr-44">
      <div className="flex item-center flex-wrap justify-center w-full gap-10 mt-4 mb-4">
        <div className="w-[250px] flex flex-col justify-center items-start gap-8 mr-6">
          <h1 className="font-bold text-2xl">About hotel gallery</h1>
          <p className="text-sm text-[#969494]">
            while some of these examples are real-actually offering guests a
            stay in the locations advertised - it's mainly just a way
          </p>
          <Link to={"/hotels"}>
            <button className="flex items-center flex-col group bg-[#f95959] rounded-md md:px-8 md:py-4 px-5 py-3 transition-all duration-100 hover:bg-[#233142] hover:text-[#e3e3e3]">
              <span className="text-[#e3e3e3] text-sm font-bold scale-100 group-hover:scale-95 duration-200 transition-all">
                View more
              </span>
            </button>
          </Link>
        </div>
        
          {loading
            ? Array.from({ length: 5 }).map((_, index) => (
                <SkeletonGalleryCard key={index} />
              ))
            : galleryHotel.map((hotel) => (
                <HotelCard hotel={hotel} key={hotel._id} />
              ))}
        
      </div>
    </section>
  );
};
