import imageOne from "../images/edit-package-one.webp";
import mainImage from "../images/hero-image.webp";
import airplaneLocation from "../images/airplane-location.png";
import airplaneTag from "../images/airplane-tag.png";
import { BiSolidCheckCircle } from "react-icons/bi";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { FaRegUserCircle } from 'react-icons/fa';
import { useEffect, useState } from "react";
import axios from "axios";
import { selectPackage } from "../redux/packages/packageSlice";
import { motion } from "framer-motion";

const BookingConfirmation = () => {
    const API_URL = import.meta.env.VITE_API_URL;
    const [bookings, setBookings] = useState([])
    const [isMobile, setIsMobile] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [openMenuId, setOpenMenuId] = useState(null);
    const handleEditPackage = (booking) => {
        dispatch(selectPackage(booking))
        navigate('/edit-booking');
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
            } catch (error) {
                const cacheBookings = localStorage.getItem("bookings");
                if (cacheBookings) {
                    setBookings(JSON.parse(cacheBookings))
                }
            }
        }
        fetchData()
    }, [])

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('en-us', {
            day: "numeric",
            month: "short",
            year: "numeric"
        })
    }
    useEffect(() => {
        const checkScreenSize = () => {
            setIsMobile(window.innerWidth < 768);
        }
        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);

        return () => window.removeEventListener('resize', checkScreenSize)
    }, [])

    if (isMobile) {
        return (
            <>
                <div className="flex flex-col items-center justify-center h-screen bg-black text-white text-xl text-center p-6">
                    <h1 className="text-3xl font-semibold">VoyagePro</h1>
                    <p className="mt-3">🚫 This app is not available on mobile.
                        Please use a laptop or larger screen.</p>
                </div>
            </>
        )
    }
    console.log(bookings)

    return (
        <>
            <section className="py-6 px-3 max-h-screen max-w-7xl mx-auto ">
                <div className="flex justify-between items-center">
                    <h2 className='hidden text-sm md:block font-semibold'>VoyagePro</h2>
                    <h2 className='text-2xl md:text-2xl font-semibold'>Bookings</h2>
                    <span className='w-40 flex justify-end'>< FaRegUserCircle className="scale-150 text-2xl" /></span>
                </div>
                <div className=" mt-4">
                    <img src={mainImage} alt="voyagepro booking confirmation image" className='h-44 md:h-64 w-full object-cover rounded-xl' />
                </div>
                <div className=" mt-4">
                    <h2 className='text-2xl md:text-3xl font-semibold text-center md:text-left'>Overview Report</h2>
                    <div className=" flex flex-col md:flex-row justify-between items-center mt-2">
                        <div className="relative flex flex-col justify-center items-center">
                            <span className=' text-green font-bold'><BiSolidCheckCircle className='text-6xl' /></span>
                            <span className='text-lg  font-semibold'>Booking</span>
                        </div>
                        <div className="w-[1px] h-16 md:hidden bg-darkGray my-2"></div>
                        <div className=" hidden md:block h-px w-96 bg-darkGray"></div>
                        <div className="relative flex flex-col justify-center items-center">
                            <div className=' flex justify-center items-center  border border-zinc-500 rounded-full w-14 h-14'><img src={airplaneTag} className=' absolute scale-125' /></div>
                            <span className='text-lg mt-1 font-semibold text-center'>Ticketing</span>
                        </div>
                        <div className="w-[1px] h-16 md:hidden bg-darkGray my-2"></div>
                        <div className=" hidden md:block h-px w-96 bg-darkGray"></div>
                        <div className="relative flex flex-col justify-center items-center">
                            <div className=' flex justify-center items-center  border border-zinc-500 rounded-full w-14 h-14'><img src={airplaneLocation} className=' absolute scale-125' /></div>
                            <span className='text-lg mt-1 font-semibold'>Travel</span>
                        </div>
                    </div>
                    <div className="mt-6">
                        <div className=" max-w-6xl mx-auto grid grid-cols-5 items-center gap-2 text-center shadow-sm py-4 border-gray-300">
                            <div className="" />
                            <p>Name</p>
                            <p>Status</p>
                            <p>Date</p>
                            <p>Action</p>
                        </div>
                        <div className="overflow-auto max-h-[350px] scrollbar-hide ">
                            {bookings.length > 0 ? bookings
                                .sort((a, b) => (new Date(b.travelDate) - new Date(a.travelDate)))
                                .map((booking, idx) => (
                                    <div key={idx} className=" max-w-6xl mx-auto relative grid grid-cols-5 items-center gap-2 py-4 text-center">
                                        <div className="flex justify-center items-center">
                                            <img src={booking.packageImages[0] || imageOne} alt={booking.name} onError={(e)=> {e.currentTarget.src = imageOne}} className='w-36 h-20 rounded-lg object-cover' />
                                        </div>
                                        <p className='text-lg font-'>{booking.packageName}</p>
                                        <div className="">
                                            <span className={` font-semibold py-2 px-6 rounded-xl text-darkGray ${booking.status === "completed" ? "bg-lightgreen " : booking.status === "pending" ? "bg-lightpurple" : "bg-lightorange"}`}>{booking.status}</span>
                                        </div>
                                        <p className='text-lg font-medium'>{formatDate(booking?.travelDate)}</p>
                                        <div className="mx-auto">
                                            <button
                                                onClick={() => setOpenMenuId(openMenuId === booking._id ? null : booking._id)}
                                                className='mt-2 bg-blue py-2 px-3 text-sm text-white rounded-lg'>
                                                {openMenuId === booking._id ? "Close" : "View More"}
                                            </button>
                                        </div>
                                        {openMenuId === booking._id && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 0 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.5 }}
                                                className="col-span-5 bg-white shadow-lg rounded-sm p-4 mt-2 text-left space-y-3"
                                            >
                                                {/* Title */}
                                                <h3 className="text-lg font-semibold">{booking.packageName}</h3>
                                                <p className="text-sm text-gray-600">Booking ID: {booking._id}</p>

                                                {/* Grid Info */}
                                                <div className="grid grid-cols-2 gap-3 text-sm text-gray-500">
                                                    <p><strong>Status:</strong>
                                                        <span className={`ml-1 px-2 py-0.5 rounded text-white text-xs  ${booking.status === "pending" ? "bg-lightpurple" : "bg-green-600"}`}>
                                                            {booking.status}
                                                        </span>
                                                    </p>
                                                    <p><strong>Travel Date:</strong> {new Date(booking.travelDate).toLocaleDateString()}</p>
                                                    <p><strong>Travelers:</strong> {booking.travelers}</p>
                                                    <p><strong>Booked On:</strong> {new Date(booking.createdAt).toLocaleDateString()}</p>
                                                </div>

                                                {/* Contact Info */}
                                                <div>
                                                    <strong>Contact Info:</strong>
                                                    <ul className="list-disc list-inside text-sm text-gray-600">
                                                        <li>Email: {booking.contactInfo?.email}</li>
                                                        <li>Phone: {booking.contactInfo?.phone}</li>
                                                    </ul>
                                                </div>

                                                {/* Package Images */}
                                                {booking.packageImages?.length > 0 && (
                                                    <div>
                                                        <strong>Package Images:</strong>
                                                        <div className="flex gap-2 mt-2">
                                                            {booking.packageImages.map((img, i) => (
                                                                <img
                                                                    key={i}
                                                                    src={img || imageOne}
                                                                    alt={`package-${i}`}
                                                                    onError={(e)=> {e.currentTarget.src = imageOne}}
                                                                    className="w-20 h-14 rounded object-cover"
                                                                />
                                                            ))}
                                                        </div>
                                                    </div>
                                                )}

                                                {/* Actions */}
                                                <div className="flex justify-end gap-3 pt-3">
                                                    <button className="px-3 py-2 bg-blue text-white rounded-lg text-sm" onClick={() => handleEditPackage(booking)}>Edit Booking</button>
                                                    <button className="px-3 py-2 bg-red-500 text-white rounded-lg text-sm">Cancel</button>
                                                </div>
                                            </motion.div>
                                        )}

                                    </div>
                                )) : <div className=" flex flex-col justify-center items-center h-64 gap-4">
                                <p className=" text-center text-sm md:text-lg ">You have no bookings yet. <br />  Click the button below  to Book a package to see it here.</p>
                                <Link to='/packages' className=' py-2 px-3  text-lg  font-medium rounded-lg text-white bg-green'>Book package</Link>
                            </div>}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default BookingConfirmation
