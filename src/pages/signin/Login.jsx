import React, { useState } from "react";
import { Link } from "react-router-dom";
import image from "../../images/voyagepro-login.png";
import { FcGoogle } from "react-icons/fc";
import { IoMail } from "react-icons/io5";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
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
    password: yup
      .string()
      .required()
      .min(4)
      .max(20)
      .required("Please Enter correct Password"),
    terms: yup.bool(),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(ValidationSchema),
  });
  const onSubmit = (data) => {
    console.log(data);
    toast("Logged In  successfully !!");
  };
  return (
    <>
      <section className="flex h-screen justify-evenly md:px-5 lg:px-10 xl:px-10  2xl:px-20  xs:px-3  max-h-[100vh]">
        <div className=" 2xl:w-[45%] md:hidden ">
          <img
            src={image}
            alt="voyage-pro-"
            className="min-w-full max-h-full object-contain rounded-2xl"
          />
        </div>
        <div className="xs:w-full md:w-[80%] 2xl:w-[45%] xs:px-1 2xl:p-10 relative flex flex-col justify-between">
          <h1 className="xs:text-2xl 2xl:text-3xl font-semibold">VoyagePro</h1>
          <div className="md:w-full xs:w-full xl:w-full 2xl:w-[70%] xs:my-1">
            <div className="">
              <h1 className="xs:text-2xl 2xl:text-3xl font-semibold xs:my-2 2xl:my-5">
                Login to your account
              </h1>
              <p className="text-zinc-500 text-sm text-left">
                Login now to stay connected and continue to explore.
              </p>
            </div>
            <div className="xs:mt-4 xl:mt-5 2xl:mt-8">
              <div className="flex space-x-3 xs:py-2 2xl:py-2 items-center justify-center border-2 border-zinc-500 w-auto  rounded-lg">
                <span className="2xl:text-3xl xs:text-2xl">
                  <FcGoogle />
                </span>
                <span className=" xs:text-sm text-[16px] font-semibold">
                  Sign Up with Google
                </span>
              </div>
              <div className="flex justify-center items-center space-x-3 mx-auto xs:mt-5 md:mt-8  lg:mt-5 xl:mt-8 2xl:mt-12 ">
                <div className="h-[1px] 2xl:w-[25%] xl:w-[20%] xxs:w-[15%] xs:w-[15%] bg-zinc-400 "></div>
                <p className="uppercase text-sm text-center text-zinc-500">
                  or Continue with Email
                </p>
                <div className="h-[1px] xs:w-[15%] xxs:w-[15%] xl:w-[20%] 2xl:w-[25%] bg-zinc-400"></div>
              </div>
            </div>
            <form
              className="xs:mt-4 sm:mt-6 lg:mt-4 xl:mt-6 2xl:mt-12 w-full"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="">
                <label htmlFor="" className="text-zinc-500 text-sm ">
                  Email Address
                </label>
                <div
                  className={`flex bg-white items-center justify-evenly py-2 px-2 rounded-lg mt-2 ${
                    errors.email
                      ? "ring-2 ring-red"
                      : "focus-within:ring-2 focus-within:ring-blue"
                  }`}
                >
                  <input
                    type="email"
                    placeholder="Enter Email "
                    {...register("email")}
                    className=" text-sm outline-none w-[90%]  py-1"
                  />{" "}
                  <IoMail className="scale-150 text-zinc-500" />
                </div>
                {errors.email && (
                  <p className="text-red mt-3 text-sm">
                    {errors.email?.message}
                  </p>
                )}
              </div>
              <div className="lg:mt-2 2xl:mt-3">
                <label htmlFor="" className="text-zinc-500 text-sm ">
                  Password
                </label>
                <div
                  className={`flex bg-white items-center justify-evenly py-2 px-2 rounded-lg mt-2 ${
                    errors.password
                      ? "ring-2 ring-red"
                      : "focus-within:ring-2 focus-within:ring-blue"
                  }`}
                >
                  <input
                    type={passwordType}
                    {...register("password")}
                    className=" text-sm outline-none w-[90%]  py-1"
                    placeholder="Enter password "
                  />
                  <button
                    className="scale-150 text-zinc-500"
                    onClick={visiblePassword}
                  >
                    {passwordIcon}
                  </button>
                </div>
                {errors.password && (
                  <p className="text-red mt-3 text-sm">
                    {errors.password?.message}
                  </p>
                )}
                <div className="flex xs:mb-2 lg:my-4 2xl:my-6 justify-between">
                  <div className="flex space-x-2">
                    <input
                      type="checkbox"
                      name=""
                      id=""
                      className="h-5 w-5 accent-blue rounded"
                      {...register("terms")}
                    />
                    <p className="text-sm text-zinc-500">Remember me</p>
                  </div>{" "}
                  <Link
                    to="/forgot-password"
                    className="hover:underline text-sm text-zinc-500"
                  >
                    Forgot Password?
                  </Link>
                </div>
              </div>

              <div className=" xs:mt-3 md:mt-6 lg:mt-3 2xl:mt-6 flex flex-col">
                <button className="bg-blue/90 hover:bg-blue w-full  py-2 text-xl text-center rounded-lg text-white capitalize">
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
          <div className="flex  justify-between text-sm text-zinc-700 ">
            <p>Privacy Policy</p> <p>Copyright 2022</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
