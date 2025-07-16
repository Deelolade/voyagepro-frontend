import React from 'react'
import { BiArrowBack } from "react-icons/bi";
import ForgottenPassWordBreadCrumbs from "../../components/ForgottenPassWordBreadcrumbs";
import { Link } from 'react-router-dom';
const EmailSent = () => {
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
            to="/forgot-password"
            className="bg-white  xxs:p-1 xs:p-2 2xl:p-3 xs:rounded 2xl:rounded-lg"
          >
            <BiArrowBack className=" xxs:scale-90 xs:scale-125 2xl:scale-150" />
          </Link>
          <p className="text-sm text-black md:hidden">Back</p>
        </div>
        <div className="flex justify-center items-center h-[60vh]">
          <div className="bg-[#EAF2FF] p-6 rounded-xl xs:w-[90vw] 2xl:w-[491px] mx-auto justify-between flex flex-col  ">
            <div className="">
                <h1 className='text-2xl font-semibold text-center '>Email Sent</h1>
            <p className="text-zinc-500 mt-6 text-center text-sm">
                we have sent you and email at voyagePro@gmail.com,check your email and follow the instructions to reset your account password.
            </p>
            </div>
            <p className='mt-10 text-center text-sm'>
                Didn't recieve the email? <Link  to="/forgot-password"className='font-semibold'>Resend Email</Link>
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default EmailSent