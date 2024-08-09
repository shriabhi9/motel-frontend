import React, { useEffect, useState } from "react";
import { Navbar } from "../Components/Navbar/Navbar";
import SkeletonGalleryCard from "../Components/utilities/skeletonGalleryCard";
import axios from "axios";

import Categories from "../Components/Categories/Categories";
import { CiFilter } from "react-icons/ci";
import Footer from "../Components/Footer";
import { useCategory } from "../Context/Category-context";
import { HotelCard } from "../Components/Gallery/HotelCard";

export const Hotels = () => {
  const [hotelsData, setHotelsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { hotelCategory } = useCategory();

  useEffect(() => {
    async function fetchingHotelData() {
      try {
        const response = await axios.get(
          `https://hotello-backend-xivc.onrender.com/api/hotels?category=${hotelCategory}`
        );
        const data = response.data;

        setHotelsData(data);
        setLoading(false);
      } catch (error) {
        console.log("Error fetching hotels", error);
        setLoading(false);
      }
    }
    fetchingHotelData();
  }, [hotelCategory]);

  return (
    <div className="">
      <Navbar />
      <div className="mountain h-[400px] text-4xl flex items-center justify-center md:mt-[-4.2rem] mt-[-9rem] text-[#455d7a]">
        <p>All hotels</p>
      </div>
      <div className="px-10 flex flex-col items-center justify-center py-4">
        <div className="flex gap-8">
          <Categories />
        </div>

        <div className="flex flex-wrap justify-center pt-4 gap-10 py-4">
          {loading
            ? Array.from({ length: 11 }).map((index) => (
                <SkeletonGalleryCard key={index} />
              ))
            : hotelsData.map((hotel) => (
                <HotelCard hotel={hotel} key={hotel._id} />
              ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};
