import React from "react";
import { testimonialData } from "../../Data";
import Card from "./Card";
import Slider from "react-slick"

export const Testimonials = () => {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 1000,
    pauseOnHover: true,
    };
  

  return (
    <div className="w-full pt-10 pb-10">
      <h1 className="text-2xl font-bold text-[#233142] text-center">
        What our client says
      </h1>
      <div className="pt-8 w-full">
        <Slider {...settings} className="md:ml-96 md:mr-96 md:pl-38 md:pr-38 pl-12 pr-12">
          {testimonialData.map((testimonial) => (   
            <Card testimonial={testimonial} key={testimonial.id} />
          ))}
        </Slider>
      </div>
    </div>
  );
};
