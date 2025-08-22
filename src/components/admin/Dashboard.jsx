import React from 'react'
import { FaRegBell } from 'react-icons/fa'
import profileImage from "../../images/landing-image-1.png";
import { IoCloudUploadOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
            <section className="py-6 px-4 max-h-screen ">
                <div className="flex justify-between items-center">
                    <h2 className='text-3xl font-semibold'>Welcome Admin </h2>
                    <div className="flex space-x-6 items-center">
                        <span><FaRegBell className='text-3xl ' /></span>
                        <img src={profileImage} alt="" className='h-12 w-12 rounded-full object-cover' />
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-6 w-full bg-re p-3 mt-2">
                    <div className="col-span-2 p-6 rounded-xl bg-white">
                        <h2 className='text-3xl font-medium mb-4'>overview</h2>
                        <div className="grid grid-cols-3 gap-5">
                            <div className="bg-gray rounded-xl px-6 py-6 space-y-3">
                                <h3 className='text-xl font-medium'>Total Bookings</h3>
                                <p className='text-2xl font-semibold'>256</p>
                            </div>
                            <div className="bg-gray rounded-xl px-6 py-6 space-y-3">
                                <h3 className='text-xl font-medium'>Clients</h3>
                                <p className='text-2xl font-semibold'>196</p>
                            </div>
                            <div className="bg-gray rounded-xl px-6 py-6 space-y-3">
                                <h3 className='text-xl font-medium'>Revenue</h3>
                                <p className='text-2xl font-semibold'>#800,789</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1 bg-white rounded-xl p-6">
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
                    <div className="col-span-1 bg-gray border-darkGray/50 border rounded-xl p-6">
                        <h2 className='text-2xl font-medium mb-4'>Bookings</h2>
                    </div>

                    <div className="">
                        <h2 className='text-2xl font-medium ms-3'>Recent Bookings</h2>
                        <div className="col-span-1 bg-gray border-darkGray/50 border rounded-xl p-6 mt-2">
                            <div className="grid grid-cols-3 gap-3">
                                <div className=" space-y-4 text-center">
                                    <h5 className='text-xl font-medium'>Date</h5>
                                    <p className='text-sm'>Jan 14, 2025</p>
                                    <p className='text-sm'>Mar 30, 2025</p>
                                    <p className='text-sm'>Aug 14, 2025</p>
                                    <p className='text-sm'>Dec 08, 2025</p>
                                </div>
                                <div className=" space-y-4 text-center">
                                    <h5 className='text-xl font-medium'>Status</h5>
                                    <p className='text-sm text-green'>Completed</p>
                                    <p className='text-sm text-green'>Completed</p>
                                    <p className='text-sm text-orange'>Pending</p>
                                    <p className='text-sm text-yellow-400'> In Progress</p>
                                </div>
                                <div className=" space-y-4 text-center">
                                    <h5 className='text-xl font-medium'>Destination</h5>
                                    <p className='text-sm'>Dubai</p>
                                    <p className='text-sm'>Qatar</p>
                                    <p className='text-sm'>Bercelona</p>
                                    <p className='text-sm'>Paris</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Link to='/package' className="relative">
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
