import React from "react";
import { FaChevronDown } from "react-icons/fa6";
import { ImSearch } from "react-icons/im";
import Navbar from "./Navbar";

const HeroSection = () => {
  return (
   <>
    <div className="h-screen w-full bg-hero-pattern bg-cover bg-center relative ">
      <Navbar />
      <div className="absolute inset-0 bg-black/40 "></div>
      <section className=" h-screen max-w-6xl mx-auto flex flex-col justify-center items-center px-2">
        <div className="z-20 mt-28">
            <div className="flex flex-col justify-center items-center">
          <h1 className="text-2xl md:text-6xl font-semibold text-white">
            Explore the World
          </h1>
          <p className="text-lg md:text-xl text-white mt-3">Book your next adventure with us.</p>
          <p className="mt-2 md:mt-10 text-sm md:text-xl text-white max-w-xl text-center">
            Plan and book your perfect trip with expert advise, travel tips,
            destination information,and importation from us.
          </p>
        </div>
        <div className="z-10 grid md:grid-cols-4 gap-5 md:gap-0 mt-10 md:mt-20 mx-auto w-[90vw]  max-w-6xl bg-white py-10 px-5 md:px-20 rounded-3xl shadow-xl">
          <div className=" flex flex-col space-y-3 items-center md:items-start">
            <h3 className="font-semibold md:font-medium text-xl">Where are you going?</h3>
            <p className="font-light">location</p>
            <p className="flex justify-start items-center space-x-3 font-light">
             <span> Doha region</span> <FaChevronDown />
            </p>
          </div>
          <div className=" flex flex-col  md:space-y-3 items-center text-left">
            <h3 className="font-semibold md:font-medium  text-xl">Check in</h3>
            <p className="font-light">Date</p>
            <p className="font-light">04/07/2025</p>
          </div>
          <div className=" flex flex-col space-y-3 items-center">
            <h3 className="font-semibold md:font-medium text-xl">Check out</h3>
            <p className="flex  justify-between items-center space-x-3 font-light">
             <span> 6 Person</span> <FaChevronDown />
            </p>
          </div>
          <div className="  flex justify-center md:justify-end items-center">
            <button className="bg-blue hover:bg-blue/75 flex py-3 px-4 justify-between items-center text-white space-x-3 rounded-lg text-lg"><ImSearch className="scale-125" /><span>Search</span></button>
          </div>
        </div>
        </div>
      </section>
    </div>
   </>
  );
};

export default HeroSection;
