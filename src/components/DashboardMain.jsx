import dashboardImageOne from "../images/dashboard-image-one.png";
import dashboardImageTwo from "../images/dashboard-image-two.png";
import { IoMdStar, IoIosStarHalf } from "react-icons/io";
import { FiGlobe } from "react-icons/fi";
import { ImAirplane } from "react-icons/im";
import { BiSolidCheckCircle } from "react-icons/bi";
import { FaHeart, FaRegUserCircle } from "react-icons/fa";
import { FaRegBell } from "react-icons/fa6";
import { useSelector } from 'react-redux';
import { useEffect, useState } from "react";
import axios from "axios";

const DashboardMain = () => {
  const API_URL = import.meta.env.VITE_API_URL;
  const [packages, setPackages] = useState([]);
  const currentUser = useSelector(state=> state.user.currentUser)

  useEffect(()=>{
    const fetchPackages = async()=>{
      try {
      const res = await axios.get(`${API_URL}/packages`)
      localStorage.setItem("allPackages", JSON.stringify(res.data))
      setPackages(res.data)
      } catch (error) {
        const cachedPackages = localStorage.getItem("allPackages")
        if(cachedPackages){
          setPackages(JSON.parse(cachedPackages))
        }
      }
    }
    fetchPackages()
  },[])
  return (
    <div>
      <section className="py-6 px-4 max-h-screen overflow-y-auto mb-10 sm:mb-0 "> 
        <div className="flex justify-between items-center">
          <h2 className='xxs:text-2xl sm:text-3xl font-semibold'>Welcome, <span>{currentUser.firstname}</span></h2>
          <div className="flex space-x-6 items-center">
            <span><FaRegBell className='text-3xl '/></span>
             <span>< FaRegUserCircle className="scale-150 text-2xl"/></span>
          </div>
        </div>
        <div className="mt-6 relative">
          <div className="absolute top-6 right-8 z-20 text-sm text-gray-600 font-medium">
            <p className='text-white text-xl'>Your next trip</p>  </div>
          <div className="absolute bottom-4 left-4 z-20 text-sm text-gray-600 font-medium">
            <p className='text-white text-sm sm:text-lg'>Zanzibar,Tanzania</p>
            <span className='text-white text-lg sm:text-xl'>July 25 - July 30, 2025</span>
          </div>
          <div className=""><img src={dashboardImageOne} alt="" className='h-44 sm:h-64 w-full object-cover rounded-xl' />
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mt-6 place-items-center justify-items-center ">
          <div className="rounded-xl w-36 h-36 xxs:w-40 xxs:h-40 sm:w-48 sm:h-48 md:w-48 md:h-48 bg-sky-200/40 px-10 text-center flex flex-col justify-center space-y-3 items-center"><span className='scale-150 text-blue font-bold'><FiGlobe className='text-2xl'/></span><p className='text-xl '>Total packages</p></div>
          <div className="rounded-xl w-36 h-36 xxs:w-40 xxs:h-40 sm:w-48 sm:h-48 md:w-48 md:h-48 bg-yellow-200/40 px-10 text-center flex  flex-col justify-center space-y-3 items-center"><span className='scale-150 text-orange font-bold'><ImAirplane className='text-2xl'/></span><p className='text-xl '>Upcoming trips</p></div>
          <div className="rounded-xl w-36 h-36 xxs:w-40 xxs:h-40 sm:w-48 sm:h-48 md:w-48 md:h-48 bg-rose-200/40 px-10 text-center flex  flex-col justify-center space-y-3 items-center"><span className='scale-150 text-green font-bold'><BiSolidCheckCircle className='text-2xl' /></span><p className='text-xl '>Completed trips</p></div>
          <div className="rounded-xl w-36 h-36 xxs:w-40 xxs:h-40 sm:w-48 sm:h-48 md:w-48 md:h-48 bg-zinc-200/40 px-10 text-center flex  flex-col justify-center space-y-3 items-center"><span className='scale-150 text-red font-bold'><FaHeart className='text-2xl'/></span><p className='text-xl '>Wishlist</p></div>
        </div>
        <div className="mt-3">
          <h4 className='text-xl font-semibold'>Explore </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-2">
            {packages.splice( 0,4 ).map((pkg, idx) => {
              return (
                <div className="" key={idx}>
                  <img src={pkg.image || dashboardImageTwo } className='rounded-lg shadow-lg' />
                  <div className="mt-2">
                    <p className='text-lg'>{`${pkg.location.country}, ${pkg.location.city}`}</p>
                    <p className='text-sm'>#{pkg.pricePerAdult.toLocaleString()}</p>
                    <p className='text-sm'>{pkg.days} Days</p>
                    <div className="flex items-center space-x-4">
                      <div className="flex space-x-1 mt-2">
                        <span className='text-yellow-500 text-xl'><IoMdStar /></span>
                        <span className='text-yellow-500 text-xl'><IoMdStar /></span>
                        <span className='text-yellow-500 text-xl'><IoMdStar /></span>
                        <span className='text-yellow-500 text-xl'><IoMdStar /></span>
                        <span className='text-yellow-500 text-xl'><IoIosStarHalf /></span>
                      </div>
                      <span className='text-sm text-zinc-700'>{pkg.rating}</span>
                    </div>
                    <button type="submit" className="bg-blue/90 hover:bg-blue py-2 text-lg mt-3 w-full text-center rounded-lg text-white capitalize">
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
