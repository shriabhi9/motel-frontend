import React, { useEffect, useState } from "react";
import { Navbar } from "../Components/Navbar/Navbar";
import SkeletonGalleryCard from "../Components/utitlities/skeletonGalleryCard";
import axios from "axios";
import { Gallerycard } from "../Components/Gallery/Gallerycard";
import Categories from "../Components/Categories/Categories";
import { CiFilter } from "react-icons/ci";

export const Rooms = () => {
  const [hotelsData, setHotelsData] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchingHotelData() {
    try {
      const response = await axios.get(
        "https://hotello-backend-xivc.onrender.com/api/hotels"
      );
      const data = response.data;

      setHotelsData(data);
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
    <div className="">
      <Navbar />
      <div className="px-10 flex flex-col items-center justify-center">
        <div className="flex gap-8">
          <Categories />
          <button>
            <span className="flex items-center justify-center gap-2">
              <CiFilter className="text-2xl" /><p>filter</p>
            </span>
          </button>
        </div>

        <div className="flex flex-wrap justify-center pt-4 gap-10 py-4">
          {loading
            ? Array.from({ length: 36 }).map((_, index) => (
                <SkeletonGalleryCard key={index} />
              ))
            : hotelsData.map((hotel) => (
                <Gallerycard hotel={hotel} key={hotel._id} />
              ))}
        </div>
      </div>
    </div>
  );
};
