import { useState, useRef, useEffect } from "react";
import HeroSection from "../components/HeroSection";
import PackageImage from "../images/package-image.webp";
import dashboardImageOne from "../images/dashboard-image-one.webp";
import imageOne from "../images/landing-image-1.webp";
import imageTwo from "../images/landing-image-2.webp";
import imageThree from "../images/landing-image-3.webp";
import imageFour from "../images/landing-image-4.webp";
import blogImageOne from "../images/landing-image-5.webp";
import blogImageTwo from "../images/landing-image-6.webp";
import { IoMail } from "react-icons/io5";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";
import { VscNewFolder } from "react-icons/vsc";
import { HiOutlineCheckBadge } from "react-icons/hi2";
import { RiCustomerService2Fill, RiFacebookFill } from "react-icons/ri";
import { BsTwitterX } from "react-icons/bs";
import { PiInstagramLogoFill } from "react-icons/pi";
import { IoLogoYoutube } from "react-icons/io";
import { MdOutlineStar } from "react-icons/md";
import { HiOutlineUserGroup } from "react-icons/hi";
import { LiaAwardSolid } from "react-icons/lia";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { selectPackage } from "../redux/packages/packageSlice";
import axios from "axios";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";

const LandingPage = () => {
  const dispatch = useDispatch();
  const API_URL = import.meta.env.VITE_API_URL;
  const [packages, setPackages] = useState([]);
  const navigate = useNavigate();
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

  const blogs = [
    {
      title: "We Make World Travel Easy!!!",
      details:
        "Navigating the globe effortlessly, we transform wonderful dreams into seamless adventures. with us the world becomes your accessible playground, travel simplified.",
      image: blogImageOne,
    },
    {
      title: "Beautiful Kashmir Let’s Travel",
      details:
        "We are ready to help you build and also realized the room design that you dream of, with our expert and also the best category recommendations from us.",
      image: blogImageTwo,
    },
  ];

  useEffect(() => {
    const fetchPackages = async () => {
      try {
        const res = await axios.get(`${API_URL}/packages`)
        localStorage.setItem("allPackages", JSON.stringify(res.data))
        setPackages(res.data)
      } catch (error) {
        console.log(error)
        const cachedPackages = localStorage.getItem("allPackages")
        if (cachedPackages) {
          setPackages(JSON.parse(cachedPackages))
        }
      }
    }
    fetchPackages()
  }, [])
  const handlePackage = (pkg) => {
    dispatch(selectPackage(pkg))
    navigate(`/packages/${pkg._id}`);
  };
  return (
    <>
      <div className="scroll-smooth">
        <HeroSection />
        {/* Popular Packages */}
        <section className="h-auto pl-0 md:pl-20 py-10 lg:py-20" id="popular-packages">
          <div className="text-center  max-w-6xl mx-auto">
            <h1 className="text-2xl md:text-5xl font-semibold">Popular Packages</h1>
            <p className="mt-4 text-lg md:text-xl">
              All categories of cities, can be visited at one stop.
            </p>
            {/* Controls */}
            <div className="flex justify-end mt-6 md:mt-14 px-4 space-x-4">
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
            className="flex overflow-x-auto scroll-smooth max-w-max mx-auto scrollbar-hide py-6 px-4 space-x-6 mt-4 md:mt-10"
            ref={sliderRef}
          >
            {packages.slice(0, 15).map((pkg, idx) => (
              <div className="flex-shrink-0 w-[300px] md:w-[450px]" key={idx}>
                <div className="bg-white rounded-xl shadow-lg h-[300px] md:h-[400px]  ">
                  <img
                    loading="lazy"
                    src={pkg.images[0] || PackageImage}
                    alt={pkg.location.coutry}
                    className="w-full h-44 md:h-60 object-cover rounded-t-xl mb-2 md:mb-4"
                  />
                  <div className="text-gray-800  space-y-2 px-2 md:px-5 ">
                    <h3 className="text-lg md:text-xl font-semibold mt-3 md:mt-6 mb-3 md:mb-8">
                      {pkg.location.city}, {pkg.location.country}
                    </h3>
                    <div className="text-blue-600 font-light flex justify-between items-center ">
                      <span className="font-normal">#{pkg.pricePerAdult.toLocaleString()}</span>
                      <button
                        onClick={() => handlePackage(pkg)}
                        className="py-2 md:py-3 px-3 bg-blue rounded-xl text-white font-medium"
                      >
                        Explore
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        {/* Why Choose Us*/}
        <section className="h-auto py-10 lg:py-20 md:px-10" id="why-choose-us">
          <div className="text-center max-w-6xl mx-auto">
            <h1 className="text-2xl md:text-3xl lg:text-5xl font-semibold">Why choose Us</h1>
            <p className="mt-4 text-lg md:text-xl">
              These popular destination have a lot to offer.
            </p>
          </div>
          <div className=" grid grid-cols-1 md:grid-cols-3 gap-10 mt-10 lg:mt-20 max-w-7xl mx-auto">
            <div className=" text-center p-2">
              <span className="flex justify-center">
                <HiOutlineCheckBadge className=" text-8xl  lg:text-8xl text-blue" />
              </span>
              <h4 className=" text-2xl my-6">Best Price Guarantee</h4>
              <p className="text-lg ">
                Your dream vacation shouldn’t cost more than it should. Book with us and enjoy the assurance that you’re always getting the best value.
              </p>
            </div>
            <div className=" text-center p-2">
              <span className="flex justify-center">
                <VscNewFolder className="text-8xl text-blue" />
              </span>
              <h4 className=" text-2xl my-6">Easy Booking</h4>
              <p className="text-lg ">
                From browsing packages to final confirmation, we’ve made everything seamless so you can book your getaway with ease.
              </p>
            </div>
            <div className=" text-center p-2">
              <span className="flex justify-center">
                <RiCustomerService2Fill className="text-8xl text-blue" />
              </span>
              <h4 className=" text-2xl my-6">Customer support 24/7</h4>
              <p className="text-lg ">
                Travel with confidence knowing our team is here for you anytime, day or night.
              </p>
            </div>
          </div>
          <div className="max-w-7xl flex flex-col lg:flex-row justify-between  mx-auto mt-20 gap-20 px-3 md:px-0 ">
            <div className=" flex relative w-auto lg:w-[50%] 2xl:w-auto  ">
              <img
                loading="lazy"
                src={imageOne}
                alt="Man standing and watching the sunset over the horizon"
                className="rounded-full h-[180px] sm:h-[325px] lg:h-[280px] 2xl:h-[325px] absolute md:left-5 lg:-left-5 2xl:-left-40 top-0 object-cover"
              />
              <img
                loading="lazy"
                src={imageTwo}
                className="rounded-full h-[300px] sm:h-[525px] mx-auto object-cover"
                alt="Young woman admiring the sunset with a peaceful expression"
              />
              <img
                loading="lazy"
                src={imageThree}
                alt="New York City skyline with skyscrapers at dusk"
                className="rounded-full h-[170px] sm:h-[295px] absolute right-0  md:right-10  lg:-right-10 2xl:-right-40 bottom-0 object-cover"
              />
            </div>
            <div className=" lg:w-[50%] 2xl:max-w-2xl mx-auto text-center lg:text-left">
              <h2 className="text-2xl md:text-4xl font-semibold text-orange">
                VoyagePro............Fly
              </h2>
              <p className="mt-6 text-lg md:text-2xl ">
                it's one of the leading online Travel Packages platforms in the
                world.{" "}
              </p>
              <div className=" mt-6 flex flex-col gap-3">
                <p className="text-sm text-center lg:text-left md:text-lg ">
                  Access over 10,000 curated travel packages across 80+
                  countries, tailored for corporate groups, agencies, and bulk
                  bookings.
                  <br />
                  Partner with verified local operators and suppliers to ensure
                  seamless experiences for your clients, from flights to
                  accommodations.
                  <br />
                  Enjoy real-time booking, transparent pricing, and automated
                  invoicing all designed to simplify your workflow.
                  <br />
                  Dedicated account managers and 24/7 support ensure you deliver
                  world-class travel services with confidence and efficiency.
                </p>
                <div className="mt-4 md:mt-8">
                  <a href="#popular-packages"
                    // to="/packages"
                    className="text-white px-4 py-3 rounded-xl bg-blue"
                  >
                    Explore Packages
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Contact Us */}
        <section className="h-auto py-10 lg:py-20 " id="contact-us">
          <div className="px-3 md:px-10">
            <div className="text-center  max-w-6xl mx-auto">
              <h1 className="text-2xl md:text-3xl lg:text-5xl font-semibold">Contact Us</h1>
            </div>
            <div className="max-w-7xl mx-auto mt-12 bg-white rounded-2xl relative  ">
              <img
                loading="lazy"
                src={imageFour}
                alt="Contact Us"
                className="rounded-t-2xl w-full h-auto"
              />
              <div className=" flex flex-col md:flex-row items-center justify-center py-6 md:py-10 px-6 md:px-12 gap-5 md:gap-10">
                <div className="">
                  <h3 className="text-2xl md:text-3xl text-center md:text-left font-semibold my-3 md:my-6">Get in Touch</h3>
                  <p className="text-center md:text-left">
                    If you're a travel agent, tour operator, or corporate buyer
                    looking for tailored travel solutions, reach out today. We're
                    here to help you grow your business through seamless travel
                    experiences.
                  </p>
                  <div className="mt-3 md:mt-6 ">
                    <span className="flex space-x-6 mt-6 md:mt-8 items-start">
                      <FaLocationDot className="text-blue scale-150" />
                      <p>KLLG st, No.89, Nig City, ID 232343</p>
                    </span>
                    <span className="flex space-x-6 mt-6 md:mt-8">
                      <FaPhone className="text-blue scale-150" />
                      <p>+234 903 4444 778</p>
                    </span>
                    <span className="flex space-x-6 mt-6 md:mt-8">
                      <IoMail className="text-blue scale-150" />
                      <p>Hello@VoyagePro.com</p>
                    </span>
                  </div>
                  <div className="justify-center md:justify-start flex mt-6 md:mt-8 space-x-8">
                    <span>
                      <RiFacebookFill className="text-blue scale-150" />
                    </span>
                    <span>
                      <BsTwitterX className="text-blue scale-150" />
                    </span>
                    <span>
                      <PiInstagramLogoFill className="text-blue scale-150" />
                    </span>
                    <span>
                      <IoLogoYoutube className="text-blue scale-150" />
                    </span>
                  </div>
                </div>
                <form className="bg-gray-300 w-[100%] rounded-2xl px-0 md:px-6 py-5 md:py-10 z-10">
                  <h3 className="text-center text-2xl ">Write us a Message</h3>
                  <div className="flex flex-col mt-4 md:mt-12">
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
                  <div className=" mt-6 md:mt-10">
                    <button className="bg-blue text-white text-lg py-4 rounded-xl w-full">
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="bg-green mt-10 md:mt-20 p-3 md:p-10">
            <Marquee speed={50} gradient={false}>
              <div className=" mx-auto flex flex-col space-x-40 md:gap-0 md:flex-row items-center justify-between my-3 ">
                <div className=" flex justify-center items-center space-x-3">
                  <span>
                    <MdOutlineStar className="text-6xl md:text-7xl text-orange" />
                  </span>
                  <div className="">
                    <h1 className="text-2xl md:text-4xl font-semibold">20k</h1>
                    <p className="text-lg md:text-xl">Happy clients</p>
                  </div>
                </div>
                <div className=" flex justify-center items-center space-x-3">
                  <span>
                    <LiaAwardSolid className="text-6xl md:text-7xl text-orange" />
                  </span>
                  <div className="">
                    <h1 className="text-2xl md:text-4xl font-semibold">250+</h1>
                    <p className="text-lg md:text-xl">Awards Achieved</p>
                  </div>
                </div>
                <div className=" flex justify-center items-center space-x-3">
                  <span>
                    <HiOutlineUserGroup className="text-6xl md:text-7xl text-orange" />
                  </span>
                  <div className="">
                    <h1 className="text-2xl md:text-4xl font-semibold">15k</h1>
                    <p className="text-lg md:text-xl">Active Members</p>
                  </div>
                </div>
                <div className=" flex justify-center items-center space-x-3">
                  <span>
                    <FaLocationDot className="text-6xl md:text-7xl text-orange" />
                  </span>
                  <div className="">
                    <h1 className="text-2xl md:text-4xl font-semibold">20+</h1>
                    <p className="text-lg md:text-xl">Tour Destination</p>
                  </div>
                </div>
              </div>
            </Marquee>
          </div>
        </section>
        {/* Our Blogs */}
        <section className="h-auto py-10 lg:py-20 lg:pb-40 md:px-10 max-w-7xl mx-auto" id="blogs">
          <div className="text-center  max-w-7xl mx-auto">
            <h1 className="text-2xl md:text-3xl lg:text-5xl font-semibold">Our Blog</h1>
            <p className="mt-4 text-lg md:text-xl">
              An incredible experience in the world
            </p>
          </div>
          <div className="">
            <div className="md:mt-10 lg:mt-20 flex flex-col">
              {blogs.slice(0, 2).map((blog, idx) => {
                return (
                  <div
                    className={`flex  flex-col lg:flex-row px-3 md:px-0 ${idx % 2 !== 0 ? "lg:flex-row-reverse" : ""
                      } items-center gap-10 md:gap-20 my-4 md:my-8`}
                    key={idx}
                  >
                    <img
                      src={blog.image}
                      alt=""
                      className="lg:scale-110 object-cover"
                    />
                    <div className=" text-left">
                      <h1 className="text-xl md:text-2xl lg:text-4xl font-bold my-2 md:my-4">{blog.title}</h1>
                      <p className="text-sm md:text-lg ">{blog.details}</p>
                      <button className="mt-3 md:mt-12 text-blue text-lg lg:text-2xl md:px-4 py-2 lg:py-3 rounded-xl flex items-center space-x-3 group">
                        <span>Explore Tour</span>{" "}
                        <span className=" transition-transform duration-500 group-hover:translate-x-4 border border-blue rounded-full p-1 lg:p-3">
                          <FaArrowRight />
                        </span>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
};

export default LandingPage;
