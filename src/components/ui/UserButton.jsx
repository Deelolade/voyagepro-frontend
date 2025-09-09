import { useState } from 'react'
import ProfileModal from './ProfileModal'
import { FaRegUserCircle } from 'react-icons/fa'
import { useSelector } from 'react-redux'

const UserButton = () => {
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
        <div>
            <button onClick={() => handleProfile(currentUser)} className="user-profile text-black flex justify-evenly items-center">
                < FaRegUserCircle className="scale-150 text-2xl" />
            </button>
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

export default UserButton
