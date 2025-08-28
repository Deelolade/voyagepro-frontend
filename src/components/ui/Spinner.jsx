import React from "react";

const Spinner = () => (
  <>
  <div className=" absolute top-0 left-0 w-screen h-screen flex justify-center items-center bg-black bg-opacity-50">
    <div className="flex justify-center items-center w-full h-full">
    <div className="inline-block w-12 h-12 border-4 border-white border-t-green rounded-full animate-spin" />
  </div>
  </div>
  </>
);

export default Spinner;