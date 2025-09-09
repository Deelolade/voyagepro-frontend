import { useState, useRef } from 'react'
import imageOne from "../../images/package-form-1.webp";
import imageTwo from "../../images/package-form-2.webp";
import imageThree from "../../images/package-form-3.webp";
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useForm, Controller, useFieldArray } from 'react-hook-form'
import { useNavigate } from "react-router-dom";
import CreatableSelect from 'react-select/creatable';
import { useSelector, useDispatch } from 'react-redux';
import { motion } from 'framer-motion';
import { MdOutlineFileUpload } from "react-icons/md";
import axios from 'axios';
import { toast } from 'react-toastify';
import Spinner from '../ui/Spinner';




const PackageForm = () => {
    const navigate = useNavigate();
    const API_URL = import.meta.env.VITE_API_URL;
    const [imageUrls, setImageUrls] = useState([]);
    const [uploadedUrls, setUploadedUrls] = useState([]);
    const [loading, setLoading] = useState(false)
    const fileInputRef = useRef(null);

    const ValidationSchema = yup.object().shape({
        title: yup.string().required("package title is required"),
        tagline: yup.string().required("Package tagline is required"),
        duration: yup.string().required("The package duration must be added"),
        price: yup.number().required("The package price is required"),
        country: yup.string().required("The package country is required"),
        city: yup.string().required("The package city is required"),
        whatisIncluded: yup.array().of(
            yup.object().shape({
                value: yup.string().required("Value is required"),
                label: yup.string().required("Label is required"),
            })
        ).min(1, "At least one item is required").required("the included data must be added"),
        itinerary: yup.array().of(
            yup.object().shape({
                day: yup.number().required("Day is required").typeError("Day must be a number").min(1, "Day must be at least 1"),
                title: yup.string().required("Title is required").min(3, "Title must be at least 3 characters"),
            })
        ).min(1, "At least one itinerary item is required").required("Itinerary is required"),
        roomType: yup.string().required("Room type is required"),
        resortType: yup.string().required("Resort type is required"),
    })
    const { control, register, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: yupResolver(ValidationSchema),
        defaultValues: {
            whatisIncluded: [],
            itinerary: [{ day: 1, title: "Arrival" }],
        }
    })

    const whatsIncludedOptions = [
        { value: "Hotel", label: "Hotel" },
        { value: "Meals", label: "Meals" },
        { value: "Tours", label: "Tours" },
        { value: "Transport", label: "Transport" },
        { value: "Guide", label: "Guide" },
        { value: "Activities", label: "Activities" },
    ];
    const { fields, append, remove } = useFieldArray({
        control,
        name: "itinerary",
    });
    const handleIconClick = (e) => {
        e.preventDefault();
        fileInputRef.current.click();
    }

    const handleFileChange = async (event) => {
        const files = Array.from(event.target.files); // convert FileList → array
        setImageUrls((prev) => [...prev, ...files]);
        for (let i = 0; i < files.length; i++) {
            const data = new FormData();
            data.append("file", files[i]);
            data.append("upload_preset", "voyagepro"); // Replace with your preset
            data.append("cloud_name", "dluhzoptp"); // Replace with your Cloudinary cloud name
            try {
                const res = await axios.post("https://api.cloudinary.com/v1_1/dluhzoptp/image/upload", data);
                console.log(res.data.secure_url)
                console.log(uploadedUrls)
                setUploadedUrls((prev) => [...prev, res.data.secure_url]);
            } catch (error) {
                console.error("Error uploading image:", error)
            }
        }
        // Reset input so same file can be chosen again if needed
        event.target.value = "";
    }
    const onSubmit = async (data) => {

        const { country, city, roomType, resortType,price , whatisIncluded, ...rest } = data;
        const images = uploadedUrls;
        const  pricePerAdult = price;
        const location = { country, city };
        const accommodation = { roomType, resortType };
        const whatsIncluded = data.whatisIncluded.map(item => item.value);
        const payload = { ...rest,pricePerAdult, whatsIncluded, location, accommodation, images };

        console.log(payload)

        const token = localStorage.getItem("token");
        if (!token) {
            toast.error("You must be logged in to update your profile");
            return;
        }
        setLoading(true);
        try {
            const res = await axios.post(`${API_URL}/packages`, payload, {
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
                            className=" 2xl:w-[50%] hidden min-h-[850px] lg:block lg:w-[50%] ">
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
                                            placeholder="Enter the package Title"
                                            className=" text-lg outline-none border-2 border-zinc-500 bg-lightgray w-full px-3  py-2 rounded-md "
                                        />{" "}
                                        {errors.title && <p className='text-red mt-1 text-sm'>{errors.title?.message}</p>}
                                    </div>
                                    <div className="">
                                        <label htmlFor="" className="text-zinc-800 text-lg font-semibold ">
                                            Package Tagline
                                        </label>
                                        <input
                                            type="text"
                                            {...register('tagline')}
                                            placeholder="Enter the package Tagline"
                                            className=" text-lg outline-none border-2 border-zinc-500 w-full px-3 bg-lightgray py-2 rounded-md "
                                        />{" "}
                                        {errors.tagline && <p className='text-red mt-1 text-sm'>{errors.tagline?.message}</p>}
                                    </div>
                                    <div className="">
                                        <label htmlFor="" className="text-zinc-800 text-lg font-semibold ">
                                            Duration
                                        </label>
                                        <input
                                            type="text"
                                            {...register('duration')}
                                            placeholder="How many days will the duration be ? "
                                            className=" text-lg outline-none border-2 border-zinc-500 w-full px-3 bg-lightgray py-2 rounded-md "
                                        />{" "}
                                        {errors.duration && <p className='text-red mt-1 text-sm'>{errors.duration?.message}</p>}
                                    </div>
                                    <div className="">
                                        <label htmlFor="" className="text-zinc-800 text-lg font-semibold ">
                                            Price
                                        </label>
                                        <input
                                            type="text"
                                            {...register('price')}
                                            placeholder="How much would this package cost ? "
                                            className=" text-lg outline-none border-2 border-zinc-500 w-full px-3 bg-lightgray py-2 rounded-md "
                                        />{" "}
                                        {errors.price && <p className='text-red mt-1 text-sm'>{errors.price?.message}</p>}
                                    </div>
                                    <div className="  grid grid-cols-2 gap-5 ">
                                        <div className="">
                                            <label htmlFor="" className="text-zinc-800 text-lg font-semibold ">
                                                Country
                                            </label>
                                            <input
                                                type="text"
                                                {...register('country')}
                                                placeholder="What country would this be ? "
                                                className=" text-lg outline-none border-2 border-zinc-500 w-full px-3 bg-lightgray py-2 rounded-md "
                                            />{" "}
                                            {errors.country && <p className='text-red mt-1 text-sm'>{errors.country?.message}</p>}
                                        </div>
                                        <div className="">
                                            <label htmlFor="" className="text-zinc-800 text-lg font-semibold ">
                                                city
                                            </label>
                                            <input
                                                type="text"
                                                {...register('city')}
                                                placeholder="What city would this be ? "
                                                className=" text-lg outline-none border-2 border-zinc-500 w-full px-3 bg-lightgray py-2 rounded-md "
                                            />{" "}
                                            {errors.city && <p className='text-red mt-1 text-sm'>{errors.city?.message}</p>}
                                        </div>
                                    </div>
                                    <div className="">
                                        <label htmlFor="" className="text-zinc-800 text-lg font-semibold ">
                                            What's Included ?
                                        </label>
                                        <Controller
                                            name='whatisIncluded'
                                            control={control}
                                            render={({ field }) => (
                                                <CreatableSelect
                                                    {...field}
                                                    isMulti
                                                    options={whatsIncludedOptions}
                                                    className='my-1 py-2 '
                                                    onChange={(val) => field.onChange(val)} />
                                            )}
                                        />
                                        {errors.whatisIncluded && <p className='text-red mt-1 text-sm'>{errors.whatisIncluded?.message}</p>}
                                    </div>
                                    <div className="">
                                        <label htmlFor="" className="text-zinc-800 text-lg font-semibold ">
                                            Itinerary
                                        </label>
                                        {fields.map((field, index) => (
                                            <div key={field.id} className="flex gap-3 items-center">
                                                <input
                                                    type="text"
                                                    {...register(`itinerary.${index}.day`)}
                                                    placeholder="Day"
                                                    className=" border-2 border-zinc-500 bg-lightgray px-2 py-1  my-1 rounded w-20"
                                                />
                                                <input
                                                    type="text"
                                                    {...register(`itinerary.${index}.title`)}
                                                    placeholder="Title"
                                                    className=" px-2 py-1 rounded flex-1 outline-none border-2 border-zinc-500 bg-lightgray"
                                                />
                                                <button
                                                    type="button"
                                                    onClick={() => remove(index)}
                                                    className="text-red hover:bg-red/10 size-7 rounded-md"
                                                >
                                                    ✕
                                                </button>
                                            </div>
                                        ))}
                                        <button
                                            type="button"
                                            onClick={() => append({ day: fields.length + 1, title: "" })}
                                            className="bg-green px-2 py-1 rounded text-white mt-2 text-sm"
                                        >
                                            + Add Day
                                        </button>
                                        {errors.itinerary && (
                                            <p className="text-red-500 text-sm">{errors.itinerary.message}</p>
                                        )}
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4  ">
                                        <div className="">
                                            <label htmlFor="" className="text-zinc-800 text-lg font-semibold ">
                                                Room Type
                                            </label>
                                            <input
                                                type="text"
                                                {...register('roomType')}
                                                placeholder="Enter the Room Type"
                                                className=" text-lg outline-none border-2 border-zinc-500 w-full px-3 bg-lightgray py-2 rounded-md "
                                            />{" "}
                                            {errors.roomType && <p className='text-red mt-1 text-sm'>{errors.roomType?.message}</p>}
                                        </div>
                                        <div className="">
                                            <label htmlFor="" className="text-zinc-800 text-lg font-semibold ">
                                                Resort Type
                                            </label>
                                            <input
                                                type="text"
                                                {...register('resortType')}
                                                placeholder="Enter the resort Type available"
                                                className=" text-lg outline-none border-2 border-zinc-500 w-full px-3 bg-lightgray py-2 rounded-md "
                                            />{" "}
                                            {errors.resortType && <p className='text-red mt-1 text-sm'>{errors.resortType?.message}</p>}
                                        </div>
                                    </div>
                                    <div className="my-3">
                                        <input type="file"
                                            accept="image/*"
                                            multiple
                                            ref={fileInputRef}
                                            className='hidden'
                                            onChange={handleFileChange} />
                                        <button onClick={handleIconClick} className='w-full bg-lightgray border-2 border-dashed border-zinc-500 h-20 rounded-lg flex flex-col justify-center items-center text-zinc-600 text-3xl font-semibold'>
                                            <MdOutlineFileUpload />
                                        </button>
                                        <div className="grid grid-cols-4 gap-1 mt-2">
                                            {imageUrls.map((img, idx) => (
                                                <img
                                                    key={idx}
                                                    src={URL.createObjectURL(img)} // temporary preview
                                                    alt={`upload-${idx}`}
                                                    className="w-24 h-24 object-cover rounded-md "
                                                />
                                            ))}
                                        </div>
                                    </div>
                                    <motion.button
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9, }}
                                        type="submit" className="bg-blue/90 hover:bg-blue py-2 text-lg mt-3 w-full text-center rounded-lg text-white capitalize">
                                        Publish
                                    </motion.button>
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

