import { useState } from 'react'
import imageOne from "../../images/package-form-1.png";
import imageTwo from "../../images/package-form-2.png";
import imageThree from "../../images/package-form-3.png";
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { useNavigate } from "react-router-dom";
import DatePicker from '../DatePicker';
import { useSelector, useDispatch } from 'react-redux';
import { FaRegUserCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';
import axios from 'axios';
import { toast } from 'react-toastify';
import Spinner from '../ui/Spinner';




const PackageForm = () => {
    const navigate = useNavigate();
    const API_URL = import.meta.env.VITE_API_URL
    const [guestCount, setGuestCount] = useState(1);
    const [loading, setLoading] = useState(false)

    const ValidationSchema = yup.object().shape({
        email: yup.string().email().required("Incorrect Email"),
        name: yup.string().required("First name is required"),
        contact: yup
            .string()
            .required("Phone number is required")
            .matches(/^(?:\+234|0)[789][01]\d{8}$/, "Enter a valid phone number"),
        travelDate: yup.string().required("Date of travel is important"),
        paymentMethod: yup.string().required("Please select a payment method"),

    })
    const { control, register, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: yupResolver(ValidationSchema)
    })
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
            console.log(res.data)
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
    }
    return (
        <div>
            <section className="">
                {loading && <Spinner />}
                <div className="h-screen  max-w-7xl mx-auto px-3 md:px-6 ">
                    <div className="flex justify-between py-4 items-center px-3">
                        <h3 className="text-2xl md:text-3xl font-semibold">Package Data Form</h3>
                        <div className="flex">
                            <button className='px-4 py-2 bg-orange text-lg font-semibold rounded-md'>Save as Draft</button>
                        </div>
                    </div>
                    <main className='md:mt-2 flex gap-10'>
                        <motion.div
                            initial={{ opacity: 0, x: -100 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 100 }}
                            transition={{ duration: 0.5 }}
                            className=" 2xl:w-[50%] hidden min-h-[900px] lg:block lg:w-[50%] ">
                            <img
                                src={imageOne}
                                alt="voyagePro-image"
                                className="w-full h-full object-cover rounded-xl"
                            />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -100 }}
                            transition={{ duration: 0.5, type: "spring", stiffness: 80 }}
                            className="w-[90vw] sm:w-[70vw] mx-auto lg:w-[50%]">
                            <div className=" bg-lightgray p-6 px-10 rounded-lg mb-7">
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="">
                                        <label htmlFor="" className="text-zinc-800 text-lg font-semibold ">
                                            Package Title
                                        </label>
                                        <input
                                            type="text"
                                            {...register('title')}
                                            placeholder="Enter your full Name"
                                            className=" text-lg outline-none border-2 border-zinc-500 w-full px-3 bg-lightgray py-2 rounded-md "
                                        />{" "}
                                        {errors.title && <p className='text-red mt-1 text-sm'>{errors.title?.message}</p>}
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


                                            <div className=" text-center mx-auto bg-">
                                                <div className="flex space-x-2 justify-center mt-4">
                                                    <input
                                                        type="checkbox"
                                                        name=""
                                                        id=""
                                                        className="h-5 w-5 accent-blue rounded"
                                                        {...register("airportPickup")}
                                                    />
                                                    <p className="text-sm">Include Airport pickup</p>
                                                </div>{" "}
                                                <div className="flex space-x-2 my-3">
                                                    <input
                                                        type="checkbox"
                                                        name=""
                                                        id=""
                                                        className="h-5 w-5 accent-blue rounded"
                                                        {...register("terms")}
                                                    />
                                                    <p className="text-sm w-52 md:w-fit ">By continuing, you agree to our Terms and Privacy Policy.</p>
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
                                            whileTap={{ scale: 0.9, }} type="submit" className="bg-blue/90 hover:bg-blue py-2 text-lg mt-3 w-full text-center rounded-lg text-white capitalize">
                                            Publish
                                            {/* Proceed (#{(currentPackage.pricePerAdult * guestCount).toLocaleString()}) */}
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

export default PackageForm;

