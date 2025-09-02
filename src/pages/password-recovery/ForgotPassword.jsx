import React from "react";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import ForgottenPassWordBreadCrumbs from "../../components/ForgottenPassWordBreadcrumbs";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { IoMail } from "react-icons/io5";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";
import { getErrorMessage } from "../../helpers/errorMessage";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const API_URL = import.meta.env.VITE_API_URL;
  const ValidationSchema = yup.object().shape({
    email: yup.string().email().required("Enter Your correct mail"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(ValidationSchema),
  });
  const onSubmit = async (data) => {
    console.log(data);
    try {
      const res = await axios.post(`${API_URL}/auth/forgot-password `, data)
      toast.success(res.data.message || "Otp sent to your email!");
      console.log(res.data);
      localStorage.setItem("resetEmail", data.email);
      navigate("/otp-sent", { state: { email: data.email } });
    } catch (error) {
      toast.error( error.response.data.error || getErrorMessage(error) || "Error occurred during request");
    }
  };
  return (
    <>
      <section className=" 2xl:p-20 px-3 md:px-5 lg:px-10">
        <div className="flex flex-col lg:flex-row justify-between items-center   lg:w-[70%] 2xl:w-[64%]">
          <h1 className="mr-auto md:mr-0 text-2xl xs:text-3xl 2xl:text-4xl font-semibold">VoyagePro</h1>
          <div className="mt-3 md:mt-6">
            <ForgottenPassWordBreadCrumbs />
          </div>
        </div>
        <div className="flex items-center space-x-2 justify-start mt-6 mb-3">
          <Link to="/login" className="bg-white p-2 lg:p-3 rounded 2xl:rounded-lg">
            <BiArrowBack className=" xxs:scale-125 2xl:scale-150" />
          </Link>
          <p className="text-sm text-black md:hidden">Back</p>
        </div>
        <motion.div 
        initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.5 }}
        className="flex justify-center items-center ">
          <form onSubmit={handleSubmit(onSubmit)} className="bg-[#EAF2FF] p-6 rounded-xl w-[90vw] md:w-[491px] h-[420px] mx-auto">
            <h1 className="text-xl font-semibold text-center xs:mt-4">
              Forgot Password
            </h1>
            <p className="mt-8 text-sm text-zinc-500 text-center">
              Enter your email, and we'll send you a one-time password (OTP) to reset it and get back
              into your account
            </p>
            <div className=" mt-6">
              <label htmlFor="" className="text-zinc-500 text-sm text-left ">
                Email Address
              </label>
              <div
                className={`flex bg-white items-center justify-evenly py-2 px-2 rounded-lg mt-2`}
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
            <button className="bg-blue/90 hover:bg-blue w-full mt-12 py-2 text-xl text-center rounded-lg text-white capitalize">
              Continue
            </button>
            <p className="text-center mt-7 text-zinc-500 text-sm">
              Remember password?<Link to="/login" className="underline"> Login</Link>
            </p>
          </form>
        </motion.div>
      </section>
    </>
  );
};

export default ForgotPassword;
