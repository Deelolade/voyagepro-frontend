import React, { useState } from 'react'
import imageOne from "../images/package-form-1.webp";
import imageTwo from "../images/package-form-2.webp";
import imageThree from "../images/package-form-3.webp";
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { useNavigate } from "react-router-dom";
import DatePicker from './DatePicker';
import { useSelector, useDispatch } from 'react-redux';
import { motion } from 'framer-motion';
import axios from 'axios';
import { toast } from 'react-toastify';
import Spinner from './ui/Spinner';
import UserButton from './ui/UserButton';




const PackageForm = () => {
    const navigate = useNavigate();
    const API_URL = import.meta.env.VITE_API_URL
    const [guestCount, setGuestCount] = useState(1);
    const [loading, setLoading] = useState(false)
    const currentPackage = useSelector((state) => state.package.selectedPackage);
    const paymentOptions = [
        { label: "Credit/Debit card", value: "Credit/Debit Card" },
        { label: "Bank Transfer", value: "Bank Transfer" },
        // { label: "Pay on Arrival", value: "ussd" },
        { label: "Mobile Payment", value: "Mobile Payment" },
    ];
    const ValidationSchema = yup.object().shape({
        email: yup.string().email().required("Incorrect Email"),
        name: yup.string().required("First name is required"),
        contact: yup
            .string()
            .required("Phone number is required")
            .matches(/^(?:\+234|0)[789][01]\d{8}$/, "Enter a valid phone number"),
        travelDate: yup.string().required("Date of travel is important"),
        paymentMethod: yup.string().required("Please select a payment method"),
        terms: yup.bool().oneOf([true], "You have to agree to our terms and privacy policy "),

    })
    const { control, register, handleSubmit, watch, reset, formState: { errors } } = useForm({
        resolver: yupResolver(ValidationSchema)
    })
    const selected = watch("paymentMethod");
    const onSubmit = async (data) => {
        const packageId = currentPackage._id;
        const packageName = currentPackage.title;
        const travelers = guestCount;
        const phone = data.contact;
        const email = data.email;
        const contactInfo = { phone, email };
        data = { ...data, packageName, travelers, packageId, contactInfo };
        console.log(data)
        const token = localStorage.getItem("token");
        if (!token) {
            toast.error("You must be logged in to update your profile");
            return;
        }
        setLoading(true);
        try {
            const res = await axios.post(`${API_URL}/bookings`, data, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            reset()
            toast.success(res.data.message || "You have successfully created a booking!");
            console.log(res.data);
            setTimeout(() => {
                navigate(`/dashboard`);
            }, 3000);
        } catch (error) {
            console.error("Error during signup:", error);
        } finally {
            setLoading(false);
        }
        createPaymentGateway(data);

    }
    const createPaymentGateway = async (data) => {
        const fullName = data.name;
        const email = data.email;
        const travelDate = data.travelDate;
        const numberOfGuests = guestCount;
        const contactNumber = data.contact;
        const paymentMethod = data.paymentMethod;
        const packageId = currentPackage._id;
        const packageName = currentPackage.title;
        const costPerPerson = currentPackage.pricePerAdult;
        const totalAmountPaid = currentPackage.pricePerAdult * guestCount;
        const redirectUrl = `${import.meta.env.VITE_CLIENT_URL}/confirm-details`;
        const payload = { fullName, email, contactNumber, travelDate, numberOfGuests, paymentMethod, packageId, packageName, costPerPerson, totalAmountPaid, redirectUrl }
        console.log("payment gateway, new payload;", payload)
        try {
            const res = await axios.post(`${API_URL}/payment/initiate`, payload)
            console.log(res.data)
            if (res.data.status === "success") {
              localStorage.setItem("pendingPayment", JSON.stringify(payload));
                // Redirect user to Flutterwave checkout page
                window.location.href = (res.data.paymentLink);
            }
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div>
            <section className="">
                {loading && <Spinner />}
                <div className="h-screen  max-w-7xl mx-auto px-3 md:px-6 ">
                    <div className="flex justify-between py-4 items-center px-3">
                        <h3 className="text-sm font-semibold">Voyagepro</h3>
                        <UserButton/>
                    </div>
                    <main className='md:mt-2 flex gap-10'>
                        <motion.div
                            initial={{ opacity: 0, x: -100 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 100 }}
                            transition={{ duration: 0.5, type: "spring", stiffness: 80 }}
                            className=" 2xl:w-[50%] hidden  lg:block lg:w-[50%] mt-7 ">
                            <div className=" grid grid-cols-2 grid-rows-2 gap-14  ">
                                <img src={imageOne} alt="voyage-pro-image" className='rounded-full w-[300px] h-[300px] object-cover self-end' />
                                <img src={imageTwo} alt="voyage-pro-image" className='rounded-xl w-[400px] h-[350px] object-cover self-start' />
                                <img src={imageThree} alt="voyage-pro-image" className='rounded-xl w-[400px] h-[350px] object-cover self-start' />
                                <img src={imageOne} alt="voyage-pro-image" className='rounded-full w-[300px] h-[300px] object-cover self-end' />
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -100 }}
                            transition={{ duration: 0.5, type: "spring", stiffness: 80 }}
                            className="w-[90vw] sm:w-[70vw] mx-auto lg:w-[50%]">
                            <h1 className='text-3xl font-semibold text-center mb-2'>Booking Form</h1>
                            <div className=" bg-lightgray p-6 px-10 rounded-lg mb-7">
                                <form onSubmit={handleSubmit(onSubmit)}>
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
                                            Email Address
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
                                    <div className="mt-3">
                                        <div className="">
                                            <h3 className='text-lg md:text-2xl font-semibold'>Number of Guests ?</h3>
                                            <div className="flex justify-between items-end">
                                                <div className="">
                                                    <p className='text-lg italic text-zinc-500'>#{currentPackage.pricePerAdult.toLocaleString()}/ person</p>
                                                    <p className="text-lg font-semibold">
                                                        Total: #{(currentPackage.pricePerAdult * guestCount).toLocaleString()}
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
                                            <div className="mt-3 md:mt-3">
                                                <label className="block text-lg font-semibold mb-3 text-zinc-800">
                                                    Select a payment method
                                                </label>

                                                <div className="grid grid-cols-2 gap-4">
                                                    {paymentOptions.map((option) => (
                                                        <label
                                                            key={option.value}
                                                            className={` relative flex  space-x-3  cursor-pointer hover:border-blue-600 transition `}
                                                        >
                                                            <input
                                                                type="radio"
                                                                value={option.value}
                                                                {...register("paymentMethod")}
                                                                className={`  w-6 h-6 rounded-full cursor-pointer transition-all duration-200   ${selected === option.value ? 'border-blue bg-blue  accent-blue' : 'border-gray'} `}
                                                            />
                                                            <span className="text-zinc-700">{option.label}</span>
                                                        </label>
                                                    ))}
                                                </div>

                                                {errors.paymentMethod && (
                                                    <p className="text-red text-sm mt-2">
                                                        {errors.paymentMethod.message}
                                                    </p>
                                                )}
                                            </div>
                                            <div className=" text-center mx-auto">
                                                <div className="flex space-x-2 my-3">
                                                    <input
                                                        type="checkbox"
                                                        name=""
                                                        id=""
                                                        className="h-5 w-5 accent-blue rounded"
                                                        {...register("terms")}
                                                    />
                                                    <p className="text-sm ">By continuing, you agree to our Terms and Privacy Policy.</p>
                                                </div>{" "}
                                                {errors.terms && (
                                                    <p className="text-red text-sm mt-1">
                                                        {errors.terms?.message}
                                                    </p>
                                                )}
                                            </div>
                                        </div>
                                        <motion.button
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }}
                                            type="submit" className="bg-blue/90 hover:bg-blue py-2 text-lg mt-3 w-full text-center rounded-lg text-white capitalize">
                                            Proceed
                                        </motion.button>
                                    </div>
                                </form>
                            </div>
                        </motion.div>
                    </main>
                </div>
            </section>
        </div>
    )
}

export default PackageForm
