import { Link, useLocation } from 'react-router-dom'
import { GoHomeFill } from "react-icons/go";
import {  RiSettings4Fill } from "react-icons/ri";
import { FaRegCaretSquareUp, FaRegUserCircle } from 'react-icons/fa';
import { LuClipboardList } from 'react-icons/lu';

const DashboardBottomBar = () => {
    const location = useLocation();
    return (
        <div className=" bg-white h-[10vh] xxs:h-[9vh] md:h-[9vh] fixed  bottom-0 w-[100vw] md:hidden text-black md:px-5 py-2  flex justify-between shadow-md">
            <div className="links w-[100vw] flex justify-evenly items-center  ">
                <Link to='/admin' className={`text-[12px]  md:text-[15px]  font-bold  text-center flex flex-col justify-center items-center`}>
                    <GoHomeFill className={`text-5xl   my-1 rounded-md me-3   hover:bg-gray-500 px-2 ${location.pathname === '/dashboard' ? 'bg-gray-500' : ''}`} />
                </Link>
                <Link to='/booking' className={`text-[12px]  md:text-[15px]  font-bold  text-center flex flex-col justify-center items-center`}>
                    <FaRegCaretSquareUp className={`text-5xl   my-1 rounded-md me-3   hover:bg-gray-500 px-2 ${location.pathname === '/browse-gigs' ? 'bg-gray-500' : ''}`} />
                </Link>
                <Link to='' className={`text-[12px]  md:text-[15px]  font-bold  text-center flex flex-col justify-center items-center`}>
                    <LuClipboardList className={`text-5xl  my-1 rounded-md me-3   hover:bg-gray-500 px-2 ${location.pathname === '/proposals' ? 'bg-gray-500' : ''}`} />
                </Link>
                <Link to='/blog' className={`text-[12px]  md:text-[15px]  font-bold  text-center flex flex-col justify-center items-center`}>
                    <RiSettings4Fill className={`text-5xl   my-1 rounded-md me-3   hover:bg-gray-500 px-2 ${location.pathname === '/chatroom' ? 'bg-gray-500' : ''}`} />
                </Link>
                <Link to='' className="user-profile text-black  flex justify-evenly items-center">
                    <span>< FaRegUserCircle className="scale-150 text-2xl" /></span>
                </Link>
            </div>
        </div>
    )
}

export default DashboardBottomBar
