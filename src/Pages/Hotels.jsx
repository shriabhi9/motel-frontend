import React, { useEffect, useState } from "react";
import { Navbar } from "../Components/Navbar/Navbar";
import SkeletonGalleryCard from "../Components/utilities/skeletonGalleryCard";
import axios from "axios";
import { Gallerycard } from "../Components/Gallery/Gallerycard";
import Categories from "../Components/Categories/Categories";
import { CiFilter } from "react-icons/ci";
import Footer from "../Components/Footer";


export const Hotels = () => {
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
      <div className="mountain h-[400px] text-4xl flex items-center justify-center md:mt-[-4.2rem] mt-[-9rem] text-[#455d7a]"><p>All hotels</p></div>
      <div className="px-10 flex flex-col items-center justify-center py-4">
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
      <Footer/>
    </div>
  );
};
