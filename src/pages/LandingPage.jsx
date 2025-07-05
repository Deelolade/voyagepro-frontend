import { useState, useRef } from "react";
import HeroSection from "../components/HeroSection";
import PackageImage from "../images/package-image.png";
import imageOne from "../images/landing-image-1.png";
import imageTwo from "../images/landing-image-2.png";
import imageThree from "../images/landing-image-3.png";
import imageFour from "../images/landing-image-4.png";
import { IoMail } from "react-icons/io5";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";
import { VscNewFolder } from "react-icons/vsc";
import { HiOutlineCheckBadge } from "react-icons/hi2";
import { RiCustomerService2Fill, RiFacebookFill } from "react-icons/ri";
import { BsTwitterX } from "react-icons/bs";
import { PiInstagramLogoFill } from "react-icons/pi";
import { IoLogoYoutube } from "react-icons/io";

const LandingPage = () => {
  const sliderRef = useRef(null);
  const handleNext = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft += 300;
    }
  };
  const handlePrev = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft -= 300;
    }
  };
  const packages = [
    {
      location: "Spain, Barcelona",
      image: PackageImage,
      price: "$987.50",
    },
    {
      location: "France, Paris",
      image: PackageImage,
      price: "$1,200.00",
    },
    {
      location: "Italy, Rome",
      image: PackageImage,
      price: "$980.00",
    },
    {
      location: "Greece, Santorini",
      image: PackageImage,
      price: "$1,150.00",
    },
    {
      location: "Japan, Tokyo",
      image: PackageImage,
      price: "$1,650.00",
    },
    {
      location: "Thailand, Phuket",
      image: PackageImage,
      price: "$875.00",
    },
    {
      location: "USA, New York",
      image: PackageImage,
      price: "$1,320.00",
    },
    {
      location: "UAE, Dubai",
      image: PackageImage,
      price: "$1,500.00",
    },
    {
      location: "South Africa, Cape Town",
      image: PackageImage,
      price: "$1,080.00",
    },
    {
      location: "Brazil, Rio de Janeiro",
      image: PackageImage,
      price: "$1,100.00",
    },
  ];

  return (
    <>
      <div className="scroll-smooth">
        <HeroSection />
        <section className="h-auto pl-20 py-20">
          <div className="text-center  max-w-6xl mx-auto">
            <h1 className="text-5xl font-semibold">Popular Packages</h1>
            <p className="mt-4 text-xl">
              All categories of cities, can be visited at one stop.
            </p>
            {/* Controls */}
            <div className="flex justify-end mt-14 px-4 space-x-4">
              <button
                onClick={handlePrev}
                className="px-4 py-4 text-gray-700 border border-gray-700 rounded-full "
              >
                <FaArrowLeft />
              </button>
              <button
                onClick={handleNext}
                className="px-4 py-4 bg-blue text-gray-700 rounded-full "
              >
                <FaArrowRight />
              </button>
            </div>
          </div>

          {/* Slider */}
          <div
            className="flex overflow-x-auto scroll-smooth max-w-max mx-auto scrollbar-hide py-6 px-4 space-x-6 mt-10"
            ref={sliderRef}
          >
            {packages.map((pkg, idx) => (
              <div className="flex-shrink-0 w-[450px]" key={idx}>
                <div className="bg-white rounded-xl shadow-lg h-[400px]  ">
                  <img
                    src={pkg.image}
                    alt={pkg.location}
                    className="w-full h-60 object-cover rounded-t-xl mb-4"
                  />
                  <div className="text-gray-800  space-y-2 px-5 ">
                    <h3 className="text-xl font-semibold mt-6 mb-8">
                      {pkg.location}
                    </h3>
                    <div className="text-blue-600 font-light flex justify-between items-center ">
                      <span className="font-normal">{pkg.price}</span>
                      <button className="px-3 py-3 bg-blue rounded-xl text-white font-medium">
                        Explore
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="h-auto py-20">
          <div className="text-center  max-w-6xl mx-auto">
            <h1 className="text-5xl font-semibold">Why choose Us</h1>
            <p className="mt-4 text-xl">
              These popular destination have a lot to offer.
            </p>
          </div>
          <div className=" flex gap-10 mt-20 max-w-7xl mx-auto">
            <div className=" text-center p-2">
              <span className="flex justify-center">
                <HiOutlineCheckBadge className="text-8xl text-blue" />
              </span>
              <h4 className=" text-2xl my-6">Best Price Guarantee</h4>
              <p className="text-lg ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                non inventore pariatur
              </p>
            </div>
            <div className=" text-center p-2">
              <span className="flex justify-center">
                <VscNewFolder className="text-8xl text-blue" />
              </span>
              <h4 className=" text-2xl my-6">Easy Booking</h4>
              <p className="text-lg ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                non inventore pariatur
              </p>
            </div>
            <div className=" text-center p-2">
              <span className="flex justify-center">
                <RiCustomerService2Fill className="text-8xl text-blue" />
              </span>
              <h4 className=" text-2xl my-6">Customer support 24/7</h4>
              <p className="text-lg ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                non inventore pariatur
              </p>
            </div>
          </div>
          <div className="max-w-7xl flex justify-between mx-auto mt-20 gap-20  ">
            <div className=" flex relative w-auto ">
              <img
                src={imageOne}
                alt="Man standing and watching the sunset over the horizon"
                className="rounded-full h-[325px] absolute -left-40 top-0 object-cover"
              />
              <img
                src={imageTwo}
                className="rounded-full h-[525px]  object-cover"
                alt="Young woman admiring the sunset with a peaceful expression"
              />
              <img
                src={imageThree}
                alt="New York City skyline with skyscrapers at dusk"
                className="rounded-full h-[295px] absolute -right-40 bottom-0 object-cover"
              />
            </div>
            <div className=" max-w-2xl">
              <h2 className="text-4xl font-semibold text-red">
                VoyagePro............Fly
              </h2>
              <p className="mt-6 text-2xl ">
                it's one of the leading online Travel Packages platforms in the
                world.{" "}
              </p>
              <div className=" mt-6 flex flex-col gap-3">
                <p className="text-lg">
                  Access over 10,000 curated travel packages across 80+
                  countries, tailored for corporate groups, agencies, and bulk
                  bookings.
                </p>
                <p className="text-lg">
                  Partner with verified local operators and suppliers to ensure
                  seamless experiences for your clients, from flights to
                  accommodations.
                </p>
                <p className="text-lg">
                  Enjoy real-time booking, transparent pricing, and automated
                  invoicing—all designed to simplify your workflow.
                </p>
                <p className="text-lg">
                  Dedicated account managers and 24/7 support ensure you deliver
                  world-class travel services with confidence and efficiency.
                </p>
                <div className="mt-8">
                  <button className="text-white px-4 py-3 rounded-xl bg-blue">
                    Explore Packages
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="h-auto py-20">
          <div className="text-center  max-w-6xl mx-auto">
            <h1 className="text-5xl font-semibold">Contact Us</h1>
          </div>
          <div className="max-w-7xl mx-auto mt-12 bg-white rounded-2xl relative">
            <img
              src={imageFour}
              alt="Contact Us"
              className="rounded-t-2xl w-full h-auto"
            />
            {/* <div className=" inset-0 flex items-center justify-center">
              <h2 className="text-white text-5xl font-semibold drop-shadow-lg">
                Contact Us
              </h2>
            </div> */}
            <div className=" flex items-center justify-center py-10 px-12 gap-10">
              <div className="">
                <h3 className="text-3xl font-semibold my-6">Get in Touch</h3>
                <p className="">
                  If you're a travel agent, tour operator, or corporate buyer
                  looking for tailored travel solutions, reach out today. We're
                  here to help you grow your business through seamless travel
                  experiences.
                </p>
                <div className="mt-6">
                  <span className="flex space-x-6 mt-7 items-start">
                    <FaLocationDot className="text-blue scale-150" />
                    <p>KLLG st, No.89, Nig City, ID 232343</p>
                  </span>
                  <span className="flex space-x-6 mt-8">
                    <FaPhone className="text-blue scale-150" />
                    <p>+234 903 4444 778</p>
                  </span>
                  <span className="flex space-x-6 mt-8">
                    <IoMail className="text-blue scale-150" />
                    <p>Hello@VoyagePro.com</p>
                  </span>
                </div>
                <div className=" flex mt-8 space-x-8">
                  <span><RiFacebookFill className="text-blue scale-150"/></span>
                  <span><BsTwitterX className="text-blue scale-150"/></span>
                  <span><PiInstagramLogoFill className="text-blue scale-150"/></span>
                  <span><IoLogoYoutube className="text-blue scale-150"/></span>
                </div>
              </div>
              <form className="bg-gray-300 w-[100%] rounded-2xl px-6 py-10 z-10">
                <h3 className="text-center text-2xl ">Write us a Message</h3>
                <div className="flex flex-col mt-12">
                  <label htmlFor="" className="mb-1 text-lg">
                    Name:
                  </label>
                  <input
                    type="text"
                    placeholder="your Name"
                    className="outline-none border bg-gray-300 px-3 py-3 rounded-lg border-gray-400"
                  />
                </div>
                <div className="flex flex-col mt-6">
                  <label htmlFor="" className="mb-1 text-lg">
                    Email:
                  </label>
                  <input
                    type="text"
                    placeholder="your Email"
                    className="outline-none border bg-gray-300 px-3 py-3 rounded-lg border-gray-400"
                  />
                </div>
                <div className="flex flex-col mt-6">
                  <label htmlFor="" className="mb-1 text-lg">
                    Message:
                  </label>
                  <input
                    type="text"
                    placeholder="your questions"
                    className="outline-none border bg-gray-300 px-3 py-3 rounded-lg border-gray-400"
                  />
                </div>
                <div className=" mt-10">
                  <button className="bg-blue text-white text-lg py-4 rounded-xl w-full">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="">
            <div className="max-w-7xl">
              <div className="">
                
              </div>
              <div className=""></div>
              <div className=""></div>
              <div className=""></div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default LandingPage;
