import React from "react";
import { testimonialData } from "../../Data";
import Card from "./Card";

export const Testimonials = () => {
  return (
    <div className="flex items-center justify-around flex-col pt-10 pb-20 gap-10">
      <h1 className="text-2xl font-bold text-[#233142]">
        What our client says
      </h1>
      <div className="flex items-center justify-center flex-wrap gap-4">
        {testimonialData.map((testimonial) => (
          <Card testimonial={testimonial} key={testimonial.id} />
        ))}
      </div>
    </div>
  );
};
