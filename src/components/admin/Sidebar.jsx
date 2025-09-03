import { BsThreeDotsVertical } from "react-icons/bs";
import { PiSquaresFourBold } from "react-icons/pi";
import { FaRegCaretSquareUp, FaRegUserCircle } from "react-icons/fa";
import { RiSettings4Fill } from "react-icons/ri";
import { LuClipboardList } from "react-icons/lu";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const currentUser = useSelector(state => state.user.currentUser)

  console.log(currentUser)
  return (
    <div className='bg-white h-screen shadow-md rounded-lg p-6  flex flex-col justify-between'>
      <div className="">
        <h3 className='text-3xl font-semibold mt-3'>VoyagePro</h3>
        <ul className='mt-12'>
          <Link to='/dashboard' className='w-full hover:bg-slate-200 p-3 rounded-lg my-2 flex items-center text-lg font-medium '><span className='scale-150 me-3 '><PiSquaresFourBold /></span> Dashboard</Link>
          <Link to="/booking" className='w-full hover:bg-slate-200 p-3 rounded-lg my-2 flex items-center text-lg font-medium'><span className='scale-150 me-3 '><FaRegCaretSquareUp /></span>Bookings</Link>
          <Link className='w-full hover:bg-slate-200 p-3 rounded-lg my-2 flex items-center text-lg font-medium'><span className='scale-150 me-3'><LuClipboardList /></span>Package Listings</Link>
          <Link to="/blog" className='w-full hover:bg-slate-200 p-3 rounded-lg my-2 flex items-center text-lg font-medium'><span className='scale-150 me-3'><RiSettings4Fill /></span>Blog Manager</Link>
          <li className='w-full hover:bg-slate-200 p-3 rounded-lg my-2 flex items-center text-lg font-medium'><span className='scale-150 me-3'><CgProfile /></span>Profile</li>
        </ul>
      </div>
      <div className=" flex items-center justify-between">
        <span>< FaRegUserCircle className="scale-150 text-2xl" /></span>
        <div className="">
          <h4 className='text-lg font-semibold'>{currentUser.firstname} {currentUser.lastname}</h4>
          <p className='text-sm text-zinc-500'>Admin</p>
        </div>
        <span className='scale-150'>
          <BsThreeDotsVertical />
        </span>
      </div>
    </div>
  )
}

export default Sidebar
