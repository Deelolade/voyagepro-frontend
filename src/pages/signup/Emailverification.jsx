import { useState } from "react";
import BreadCrumbs from "../../components/SignUpBreadCrumbs";
import { Link, useNavigate } from "react-router-dom";
import image from "../../images/voyage-pro-1.png";
import { BiArrowBack } from "react-icons/bi";
import OtpInput from "../../components/OTPInput";
import axios from "axios";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { getErrorMessage } from "../../helpers/errorMessage";
import { signInSuccess } from "../../redux/users/userSlice";
import { motion } from "framer-motion";

const Emailverification = () => {
  const API_URL = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const [otpValue, setOtpValue] = useState("");
  const email = useSelector((state) => state.user.currentUser?.email);
  const handleOtpChange = (value) => {
    setOtpValue(value); // This receives the joined OTP string
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (otpValue.length < 6) {
      toast.error("Please enter the full OTP");
      return;
    }
    console.log(otpValue);
    try {
      const res = await axios.post(`${API_URL}/auth/verify-email`, { otp: otpValue, email });
      console.log(res.data);
      const { user, token } = res.data;

      toast.success("Email verified successfully!");

      dispatch(signInSuccess({ user, token }));

      localStorage.setItem("token", token);

      console.log("Login response:", res.data);
      navigate("/personal");
    } catch (err) {
      toast.error(getErrorMessage(err) || "OTP verification failed");
    }
  };
  return (
    <>
      <section className="flex max-h-screen justify-evenly xs:px-3 md:px-5 lg:px-10 lg:gap-10 lg:py-8 xl:py-0 xl:px-10  2xl:px-20 ">
        <motion.div
        initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
         className="2xl:w-[50%] min-h-[900px] hidden lg:block ">
          <img
            src={image}
            alt="voyage-pro-"
            className="min-w-full max-h-full object-contain rounded-2xl"
          />
        </motion.div>
         <div className="2xl:w-[50%] 2xl:p-10 relative flex  flex-col xxs:mt-6 xs:mt-8 px-4 max-w-[100%]">
          <div className="">
            <BreadCrumbs />
          </div>
          <div className="flex items-center space-x-2 justify-start mt-12">
            <Link to="/signup" className="bg-white p-2 lg:p-3 rounded 2xl:rounded-lg">
              <BiArrowBack className=" xxs:scale-125 2xl:scale-150" />
            </Link>
            <p className="text-sm text-black md:hidden">Back</p>
          </div>
          <motion.div 
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.5 }}
           className="2xl:w-[70%] flex justify-center items-center mt-10 xxs:mt-20 xs:mt-36">
            <div className="">
              <p className="text-2xl text-center">Verification Code</p>
              <p className="mt-3 text-center  text-sm font-semibold text-zinc-800">
                Please enter the code sent to <span className="underline">{email || "your email"}</span> to verify your
                identity and continue.{" "}
              </p>
              <div className=" mt-8 flex justify-center">
                <OtpInput  onOtpChange={handleOtpChange} />
              </div>
              <div >
                <p className=" text-center xs:mt-4 2xl:mt-8 font-light">Didn't get a code?<span className="underline" > Click to resend</span></p>
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
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Emailverification;
