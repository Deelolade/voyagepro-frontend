import imageOne from "../images/edit-package-one.png";
import mainImage from "../images/hero-image.png";
import airplaneLocation from "../images/airplane-location.png";
import airplaneTag from "../images/airplane-tag.png";
import { BiSolidCheckCircle } from "react-icons/bi";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { FaRegUserCircle } from 'react-icons/fa';
import { useEffect, useState } from "react";
import axios from "axios";
import { selectPackage } from "../redux/packages/packageSlice";

const BookingConfirmation = () => {
    const API_URL = import.meta.env.VITE_API_URL;
    const [bookings, setBookings] = useState([])
    const [isMobile, setIsMobile] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleEditPackage = (pkg) => {
        dispatch(selectPackage(pkg))
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

    return (
        <>
            <section className="py-6 px-2 max-h-screen max-w-7xl mx-auto ">
                <div className="flex justify-between items-center">
                    <h2 className='hidden md:text-3xl md:block font-semibold'>VoyagePro</h2>
                    <h2 className='text-2xl md:text-3xl font-semibold'>Bookings</h2>
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
                        <div className=" max-w-6xl mx-auto grid grid-cols-7 items-center gap-2 text-center shadow-sm py-4 border-gray-300">
                            <div className="" />
                            <p>Name</p>
                            <p>Status</p>
                            <p>Price</p>
                            <p>Date</p>
                            <p>Destination</p>
                            <p>Track Number</p>
                        </div>
                        <div className="overflow-auto max-h-[350px] scrollbar-hide ">
                            {bookings.length > 0 ? bookings
                                .sort((a, b) => (new Date(b.travelDate) - new Date(a.travelDate)))
                                .map((pkg, idx) => (
                                    <div key={idx} className=" max-w-6xl mx-auto relative grid grid-cols-7 items-center gap-2 py-4 text-center">
                                        <div className="flex justify-center items-center">
                                            <img src={pkg.packageImages[0] || imageOne} alt={pkg.name} className='w-36 h-20 rounded-lg object-cover' />
                                        </div>
                                        <p className='text-lg font-'>{pkg.packageName}</p>
                                        <div className="">
                                            <span className={` font-semibold py-2 px-6 rounded-xl text-darkGray ${pkg.status === "completed" ? "bg-lightgreen " : pkg.status === "pending" ? "bg-lightpurple" : "bg-lightorange"}`}>{pkg.status}</span>
                                        </div>
                                        <p className='text-lg font-medium'>#{pkg?.priceforAdult?.toLocaleString()}</p>
                                        <p className='text-lg font-medium'>{formatDate(pkg.travelDate)}</p>
                                        <p className='text-lg font-medium'>{pkg?.title}</p>
                                        <div className="mx-auto">
                                            <p>{pkg.packageId}</p>
                                            <button
                                                onClick={() => handleEditPackage(pkg)}
                                                className='mt-2 bg-blue py-2 px-3 text-lg text-white rounded-lg'>Edit Package</button>
                                        </div>
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
