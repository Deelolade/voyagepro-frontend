import { Link, useLocation } from 'react-router-dom'
import { GoHomeFill } from "react-icons/go";
import { RiSettings4Fill } from "react-icons/ri";
import { FaRegCaretSquareUp, FaRegUserCircle } from 'react-icons/fa';
import { LuClipboardList } from 'react-icons/lu';
import ProfileModal from './ui/ProfileModal';
import { useState } from 'react';
import { useSelector } from 'react-redux';

const DashboardBottomBar = () => {
    const location = useLocation();
    const currentUser = useSelector(state => state.user.currentUser)
    const [showUserProfile, setShowUserProfile] = useState(null);
    const handleProfile = () => {
        // console.log("Profile Clicked");
        setShowUserProfile(currentUser)
    }
    const handleCloseModal = () => {
        setShowUserProfile(null);
    };
    return (

        <div className=" bg-white h-[8vh] fixed  bottom-0 max-w-[100vw] md:hidden text-white md:px-5 py-2  flex justify-between shadow-md">
            <div className="links w-[100vw] flex justify-evenly items-center text-black ">
                <Link to='/dashboard' className={`text-[12px]  md:text-[15px]  font-bold  text-center flex flex-col justify-center items-center`}>
                    <GoHomeFill className={`text-5xl   my-1 rounded-md me-3   hover:bg-gray-500 px-2 ${location.pathname === '/dashboard' ? 'bg-zinc-200' : ''}`} />
                </Link>
                <Link to='/bookings' className={`text-[12px]  md:text-[15px]  font-bold  text-center flex flex-col justify-center items-center`}>
                    <FaRegCaretSquareUp className={`text-5xl   my-1 rounded-md me-3   hover:bg-gray-500 px-2 ${location.pathname === '/bookings' ? 'bg-zinc-200' : ''}`} />
                </Link>
                <Link to='/packages' className={`text-[12px]  md:text-[15px]  font-bold  text-center flex flex-col justify-center items-center`}>
                    <LuClipboardList className={`text-5xl  my-1 rounded-md me-3   hover:bg-gray-500 px-2 ${location.pathname === '/packages' ? 'bg-zinc-200' : ''}`} />
                </Link>
                {/* <Link to='' className={`text-[12px]  md:text-[15px]  font-bold  text-center flex flex-col justify-center items-center`}>
                    <RiSettings4Fill className={`text-5xl   my-1 rounded-md me-3   hover:bg-gray-500 px-2`} />
                </Link> */}
                <button onClick={() => handleProfile(currentUser)} className="user-profile text-black flex justify-evenly items-center">
                    < FaRegUserCircle className="scale-150 text-2xl" />
                </button>
            </div>
            {showUserProfile && (
                <ProfileModal
                    isOpen={!!showUserProfile}
                    onClose={handleCloseModal}
                    user={currentUser}
                />
            )}
        </div>

    )
}

export default DashboardBottomBar
