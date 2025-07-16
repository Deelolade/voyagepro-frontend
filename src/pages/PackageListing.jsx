import { useState } from "react";
import profileImage from "../images/landing-image-1.png";
import { FaRegBell } from "react-icons/fa";
import { RiSearchLine } from "react-icons/ri";
import packages from "../consumables/packages";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const PackageListing = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("popularity");
  const [selectedPrices, setSelectedPrices] = useState([]);

  const handlePriceChange = (range) => {
    setSelectedPrices((prev) =>
      prev.includes(range) ? prev.filter((r) => r !== range) : [...prev, range]
    );
  };

 const filteredPackages = packages
  .filter((pkg) => {
    // Convert price from "₦250,000" or "$150" to number
    const numericPrice = parseFloat(pkg.price.replace(/[^\d.]/g, ""));
    
    // If no price range is selected, allow all
    if (selectedPrices.length === 0) return true;

    // Check if numericPrice falls in any selected range
    return selectedPrices.some((range) => {
      const [min, max] = range.split("-").map(Number);
      return numericPrice >= min && numericPrice <= max;
    });
  })
  .filter(
    (pkg) =>
      pkg.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pkg.title.toLowerCase().includes(searchTerm.toLowerCase())
  )
  .sort((a, b) => {
    if (sortBy === "popularity") return b.popularity - a.popularity;
    if (sortBy === "rating") return b.rating - a.rating;
    if (sortBy === "price")
      return (
        parseFloat(b.price.replace(/[^\d.]/g, "")) -
        parseFloat(a.price.replace(/[^\d.]/g, ""))
      );
    if (sortBy === "date") return new Date(b.date) - new Date(a.date);
    return 0;
  });

  console.log(packages.length);
  const handlePackage = (pkg) => {
    navigate(`/packages/${pkg.id}`);
  };
  return (
    <>
      {/* <Sidebar/> */}
      <section id="packages" className="max-h-screen h-screen flex">
        <div className="max-w-7xl mx-auto flex justify-between ">
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
          <main className="w-[70vw] p-6">
            <div className=" flex justify-between items-center">
              <h3 className="text-4xl font-semibold">Packages Listing</h3>
              <div className="">
                <img
                  src={profileImage}
                  alt=""
                  className="w-14 h-14 object-cover rounded-full"
                />
              </div>
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
              <div className="grid grid-cols-7 py-4 px-5  me-auto font-semibold text-lg capitalize">
                <div />
                <p>Name</p>
                <p>Status</p>
                <p>Price</p>
                <p>Date</p>
                <p>Destination</p>
                <p>Track No</p>
              </div>
              {/* Body */}
              <div className="h-[70vh] rounded-b-xl px-3 py-3 border-t-2 overflow-y-auto scroll-smooth">
                {filteredPackages.length > 0 ? (
                  filteredPackages.map((pkg, idx) => (
                    <div
                      key={idx}
                      className="grid grid-cols-7 items-center gap-4 py-4 px-5  ms-auto "
                    >
                      <img
                        src={pkg.image}
                        alt={pkg.title || "Package image"}
                        className="h-20 w-20 object-cover rounded-lg"
                      />
                      <p className="text-sm text-zinc-500">{pkg.title}</p>
                      <span
                        className={`text-xs text-center px-1 py-2 rounded-full text-zinc-700 ${
                          pkg.status === "completed"
                            ? "bg-green"
                            : pkg.status === "pending"
                            ? "bg-lightpurple"
                            : "bg-lightorange"
                        }`}
                      >
                        {pkg.status}
                      </span>
                      <p className="text-sm text-zinc-500">{pkg.price}</p>
                      <p className="text-sm text-zinc-500">{pkg.date}</p>
                      <p className="text-sm text-zinc-500">{pkg.location}</p>
                      <div className=" flex flex-col items-center justify-center space-y-2  ">
                        <p className="text-sm text-zinc-500">
                          {pkg.trackNumber}
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
