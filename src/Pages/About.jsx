import React from "react";
import { Navbar } from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer";

export const About = () => {
  return (
    <div>
      <Navbar />
      <div className="mountain h-[400px] text-4xl flex items-center justify-center md:mt-[-4.2rem] mt-[-9rem] text-[#455d7a]">
        <p>About Us</p>
      </div>
      <div className="flex flex-col gap-8 items-center justify-center py-8 px-8">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-2xl text-center text-[#455d7a]">
            Welcome to <span className="text-[#f95959]">MOTELO</span>
          </h1>
          <div className="w-[90%] h-[1px] bg-[#455d7a]"></div>
        </div>
        <p className="text-center text-[#455d7a]">
          Easily book hotels across India with our user-friendly website. Enjoy
          seamless reservations, detailed listings, and great deals for your
          stay.
        </p>
      </div>
      <div className="flex px-4 flex-col py-4">
        <div className="flex flex-col gap-2">
          <span className="text-[#233142] text-xl font-bold">Team -</span>
          <p className="text-[#455d7a]">
            Our team is dedicated, supportive, and always available to assist
            you with your hotel booking needs. With a commitment to exceptional
            service, we ensure every travel experience is smooth and enjoyable.
            Our knowledgeable staff is ready to help 24/7, providing
            personalized support and guidance to make your journey
            unforgettable.
          </p>
        </div>
        <div className="flex px-4 flex-col py-4">
          <span className="text-[#233142] text-xl font-bold">
            Founing story -
          </span>
          <p className="text-[#455d7a]">
            In 2024, A passionate traveler founded Motelo to simplify hotel
            booking, offering user-friendly experiences and transparent pricing,
            driven by a commitment to quality and customer satisfaction.
          </p>
        </div>
        <div className="flex px-4 flex-col py-4">
          <span className="text-[#233142] text-xl font-bold">Misson -</span>
          <p className="text-[#455d7a]">
            to provide seamless hotel booking experiences with diverse options,
            competitive prices, and exceptional service for travelers worldwide.{" "}
          </p>
        </div>
        <div className="flex px-4 flex-col py-4">
          <span className="text-[#233142] text-xl font-bold">Vision -</span>
          <p className="text-[#455d7a]">
            to be the leading global hotel booking platform, renowned for
            innovation, reliability, and enhancing every journey with perfect
            accommodations.
          </p>
        </div>
        <div className="flex px-4 flex-col py-4 gap-2">
          <p className="text-[#233142] text-xl font-bold">Features -</p>
          <p className="text-[#455d7a]">
            <span className="text-[#233142] font-bold">
              Extensive Hotel Network :{" "}
            </span>
            Access a wide range of accommodations, from budget to luxury, across
            India.
          </p>
          <p className="text-[#455d7a]">
            <span className="text-[#233142] font-bold">
              Best Price Guarantee :{" "}
            </span>
            Enjoy competitive prices with our best price guarantee.
          </p>
          <p className="text-[#455d7a]">
            <span className="text-[#233142] font-bold">
              User-Friendly Interface :{" "}
            </span>
            Easy-to-navigate platform for seamless booking experiences.
          </p>
          <p className="text-[#455d7a]">
            <span className="text-[#233142] font-bold">
              24/7 Customer Support :{" "}
            </span>
            Dedicated support team available around the clock.
          </p>
          <p className="text-[#455d7a]">
            <span className="text-[#233142] font-bold">
              Secure Payment Options :{" "}
            </span>
            Multiple secure payment methods to ensure safe transactions.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};
