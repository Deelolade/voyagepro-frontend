import { useEffect, useState } from "react";
import { FaRegBell, FaRegUserCircle } from "react-icons/fa";
import { RiSearchLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import image from "../images/dashboard-image-three.webp";
import { useDispatch } from "react-redux";
import axios from "axios";
import { selectPackage } from "../redux/packages/packageSlice";
import { IoFilter } from "react-icons/io5";
import Spinner from "../components/ui/Spinner";
import imageOne from "../images/edit-package-one.webp";
import { motion } from "framer-motion";
import UserButton from "../components/ui/UserButton";

const PackageListing = () => {
  const dispatch = useDispatch();
  const API_URL = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [packages, setPackages] = useState([]);
  const [showSidebar, setShowSidebar] = useState(false);
  const [openMenuId, setOpenMenuId] = useState(null);
  const [search, setSearch] = useState("");
  const [isBooked, setIsBooked] = useState(false);
  const [location, setLocation] = useState("");
  const [sortBy, setSortBy] = useState("createdAt");


  // confirm bookings 
  // const packageId = pkg._id
  // useEffect(() => {
  //   const booked = JSON.parse(localStorage.getItem("bookedPackages")) || [];
  //   if (booked.includes(packageId)) {
  //     setIsBooked(true);
  //   }
  // }, [packageId]);

  useEffect(() => {
    const fetchPackages = async () => {
      try {
        setLoading(true)
        const res = await axios.get(`${API_URL}/packages`, {
          params: {
            search,
            location,
            sortBy
          }
        })
        localStorage.setItem("allPackages", JSON.stringify(res.data))
        setPackages(res.data)
      } catch (error) {
        setLoading(false)
        const cachedPackages = localStorage.getItem("allPackages")
        if (cachedPackages) {
          setPackages(JSON.parse(cachedPackages))
        }
      } finally {
        setLoading(false)
      }
    }
    fetchPackages()
  }, [search, location, sortBy])

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    }
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])

  if (isMobile) {
    return (
      <>
        <div className="flex flex-col items-center justify-center h-screen bg-black text-white text-xl text-center p-6">
          <h1 className="text-3xl font-semibold">VoyagePro</h1>
          <p className="mt-3">🚫 This app is not available on mobile.
            Please use a laptop or larger screen.</p>
        </div>
      </>
    )
  }
  const handlePackage = (pkg) => {
    dispatch(selectPackage(pkg))
    navigate(`/packages/${pkg._id}`);
  };
  return (
    <>
      {loading && <Spinner />}
      <section id="packages" className="max-h-screen h-screen flex">
        <div className="max-w-6xl mx-auto flex justify-between ">
          {/* Main section */}
          <main className="max-w-6xl p-3 md:p-6 ">
            <div className=" flex justify-between items-center">
              <h3 className="text-2xl md:text-3xl font-semibold">Package Listing</h3>
              <UserButton/>
            </div>
            <div className="flex mt-4 justify-between items-center">
              <div className="flex w-[60%] bg-gray border border-zinc-500 rounded-xl md:py-1 px-3 items-center space-x-5">
                <span>
                  <RiSearchLine className="scale-150" />
                </span>
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full py-2 px-3 bg-gray outline-none"
                  placeholder="Search"
                />
              </div>
              <div className="flex space-x-6 items-center relative">
                <button
                  onClick={() => setShowSidebar((prev) => !prev)}
                  className="p-2 bg-darkGray/20 rounded-md my-3 flex items-center space-x-3"
                >
                  <span>Filter</span>
                  <IoFilter className="inline scale-110" />
                </button>

                <span>
                  <FaRegBell className="scale-150" />
                </span>

                {/* Dropdown Menu */}
                {showSidebar && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, x: 10 }}
                    animate={{ opacity: 1, y: 0, x: 0 }}
                    duration={{ duration: 0.5 }}
                    className="absolute top-full right-0 mt-2 w-60 bg-zinc-200 rounded-lg shadow-lg p-4 z-50">
                    {/* Location */}
                    <div className="mb-4">
                      <h5 className="font-semibold mb-2">Location</h5>
                      <input
                        type="text"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        placeholder="Enter city or country"
                        className="rounded-lg border border-zinc-500 text-black w-full py-2 px-3 outline-none"
                      />
                    </div>

                    {/* Sort By */}
                    <div>
                      <h5 className="font-semibold mb-2">Sort By</h5>
                      <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                        className="rounded-lg w-full py-2 px-3 outline-none"
                      >
                        <option value="createdAt">Newest</option>
                        <option value="price">Price</option>
                        <option value="duration">Duration</option>
                      </select>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
            <div className="mt-6  bg-white rounded-xl w-[1200px]">
              {/* Header */}
              <div className="grid grid-cols-5 py-4 px-5  me-auto font-semibold text-lg capitalize text-center shadow-sm">
                <div />
                <p>Name</p>
                <p>Price</p>
                <p>Destination</p>
                <p>Action</p>
              </div>
              {/* Body */}
              <div className=" max-h-[70vh] rounded-b-xl px-2 py-3  overflow-y-auto scrollbar-hide text-center">
                {packages.length > 0 ? (
                  packages.map((pkg, idx) => (
                    <div
                      key={idx}
                      className="grid grid-cols-5 items-center gap-4 py-4 px-5  ms-auto "
                    >
                      <img
                        src={pkg.images[0] || image}
                        alt={pkg.title || "Package image"}
                        onError={(e)=> {e.currentTarget.src = imageOne}}
                        className="h-28 w-full object-cover rounded-lg"
                      />
                      <p className="text-sm text-zinc-500">{pkg?.title}</p>
                      <p className="text-sm text-zinc-500"> #{pkg?.pricePerAdult?.toLocaleString()}</p>
                      <p className="text-sm text-zinc-500">{pkg?.location?.city}</p>
                      <div className=" flex flex-col items-center justify-center space-y-2">
                        <button
                          className="bg-blue px-3 py-2  rounded-md text-sm text-white"
                          onClick={() => setOpenMenuId(openMenuId === pkg._id ? null : pkg._id)}
                        >
                          {openMenuId === pkg._id ? "Close" : "View More"}
                        </button>
                      </div>
                      {openMenuId === pkg._id && (
                        <motion.div
                          initial={{ opacity: 0, y: 0 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5 }}
                          className="col-span-5 bg-white shadow-lg rounded-sm p-4 mt-2 text-left space-y-3">
                          <h3 className="text-lg font-semibold">{pkg.title}</h3>
                          <p className="text-sm text-gray-600">{pkg.tagline}</p>

                          <div className="grid grid-cols-2 gap-3 text-sm text-gray-500">
                            <p><strong>Duration:</strong> {pkg.duration}</p>
                            <p><strong>Location:</strong> {pkg.location.city}, {pkg.location.country}</p>
                            <p><strong>Accommodation:</strong> {pkg.accommodation.roomType} - {pkg.accommodation.resortType}</p>
                            <p><strong>Price:</strong> #{pkg.pricePerAdult.toLocaleString()}</p>
                          </div>

                          <div>
                            <strong>What’s Included:</strong>
                            <ul className="list-disc list-inside text-sm">
                              {pkg.whatsIncluded.map((item, i) => <li key={i}>{item}</li>)}
                            </ul>
                          </div>

                          <div className="flex justify-end gap-3 pt-3">
                            <button onClick={() => handlePackage(pkg)} className="px-3 py-2 bg-blue text-white rounded-md text-sm">Book Now</button>
                          </div>
                        </motion.div>
                      )}
                    </div>
                  ))
                ) : (
                  <div className=" w-[100%] h-full flex justify-center items-center">
                    <div className="flex flex-col justify-center items-center">
                      <p className="text-center text-sm ">
                        No packages found.
                      </p>

                    </div>
                  </div>
                )}
              </div>
            </div>
          </main>
        </div>
      </section>
    </>
  );
};

export default PackageListing;
