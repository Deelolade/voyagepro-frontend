import React from "react";

const Navbar = () => {
  return (
    <>
      <header className=" fixed w-screen z-30">
        <nav className="flex h-[10vh] items-center justify-between max-w-6xl mx-auto ">
          <a href="#" className="font-semibold text-3xl">VoyagePro</a>
          <ul className="flex gap-3 w-[40%] bg-re-400 justify-between">
            <a href="#packages" className=" text-lg">Packages</a>
            <a to="/"className=" text-lg">About us</a>
            <a to="/"className=" text-lg">Contact us</a>
            <a to="/"className=" text-lg">Blog</a>
          <div className="">
            <select name="" id="">
              <option value="NGN">NGN</option>
            </select>
          </div>
          </ul>
          <button className="bg-red text-lg font-medium  py-2 px-3 rounded-lg">Register</button>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
