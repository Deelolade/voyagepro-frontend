import React from 'react'
import BreadCrumbs from '../../components/BreadCrumbs'
import { Link } from 'react-router-dom';
import image from "../../images/voyage-pro-1.png"


const PersonalInfo = () => {
  return (
    <>
    <section className='flex h-screen justify-around px-20  bg-red-100 py-8'>
    <div className="w-[45%] ">
          <img src={image} alt="voyage-pro-" className='min-w-full max-h-full object-contain rounded-xl' />
        </div>
    <div className="w-[45%] bg-blue-100 p-10 relative">
      <div className="absolute left-[20%]">
      <BreadCrumbs/>
      </div>
      <div className="h-60"></div>
    <Link to="/verify-email">Back</Link>
    </div>
    </section>
    </>
   
  )
}

export default PersonalInfo