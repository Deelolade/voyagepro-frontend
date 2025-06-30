

import React,{useState} from "react";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import ForgottenPassWordBreadCrumbs from "../../components/ForgottenPassWordBreadcrumbs";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const CreatePassword = () => {
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
    confirmPassword: yup.string().required().oneOf([yup.ref('password'),null],"Password don't match")
    
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
          <form onSubmit={handleSubmit(onSubmit)} className="bg-[#EAF2FF] p-6 rounded-xl xs:w-[90vw] 2xl:w-[30%] mx-auto ">
            <h1 className="text-xl font-semibold text-center">
              Create New Password
            </h1>
            <p className="mt-8 text-sm text-gray-500 text-center">
              Create a new password to securelyaccess your account.
            </p>
            <p className="text-sm text-gray-500 text-center">
                Make sure it's strong and easy for you to remember. 
            </p>
            <div className="mt-6">
                <label htmlFor="" className="text-gray-500 text-sm ">
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
                    className="scale-150 text-gray-500"
                    onClick={visiblePassword}
                  >
                    {passwordIcon}
                  </i>
                </div>
                      {errors.password && <p className='text-red-400 mt-3 text-sm'>{errors.password?.message}</p>}

              </div>
              <div className="mt-3">
                <label htmlFor="" className="text-gray-500 text-sm ">
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
                    className="scale-150 text-gray-500"
                    onClick={visiblePassword}
                  >
                    {passwordIcon}
                  </i>
                </div>
                      {errors.confirmPassword && <p className='text-red-400 mt-3 text-sm'>{errors.confirmPassword?.message}</p>}

              </div>
            <button className="bg-blue-600 hover:bg-blue-500 w-full mt-12 py-2 text-xl text-center rounded-lg text-white capitalize">
              Reset Password
            </button>
            <p className="text-center mt-7 text-gray-500 text-sm">
              Remember password?<Link to="/login" className="underline"> Login</Link>
            </p>
          </form>
        </div>
      </section>
    </>
  );
};

export default CreatePassword;
