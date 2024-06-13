import React from "react";
import { Navbar } from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer";

export const Contact = () => {
  return (
    <div>
      <Navbar />
      <div className="h-[400px] w-full mountain flex items-center justify-center text-4xl md:mt-[-4.2rem] mt-[-9rem]">
        <p className="text-[#455d7a]">Contact Us</p>
      </div>
      <div className="py-8 px-10 flex flex-col items-center justify-center gap-4">
        <p className="text-center md:text-xl text-[#455d7a]">
          We're here to help you plan your dream vacation! Feel free to reach
          out to us with any questions, inquiries, or booking requests. Our
          dedicated team of travel experts is ready to assist you.
        </p>
      <div className="w-[100%] h-[1px] bg-black"></div>
      </div>
      <div className="flex flex-col justify-center items-start gap-6 text-[#233142] px-10 pt-2 pb-8">
        <div>
          <h2 className="text-xl font-bold">Contact Information</h2>
        </div>
        <div>
          <h2 className="text-xl font-bold">Address -</h2>
          <p>402,City Center</p>
          <p>Gwalior, Madhya Pradesh</p>
          <p>Zip Code: 474004</p>
        </div>
        <div>
          <h2 className="text-xl font-bold">Emails -</h2>
          <p>General Enquires - info.motelo@gmail.com</p>
          <p>Customer Support - support.motelo@gmail.com</p>
          <p>Booking - booking.motelo@gmail.com</p>
        </div>
        <div>
          <h2 className="text-xl font-bold">Social Media -</h2>
          <p>Facebook : https://www.facebook.com/motelo</p>
          <p>Twitter : https://www.twitter.com/motelo</p>
          <p>Instagram : https://www.instagram.com/motelo</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};
