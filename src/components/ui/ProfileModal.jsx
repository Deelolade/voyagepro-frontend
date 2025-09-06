import { useRef, useState } from 'react'
import { Button, Dialog, DialogPanel, } from '@headlessui/react'
import { toast } from 'react-toastify';
import { X, Trash2, Upload } from 'lucide-react';
import { FaRegUserCircle } from 'react-icons/fa';
import { BiLogOut } from 'react-icons/bi';
import { logOut } from '../../redux/users/userSlice';
const ProfileModal = ({ isOpen, onClose, user }) => {
    console.log(user)
    const fileInputRef = useRef(null)
    return (
        <>
            <Dialog open={isOpen} onClose={onClose} className="relative z-50 focus:outline-none">
                <div className="fixed inset-0 z-30 w-screen h-screen overflow-y-auto bg-black/30 backdrop-blur-sm flex justify-center items-center">
                    {/* Close button */}
                    <div className="absolute right-6 top-6">
                        <X className="scale-150 text-white cursor-pointer" onClick={onClose} />
                    </div>

                    {/* Modal content */}
                    <div className="bg-white rounded-xl shadow-xl p-6 w-96 flex flex-col items-center space-y-4 relative">
                        {/* Profile image / icon */}
                        <div className="flex flex-col items-center relative">
                            {user?.profileImage ? (
                                <img
                                    src={user.profileImage}
                                    alt={user.fullName || "Profile"}
                                    className="w-32 h-32 rounded-full object-cover border-2 border-gray-200"
                                />
                            ) : (
                                <FaRegUserCircle className="text-gray-400 text-8xl" />
                            )}

                            {/* Hidden file input */}
                            <input
                                ref={fileInputRef}
                                type="file"
                                accept="image/*"
                                className="hidden"
                            // onChange={handleImageChange}
                            />

                            {/* Only icon triggers file picker */}
                            <button
                                type="button"
                                onClick={() => fileInputRef.current?.click()}
                                className="absolute   bg-blue-50 text-blue-700 p-2 rounded-full hover:bg-blue-100 transition-colors"
                            >
                                <Upload className="w-5 h-5" />
                            </button>
                        </div>

                        {/* User info */}
                        <div className="text-center">
                            <h2 className="text-2xl font-semibold">{user?.fullName || "John Doe"}</h2>
                            <p className="text-gray-600">{user?.email || "user@example.com"}</p>
                        </div>

                        {/* Action buttons */}
                        <div className="w-full mt-4 flex flex-col space-y-3">
                            <button
                                className="bg-blue text-white py-2 rounded-lg w-full"
                                onClick={() => alert("Edit profile clicked")}
                            >
                                Edit Profile
                            </button>
                            <button
                                className="border border-red text-red py-2 rounded-lg flex justify-center items-center w-full"
                                onClick={() => dispatch(logOut())}
                            >
                                Logout <BiLogOut className="ml-2 text-xl" />
                            </button>
                        </div>
                    </div>
                </div>
            </Dialog>
        </>
    )
}

export default ProfileModal
