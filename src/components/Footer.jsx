import React from "react";
import { Link } from "react-router-dom";
import { RiFacebookFill } from "react-icons/ri";
import { BsTwitterX } from "react-icons/bs";
import { PiInstagramLogoFill } from "react-icons/pi";
import { IoLogoYoutube } from "react-icons/io";

const Footer = () => {
  return (
    <div className="bg-lightblue">
      <footer className="bg-lightblue max-w-7xl mx-auto px-3 h-auto">
        <div className=" flex flex-col gap-5 lg:gap-0 lg:flex-row px-3 pt-12 pb-6 justify-between">
          <div className="flex flex-col justify-between ">
            <h4 className="text-sm md:text-4xl font-bold">VoyagePro</h4>
            <p className="max-w-md text-gray text-left md:text-lg mt-2 md:mt-20">
              Embark on a luxurious journey to the heart . This curated
              experience blends adventure, relaxation, and culture in one of the
              world’s most vibrant cities.
            </p>
          </div>
          <div className=" text-gray">
            <h5 className="text-xl md:text-2xl font-semibold">Quick Links</h5>
            <div className=" flex flex-col space-y-3 mt-3 md:mt-6">
              <a href="#popular-packages">Packages</a>
              <a href="#why-choose-us">About us</a>
              <a href="#contact-us">Contact us</a>
              <a href="#blogs">Blog</a>
            </div>
          </div>
          <div className="text-gray">
            <h5 className="text-xl md:text-2xl font-semibold">Information</h5>
            <div className="flex flex-col space-y-3 mt-3 md:mt-6">
              <a href="#">FAQ</a>
              <a href="#">Support</a>
              <a href="#">Cookies</a>
              <a href="#">Privacy Policy</a>
            </div>
          </div>
          <div className="text-gray">
            <h5 className="text-xl md:text-2xl font-semibold">Quick Links</h5>
            <p className="text-lg md:text-xl max-w-xs mt-3 md:mt-6">
              Let's Discuss Your Vision, With Us{" "}
            </p>
          </div>
        </div>
        <hr className="text-gray" />
        <div className="mt-2 md:mt-6 flex  flex-col lg:h-[30vh] py-6 lg:py-0 justify-between">
          <div className=" flex flex-col lg:flex-row gap-3  justify-between items-center">
            <p className="text-gray">Privacy Policy | Terms & Service</p>
            <div className=" flex space-x-8">
              <span>
                <RiFacebookFill className="text-gray scale-150" />
              </span>
              <span>
                <BsTwitterX className="text-gray scale-150" />
              </span>
              <span>
                <PiInstagramLogoFill className="text-gray scale-150" />
              </span>
              <span>
                <IoLogoYoutube className="text-gray scale-150" />
              </span>
            </div>
          </div>
          <h1 className=" hidden lg:block text-center justify-end mt-18 mb-0 text-[150px] font-bold text-transparent stroke-white">
            VoyagePro
          </h1>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
