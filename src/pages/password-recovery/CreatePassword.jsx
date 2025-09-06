

import { useState } from "react";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import ForgottenPassWordBreadCrumbs from "../../components/ForgottenPassWordBreadcrumbs";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import OtpInput from "../../components/OTPInput";
import { getErrorMessage } from "../../helpers/errorMessage";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const CreatePassword = () => {
  const location = useLocation();
  const API_URL = import.meta.env.VITE_API_URL;
  const [otpValue, setOtpValue] = useState("");
  const email = location.state?.email || localStorage.getItem("resetEmail");
  console.log("Email passed from previous page:", email);
  const handleOtpChange = (value) => {
    setOtpValue(value);
  };
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
  const navigate = useNavigate();
  const ValidationSchema = yup.object().shape({
    password: yup.string().required().min(4).max(20),
    confirmPassword: yup.string().required().oneOf([yup.ref('password'), null], "Password don't match")
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(ValidationSchema),
  });
  const onSubmit = async (data) => {
    const payload = {
      email: email,
      otp: otpValue,
      newPassword: data.confirmPassword,
    };
    try {
      const res = await axios.post(`${API_URL}/auth/reset-password`, payload);
      toast.success("Email verified successfully!");
      navigate("/login");
    } catch (err) {
      toast.error(err.response.data.error || getErrorMessage(err) || "OTP verification failed");
    }
  };

  return (
    <>
      <section className=" 2xl:p-20 px-3 md:px-5 lg:px-10">
        <div className="flex flex-col lg:flex-row justify-between items-center   lg:w-[70%] 2xl:w-[64%]">
          <h1 className="mr-auto md:mr-0 text-sm font-semibold">VoyagePro</h1>
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
          className="flex justify-center items-center">
          <form onSubmit={handleSubmit(onSubmit)} className="bg-[#EAF2FF] p-6 rounded-xl w-[95vw] md:w-[491px] mx-auto ">
            <h1 className="text-xl font-semibold text-center">
              Create New Password
            </h1>
            <p className="mt-8 text-sm text-zinc-500 text-center">
              Create a new password to securely access your account.
            </p>
            <p className="text-sm text-zinc-500 text-center">
              Make sure it's strong and easy for you to remember.
            </p>
            <div className="mt-6 mx-auto flex justify-center">
              <OtpInput onOtpChange={handleOtpChange} />
            </div>
            <div className="mt-6">
              <label htmlFor="" className="text-zinc-500 text-sm ">
                New Password
              </label>
              <div className={`flex bg-white items-center justify-evenly py-2 px-2 rounded-lg mt-2 `}>

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
            <div className="mt-3">
              <label htmlFor="" className="text-zinc-500 text-sm ">
                Confirm Password
              </label>
              <div className={`flex bg-white items-center justify-evenly py-2 px-2 rounded-lg mt-2 `}>

                <input
                  type={passwordType}
                  {...register('confirmPassword')}
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
              {errors.confirmPassword && <p className='text-red mt-3 text-sm'>{errors.confirmPassword?.message}</p>}

            </div>
            <button className="bg-blue hover:bg-blue/90 w-full mt-12 py-2 text-xl text-center rounded-lg text-white capitalize">
              Reset Password
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

export default CreatePassword;
