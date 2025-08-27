import { useEffect } from 'react'
import { BiArrowBack } from "react-icons/bi";
import ForgottenPassWordBreadCrumbs from "../../components/ForgottenPassWordBreadcrumbs";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
const EmailSent = () => {
  const location = useLocation();
  const email = location.state?.email || localStorage.getItem("resetEmail");
  const navigate = useNavigate();
  useEffect(() => {
    const redirectTimeout = setTimeout(() => {
      navigate('/create-password');
      () => clearTimeout(redirectTimeout);
    }, 5000);
  })
  return (
    <>
      <section className=" 2xl:p-20 px-3 md:px-5 lg:px-10">
        <div className="flex flex-col lg:flex-row justify-between items-center   lg:w-[70%] 2xl:w-[64%]">
          <h1 className="mr-auto md:mr-0 text-2xl xs:text-3xl 2xl:text-4xl font-semibold">VoyagePro</h1>
          <div className="mt-3 md:mt-6">
            <ForgottenPassWordBreadCrumbs />
          </div>
        </div>
        <div className="flex items-center space-x-2 justify-start mt-6 mb-3">
          <Link to="/forgot-password" className="bg-white p-2 lg:p-3 rounded 2xl:rounded-lg">
            <BiArrowBack className=" xxs:scale-125 2xl:scale-150" />
          </Link>
          <p className="text-sm text-black md:hidden">Back</p>
        </div>
        <motion.div
        initial={{ opacity: 0, y: -100 }}
  animate={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0, y: 100 }}
  transition={{ duration: 0.5 }}
         className="flex justify-center items-center ">
          <div className="bg-[#EAF2FF] p-6 rounded-xl w-[90vw] md:w-[491px] mx-auto justify-between flex flex-col  ">
            <div className="">
              <h1 className='text-2xl font-semibold text-center'>Email Sent</h1>
              <p className="text-zinc-500 mt-6 text-center text-sm">
                We’ve sent a one-time password (OTP) to <span>{email || 'voyagePro@gmail.com'}</span>. Please check your inbox and enter the code to continue.
              </p>
            </div>
            <p className='mt-10 text-center text-sm'>
              Didn't recieve the email? <Link to="/forgot-password" className='font-semibold'>Resend Email</Link>
            </p>
          </div>
        </motion.div>
      </section>
    </>
  )
}

export default EmailSent