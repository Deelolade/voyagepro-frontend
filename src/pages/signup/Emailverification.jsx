import React from "react";
import BreadCrumbs from "../../components/SignUpBreadCrumbs";
import { Link } from "react-router-dom";
import image from "../../images/voyage-pro-1.png";
import { BiArrowBack } from "react-icons/bi";
import OtpInput from "../../components/OTPInput";

const Emailverification = () => {
  return (
    <>
      <section className="flex h-screen justify-evenly md:px-5 lg:px-10 2xl:px-20  xs:px-0 xl:py-4  2xl:py-8 max-h-[100vh]">
        <div className="2xl:w-[45%] md:hidden ">
          <img
            src={image}
            alt="voyage-pro-"
            className="min-w-full max-h-full object-contain rounded-2xl"
          />
        </div>
        <div className="xs:w-full md:w-[70%] lg:w-[50%] 2xl:w-[45%] xxs: p-3 xs:p-5 2xl:p-10  relative flex  flex-col">
          <div className="">
            <BreadCrumbs />
          </div>

          <div className="flex items-center space-x-2 justify-start xs:mt-4 2xl:mt-12">
            <Link to="/signup" className="bg-white  xxs:p-1 xs:p-2 2xl:p-3 xs:rounded 2xl:rounded-lg">
              <BiArrowBack className=" xxs:scale-90 xs:scale-125 2xl:scale-150" />
            </Link>
            <p className="text-sm text-black md:hidden">Back</p>
          </div>
          <div className=" md:w-full xs:w-full xl:w-full 2xl:w-[70%]  flex justify-center items-center xxs:mt-4 xs:mt-10 md:mt-12 xl:mt-20 2xl:mt-36">
            <div className="">
              <p className="text-2xl text-center">Verification Code</p>
              <p className="xs:mt-0 2xl:mt-3 text-center  text-sm font-semibold text-zinc-800">
                Please enter the code sent to your email/phone to verify your
                identity and continue.{" "}
              </p>
              <div className=" xs:mt-4 2xl:mt-8 flex justify-center">
                <OtpInput lenght={4} />
              </div>
              <div >
                <p className=" text-center xs:mt-4 2xl:mt-8 font-light">Didn't get a code?<span className="underline"> Click to resend</span></p>
                <div className="mt-6 flex flex-col ">
                  <Link
                    to="/personal"
                    className="bg-blue/90 hover:bg-blue py-2 text-xl text-center rounded-lg text-white capitalize"
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
