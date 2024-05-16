import React from "react";

const Card = (props) => {
  const name = props.testimonial.name;
  const image = props.testimonial.img;
  const socialMedia = props.testimonial.socialMedia;
  const description = props.testimonial.text;

  return (
    <section className="flex flex-col w-[400px] items-center justify-center gap-2 bg-[#e3e3e3] rounded-xl py-2 px-2">
      <div className="w-[2rem]">
        <img src={image} alt="xd" className="w-full rounded-full" />
      </div>
      <h3 className="text-[#233142] font-bold text-sm">{name}</h3>
      <p className="text-[#455d7a] text-[12px] w-[16rem]">{description}</p>
      <h4 className="text-[#233142] text-sm">{socialMedia}</h4>
    </section>
  );
};

export default Card;
