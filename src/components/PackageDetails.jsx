import { useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import image from "../images/landing-image-1.png";
import { FiCalendar } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { IoIosBed } from "react-icons/io";
import { LuBus } from "react-icons/lu";
import { MdOutlineFamilyRestroom, MdStarRate } from "react-icons/md";
import { GiMeal } from "react-icons/gi";
import { FaMapLocationDot } from "react-icons/fa6";
import { LuNotebookPen } from "react-icons/lu";

const PackagesDetails = () => {
  const navigate = useNavigate();
  const packages = useSelector((state) => state.package.packages);
  const { id } = useParams();
  console.log("new packages:", packages);
  console.log("id:", id);
  const selected = packages.find((pkg) => pkg.id.toString() === id);
  console.log(selected.location.trim().split(" ").slice(-1)[0]);
  if (!selected) return <p className="text-red text-center  ">Package not found.</p>;
  {/* will include 404 page later*/}
  const handleChange = () => {
    navigate("/package-form", { state: { selected } });
    console.log("Selected package:", selected);
  }
  return (
    <>
      <section className="">
        <div className="h-screen  max-w-7xl mx-auto">
          <div className="flex justify-between py-4 items-center">
            <h3 className="text-4xl font-semibold">Voyagepro</h3>
            <h3 className="text-4xl font-semibold">Packages Details</h3>
            <img
              src={image}
              alt=""
              className="h-12 w-12 object-cover rounded-full"
            />
          </div>
          <div className="flex gap-20 h-[90vh]">
            <div className=" w-[50%]">
              <img
                src={selected.image}
                alt={selected.location}
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            <div className="w-[50%]">
              <h3 className="text-2xl font-semibold">
                {selected.location.trim().split(" ").slice(-1)[0]}( Family
                Gateway)
              </h3>
              <p className="text-xl mt-6">
                “7 days of sun, sea, and unforgettable memories”
              </p>
              <div className="flex mt-4 justify-between">
                <div className=" border-r-2 border-zinc-400 flex space-x-5 pr-6 items-center">
                  <FiCalendar className="scale-[200%]" />
                  <p className="text-xl font-medium"> 7 Days/6 Night</p>
                </div>
                <div className="border-r-2 border-zinc-400 flex space-x-5 pr-6 items-center">
                  <LuNotebookPen className="scale-[200%]" />
                  <span>
                    <p className="text-xl font-medium">From $50.00</p>
                    <p className="text-sm font-light text-zinc-500">
                      Per Adult
                    </p>
                  </span>
                </div>
                <div className="flex space-x-5 pr-6 items-center">
                  <IoLocationOutline className="scale-[200%]" />
                  <span>
                    <p className="text-xl font-medium">
                      {selected.location.trim().split(" ").slice(-1)[0]}
                    </p>
                    <p className="text-xl font-medium">{selected.location}</p>
                    <p className="text-sm font-light text-zinc-500">
                      5.0, 520 bookings
                    </p>
                  </span>
                </div>
              </div>
              <hr className="text-zinc-400 mt-6" />
              <h4 className="mt-4 text-2xl font-semibold">What' Included</h4>
              <div className=" grid grid-cols-2 gap-5 mt-5">
                <p className="flex  space-x-5 items-center ">
                  <IoIosBed className="scale-150" />{" "}
                  <span>Hotel/Resort Accommodation </span>
                </p>
                <p className="flex  space-x-5 items-center ">
                  <LuBus className="scale-150" />{" "}
                  <span>Airport Pickup & Drop-off</span>
                </p>
                <p className="flex  space-x-5 items-center ">
                  <MdOutlineFamilyRestroom className="scale-150" />{" "}
                  <span>Family-friendly Activities</span>
                </p>
                <p className="flex  space-x-5 items-center ">
                  <GiMeal className="scale-150" /> <span>Daily Meals</span>
                </p>
                <p className="flex  space-x-5 items-center ">
                  <FaMapLocationDot className="scale-150" />
                  <span>Guided Tours & Entry Tickets</span>
                </p>
              </div>

              <hr className="text-zinc-400 mt-6" />
              <h4 className="mt-4 text-2xl font-semibold">Itinerary</h4>
              <p className="text-lg font-light mt-1">
                Day 1: Arrival & welcome Dinner{" "}
              </p>
              <p className="text-lg font-light mt-1">
                Day 2: Beach Day & Games{" "}
              </p>
              <p className="text-lg font-light mt-1">Day 3: Spice farm tour </p>
              <p className="text-lg font-light mt-1">
                Day 4: free day for leisure...{" "}
              </p>
              <div className=" mt-6">
                <div className="flex space-x-8 justify-start items-center">
                  <img
                    src={selected.image}
                    alt={selected.location}
                    className="rounded-2xl w-52 h-32"
                  />
                  <div className="flex flex-col justify-start items-start text-left">
                    <p className="text-lg font-light mt-8">Standard Suites</p>
                    <h3 className="mt-4 text-2xl font-semibold">
                      Accomodation
                    </h3>
                    <p className="text-xl font-light mt-3">BeachFront Resort</p>
                    <div className="flex mt-5 text-yellow-400 scale-150  ml-5">
                      <span><MdStarRate /></span>
                      <span><MdStarRate /></span>
                      <span><MdStarRate /></span>
                      <span><MdStarRate /></span>
                      <span><MdStarRate /></span>
                    </div>
                  </div>
                </div>
                <button onClick={handleChange} className="bg-blue text-center w-full mt-8 py-3 rounded-xl text-white font-semibold">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PackagesDetails;
