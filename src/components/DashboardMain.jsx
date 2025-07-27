import React from 'react'
import profileImage from "../images/landing-image-1.png";
import dashboardImageOne from "../images/dashboard-image-one.png";
import dashboardImageTwo from "../images/dashboard-image-two.png";
import dashboardImageThree from "../images/dashboard-image-three.png";
import { IoMdStar, IoIosStarHalf } from "react-icons/io";
import { FiGlobe } from "react-icons/fi";
import { ImAirplane } from "react-icons/im";
import { BiSolidCheckCircle } from "react-icons/bi";
import { FaHeart } from "react-icons/fa";
import { FaRegBell } from "react-icons/fa6";

const DashboardMain = () => {
  const Packages = [
    {
      name: "Paris, France",
      price: 1200,
      days: 7,
      image: dashboardImageTwo,
      rate: 4.5
    },
    {
      name: "Spain, Europe",
      price: 900,
      days: 5,
      image: dashboardImageThree,
      rate: 5
    },
    {
      name: "Duabia, UAE",
      price: 900,
      days: 5,
      image: dashboardImageTwo,
      rate: 3.5
    },
    {
      name: "New York, USA",
      price: 900,
      days: 5,
      image: dashboardImageThree,
      rate: 4.5
    }
  ]
  return (
    <div>
      <section className="py-6 px-4 "> 
        <div className="flex justify-between items-center">
          <h2 className='text-3xl font-semibold'>Welcome, Tinzwave</h2>
          <div className="flex space-x-6 items-center">
            <span><FaRegBell className='text-3xl '/></span>
            <img src={profileImage} alt="" className='h-12 w-12 rounded-full object-cover' />
          </div>
        </div>
        <div className="mt-12 relative">
          <div className="absolute top-6 right-8 z-20 text-sm text-gray-600 font-medium">
            <p className='text-white text-xl'>Your next trip</p>  </div>
          <div className="absolute bottom-4 left-4 z-20 text-sm text-gray-600 font-medium">
            <p className='text-white text-lg'>Zanzibar,Tanzania</p>
            <span className='text-white text-xl'>July 25 - July 30, 2025</span>
          </div>
          <div className=""><img src={dashboardImageOne} alt="" className='h-80 w-full object-cover rounded-xl' />
            <div className=""></div>
          </div>
        </div>
        <div className="flex gap-6 mt-12 justify-evenly overflow-auto">
          <div className="rounded-xl w-52 h-52 bg-sky-200/40 px-10 text-center flex flex-col justify-center space-y-3 items-center"><span className='scale-150 text-blue font-bold'><FiGlobe className='text-2xl'/></span><p className='text-xl '>Total packages</p></div>
          <div className="rounded-xl w-52 h-52 bg-yellow-200/40 px-10 text-center flex  flex-col justify-center space-y-3 items-center"><span className='scale-150 text-orange font-bold'><ImAirplane className='text-2xl'/></span><p className='text-xl '>Upcoming trips</p></div>
          <div className="rounded-xl w-52 h-52 bg-rose-200/40 px-10 text-center flex  flex-col justify-center space-y-3 items-center"><span className='scale-150 text-green font-bold'><BiSolidCheckCircle className='text-2xl' /></span><p className='text-xl '>Completed trips</p></div>
          <div className="rounded-xl w-52 h-52 bg-zinc-200/40 px-10 text-center flex  flex-col justify-center space-y-3 items-center"><span className='scale-150 text-red font-bold'><FaHeart className='text-2xl'/></span><p className='text-xl '>Wishlist</p></div>
        </div>
        <div className="mt-6">
          <h4 className='text-xl font-semibold'>Total Packages </h4>
          <div className="grid grid-cols-4 gap-6 mt-2">
            {Packages.map((pkg, idx) => {
              return (
                <div className="" key={idx}>
                  <img src={pkg.image} className='rounded-lg shadow-lg' />
                  <div className="mt-2">
                    <p className='text-lg'>{pkg.name}</p>
                    <p className='text-sm'>${pkg.price.toLocaleString()}</p>
                    <p className='text-sm'>{pkg.days} Days</p>
                    <div className="flex items-center space-x-4">
                      <div className="flex space-x-1 mt-2">
                        <span className='text-yellow-500 text-xl'><IoMdStar /></span>
                        <span className='text-yellow-500 text-xl'><IoMdStar /></span>
                        <span className='text-yellow-500 text-xl'><IoMdStar /></span>
                        <span className='text-yellow-500 text-xl'><IoMdStar /></span>
                        <span className='text-yellow-500 text-xl'><IoIosStarHalf /></span>
                      </div>
                      <span className='text-sm text-zinc-700'>{pkg.rate}</span>
                    </div>
                    <button type="submit" className="bg-blue/90 hover:bg-blue py-2 text-lg mt-6 w-full text-center rounded-lg text-white capitalize">
                      Proceed
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}

export default DashboardMain
