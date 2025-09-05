import { useEffect, useState } from "react";
import profileImage from "../images/landing-image-1.png";
import { FaRegBell, FaRegUserCircle } from "react-icons/fa";
import { RiSearchLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import image from "../images/dashboard-image-three.png";
import { useDispatch } from "react-redux";
import axios from "axios";
import { selectPackage } from "../redux/packages/packageSlice";


const PackageListing = () => {
  const dispatch = useDispatch();
  const API_URL = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("popularity");
  const [selectedPrices, setSelectedPrices] = useState([]);
  const [packages, setPackages] = useState([]);


  useEffect(()=>{
    const fetchPackages = async()=>{
      try {
      const res = await axios.get(`${API_URL}/packages`)
      localStorage.setItem("allPackages", JSON.stringify(res.data))
      setPackages(res.data)
      console.log(packages)
      } catch (error) { 
        const cachedPackages = localStorage.getItem("allPackages")
        if(cachedPackages){
          setPackages(JSON.parse(cachedPackages))
        }
      }
    }
    fetchPackages()
  },[])
  const handlePriceChange = (range) => {
    setSelectedPrices((prev) =>
      prev.includes(range) ? prev.filter((r) => r !== range) : [...prev, range]
    );
  };

 const filteredPackages = packages.filter(
    (pkg) =>
      pkg.location.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pkg.location.country.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pkg.title.toLowerCase().includes(searchTerm.toLowerCase())
  )
  // .sort((a, b) => {
  //   if (sortBy === "popularity") return b.popularity - a.popularity;
  //   if (sortBy === "rating") return b.rating - a.rating;
  //   if (sortBy === "price")
  //     return (
  //       parseFloat(b.price.replace(/[^\d.]/g, "")) -
  //       parseFloat(a.price.replace(/[^\d.]/g, ""))
  //     );
  //   if (sortBy === "date") return new Date(b.date) - new Date(a.date);
  //   return 0;
  // });

  console.log(packages);
  const handlePackage = (pkg) => {
    dispatch(selectPackage(pkg))
    navigate(`/packages/${pkg._id}`);
  };
  return (
    <>
      <section id="packages" className="max-h-screen h-screen flex">
        <div className="max-w-7xl mx-auto flex justify-between ">
      {/* <Sidebar/> */}
          <div className=" w-[25vw] bg-zinc-200 p-6">
            <div className="mt-20">
              <div className="">
                <h5>Popularity</h5>
                <div className="flex flex-col">
                  <div className="">
                    <input
                      type="checkbox"
                      name=""
                      id=""
                      className="h-5 w-5 mt-2"
                    />{" "}
                    <span>Less than 10 people</span>
                  </div>
                  <div className="">
                    <input
                      type="checkbox"
                      name=""
                      id=""
                      className="h-5 w-5 mt-2"
                    />{" "}
                    <span>10 to 20 people</span>
                  </div>
                  <div className="">
                    <input
                      type="checkbox"
                      name=""
                      id=""
                      className="h-5 w-5 mt-2"
                    />{" "}
                    <span>20 to 50 people</span>
                  </div>
                  <div className="">
                    <input
                      type="checkbox"
                      name=""
                      id=""
                      className="h-5 w-5 mt-2"
                    />{" "}
                    <span>50 to 100 people</span>
                  </div>
                  <div className="">
                    <input
                      type="checkbox"
                      name=""
                      id=""
                      className="h-5 w-5 mt-2"
                    />{" "}
                    <span>100 to 200 people</span>
                  </div>
                </div>
              </div>
              <div className="">
                <h5>Duration</h5>
                <div className="flex flex-col">
                  <div className="">
                    <input
                      type="checkbox"
                      name=""
                      id=""
                      className="h-5 w-5 mt-2"
                    />{" "}
                    <span>Less than 3 Days</span>
                  </div>
                  <div className="">
                    <input
                      type="checkbox"
                      name=""
                      id=""
                      className="h-5 w-5 mt-2"
                    />{" "}
                    <span>3 to 5 Days</span>
                  </div>
                  <div className="">
                    <input
                      type="checkbox"
                      name=""
                      id=""
                      className="h-5 w-5 mt-2"
                    />{" "}
                    <span>5 to 10 Days</span>
                  </div>
                  <div className="">
                    <input
                      type="checkbox"
                      name=""
                      id=""
                      className="h-5 w-5 mt-2"
                    />{" "}
                    <span>10 to 20 Days</span>
                  </div>
                </div>
              </div>
              <div className="">
                <h5>Ratings</h5>
                <div className="flex flex-col">
                  <div className="">
                    <input
                      type="checkbox"
                      name=""
                      id=""
                      className="h-5 w-5 mt-2"
                    />{" "}
                    <span>1 star</span>
                  </div>
                  <div className="">
                    <input
                      type="checkbox"
                      name=""
                      id=""
                      className="h-5 w-5 mt-2"
                    />{" "}
                    <span>2 stars</span>
                  </div>
                  <div className="">
                    <input
                      type="checkbox"
                      name=""
                      id=""
                      className="h-5 w-5 mt-2"
                    />{" "}
                    <span>3 stars</span>
                  </div>
                  <div className="">
                    <input
                      type="checkbox"
                      name=""
                      id=""
                      className="h-5 w-5 mt-2"
                    />{" "}
                    <span>4 stars</span>
                  </div>
                  <div className="">
                    <input
                      type="checkbox"
                      name=""
                      id=""
                      className="h-5 w-5 mt-2"
                    />{" "}
                    <span>5 stars</span>
                  </div>
                </div>
              </div>
              <div className="">
                <h5>Price</h5>
                <div className="flex flex-col">
                  <div className="">
                    <input
                      type="checkbox"
                      onChange={() => handlePriceChange("0-1000")}
                      checked={selectedPrices.includes("0-1000")}
                      className="h-5 w-5 mt-2"
                    />{" "}
                    <span>Less than 1,000</span>
                  </div>
                  <div className="">
                    <input
                      type="checkbox"
                      name=""
                      id=""
                      className="h-5 w-5 mt-2"
                    />{" "}
                    <span>1,000 - 2,000</span>
                  </div>
                  <div className="">
                    <input
                      type="checkbox"
                       onChange={() => handlePriceChange("1000-2000")}
                      checked={selectedPrices.includes("1000-2000")}
                      className="h-5 w-5 mt-2"
                    />{" "}
                    <span>200,000 - 500,000</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Main section */}
          <main className="w-[70vw] p-6">
            <div className=" flex justify-between items-center">
              <h3 className="text-4xl font-semibold">Package Listing</h3>
              <span>< FaRegUserCircle className="scale-150 text-2xl"/></span>
            </div>
            <div className=" flex mt-8 justify-between items-center">
              <div className=" flex w-[70%] bg-gray border border-zinc-500 rounded-xl py-2 px-3 items-center space-x-5">
                <span>
                  <RiSearchLine className="scale-150" />
                </span>
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full py-2 px-3 bg-gray outline-none"
                  placeholder="Search"
                />
              </div>
              <span>
                <FaRegBell className="scale-150" />
              </span>
            </div>
            <div className="mt-12 w-full bg-white rounded-xl">
              {/* Header */}
              <div className="grid grid-cols-6 py-4 px-5  me-auto font-semibold text-lg capitalize text-center">
                <div />
                <p>Name</p>
                <p>Price</p>
                <p>Duration</p>
                <p>Destination</p>
                <p>Track No</p>
              </div>
              {/* Body */}
              <div className="h-[70vh] rounded-b-xl px-2 py-3 border-t-2 overflow-y-auto scroll-smooth text-center">
                {filteredPackages.length > 0 ? (
                  filteredPackages.map((pkg, idx) => (
                    <div
                      key={idx}
                      className="grid grid-cols-6 items-center gap-4 py-4 px-5  ms-auto "
                    >
                      <img
                        src={pkg.images[0] || image }
                        alt={pkg.title || "Package image"}
                        className="h-20 w-20 object-cover rounded-lg"
                      />
                      <p className="text-sm text-zinc-500">{pkg.title}</p>
                      <p className="text-sm text-zinc-500">#{pkg.pricePerAdult.toLocaleString()}</p>
                      <p className="text-sm text-zinc-500">{pkg.duration}</p>
                      <p className="text-sm text-zinc-500">{pkg.location.city}</p>
                      <div className=" flex flex-col items-center justify-center space-y-2  ">
                        <p className="text-sm text-zinc-500">
                          {pkg._id}
                        </p>
                        <button
                          className="bg-blue px-3 py-2  rounded-lg text-sm text-white"
                          onClick={() => handlePackage(pkg)}
                        >
                          See All
                        </button>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-gray-500 text-sm mt-6">
                    No packages found.
                  </p>
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
