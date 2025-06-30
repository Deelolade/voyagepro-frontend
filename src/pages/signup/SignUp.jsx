import { useState } from "react";
import BreadCrumbs from "../../components/BreadCrumbs";
import { Link } from "react-router-dom";
import image from "../../images/voyage-pro-1.png";
import { FcGoogle } from "react-icons/fc";
import { IoMail } from "react-icons/io5";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import {useForm} from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useNavigate } from "react-router-dom";


const SignUp = () => {
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
    const onSubmit = (data) => {
        console.log(data)
        navigate("/verify-email")
    }
  return (
    <>
      <section className="flex h-screen justify-evenly md:px-5 lg:px-10 2xl:px-20  xs:px-0 xl:py-4  2xl:py-8 max-h-[100vh]">
        <div className="2xl:w-[45%] md:hidden  ">
          <img
            src={image}
            alt="voyage-pro-"
            className="min-w-full max-h-full 2xl:object-contain  rounded-2xl"
          />
        </div>
        <div className="xs:w-full md:w-[70%] lg:w-[50%] 2xl:w-[45%] 2xl:p-10 xs:p-5 relative flex  flex-col">
          <div className="">
            <BreadCrumbs />
          </div>
          <div className=" md:w-full xs:w-full xl:w-full 2xl:w-[70%]">
            <div className=" xs:mt-5 md:mt-12 lg:mt-1 xl:mt-12  2xl:mt-28">
              <p className="text-gray-500 text-sm">Step 1/3</p>
              <h1 className="2xl:text-4xl xs:text-3xl font-semibold xs:my-2 lg:my-2 2xl:my-5  ">Create an account</h1>
              <p className="text-gray-500 text-sm 2xl:text-center xs:text-left">
                sign up with VoyagePro and unlock opportunities to shape your future fun experiences.
              </p>
            </div>
            <div className=" xs:mt-4 xl:mt-5 2xl:mt-8">
              <div className="flex space-x-3 xs:py-2 2xl:py-2 items-center justify-center border-2 border-gray-500 w-auto  rounded-lg">
                <span className="2xl:text-3xl xs:text-2xl">
                  <FcGoogle />
                </span>
                <span className=" xs:text-sm text-[16px] font-semibold">
                  Sign Up with Google
                </span>
              </div>
              <div className="flex justify-center items-center space-x-3 mx-auto  lg:mt-6 xl:mt-8 2xl:mt-12 ">
                <div className="h-[1px] 2xl:w-[25%] xs:w-[15%] bg-gray-400 "></div>
                <p className="uppercase text-sm text-gray-500">
                  or Continue with Email
                </p>
                <div className="h-[1px] w-[25%] xs:w-[15%] bg-gray-400"></div>
              </div>
            </div>
            <form onSubmit ={handleSubmit(onSubmit)} className=" xs:my-6 lg:mt-4 xl:mt-8 2xl:mt-12 ">
              <div className="">
                <label htmlFor="" className="text-gray-500 text-sm ">
                  Email Address
                </label>
                <div className={`flex bg-white items-center justify-evenly py-2 px-2 rounded-lg mt-2 ${errors.email ? "ring-2 ring-red-500" : "focus-within:ring-2 focus-within:ring-blue-500"}`}>
                  <input
                    type="email"
                    {...register('email')}
                    placeholder="Enter Email "
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
                    placeholder="Password (min.8 character)"
                  />
                  <i
                    className="scale-150 text-gray-500"
                    onClick={visiblePassword}
                  >
                    {passwordIcon}
                  </i>
                </div>
                      {errors.password && <p className='text-red-400 mt-3 text-sm'>{errors.password?.message}</p>}

              </div>

              <div className=" mt-6 flex flex-col">
                <button 
                  className="bg-blue-600 hover:bg-blue-500 w-full  font-semibold py-2 text-xl text-center rounded-lg text-white capitalize"
                >
                  Login
                </button>
                <p className="text-black text-sm mt-3">
                  already have an account ?{" "}
                  <Link to="/login" className="underline ">Login</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignUp;
