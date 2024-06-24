import React, { useState } from "react";

const SingleHotelImages = ({ singleHotelImage, multipleHotelImage }) => {
  return (
    <div className="md:flex gap-3 item-center md:flex-row flex-col">
      <div className="pb-3 md:pb-0">
        <img
          src={singleHotelImage}
          alt="singleHotelImage"
          className="w-[50rem] h-[25rem] object-cover rounded-md"
        ></img>
        
      </div>
      <div className="grid grid-cols-2 grid-rows-2 gap-3">
        {multipleHotelImage &&
          multipleHotelImage.map((image, index) => (
            <img
              src={image}
              alt="multipleHotelImage"
              key={index}
              className="w-[20rem] h-[12rem] rounded-md object-cover"
            ></img>
          ))}
      </div>
    </div>
  );
};

export default SingleHotelImages;
