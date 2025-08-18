import { useState } from "react";
import BreadCrumbs from "../../components/SignUpBreadCrumbs";
import { Link, useNavigate } from "react-router-dom";
import image from "../../images/voyage-pro-1.png";
import { BiArrowBack } from "react-icons/bi";
import OtpInput from "../../components/OTPInput";
import axios from "axios";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
const Emailverification = () => {
  const API_URL = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();
  const [otpValue, setOtpValue] = useState("");
  const email = useSelector((state) => state.user.currentUser?.email);
  const handleOtpChange = (value) => {
    setOtpValue(value); // This receives the joined OTP string
  };
  const handleSubmit = async(e) => {
    e.preventDefault();
    if (otpValue.length < 6) {
      toast.error("Please enter the full OTP");
      return;
    }
    try {
      const res = await axios.post(`${API_URL}/auth/verify-email`, { otp: otpValue, email });
      toast.success("Email verified successfully!");
      localStorage.setItem("token", token); // Store token in localStorage
      console.log("Login response:", res.data); 
      navigate("/personal"); // 👈 redirect after success
      const token = res.data.token;
    } catch (err) {
      toast.error(err.response?.data?.message || "OTP verification failed");
    }
  };
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
                <OtpInput lenght={4}  onOtpChange={handleOtpChange}/>
              </div>
              <div >
                <p className=" text-center xs:mt-4 2xl:mt-8 font-light">Didn't get a code?<span className="underline"> Click to resend</span></p>
                <div className="mt-6 flex flex-col ">
                  <button
                    onClick={handleSubmit}
                    className="bg-blue/90 hover:bg-blue py-2 text-xl text-center rounded-lg text-white capitalize"
                  >
                    Verify
                  </button>
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
