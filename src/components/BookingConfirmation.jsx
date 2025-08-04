import React from 'react'
import profileImage from "../images/landing-image-1.png";
import mainImage from "../images/hero-image.png";
import airplaneLocation from "../images/airplane-location.png";
import airplaneTag from "../images/airplane-tag.png";
import { BiSolidCheckCircle } from "react-icons/bi";
import packages from '../consumables/packages';


const BookingConfirmation = () => {
    return (
        <>
            <section className="py-6 px-4 max-h-screen max-w-7xl mx-auto ">
                <div className="flex justify-between items-center">
                    <h2 className='text-3xl font-semibold'>VoyagePro</h2>
                    <h2 className='text-3xl font-semibold'>Bookings</h2>
                    <img src={profileImage} alt="" className='h-12 w-12 rounded-full object-cover' />
                </div>
                <div className=" mt-4">
                    <img src={mainImage} alt="voyagepro booking confirmation image" className='h-64 w-full object-cover rounded-xl' />
                </div>
                <div className=" mt-4">
                    <h2 className='text-3xl font-semibold'>Overview Report</h2>
                    <div className=" flex justify-between items-center mt-2">
                        <div className="relative flex flex-col justify-center items-center">
                            <span className=' text-green font-bold'><BiSolidCheckCircle className='text-6xl' /></span>
                            <span className='text-lg  font-semibold'>Booking</span>
                        </div>
                        <div className="h-px w-96 bg-darkGray"></div>
                        <div className="relative flex flex-col justify-center items-center">
                            <div className=' flex justify-center items-center  border border-zinc-500 rounded-full w-14 h-14'><img src={airplaneTag} className=' absolute scale-125' /></div>
                            <span className='text-lg mt-1 font-semibold text-center'>Ticketing</span>
                        </div>
                        <div className="h-px w-96  bg-darkGray"></div>
                        <div className="relative flex flex-col justify-center items-center">
                            <div className=' flex justify-center items-center  border border-zinc-500 rounded-full w-14 h-14'><img src={airplaneLocation} className=' absolute scale-125' /></div>
                            <span className='text-lg mt-1 font-semibold'>Travel</span>
                        </div>
                    </div>
                    <div className="mt-3">
                        <div className=" grid grid-cols-7 items-center gap-2 text-center border-b py-4 border-gray-300">
                            <div className="" />
                            <p>Name</p>
                            <p>Status</p>
                            <p>Price</p>
                            <p>Date</p>
                            <p>Destination</p>
                            <p>Track Number</p>
                        </div>
                        <div className="overflow-auto max-h-[350px] scroll-hidden ">
                            {packages.map((pkg) => (
                                <div key={pkg.id} className="relative grid grid-cols-7 items-center gap-2 py-4 text-center">
                                    <div className="flex justify-center items-center">
                                        <img src={pkg.image} alt={pkg.name} className='w-36 h-20 rounded-lg object-cover' />
                                    </div>
                                    <p className='text-lg font-'>{pkg.title}</p>
                                    <div className="">
                                        <span className={` font-semibold py-2 px-6 rounded-xl text-darkGray ${pkg.status === "completed" ? "bg-lightgreen " : pkg.status === "pending" ? "bg-lightpurple" : "bg-lightorange"}`}>{pkg.status}</span>
                                    </div>
                                    <p className='text-lg font-medium'>${pkg.price}</p>
                                    <p className='text-lg font-medium'>{pkg.date}</p>
                                    <p className='text-lg font-medium'>{pkg.title.split(" ")[0]}</p>
                                    <div className="">
                                        <p>{pkg.trackNumber}</p>
                                        <button className='mt-2 bg-blue py-2 px-6 text-lg text-white rounded-lg'>Edit Package</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default BookingConfirmation
