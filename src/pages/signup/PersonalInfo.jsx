import { Link } from "react-router-dom";
import image from "../../images/voyage-pro-1.png";
import { BiArrowBack } from "react-icons/bi";
import BreadCrumbs from "../../components/BreadCrumbs"

const PersonalInfo = () => {
  return (
    <>
      <section className="flex h-screen justify-around px-20 py-8 max-h-[100vh]">
        <div className="w-[45%] ">
          <img
            src={image}
            alt="voyage-pro-"
            className="min-w-full max-h-full object-contain rounded-2xl"
          />
        </div>
        <div className="w-[45%] p-10 relative flex  flex-col">
          <div className="">
            <BreadCrumbs />
          </div>
          <div className="flex items-center space-x-2 justify-start mt-12">
            <Link to="/verify-email" className="bg-white  p-3 rounded-lg">
              <BiArrowBack className="scale-150" />
            </Link>
            <p className="">Back</p>
          </div>
          <div className="mt-28 w-[70%]">
            <p className="text-gray-500 text-sm">Step 3/3</p>
            <h1 className="text-2xl font-semibold my-5">
              Let's complete your profile
            </h1>
            <p className="text-gray-500 text-sm text-left">
              Fill in the remaining details to complete your profile.
            </p>
            <form>
              <div className="flex justify- gap-5 mt-5">
                <div className="w-[50%]">
                  <label htmlFor="" className="text-black text-sm ">
                    First Name
                  </label>
                    <input
                      type="text"
                      placeholder="Enter First Name"
                      className="w-full  text-sm outline-none py-3 px-3 rounded-lg mt-1"
                    />{" "}
                </div>
                <div className="w-[50%]">
                  <label htmlFor="" className="text-black text-sm ">
                    Last Name
                  </label>
                    <input
                      type="text"
                      placeholder="Enter Last Name  "
                      className=" w-full text-sm outline-none py-3 px-3 rounded-lg mt-1"
                    />{" "}
                </div>
              </div>
              <div className="flex  gap-5 mt-8">
                <div className="w-[50%]">
                  <label htmlFor="" className="text-black text-sm ">
                    Phone Number
                  </label>
                    <input
                      type="text"
                      placeholder="+234"
                      className="w-full  text-sm outline-none py-3 px-3 rounded-lg mt-1"
                    />{" "}
                </div>
                <div className="w-[50%]">
                  <label htmlFor="" className="text-black text-sm ">
                    State
                  </label>
                    <input
                      type="text"
                      placeholder="Lagos State  "
                      className=" w-full text-sm outline-none py-3 px-3 rounded-lg mt-1"
                    />{" "}
                </div>
              </div>
              <div className="flex  gap-5 mt-8">
                <div className="w-[50%]">
                  <label htmlFor="" className="text-black text-sm ">
                    Country
                  </label>
                    <input
                      type="text"
                      placeholder="e.g Nigeria"
                      className="w-full  text-sm outline-none py-3 px-3 rounded-lg mt-1"
                    />{" "}
                </div>
                <div className="w-[50%]">
                  <label htmlFor="" className="text-black text-sm ">
                    Role
                  </label>
                    <input
                      type="text"
                      placeholder=" "
                      className=" w-full text-sm outline-none py-3 px-3 rounded-lg mt-1"
                    />{" "}
                </div>
              </div>
            </form>
            <div className="mt-8 flex flex-col  w-[90%]">
              <div className=" flex space-x-2 my-4">
                <input type="checkbox" name="" id=""  className="scale-125 "/>
                <p className="text-sm">By continuing, You agree to our Terms and Privacy Policy</p>
              </div>
              <Link
                to="/personal"
                className="bg-blue-600 hover:bg-blue-500 py-2 text-xl text-center rounded-lg text-white capitalize"
              >
                Create account 
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PersonalInfo;
