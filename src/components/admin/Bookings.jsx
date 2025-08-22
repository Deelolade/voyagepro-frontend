import { Link } from 'react-router-dom'

const Bookings = () => {
  return (
    <div>
                <Link to='/admin' className='w-full hover:bg-slate-200 p-3 rounded-lg my-2 flex items-center text-lg font-medium '>Dashboard</Link>
                Recent Bookings
      
    </div>
  )
}

export default Bookings
