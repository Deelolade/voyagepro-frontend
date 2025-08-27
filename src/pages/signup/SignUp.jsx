import { useState } from "react";
import BreadCrumbs from "../../components/SignUpBreadCrumbs";
import { Link } from "react-router-dom";
import image from "../../images/voyage-pro-1.png";
import { FcGoogle } from "react-icons/fc";
import { IoMail } from "react-icons/io5";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import {useForm} from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { signInPending } from "../../redux/users/userSlice";
import { motion } from "framer-motion";


const SignUp = () => {
  const dispatch = useDispatch();
  const API_URL = import.meta.env.VITE_API_URL;
  const [passwordType, setPasswordType] = useState("password");
  const [passwordIcon, setPasswordIcon] = useState(FaEye);
  const navigate =useNavigate();
  const visiblePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      setPasswordIcon(FaEyeSlash);
    }
    if (passwordType === "text") {
      setPasswordIcon(FaEye);
      setPasswordType("password");
    }
  };
  const ValidationSchema = yup.object().shape({
        email: yup.string().email().required("Incorrect Email"),
        password: yup.string().required().min(4).max(20).required("Please Enter correct Password"),
    })
    const { register,handleSubmit, formState:{ errors }} =useForm({
        resolver: yupResolver(ValidationSchema)
    })
    const onSubmit = async(data) => {
        console.log(data.email)
        const email = data.email;
        try {
          const res = await axios.post(`${API_URL}/auth`, data)
          toast.success(res.data.message|| "Account created successfully!");
          console.log(res.data);
          dispatch(signInPending({email}))
          navigate("/verify-email");
        } catch (error) {
          console.error("Error during signup:", error);
        }
    }
  return (
    <>
      <section className="max-h-screen flex justify-evenly gap-10 sm:py-10 sm:px-10  2xl:p-0 ">
        <motion.div
        initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
         className=" 2xl:w-[50%] hidden min-h-[900px] lg:block lg:w-[50%] ">
          <img
            src={image}
            alt="voyage-pro-"
            className="min-w-full max-h-full object-contain rounded-2xl"
          />
        </motion.div>
        <motion.div
         initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
         className="2xl:w-[50%] 2xl:p-10  relative flex  flex-col xxs:mt-6 xs:mt-8 px-4">
          <div className="">
            <BreadCrumbs />
          </div>
          <div className=" md:w-full xs:w-full xl:w-full 2xl:w-[70%]">
            <div className=" xxs:mt-8 md:mt-12 lg:mt-20 xl:mt-20  2xl:mt-20">
              <p className="text-zinc-500 text-sm">Step 1/3</p>
              <h1 className="xxs:text-2xl xs:text-3xl 2xl:text-4xl font-semibold my-3 sm:my-5  ">Create an account</h1>
              <p className="text-zinc-500 text-sm xxs:text-left">
                sign up with VoyagePro and unlock opportunities to shape your future fun experiences.
              </p>
            </div>
            <div className="xxs:mt-4 xl:mt-5 2xl:mt-8">
              <div className="flex space-x-3 xxs:py-2 2xl:py-2 items-center justify-center border-2 border-zinc-500 w-auto  rounded-lg">
                <span className="2xl:text-3xl xxs:text-2xl">
                  <FcGoogle />
                </span>
                <span className=" xxs:text-sm text-[16px] font-semibold">
                  Sign Up with Google
                </span>
              </div>
              <div className="flex justify-center items-center space-x-3 mx-auto xxs:mt-6 xs:mt-12 ">
                <div className="h-[1px] xxs:w-[20%] xs:w-[30%]  2xl:w-[25%] bg-zinc-400 "></div>
                <p className="uppercase text-sm text-center text-zinc-500">
                  or Continue with Email
                </p>
                <div className="h-[1px] xxs:w-[20%] xs:w-[30%]  2xl:w-[25%] bg-zinc-400"></div>
              </div>
            </div>
            <form onSubmit ={handleSubmit(onSubmit)} className=" xs:my-6 lg:mt-4 xl:mt-8 2xl:mt-12 ">
              <div className="">
                <label htmlFor="" className="text-zinc-500 text-sm ">
                  Email Address
                </label>
                <div className={`flex bg-white items-center justify-evenly py-2 px-2 rounded-lg mt-2 ${errors.email ? "ring-2 ring-red" : "focus-within:ring-2 focus-within:ring-blue"}`}>
                  <input
                    type="email"
                    {...register('email')}
                    placeholder="Enter Email "
                    className=" text-sm outline-none w-[90%]  py-1"
                  />{" "}
                  <IoMail className="scale-150 text-zinc-500" />
                </div>
                {errors.email && <p className='text-red mt-3 text-sm'>{errors.email?.message}</p>}
              </div>
              <div className="mt-3">
                <label htmlFor="" className="text-zinc-500 text-sm ">
                  Password
                </label>
                <div className={`flex bg-white items-center justify-evenly py-2 px-2 rounded-lg mt-2 ${errors.password ? "ring-2 ring-red" : "focus-within:ring-2 focus-within:ring-blue"}`}>

                  <input
                    type={passwordType}
                    {...register('password')}
                    className=" text-sm outline-none w-[90%]  py-1"
                    placeholder="Password (min.8 character)"
                  />
                  <i
                    className="scale-150 text-zinc-500"
                    onClick={visiblePassword}
                  >
                    {passwordIcon}
                  </i>
                </div>
                      {errors.password && <p className='text-red mt-3 text-sm'>{errors.password?.message}</p>}

              </div>

              <div className=" mt-6 flex flex-col">
                <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9, rotate: -5 }}
                  className="bg-blue/90 hover:bg-blue w-full  font-semibold py-2 text-xl text-center rounded-lg text-white capitalize"
                >
                  Sign Up
                </motion.button>
                <p className="text-black text-sm mt-3">
                  already have an account ?{" "}
                  <Link to="/login" className="underline ">Login</Link>
                </p>
              </div>
            </form>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default SignUp;
