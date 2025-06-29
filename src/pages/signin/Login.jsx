import React, { useState } from "react";
import { Link } from "react-router-dom";
import image from "../../images/voyagepro-login.png";
import { FcGoogle } from "react-icons/fc";
import { IoMail } from "react-icons/io5";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import {useForm} from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { toast } from "react-toastify";

const Login = () => {
  const [passwordType, setPasswordType] = useState("password");
  const [passwordIcon, setPasswordIcon] = useState(FaEye);

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
      terms: yup.bool()
  })
  const { register,handleSubmit, formState:{ errors }} =useForm({
      resolver: yupResolver(ValidationSchema)
  })
  const onSubmit = (data) => {
      console.log(data)
          toast("Logged In  successfully !!")
  }
  return (
    <>
      <section className="flex h-screen justify-evenly xs:px-2 2xl:px-20 max-h-screen">
        <div className=" xs:hidden 2xl:w-[50%] ">
          <img
            src={image}
            alt="voyage-pro-"
            className="min-w-full max-h-full object-contain rounded-2xl"
          />
        </div>
        <div className="xs:w-full 2xl:w-[45%] xs:px-1 2xl:p-10 relative flex  flex-col justify-between">
          <h1 className="text-3xl font-semibold">VoyagePro</h1>
          <div className="w-[70%]">
            <div className="">
              <h1 className="text-3xl font-semibold my-5">
                Login to your account
              </h1>
              <p className="text-gray-500 text-sm text-left">
                Login now to stay connected and continue to explore.
              </p>
            </div>
            <div className="mt-8">
              <div className="flex space-x-3 py-2 items-center justify-center border-2 border-gray-500 w-auto  rounded-lg">
                <span className="text-3xl">
                  <FcGoogle />
                </span>
                <span className="text-[16px] font-semibold">
                  Sign Up with Google
                </span>
              </div>
              <div className="flex justify-center items-center space-x-3 mx-auto mt-12 ">
                <div className="h-[1px] w-[25%] bg-gray-400 "></div>
                <p className="uppercase text-sm text-gray-500">
                  or Continue with Email
                </p>
                <div className="h-[1px] w-[25%] bg-gray-400"></div>
              </div>
            </div>
            <form className="mt-12" onSubmit ={handleSubmit(onSubmit)}>
              <div className="">
                <label htmlFor="" className="text-gray-500 text-sm ">
                  Email Address
                </label>
                <div className={`flex bg-white items-center justify-evenly py-2 px-2 rounded-lg mt-2 ${errors.email ? "ring-2 ring-red-500" : "focus-within:ring-2 focus-within:ring-blue-500"}
`}>
                  <input
                    type="email"
                    placeholder="Enter Email "
                    {...register('email')}
                    className=" text-sm outline-none w-[90%]  py-1"
                  />{" "}
                  <IoMail className="scale-150 text-gray-500" />
                </div>
                {errors.email && <p className='text-red-400 mt-3 text-sm'>{errors.email?.message}</p>}
              </div>
              <div className="mt-3">
                <label htmlFor="" className="text-gray-500 text-sm ">
                  Password
                </label>
                <div className={`flex bg-white items-center justify-evenly py-2 px-2 rounded-lg mt-2 ${errors.password ? "ring-2 ring-red-500" : "focus-within:ring-2 focus-within:ring-blue-500"}`}>
                  <input
                    type={passwordType}
                     {...register('password')}
                    className=" text-sm outline-none w-[90%]  py-1"
                    placeholder="Enter password "
                  />
                  <button
                    className="scale-150 text-gray-500"
                    onClick={visiblePassword}
                    >
                    {passwordIcon}
                  </button>
                </div>
                      {errors.password && <p className='text-red-400 mt-3 text-sm'>{errors.password?.message}</p>}
                <div className="flex my-6 justify-between">
                  <div className="flex space-x-2">
                    <input
                      type="checkbox"
                      name=""
                      id=""
                      className="h-5 w-5 accent-blue-600 rounded"
                       {...register("terms")}
                    />
                    <p className="text-sm text-gray-500">Remember me</p>
                  </div>{" "}
                  <Link
                    to="/forgot-password"
                    className="hover:underline text-sm text-gray-500"
                  >
                    Forgot Password?
                  </Link>
                </div>
              </div>

              <div className=" mt-6 flex flex-col">
                <button
                  className="bg-blue-600 hover:bg-blue-500 w-full  py-2 text-xl text-center rounded-lg text-white capitalize"
                >
                  Login
                </button>
                <p className="text-black text-sm mt-5 text-center">
                  Don't have an account ?{" "}
                  <Link to="/signup" className="underline ">
                    Sign Up
                  </Link>
                </p>
              </div>
            </form>
          </div>
          <div className="flex  justify-between text-sm text-gray-700">
            <p>Privacy Policy</p> <p>Copyright 2022</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
