import React from "react";
import { Link } from "react-router-dom";
import { RiFacebookFill } from "react-icons/ri";
import { BsTwitterX } from "react-icons/bs";
import { PiInstagramLogoFill } from "react-icons/pi";
import { IoLogoYoutube } from "react-icons/io";

const Footer = () => {
  return (
    <div className="bg-lightblue">
      <footer className="bg-lightblue max-w-7xl mx-auto h-auto">
        <div className=" flex pt-12 pb-6 justify-between">
          <div className="flex flex-col justify-between ">
            <h4 className="text-4xl font-bold">VoyagePro</h4>
            <p className="max-w-md text-gray text-left text-lg mt-20">
              Embark on a luxurious journey to the heart . This curated
              experience blends adventure, relaxation, and culture in one of the
              world’s most vibrant cities.
            </p>
          </div>
          <div className=" text-gray">
            <h5 className="text-2xl font-semibold">Quick Links</h5>
            <div className=" flex flex-col space-y-3 mt-6">
              <Link to="">Packages</Link>
              <Link to="">About us</Link>
              <Link to="">Contact us</Link>
              <Link to="">Blog</Link>
            </div>
          </div>
          <div className="text-gray">
            <h5 className="text-2xl font-semibold">Information</h5>
            <div className="flex flex-col space-y-3 mt-6">
              <Link to="">FAQ</Link>
              <Link to="">Support</Link>
              <Link to="">Cookies</Link>
              <Link to="">Privacy Policy</Link>
            </div>
          </div>
          <div className="text-gray">
            <h5 className="text-2xl font-semibold">Quick Links</h5>
            <p className="text-xl max-w-xs mt-6">
              Let's Discuss Your Vision, With Us{" "}
            </p>
          </div>
        </div>
        <hr className="text-gray" />
        <div className="mt-6 flex  flex-col h-[30vh] justify-between">
          <div className=" flex justify-between items-center">
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
          <h1 className=" text-center justify-end mt-18 mb-0 text-[150px] font-bold text-transparent stroke-white">
            VoyagePro
          </h1>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
