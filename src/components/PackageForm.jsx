import React from 'react'
import image from "../images/landing-image-1.png";
import imageOne from "../images/pacakge-form-1.png";
import imageTwo from "../images/pacakge-form-2.png";
import imageThree from "../images/pacakge-form-3.png";
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { useNavigate } from "react-router-dom";
import DatePicker from './DatePicker';
import { useSelector, useDispatch } from 'react-redux';
import { selectPackage } from '../redux/packages/packageSlice';



const PackageForm = () => {
      const dispatch = useDispatch();
    const currentPackage = useSelector((state) => state.package.selectedPackage); 
    const paymentOptions = [
        { label: "Credit/Debit card", value: "card" },
        { label: "Bank Transfer", value: "bank-transfer" },
        { label: "Pay on Arrival", value: "payment-on-arrival" },
        { label: "Mobile Payment", value: "mobile-payment" },
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
    })
    const { control, register, handleSubmit, watch, formState: { errors } } = useForm({
        resolver: yupResolver(ValidationSchema)
    })
    const selected = watch("paymentMethod");

    const onSubmit = (data) => {
        console.log(data)
        console.log(currentPackage)

    }

    return (
        <div>
            <section className="">
                <div className="h-screen  max-w-7xl mx-auto">
                    <div className="flex justify-between py-4 items-center">
                        <h3 className="text-2xl font-semibold">Voyagepro</h3>
                        <h3 className="text-2xl font-semibold">Travel Packages Form  </h3>
                        <img
                            src={image}
                            alt=""
                            className="h-12 w-12 object-cover rounded-full"
                        />
                    </div>
                    <main className='mt-6 flex gap-10'>
                        <div className=" w-[50%] mt-7 ">
                            <div className=" grid grid-cols-2 grid-rows-2 gap-14  ">
                                <img src={imageOne} alt="" className='rounded-full w-[300px] h-[300px] object-cover self-end' />
                                <img src={imageTwo} alt="" className='rounded-xl w-[400px] h-[350px] object-cover self-start' />
                                <img src={imageThree} alt="" className='rounded-xl w-[400px] h-[350px] object-cover self-start' />
                                <img src={imageOne} alt="" className='rounded-full w-[300px] h-[300px] object-cover self-end' />
                            </div>
                        </div>
                        <div className="w-[50%]">
                            <h1 className='text-3xl font-semibold text-center mb-4'>Booking Form</h1>
                            <div className=" bg-lightgray p-6 px-10 rounded-lg h-full">
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
                                    <div className="mt-6">
                                        <div className="">
                                            <h3 className='text-2xl font-semibold'>Number of Guests ?</h3>
                                            <div className="flex justify-between">
                                                <p className='text-lg'>How many guests ?</p>
                                                <select name="" id="" className='outline-none px-2 py-1 rounded-lg'>
                                                    <option value="">1</option>
                                                    <option value="">2</option>
                                                    <option value="">3</option>
                                                </select>
                                            </div>
                                            <div className="mt-6">
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
                                        </div>
                                        <button>vlick</button>
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
