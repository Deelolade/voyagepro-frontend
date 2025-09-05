import profileImage from "../images/landing-image-1.png";
import { FaRegUserCircle } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import { PiSquaresFourBold } from "react-icons/pi";
import { FaRegCaretSquareUp } from "react-icons/fa";
import { RiSettings4Fill } from "react-icons/ri";
import { LuClipboardList } from "react-icons/lu";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const DashboardSidebar = () => {
  const currentUser =  useSelector((state) => state.user.currentUser);
  return (
    <div className='bg-white h-screen shadow-md rounded-lg p-6  flex flex-col justify-between'>
      <div className="">
        <h3 className='2xl:text-2xl font-semibold mt-3'>VoyagePro</h3>
        <ul className='mt-12'>
            <Link to='' className='w-full hover:bg-slate-200 p-3 rounded-lg my-2 flex items-center 2xl:text-lg font-medium '><span className='scale-150 me-3 '><PiSquaresFourBold/></span> Dashboard</Link>
            <Link to="/bookings" className='w-full hover:bg-slate-200 p-3 rounded-lg my-2 flex items-center 2xl:text-lg font-medium'><span className='scale-150 me-3 '><FaRegCaretSquareUp/></span>Bookings</Link>
            <Link to='/packages' className='w-full hover:bg-slate-200 p-3 rounded-lg my-2 flex items-center 2xl:text-lg font-medium'><span className='scale-150 me-3'><LuClipboardList/></span>Package Listings</Link>
            {/* <li className='w-full hover:bg-slate-200 p-3 rounded-lg my-2 flex items-center text-lg font-medium'><span className='scale-150 me-3'><RiSettings4Fill/></span>Settings</li> */}
        </ul>
      </div>
      <div className=" flex items-center justify-between ">
        <div className="flex items-center space-x-5">
          <span>< FaRegUserCircle className="scale-150 text-2xl"/></span>
            <div className="">
                <h4 className='text-sm font-semibold'>{`${currentUser?.firstname} ${currentUser?.lastname}  `}</h4>
            <p className='text-sm text-zinc-500'>Traveler</p>
            </div>
        </div>
            <span className='scale-150'>
                <BsThreeDotsVertical/>
            </span>
      </div>
    </div>
  )
}

export default DashboardSidebar
