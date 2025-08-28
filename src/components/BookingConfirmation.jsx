import mainImage from "../images/hero-image.png";
import airplaneLocation from "../images/airplane-location.png";
import airplaneTag from "../images/airplane-tag.png";
import { BiSolidCheckCircle } from "react-icons/bi";
import packages from '../consumables/packages';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { FaRegUserCircle } from 'react-icons/fa';
import { useEffect, useState } from "react";
import axios from "axios";

const BookingConfirmation = () => {
    const API_URL = import.meta.env.VITE_API_URL;
    const [bookings, setBookings] = useState([])
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleEditPackage = (pkg) => {
        console.log("Edit Package Clicked", pkg);
        navigate('/edit-package');
    }
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            toast.error("You must be logged in to update your profile");
            return;
        }
        const fetchData = async () => {
            try {
                const res = await axios.get(`${API_URL}/bookings/me`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            setBookings(res.data)
            localStorage.setItem("bookings", JSON.stringify(res.data));
            console.log(res.data)
            } catch (error) {
                console.log(error)
                const cacheBookings = localStorage.getItem("bookings");
                if (cacheBookings) {
                    setBookings(JSON.parse(cacheBookings))
                }
            }
        }
        fetchData()
    }, [])
    return (
        <>
            <section className="py-6 px-4 max-h-screen max-w-7xl mx-auto ">
                <div className="flex justify-between items-center">
                    <h2 className='hidden md:text-3xl md:block font-semibold'>VoyagePro</h2>
                    <h2 className='text-2xl md:text-3xl font-semibold'>Bookings</h2>
                    <span className='w-40 flex justify-end'>< FaRegUserCircle className="scale-150 text-2xl" /></span>
                </div>
                <div className=" mt-4">
                    <img src={mainImage} alt="voyagepro booking confirmation image" className='h-44 md:h-64 w-full object-cover rounded-xl' />
                </div>
                <div className=" mt-4">
                    <h2 className='text-2xl md:text-3xl font-semibold'>Overview Report</h2>
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
                        <div className=" grid grid-cols-7 items-center gap-2 text-center shadow-lg py-4 border-gray-300">
                            <div className="" />
                            <p>Name</p>
                            <p>Status</p>
                            <p>Price</p>
                            <p>Date</p>
                            <p>Destination</p>
                            <p>Track Number</p>
                        </div>
                        <div className="overflow-auto max-h-[350px] scrollbar-hide ">
                            {bookings.map((pkg) => (
                                <div key={pkg.id} className="relative grid grid-cols-7 items-center gap-2 py-4 text-center">
                                    <div className="flex justify-center items-center">
                                        <img src={pkg.image} alt={pkg.name} className='w-36 h-20 rounded-lg object-cover' />
                                    </div>
                                    <p className='text-lg font-'>{pkg.packageName}</p>
                                    <div className="">
                                        <span className={` font-semibold py-2 px-6 rounded-xl text-darkGray ${pkg.status === "completed" ? "bg-lightgreen " : pkg.status === "pending" ? "bg-lightpurple" : "bg-lightorange"}`}>{pkg.status}</span>
                                    </div>
                                    <p className='text-lg font-medium'>${pkg.priceforAdult}</p>
                                    <p className='text-lg font-medium'>{pkg.date}</p>
                                    <p className='text-lg font-medium'>{pkg.title}</p>
                                    <div className="">
                                        <p>{pkg.packageId}</p>
                                        <button
                                            onClick={() => handleEditPackage(pkg)}
                                            className='mt-2 bg-blue py-2 px-6 text-lg text-white rounded-lg'>Edit Package</button>
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
