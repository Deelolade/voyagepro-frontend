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

const ForgotPassword = () => {
  const navigate = useNavigate();
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
  const onSubmit = (data) => {
    console.log(data);
    // toast("Logged In  successfully !!");
    navigate("/email-sent")
  };
  return (
    <>
      <section className="xs:p-2 2xl:p-20">
        <div className="md:flex-col 2xl:flex justify-between items-center  md:w-full xl:w-[75%] 2xl:w-[65%] ">
          <h1 className="text-4xl font-semibold">VoyagePro</h1>
          <div className="md:mt-6 ">
            <ForgottenPassWordBreadCrumbs />
          </div>
        </div>
        <div className="flex items-center space-x-2 justify-start xs:mt-4 md:mt-6 xl:mt-2 2xl:mt-12">
          <Link
            to="/login"
            className="bg-white  xxs:p-1 xs:p-2 2xl:p-3 xs:rounded 2xl:rounded-lg"
          >
            <BiArrowBack className=" xxs:scale-90 xs:scale-125 2xl:scale-150" />
          </Link>
          <p className="text-sm text-black md:hidden">Back</p>
        </div>
        <div className="flex justify-center items-center h-[70vh]">
          <form onSubmit={handleSubmit(onSubmit)} className="bg-[#EAF2FF] p-6 rounded-xl xs:w-[90vw] 2xl:w-[491px] h-[420px] mx-auto ">
            <h1 className="text-xl font-semibold text-center xs:mt-4">
              Forgot Password
            </h1>
            <p className="mt-8 text-sm text-zinc-500 text-center">
              Enter your email, and we'll send you link to reset it and get back
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
        </div>
      </section>
    </>
  );
};

export default ForgotPassword;
