import { useState } from "react";
import profileImage from "../images/landing-image-1.png";
import PackageImage from "../images/package-image.png";
import { FaRegBell } from "react-icons/fa";
import { RiSearchLine } from "react-icons/ri";

const PackageListing = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const packages = [
    {
      id: 1,
      location: "Spain, Barcelona",
      image: PackageImage,
      price: "$987.50",
      status: "completed",
      date: "12/7/2025",
      trackNumber: "1z4s22377990467",
    },
    {
      id: 2,
      location: "France, Paris",
      image: PackageImage,
      price: "$1,200.00",
      status: "pending",
      date: "13/7/2025",
      trackNumber: "1z4s22377990468",
    },
    {
      id: 3,
      location: "Italy, Rome",
      image: PackageImage,
      price: "$980.00",
      status: "in progress",
      date: "14/7/2025",
      trackNumber: "1z4s22377990469",
    },
    {
      id: 4,
      location: "Greece, Santorini",
      image: PackageImage,
      price: "$1,150.00",
      status: "completed",
      date: "15/7/2025",
      trackNumber: "1z4s22377990470",
    },
    {
      id: 5,
      location: "Japan, Tokyo",
      image: PackageImage,
      price: "$1,650.00",
      status: "pending",
      date: "16/7/2025",
      trackNumber: "1z4s22377990471",
    },
    {
      id: 6,
      location: "Thailand, Phuket",
      image: PackageImage,
      price: "$875.00",
      status: "in progress",
      date: "17/7/2025",
      trackNumber: "1z4s22377990472",
    },
    {
      id: 7,
      location: "USA, New York",
      image: PackageImage,
      price: "$1,320.00",
      status: "completed",
      date: "18/7/2025",
      trackNumber: "1z4s22377990473",
    },
    {
      id: 8,
      location: "UAE, Dubai",
      image: PackageImage,
      price: "$1,500.00",
      status: "in progress",
      date: "19/7/2025",
      trackNumber: "1z4s22377990474",
    },
    {
      id: 9,
      location: "South Africa, Cape Town",
      image: PackageImage,
      price: "$1,080.00",
      status: "pending",
      date: "20/7/2025",
      trackNumber: "1z4s22377990475",
    },
    {
      id: 10,
      location: "Brazil, Rio de Janeiro",
      image: PackageImage,
      price: "$1,100.00",
      status: "completed",
      date: "21/7/2025",
      trackNumber: "1z4s22377990476",
    },
  ];
  const filteredPackages = packages.filter(
    (pkg) =>
      pkg.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pkg.trackNumber.toLowerCase().includes(searchTerm.toLowerCase())
  );

  console.log(packages.length);
  return (
    <>
      <section id="packages" className="max-h-screen h-screen flex">
        <div className="max-w-7xl mx-auto flex justify-between ">
          <div className=" w-[25vw] bg-red"> sidebar</div>
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
                        <p className="text-sm text-zinc-500">{pkg.location}</p>
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
                        <div className=" flex flex-col items-center justify-center space-y-2 mt-12 ">
                          <p className="text-sm text-zinc-500">
                            {pkg.trackNumber}
                          </p>
                          <button className="bg-blue px-3 py-2  rounded-lg text-sm text-white">
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
