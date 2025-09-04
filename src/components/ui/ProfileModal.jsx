import  { useState } from 'react'
import { Button, Dialog, DialogPanel,  } from '@headlessui/react'
import { toast } from 'react-toastify';
import { X, Trash2 } from 'lucide-react';
const ProfileModal = ({isOpen, onClose, user}) => {
    console.log(user)
    return (
        <>
            <Dialog open={isOpen} as="div" className="relative z-10 focus:outline-none" onClose={onClose}>
                <div className="fixed inset-0 z-30 w-screen overflow-y-auto bg-black/20 backdrop-blur-sm">
                    <div className=" absolute right-10 top-10">
                        <X className='scale-150 text-white' onClick={onClose} />
                    </div>
                    <div className="">
                        {/* {user} */}
                    </div>
                         
                </div>
            </Dialog>
        </>
    )
}

export default ProfileModal
