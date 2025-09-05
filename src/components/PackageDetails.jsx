import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FiCalendar } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { HiLightningBolt } from "react-icons/hi";
import { MdStarRate } from "react-icons/md";
import { LuNotebookPen } from "react-icons/lu";
import { motion } from "framer-motion";
import { FaRegUserCircle } from "react-icons/fa";
import dashboardImageTwo from "../images/dashboard-image-two.png";


const PackagesDetails = () => {
  const navigate = useNavigate();
  const currentUser = useSelector((state) => state.user.currentUser);
  const selectedPackage = useSelector((state) => state.package.selectedPackage);
  const handleClick = (packageId) => {
    !currentUser ? navigate('/signup') :
      navigate(`/packages/${packageId}/package-form`);
  }
  return (
    <>
      <section className="">
        <div className="h-screen  max-w-7xl mx-auto px-3 md:px-6 ">
          <div className="flex justify-between pb-4 items-center">
            <h3 className="text-sm font-semibold">Voyagepro</h3>
            <h3 className=" text-lg md:text-3xl font-semibold">Package Details</h3>
            <span>< FaRegUserCircle className="scale-150 text-2xl" /></span>

          </div>
          <div className="md:mt-2 flex gap-10 ">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.5 }}
              className=" hidden min-h-[900px] lg:block lg:w-[50%] ">
              <img
                src={selectedPackage?.image || dashboardImageTwo}
                alt={selectedPackage?.location.city}
                className="w-full h-full object-cover rounded-xl"
              />
            </motion.div>
            <div className=" w-[90vw] sm:w-[70vw] mx-auto lg:w-[50%]">
              <h3 className="text-xl md:text-2xl font-semibold">
                {selectedPackage?.title}
              </h3>
              <p className="text-lg md:text-xl mt-6">
                {selectedPackage?.tagline}
              </p>
              <div className="flex flex-col md:flex-row px-2  mt-2 justify-between gap-5">
                <div className=" md:border-r-2 border-zinc-400 flex space-x-5 pr-6 items-center">
                  <FiCalendar className="scale-[200%]" />
                  <p className="text-xl font-medium"> {selectedPackage?.duration}</p>
                </div>
                <div className="md:border-r-2 border-zinc-400 flex space-x-5 pr-6 items-center">
                  <LuNotebookPen className="scale-[200%]" />
                  <span className="flex md:flex-col items-center space-x-2">
                    <p className="text-xl font-medium">#{selectedPackage?.pricePerAdult?.toLocaleString()}</p>
                    <p className="text-sm font-light text-zinc-500 ">Per Adult</p>
                  </span>
                </div>
                <div className="flex space-x-5 pr-6 items-center">
                  <IoLocationOutline className="scale-[200%]" />
                  <span className="">
                    <p className="text-xl font-medium text-left">{selectedPackage.location.country} {selectedPackage.location.city}</p>
                    <p className="text-sm font-light text-zinc-500">
                      <span>{selectedPackage?.rating}, {selectedPackage?.totalBookings}</span> bookings
                    </p>
                  </span>
                </div>
              </div>
              <hr className="text-zinc-400 mt-3" />
              <h4 className="mt-2 text-2xl font-semibold">What's Included</h4>
              <div className=" grid grid-cols-2 gap-5 mt-2">
                {
                  selectedPackage.whatsIncluded.map((item, idx) => {
                    return (
                      <p className="flex  space-x-5 items-center " key={idx}>
                        <HiLightningBolt className="scale-150" />{" "}
                        <span>{item}</span>
                      </p>
                    )
                  })
                }
              </div>
              <hr className="text-zinc-400 mt-3" />
              <h4 className="mt-4 text-2xl font-semibold">Itinerary</h4>
              {
                selectedPackage.itinerary.map((item, idx) => {
                  return (
                    <p className="text-lg font-light mt-1" key={idx}>
                      Day {item.day} : {item.description || item.title}
                    </p>
                  )
                })
              }
              <div className=" mt-5">
                <div className="grid md:grid-cols-2 gap- items-center justify-center">
                  <img
                    src={selectedPackage.image || dashboardImageTwo}
                    alt={selectedPackage.location.city}
                    className="rounded-2xl md:w-52 md:h-32"
                  />
                  <div className="flex mt-4 md:mt-0 flex-col justify-start items-start text-left">
                    <p className="text-lg font-light md:mt-2">{selectedPackage.accommodation.roomType}</p>
                    <h3 className="mt-1 text-2xl font-semibold">
                      Accomodation
                    </h3>
                    <p className="text-xl font-light mt-1">{selectedPackage.accommodation.resortType}</p>
                    <div className="flex mt-2 text-yellow-400 scale-150  ml-5">
                      <span><MdStarRate /></span>
                      <span><MdStarRate /></span>
                      <span><MdStarRate /></span>
                      <span><MdStarRate /></span>
                      <span><MdStarRate /></span>
                    </div>
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9, }}
                  onClick={() => handleClick(selectedPackage._id)} className="bg-blue text-center w-full mt-8 py-3 rounded-xl text-white font-semibold">
                  Book Now
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PackagesDetails;
