import React from 'react'
import profileImage from "../images/landing-image-1.png";
import mainImage from "../images/hero-image.png";
import { BiLogOut } from "react-icons/bi";
const Confirmationdetails = () => {
    return (
        <>
            <section className="  bg-confirm-pattern h-screen  bg-cover bg-no-repeat bg-center ">
                <div className="py-6 px-4 max-h-screen max-w-7xl mx-auto">
                    <div className="flex justify-between items-center">
                        <h2 className='text-3xl font-semibold'>VoyagePro</h2>
                        <h2 className='text-3xl font-semibold'>Confirmation Details</h2>
                        <img src={profileImage} alt="" className='h-12 w-12 rounded-full object-cover' />
                    </div>
                    <div className="w-[50%] mx-auto mt-4 bg-white p-6 rounded-lg shadow-xl">
                        <div className=" ">
                            <img src={mainImage} alt="voyagepro booking confirmation image" className='h-52 w-full object-cover rounded-xl' />
                        </div>
                        <div className=" mt-6 space-y-2">
                            <h2 className='text-3xl font-semibold'>London</h2>
                            <h2 className='text-2xl font-semibold'>Confirmation package details</h2>
                            <p className='text-xl '><span className='font-bold me-4'>Date</span> 20sept.2025 - 27sept.2025</p>
                            <p className='text-xl '><span className='font-bold me-4'>Night</span> 7 Nights</p>
                            <p className='text-xl '><span className='font-bold me-4'>Guest</span> 5 Guests</p>
                            <p className='text-xl '><span className='font-bold me-4'>Payment</span> Confirmed</p>
                            <p className='text-xl '><span className='font-bold me-4'>Track</span> Travel</p>
                            <p className='text-xl '><span className='font-bold me-4'>Id Num</span> 1z4s22377990467</p>
                            <p className='text-xl '><span className='font-bold me-4'>Price</span> $ 1,200</p>
                            <p className='text-xl '><span className='font-bold me-4'>Room</span> Standard Room (Duplex)</p>

                        </div>
                        <div className="px-12 flex flex-col mt-4 space-y-3">
                            <button className='bg-blue text-white py-3 text-lg rounded-lg'>Book another package</button>
                            <button className='border border-blue text-blue py-3 text-lg rounded-lg'>Back to home</button>
                            <button className='text-xl text-red flex  justify-center items-center '> Logout  <BiLogOut className='text-4xl' /></button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Confirmationdetails
