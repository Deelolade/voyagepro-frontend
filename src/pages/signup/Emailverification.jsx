import React from "react";
import BreadCrumbs from "../../components/BreadCrumbs";
import { Link } from "react-router-dom";
import image from "../../images/voyage-pro-1.png";
import { BiArrowBack } from "react-icons/bi";
import OtpInput from "../../components/OTPInput";

const Emailverification = () => {
  return (
    <>
      <section className="flex h-screen justify-around px-20 py-8 max-h-[100vh]">
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

          <div className="flex items-center space-x-2 justify-start mt-12">
            <Link to="/signup" className="bg-white  p-3 rounded-lg">
              <BiArrowBack className="scale-150" />
            </Link>
            <p className="">Back</p>
          </div>
          <div className="w-[60%] flex justify-center items-center mt-36">
            <div className="">
              <p className="text-2xl text-center">Verification Code</p>
              <p className="mt-3 text-center  text-sm font-semibold text-gray-800">
                Please enter the code sent to your email/phone to verify your
                identity and continue.{" "}
              </p>
              <div className="mt-8 flex justify-center">
                <OtpInput lenght={4} />
              </div>
              <div >
                <p className=" text-center mt-8 font-light">Didn't get a code?<span className="underline"> Click to resend</span></p>
                <div className="mt-6 flex flex-col ">
                  <Link
                    to="/personal"
                    className="bg-blue-600 hover:bg-blue-500 py-2 text-xl text-center rounded-lg text-white capitalize"
                  >
                    Verify
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Emailverification;
