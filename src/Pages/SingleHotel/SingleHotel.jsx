import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { Navbar } from "../../Components/Navbar/Navbar";
import SingleHotelImages from "./SingleHotelPageComponents/SingleHotelImages";
import SingleHotelDetails from "./SingleHotelPageComponents/SingleHotelDetails";

const SingleHotel = () => {
  const [singleHotel, setSingleHotel] = useState({});

  const { id } = useParams();
  useEffect(() => {
    async function fetchingSingleHotelData() {
      try {
        const res = await fetch(
          `https://hotello-backend-xivc.onrender.com/api/hotels/${id}`
        );
        const data = await res.json();
        setSingleHotel(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchingSingleHotelData();
  }, [id]);

  console.log(singleHotel);
  const singleHotelImage = singleHotel.image;
  const multipleHotelImage = singleHotel.imageArr;

  return (
    <div className="w-full">
      <Navbar />
      <div className="md:py-8 pb-2 px-3 md:px-10 w-full">
        <h2 className="text-xl font-bold">{singleHotel.name}</h2>
        <div className="flex flex-col items-center justify-center w-full">
          <SingleHotelImages
            singleHotelImage={singleHotelImage}
            multipleHotelImage={multipleHotelImage}
          />
        </div>
        <div>
          <SingleHotelDetails singleHotel={singleHotel} />
        </div>
      </div>
    </div>
  );
};

export default SingleHotel;
