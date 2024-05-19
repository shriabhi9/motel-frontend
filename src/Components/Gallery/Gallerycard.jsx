import React from "react";
import { BiStar } from "react-icons/bi";

export const Gallerycard = (props) => {
  const image = props.hotel.image;
  const address = props.hotel.address;
  const city = props.hotel.city;
  const price = props.hotel.price;
  const state = props.hotel.state;
  const rating = props.hotel.rating;

  return (
    <div className="shadow hover:shadow-xl px-4 py-4 rounded-md">
      <div className="flex flex-col gap-2">
        <img
          src={image}
          alt="xd"
          className="w-[250px] h-[200px] object-cover rounded-md"
        />
        <div className="flex flex-col">
          <h3 className="font-bold">
            {address},{city}
          </h3>
          <div className="flex justify-between">
            <h3 className="text-sm">{state}</h3>
            <div className="flex items-baseline ">
              <BiStar className="text-[16px]" />
              <h3> {rating}</h3>
            </div>
          </div>
        </div>
        <div className="flex gap-1 items-baseline justify-start">
          <h3 className="font-bold">Rs. {price}</h3>
          <p className="text-sm">night</p>
        </div>
      </div>
    </div>
  );
};
