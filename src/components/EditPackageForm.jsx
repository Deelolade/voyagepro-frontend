import React, { useState } from 'react'
import image from "../images/landing-image-1.png";
import imageOne from "../images/edit-package-one.png";
import imageTwo from "../images/edit-package-two.png";
import imageThree from "../images/edit-package-three.png";
import imageFour from "../images/edit-package-four.png";
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from "react-router-dom";
import DatePicker from './DatePicker';
import { useSelector, useDispatch } from 'react-redux';
import { selectPackage } from '../redux/packages/packageSlice';
import { FaRegUserCircle } from 'react-icons/fa';



const PackageForm = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [guestCount, setGuestCount] = useState(1);
    const currentPackage = useSelector((state) => state.package.selectedPackage);
    const ValidationSchema = yup.object().shape({
        email: yup.string().email().required("Incorrect Email"),
        name: yup.string().required("First name is required"),
        contact: yup
            .string()
            .required("Phone number is required")
            .matches(/^(?:\+234|0)[789][01]\d{8}$/, "Enter a valid phone number"),
        travelDate: yup.string().required("Date of travel is important"),
        airportPickup: yup.bool(),
        terms: yup.bool().oneOf([true], "You have to agree to our terms and privacy policy "),

    })
    const { control, register, handleSubmit, watch, formState: { errors } } = useForm({
        resolver: yupResolver(ValidationSchema)
    })
    const selected = watch("paymentMethod");
    // console.log(currentPackage)

    const onSubmit = (data) => {
        console.log(data)
        // navigate(`/packages/${data.id}`);
    }

    return (
        <div>
            <section className="">
                <div className="h-screen  max-w-7xl mx-auto px-3">
                    <div className="flex justify-between py-4 items-center lg:px-3">
                        <h3 className="text-2xl md:text-3xl font-semibold">Voyagepro</h3>
                        <h3 className="hidden md:text-3xl lg:block font-semibold">Travel Packages Form  </h3>
                        <span className='w-40 flex justify-end'>< FaRegUserCircle className="scale-150 text-2xl"/></span>
                    </div>
                    <main className='flex  items-start '>
                        <div className="hidden lg:block 2xl:w-[50%] h-[750px] pt-10">
                            <div className=" grid grid-cols-2 grid-rows-2 h-full rounded-lg shadow-lg">
                                <img src={imageOne} alt="" className='w-full h-full  object-cover self-end' />
                                <img src={imageTwo} alt="" className=' w-full h-full object-cover self-start' />
                                <img src={imageThree} alt="" className='w-full h-full  object-cover self-start' />
                                <img src={imageFour} alt="" className='w-full h-full  object-cover self-end' />
                            </div>
                        </div>
                        <div className=" w-[90vw] sm:w-[80vw] md:p-12 mx-auto 2xl:w-[50%]">
                            <h1 className='text-2xl md:text-3xl  font-semibold text-center mb-2 md:hidden'>Edit Form</h1>
                            <div className="bg-lightgray py-6 px-10 rounded-lg h-full  shadow-lg">
                                <form onSubmit={handleSubmit(onSubmit)} className=''>
                                    <h2 className='text-xl sm:text-2xl font-medium'>{currentPackage.title}</h2>
                                    <div className="">
                                        <label htmlFor="" className="text-zinc-800 text-lg font-semibold ">
                                            Name
                                        </label>
                                        <input
                                            type="name"
                                            {...register('name')}
                                            placeholder="Enter your full Name"
                                            className=" text-lg outline-none border-2 border-zinc-500 w-full px-3 bg-lightgray py-2 rounded-md "
                                        />{" "}
                                        {errors.email && <p className='text-red mt-1 text-sm'>{errors.name?.message}</p>}
                                    </div>
                                    <div className="mt-4">
                                        <label htmlFor="" className="text-zinc-800 text-lg font-semibold ">
                                            Email 
                                        </label>
                                        <input
                                            type="email"
                                            {...register('email')}
                                            placeholder="Enter Email "
                                            className=" text-lg outline-none border-2 border-zinc-500 w-full px-3 bg-lightgray py-2 rounded-md"
                                        />{" "}
                                        {errors.email && <p className='text-red mt-1 text-sm'>{errors.email?.message}</p>}
                                    </div>
                                    <div className="mt-4">
                                        <label htmlFor="" className="text-zinc-800 text-lg font-semibold ">
                                            Contact
                                        </label>
                                        <input
                                            type="text"
                                            {...register('contact')}
                                            placeholder="Enter your contact details "
                                            className=" text-lg outline-none border-2 border-zinc-500 w-full px-3 bg-lightgray py-2 rounded-md"
                                        />{" "}
                                        {errors.contact && <p className='text-red mt-1 text-sm'>{errors.contact?.message}</p>}
                                    </div>
                                    <DatePicker control={control}
                                        name="travelDate"
                                        error={errors.travelDate} />
                                    <div className="mt-6">
                                        <div className="">
                                            <h3 className='text-2xl font-semibold'>Number of Guests ?</h3>
                                            <div className="flex justify-between items-end">
                                                <div className="">
                                                    <p className='text-lg italic text-zinc-500'>${currentPackage.price.toLocaleString()}/ person</p>
                                                    <p className="text-lg font-semibold">
                                                        Total: ${(currentPackage.price * guestCount).toLocaleString()}
                                                    </p>
                                                </div>
                                                <div className="">
                                                    <p className='text-lg'>{currentPackage.title}</p>
                                                    <select name="" id="" value={guestCount} onChange={(e) => setGuestCount(Number(e.target.value))} className='outline-none  px-2 py-1 rounded-lg text-base'>
                                                        <option value="1">1</option>
                                                        <option value="2">2</option>
                                                        <option value="3">3</option>
                                                        <option value="4">4</option>
                                                        <option value="5">5</option>
                                                        <option value="6">6</option>
                                                        <option value="7">7</option>
                                                        <option value="8">8</option>
                                                        <option value="9">9</option>
                                                        <option value="10">10</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className=" text-center mx-auto">
                                                <div className="flex space-x-2 justify-start mt-4">
                                                    <input
                                                        type="checkbox"
                                                        name=""
                                                        id=""
                                                        className="h-5 w-5 accent-blue rounded"
                                                        {...register("airportPickup")}
                                                    />
                                                    <p className="text-sm">Include Airport pickup</p>
                                                </div>{" "}
                                                <div className="flex space-x-2 mt-6 mb-3 justify-start items-center">
                                                    <input
                                                        type="checkbox"
                                                        name=""
                                                        id=""
                                                        className="h-5 w-5 accent-blue rounded"
                                                        {...register("terms")}
                                                    />
                                                    <p className="text-sm w-72 md:w-full">By continuing, you agree to our <span className='text-blue'>Terms</span> and Privacy <span className='text-blue'>Policy</span>.</p>
                                                </div>{" "}
                                                {errors.terms && (
                                                    <p className="text-red text-sm mt-1">
                                                        {errors.terms?.message}
                                                    </p>
                                                )}
                                            </div>
                                        </div>
                                        <button type="submit" className="bg-blue/90 hover:bg-blue py-2 text-lg mt-6 w-full text-center rounded-lg text-white capitalize">
                                            Proceed (${(currentPackage.price * guestCount).toLocaleString()})
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </main>
                </div>
            </section>
        </div>
    )
}

export default PackageForm
