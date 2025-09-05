import { FaRegBell, FaRegUserCircle } from 'react-icons/fa'
import { PiSquaresFourBold } from "react-icons/pi";
import { BiArrowBack } from "react-icons/bi";
import { FaPlus, FaChevronDown } from "react-icons/fa6";
import { Link } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';


const Bookings = () => {
  const API_URL = import.meta.env.VITE_API_URL;
  const token = localStorage.getItem("token");
  const getAllBookings = async(token)=>{
    const res = await axios.get(`${API_URL}/admin/getAllBooking`,{
      headers:{
        Authorization: `Bearer ${token}`
      }
    })
    console.log(res.data);
    return res.data;
  }
  const {data: bookings, isLoading, isError} = useQuery({
    queryKey: ['bookings',token],
    queryFn: ()=>getAllBookings(token)
  })
  return (
    <section className="py-6 px-4 max-h-screen ">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-3 justify-between items-center">
          <div />
          <h2 className='text-3xl font-semibold text-center'>Recent Bookings </h2>
          <div className="flex space-x-6 items-center justify-end ">
            <span><PiSquaresFourBold className='text-2xl ' /></span>
            <span><FaRegBell className='text-2xl ' /></span>
            <span>< FaRegUserCircle className="scale-150 text-2xl" /></span>            
          </div>
          <Link to="/dashboard" className=" bg-white w-9 h-9 rounded-md flex items-center justify-center mt-2">
            <span><BiArrowBack className='text-2xl ' /></span>
          </Link>
        </div>
        <div className="mt-8 flex justify-between items-center ">
          <Link to='/package' className="bg-blue flex space-x-5 items-center py-3 px-4 rounded-lg">
            <span><FaPlus className='text-2xl ' /></span>
            <span>Add Package</span>
          </Link>
          <div className=" flex  justify-center space-x-4">
            <button className='bg-purple-400 px-3 py-2 rounded-lg'>Filter</button>
            <p className='flex space-x-2 items-center'><span>Sort By</span> <span><FaChevronDown/></span></p>
          </div>
        </div>
        <div className=" border border-darkGray/50 rounded-lg px-6 py-6 mt-12">
          <div className="grid grid-cols-4 gap-3 border-b pb-2 border-darkGray/50 z-10 place-items-center">
            <h5 className="text-xl font-medium">Package</h5>
            <h5 className="text-xl font-medium">Status</h5>
            <h5 className="text-xl font-medium">Date</h5>
            <h5 className="text-xl font-medium">Updates</h5>
          </div>
          <div className="h-96 overflow-y-auto scrollbar-hide py-2">
            {
              bookings?.length > 0 ?
              bookings.map((pkg, idx) => {
                return (
                  <div className="grid grid-cols-4 space-y-8 items-center" key={idx}>
                    <p className='text-center text-sm'>{pkg.packageName}</p>
                    <div className="flex justify-center items-center">
                      <p className={`flex items-center space-x-4 text-center px-3 py-2 rounded-md text-darkGray  ${pkg.status === "confirmed" ? "bg-green":pkg.status === "pending" ?"bg-lightorange":"bg-yellow-300" }`}>{pkg.status}
                        <span className='ms-3'><FaChevronDown /></span>
                      </p>
                    </div>
                    <p className='text-center'>{pkg.date}</p>
                    <p className='text-center'>{pkg.update}</p>
                  </div>
                )
              }) : <p className='text-center'>No bookings found</p> 
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default Bookings
