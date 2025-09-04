import axios from 'axios';
import { useEffect, useState } from 'react';
import { FaRegBell, FaRegUserCircle } from 'react-icons/fa'
import { IoCloudUploadOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { useQueries, } from '@tanstack/react-query'

const Dashboard = () => {
    const API_URL = import.meta.env.VITE_API_URL;
    const token = localStorage.getItem('token');

    const fetchTotalUsers = async (token) => {
        const res = await axios.get(`${API_URL}/admin/dashboard/users`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return res.data.totalUsers;
    }
    const fetchTotalBookings = async (token) => {
        const res = await axios.get(`${API_URL}/admin/dashboard/bookings`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return res.data.totalBookings;
    }
    const fetchTotalRevenue = async (token) => {
        const res = await axios.get(`${API_URL}/admin/dashboard/revenue`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        console.log(res.data)
        return res.data.totalRevenue;
    }
    const getTopBookings = async (token) => {
        const res = await axios.get(`${API_URL}/admin/dashboard/top-bookings`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        console.log(res.data)
        return res.data.topPackages;
    }
    const getRecentBookings = async (token) => {
        const res = await axios.get(`${API_URL}/admin/dashboard/recent-bookings`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return res.data.recentBookings;
    }
    const totalResults = useQueries({
        queries: [
            {
                queryKey: ["totalUsers"],
                queryFn: () => fetchTotalUsers(token),
            },
            {
                queryKey: ["totalBookings"],
                queryFn: () => fetchTotalBookings(token),
            },
            {
                queryKey: ["totalRevenue"],
                queryFn: () => fetchTotalRevenue(token),
            },
            {
                queryKey: ["topBookings"],
                queryFn: () => getTopBookings(token),
            },
            {
                queryKey: ["recentBookings"],
                queryFn: () => getRecentBookings(token),
            },

        ]
    })
    const [usersQuery, BookingsQuery, revenueQuery, topBookingQuery, recentBookings] = totalResults;

    console.log(topBookingQuery.data)
    console.log(recentBookings.data)
    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('en-us', {
            day: "numeric",
            month: "short",
            year: "numeric"
        })
    }
    return (
        <div>
            <section className="py-6 px-3 md:px-4  max-h-screen overflow-y-auto scrollbar-hide">
                <div className="flex justify-between items-center">
                    <h2 className='text-2xl md:text-3xl font-semibold'>Welcome Admin </h2>
                    <div className="flex space-x-6 items-center">
                        <span><FaRegBell className='text-3xl' /></span>
                        <span>< FaRegUserCircle className="scale-150 text-2xl" /></span>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-6 w-full bg-re p-3 mt-2">
                    <div className="col-span-2 p-6 rounded-xl bg-white">
                        <h2 className='text-2xl md:text-3xl font-medium mb-4'>overview</h2>
                        <div className="grid md:grid-cols-3 gap-5">
                            <div className="bg-gray rounded-xl px-6 py-6 space-y-3">
                                <h3 className='text-xl font-medium'>Total Bookings</h3>
                                <p className='text-2xl font-semibold'>{BookingsQuery?.data ?? 0}</p>
                            </div>
                            <div className="bg-gray rounded-xl px-6 py-6 space-y-3">
                                <h3 className='text-xl font-medium'>Clients</h3>
                                <p className='text-2xl font-semibold'>{usersQuery?.data ?? 0}</p>
                            </div>
                            <div className="bg-gray rounded-xl px-6 py-6 space-y-3">
                                <h3 className='text-xl font-medium'>Revenue</h3>
                                <p className='text-2xl font-semibold'>#{revenueQuery.data?.toLocaleString() ?? 0}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-2 md:col-span-1 bg-white rounded-xl p-6">
                        <h2 className='text-2xl font-medium mb-4'>Top Destinations</h2>
                        <ul className='space-y-4'>
                            <li className='flex space-x-8 text-lg'>
                                <span className=' font-semibold'>1</span>
                                <span className='font-medium'>Dubai</span>
                            </li>
                            <li className='flex space-x-8 text-lg'>
                                <span className=' font-semibold'>2</span>
                                <span className='font-medium'>Qatar/ Doha</span>
                            </li>
                            <li className='flex space-x-8 text-lg'>
                                <span className=' font-semibold'>3</span>
                                <span className='font-medium'>Spain/ Barcelona</span>
                            </li>
                            <li className='flex space-x-8 text-lg'>
                                <span className=' font-semibold'>4</span>
                                <span className='font-medium'>Paris/ France</span>
                            </li>
                            <li className='flex space-x-8 text-lg'>
                                <span className=' font-semibold'>5</span>
                                <span className='font-medium'>New York</span>
                            </li>
                        </ul>
                    </div>
                    <div className="col-span-2 md:col-span-1 bg-gray border-darkGray/50 border rounded-xl p-6">
                        <h2 className='text-2xl font-medium mb-4'>Bookings</h2>
                    </div>
                    <div className="col-span-2 md:col-span-1">
                        <h2 className='text-2xl font-medium ms-3'>Recent Bookings</h2>
                        <div className="col-span-1 bg-gray border-darkGray/50 border rounded-xl p-2 md:p-6 mt-2">
                            <div className="grid grid-cols-3 gap-1 md:gap-3 px-2">
                                <h5 className='text-center text-lg font-medium'>Name</h5>
                                <h5 className='text-center text-lg font-medium'>Date</h5>
                                <h5 className='text-center text-lg font-medium'>Status</h5>
                                </div>
                                {
                                    recentBookings?.data
                                    ?.sort((a, b)=> new Date(b.createdAt) - new Date(a.createdAt))
                                    .slice(0, 5)
                                    .map((booking, idx) => (
                                        <div key={idx} className='grid grid-cols-3 mt-4  '>
                                            <p className='text-sm text-center flex justify-center items-center'>{booking.packageName.split(" ")[0] }</p>
                                            <p className='text-sm text-center'>{formatDate(booking.travelDate)}</p>
                                            <p className={`text-sm font-medium text-center ${booking.bookingStatus.toLowerCase() === "pending" ? "text-orange" : booking.bookingStatus.toLowerCase() === "confirmed" ? "text-green": "text-yellow-500"}  `}>{booking.bookingStatus.charAt(0).toUpperCase() + booking.bookingStatus.slice(1).toLowerCase()}</p>
                                        </div>
                                    ))
                                }

                        </div>
                    </div>
                    <Link to='/package' className="relative col-span-2 md:col-span-1">
                        <h2 className='text-2xl font-medium ms-3'>Manage Packages</h2>
                        <div className=" w-full h-[85%] rounded-xl p-6 mt-2  col-span-1 bg-gray border border-darkGray/50 border-dashed  hover:border-blue transition-colors duration-200">
                            <div className=" h-full flex flex-col justify-between">
                                <p className='text-sm'>Upload files</p>
                                <div className="flex flex-col items-center space-y-6">
                                    <IoCloudUploadOutline className="text-4xl text-blue-600 scale-150" />
                                    <p className="text-sm font-normal text-gray-700 text-center">Upload your travel package here</p>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            </section>
        </div>
    )
}

export default Dashboard
