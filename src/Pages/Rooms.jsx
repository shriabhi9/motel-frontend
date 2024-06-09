import React, { useEffect, useState } from "react";
import { Navbar } from "../Components/Navbar/Navbar";
import SkeletonGalleryCard from "../Components/utitlities/skeletonGalleryCard";
import axios from "axios";
import { Gallerycard } from "../Components/Gallery/Gallerycard";

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
    <div >
      <Navbar />
      <div>

      </div>
      <div className="flex justify-center items-center flex-wrap gap-10 md:px-44 md:py-20 py-10">
        {loading
          ? Array.from({ length: 36 }).map((_, index) => (
              <SkeletonGalleryCard key={index} />
            ))
          : hotelsData.map((hotel) => (
              <Gallerycard hotel={hotel} key={hotel._id} />
            ))}
      </div>
    </div>
  );
};
