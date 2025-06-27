import { useState } from "react";
import BreadCrumbs from "../../components/BreadCrumbs";
import { Link } from "react-router-dom";
import image from "../../images/voyage-pro-1.png";
import { FcGoogle } from "react-icons/fc";
import { IoMail } from "react-icons/io5";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const SignUp = () => {
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
  return (
    <>
      <section className="flex h-screen justify-evenly px-20  py-8">
        <div className="w-[45%] ">
          <img
            src={image}
            alt="voyage-pro-"
            className="min-w-full max-h-full object-contain rounded-2xl"
          />
        </div>
        <div className="w-[45%] p-10 relative flex  flex-col">
          <div className="">
            <BreadCrumbs />
          </div>
          <div className="w-[70%]">
            <div className="mt-28">
              <p className="text-gray-500 text-sm">Step 1/3</p>
              <h1 className="text-4xl font-semibold my-5">Create an account</h1>
              <p className="text-gray-500 text-sm text-center">
                sign up with VoyagePro and unlock opportunities to shape your
                future fun experiences.
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
            <div className="mt-12">
              <div className="">
                <label htmlFor="" className="text-gray-500 text-sm ">
                  Email Address
                </label>
                <div className="flex bg-white items-center justify-evenly py-2 px-2 rounded-lg mt-2">
                  <input
                    type="email"
                    placeholder="Enter Email "
                    className=" text-sm outline-none w-[90%]  py-1"
                  />{" "}
                  <IoMail className="scale-150 text-gray-500" />
                </div>
              </div>
              <div className="mt-3">
                <label htmlFor="" className="text-gray-500 text-sm ">
                  Password
                </label>
                <div className="flex bg-white items-center justify-evenly py-2 px-2 rounded-lg mt-2">
                  <input
                    type={passwordType}
                    className=" text-sm outline-none w-[90%]  py-1"
                    placeholder="Password (min.8 character)"
                  />
                  <button
                    className="scale-150 text-gray-500"
                    onClick={visiblePassword}
                  >
                    {passwordIcon}
                  </button>
                </div>
              </div>

              <div className=" mt-6 flex flex-col">
                <Link
                  to="/verify-email"
                  className="bg-blue-600 hover:bg-blue-500 w-full  py-2 text-xl text-center rounded-lg text-white capitalize"
                >
                  continue
                </Link>
                <p className="text-black text-sm mt-3">
                  already have an account ?{" "}
                  <span className="underline ">Login</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignUp;
