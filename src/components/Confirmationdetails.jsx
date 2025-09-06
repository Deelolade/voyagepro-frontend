import { useEffect, useState } from "react";
import axios from "axios";
import mainImage from "../images/hero-image.png";
import { BiLogOut } from "react-icons/bi";
import { FaRegUserCircle } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { logOut } from '../redux/users/userSlice';
import { useNavigate } from 'react-router-dom';
const Confirmationdetails = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const API_URL = import.meta.env.VITE_API_URL;
    const [status, setStatus] = useState("Verifying payment...");

    const savedPayment = JSON.parse(localStorage.getItem("pendingPayment"));
    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const tx_ref = params.get("tx_ref");
        const statusFromUrl = params.get("status");
        if (!tx_ref) {
            setStatus(" Invalid payment reference.");
            return;
        }
        // Call backend to verify payment
        const verifyPayment = async () => {
            try {
                const res = await axios.post(`${API_URL}/payment/confirmPayment`, { tx_ref });
                console.log(res.data)
                if (res.data.status === "success"|| res.data.status === "successful") {
                    setStatus(" Payment confirmed! Check your email for details.");
                    console.log("Saved booking details:", savedPayment);
                    // localStorage.removeItem("pendingPayment"); 
                } else {
                    setStatus(" Payment not confirmed. Please contact support.");
                }
            } catch (err) {
                console.error(err);
                setStatus("Error verifying payment. Try again later.");
            }
        };

        // Only verify if status from Flutterwave says completed
        if (statusFromUrl === "completed" ||statusFromUrl === "successful") {
            verifyPayment();
        } else {
            setStatus("Payment not completed.");
        }
    }, []);
    return (
        <>
            <section className="  bg-confirm-pattern max-h-screen  bg-cover bg-no-repeat bg-center ">
                <div className="py-6 px-4 max-h-screen max-w-7xl mx-auto">
                    <div className="flex justify-between items-center">
                        <h2 className='text-sm font-semibold'>VoyagePro</h2>
                        <h2 className='text-xl md:text-2xl font-semibold'>Confirmation Details</h2>
                        <span>< FaRegUserCircle className="scale-150 md:text-2xl" /></span>
                    </div>
                    <div className="2xl:w-[50%] mx-auto mt-4 bg-white p-6 rounded-lg shadow-xl">
                        <div className=" ">
                            <img src={mainImage} alt="voyagepro booking confirmation image" className='h-52 w-full object-cover rounded-xl' />
                        </div>
                        <div className=" mt-3 space-y-2">
                            <h2 className='text-2xl font-semibold'>{savedPayment?.packageName}</h2>
                            <h2 className='text-xl font-semibold'>Confirmation package details</h2>
                            <p className='text-sm '><span className='font-bold me-4'>Date</span> {savedPayment?.travelDate}</p>
                            <p className='text-sm '><span className='font-bold me-4'>Guests</span> {savedPayment?.numberOfGuests}</p>
                            <p className='text-sm '><span className='font-bold me-4'>Payment</span> {status}</p>
                            <p className='text-sm '><span className='font-bold me-4'>Track</span> Travel</p>
                            <p className='text-sm '><span className='font-bold me-4'>Id Num</span> {savedPayment?.packageId}</p>
                            <p className='text-sm '><span className='font-bold me-4'>Total Price</span> #{savedPayment?.totalAmountPaid}</p>
                        </div>
                        <div className="px-12 flex flex-col mt-4 space-y-3">
                            <button className='bg-blue text-white py-3 text-lg rounded-lg' onClick={() => navigate("/packages")}>Book another package</button>
                            <button className='border border-blue text-blue py-3 text-lg rounded-lg' onClick={() => navigate("/dashboard")}>Back to home</button>
                            <button className='text-xl text-red flex  justify-center items-center ' onClick={() => dispatch(logOut)}> Logout  <BiLogOut className='text-4xl' /></button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Confirmationdetails
