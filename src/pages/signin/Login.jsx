import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import image from "../../images/voyagepro-login.png";
import { FcGoogle } from "react-icons/fc";
import { IoMail } from "react-icons/io5";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "react-toastify";
import axios from "axios";
import { signInSuccess } from "../../redux/users/userSlice";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";
import { getErrorMessage } from "../../helpers/errorMessage";

const Login = () => {
  const dispatch = useDispatch();
  const API_URL = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();
   const [showPassword, setShowPassword] = useState(false);

    const togglePassword = (e) => {
      e.preventDefault();
    setShowPassword((prev) => !prev);
  };

  const ValidationSchema = yup.object().shape({
    email: yup.string().email().required("Incorrect Email"),
    password: yup
      .string()
      .required()
      .min(4)
      .max(20)
      .required("Please Enter correct Password"),
    rememberMe: yup.bool(),
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
      const { rememberMe, ...payload } = data;
      const res = await axios.post(`${API_URL}/auth`, payload);
      if (res.data.redirect === "/verify-otp") {
        toast.info(res.data.message);
        navigate("/verify-otp", { state: { email } });
        return;
      }
      toast.success(res.data.message || "Logged In  successfully!");
      console.log(res.data);
      dispatch(signInSuccess(res.data));
      localStorage.setItem("token", res.data.token); 
      navigate("/dashboard");
    } catch (error) {
      toast.error(error.response.data.error || getErrorMessage(error) || "Login failed. Please try again.");
      console.error("Error during signup:", error.response.data.error);
    }
  };
  return (
    <>
      <section className="flex max-h-screen justify-evenly xs:px-3 md:px-5 lg:px-10 lg:gap-10 lg:py-8 xl:py-0 xl:px-10  2xl:px-20  ">
        <motion.div
        initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
         className=" 2xl:w-[50%] hidden min-h-[900px] lg:block lg:w-[50%] ">
          <img
            src={image}
            alt="voyage-pro-image"
            className="min-w-full max-h-full object-contain rounded-2xl"
          />
        </motion.div>
        <motion.div 
        initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
        className="xs:w-full xxs:px-5 xxs:py-3 sm:px-8  md:w-[70%] md:py-8 lg:w-[50%] 2xl:w-[50%] 2xl:p-10 relative flex flex-col justify-between">
          <h1 className="text-sm md:text-sm font-semibold xxs:mb-6 lg:mb-0">VoyagePro</h1>
          <div className="2xl:w-[70%] ">
            <div className="">
              <h1 className="text-xl  md:text-3xl font-semibold xxs:my-2 2xl:my-5">
                Login 
              </h1>
              <p className="text-zinc-500 text-sm text-left">
                Login now to stay connected and continue to explore.
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
            <form
              className="xxs:mt-4 sm:mt-12 w-full"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="">
                <label htmlFor="" className="text-zinc-500 text-sm ">
                  Email Address
                </label>
                <div
                  className={`flex bg-white items-center justify-evenly py-2 px-2 rounded-lg mt-2 ${errors.email
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
              <div className="mt-3">
                <label htmlFor="" className="text-zinc-500 text-sm ">
                  Password
                </label>
                <div
                  className={`flex bg-white items-center justify-evenly py-2 px-2 rounded-lg mt-2 ${errors.password
                      ? "ring-2 ring-red"
                      : "focus-within:ring-2 focus-within:ring-blue"
                    }`}
                >
                  <input
                    type={showPassword ? "text" : "password"}
                    {...register("password")}
                    className=" text-sm outline-none w-[90%]  py-1"
                    placeholder="Enter password "
                  />
                  <button
                    className="scale-150 text-zinc-500"
                    onClick={togglePassword}
                  >
                   {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
                {errors.password && (
                  <p className="text-red mt-3 text-sm">
                    {errors.password?.message}
                  </p>
                )}
                <div className="flex xxs:my-4 2xl:my-6 justify-between">
                  <div className="flex space-x-2">
                    <input
                      type="checkbox"
                      name=""
                      id=""
                      className="h-5 w-5 accent-blue rounded"
                      {...register("rememberMe")}
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

              <div className=" xxs:mt-3 md:mt-6 lg:mt-3 2xl:mt-6 flex flex-col">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9,}}
                 className="bg-blue/90 hover:bg-blue w-full  py-2 text-xl text-center rounded-lg text-white capitalize">
                  Login
                </motion.button>
                <p className="text-black text-sm mt-5 text-center">
                  Don't have an account ?{" "}
                  <Link to="/signup" className="underline ">
                    Sign Up
                  </Link>
                </p>
              </div>
            </form>
          </div>
          <div className="flex xxs:mt-6  justify-between text-sm text-zinc-700 ">
            <p>Privacy Policy</p> <p>Copyright 2022</p>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default Login;
