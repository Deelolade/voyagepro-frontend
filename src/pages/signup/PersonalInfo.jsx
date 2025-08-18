import { Link } from "react-router-dom";
import image from "../../images/voyage-pro-1.png";
import { BiArrowBack } from "react-icons/bi";
import BreadCrumbs from "../../components/SignUpBreadCrumbs";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { signInSuccess } from "../../redux/users/userSlice";

const PersonalInfo = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const API_URL = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();
  const ValidationSchema = yup.object().shape({
    firstname: yup.string().required("First name is required"),
    lastname: yup.string().required("Last name  is required"),
    phoneNumber: yup
      .string()
      .required("Phone number is required")
      .matches(/^(?:\+234|0)[789][01]\d{8}$/, "Enter a valid phone number"),
    state: yup.string().required("State  is required"),
    country: yup.string().required("Country is required"),
    
    term: yup
      .bool()
      .oneOf([true], "You have to agree to our terms and privacy policy "),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(ValidationSchema),
  });
  const onSubmit = async(data) => {
      const { term, ...payload } = data;
      const token = localStorage.getItem("token");
      if (!token) {
        toast.error("You must be logged in to update your profile");
        return;
      }
    setLoading(true);
    try {
      const res = await axios.post(`${API_URL}/auth/update-profile`, payload, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
     dispatch(signInSuccess(res.data.user));
      toast.success( res.data.message || "Your details have been saved successfully!");
      setTimeout(()=> navigate("/dashboard"), 1500) 
    } catch (err) {
      toast.error(err.response?.data?.message || "Error occurred while saving details");
    }finally {
    setLoading(false);
  }
  };
  return (
    <>
      <section className="flex h-screen justify-evenly md:px-5 lg:px-10 2xl:px-20  xs:px-0 xl:py-4  2xl:py-8 max-h-[100vh]">
        <div className="2xl:w-[45%] md:hidden ">
          <img
            src={image}
            alt="voyage-pro-image"
            className="min-w-full max-h-full object-contain rounded-2xl"
          />
        </div>
        <div className="xs:w-full md:w-[70%] lg:w-[50%] 2xl:w-[45%] xxs: p-3 xs:p-5 2xl:p-3  relative flex  flex-col">
          <div className="">
            <BreadCrumbs />
          </div>
          <div className="flex items-center space-x-2 justify-start xs:mt-4 xl:mt-2 2xl:mt-4">
            <Link
              to="/signup"
              className="bg-white  xxs:p-1 xs:p-2 2xl:p-3 xs:rounded 2xl:rounded-lg"
            >
              <BiArrowBack className=" xxs:scale-90 xs:scale-125 2xl:scale-150" />
            </Link>
            <p className="text-sm text-black md:hidden">Back</p>
          </div>
          <div className="  md:w-full xs:w-full xl:w-full 2xl:w-[70%]  xxs:mt-4 xs:mt-10 md:mt-12 xl:mt-8 2xl:mt-5">
            <p className="text-zinc-500 text-sm">Step 3/3</p>
            <h1 className="xxs:text-xl 2xl:text-2xl font-semibold xs:my-2 2xl:my-3">
              Let's complete your profile
            </h1>
            <p className="text-zinc-500 text-sm text-left">
              Fill in the remaining details to complete your profile.
            </p>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
                <div className="mt-4">
                  <label htmlFor="" className=" text-black ">
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter First Name"
                    {...register("firstname")}
                    className="w-full  text-sm outline-none py-3 px-3 rounded-lg mt-1"
                  />{" "}
                  {errors.firstname && (
                    <p className="mt-1 text-red text-sm">
                      {errors.firstname?.message}
                    </p>
                  )}
                </div>
                <div className="mt-4">
                  <label htmlFor="" className="text-black ">
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Last Name"
                    {...register("lastname")}
                    className=" w-full text-sm outline-none py-3 px-3 rounded-lg mt-1"
                  />{" "}
                  {errors.lastname && (
                    <p className="mt-1 text-red text-sm">
                      {errors.lastname?.message}
                    </p>
                  )}
                </div>
                <div className="mt-4">
                  <label htmlFor="" className="text-black text-sm ">
                    Phone Number
                  </label>
                  <div className="flex gap-2 items-center bg-white rounded-lg">
                    {/* Flag & Country Code Box */}
                    <div className="flex items-center  sm:px-2 2xl:px-4 py-3 border-r-zinc-300 rounded-l-lg bg-zinc-200">
                      <img
                        src="https://flagcdn.com/w40/ng.png"
                        alt="Nigeria"
                        className="w-5 h-5 mr-2"
                      />
                      {/* <span className="text-sm text-gray-700">+234</span> */}
                    </div>

                    {/* Phone Number Input */}
                    <input
                      type="text"
                      placeholder="8012345678"
                      {...register("phoneNumber")}
                      className="text-sm outline-none py-3 px-3 rounded-lg  w-full"
                    />
                  </div>
                  {errors.phoneNumber && (
                    <p className="mt-1 text-red text-sm">
                      {errors.phoneNumber?.message}
                    </p>
                  )}
                <div className="mt-4">
                  <label htmlFor="" className="text-black text-sm ">
                    State
                  </label>
                  <input
                    type="text"
                    placeholder="Lagos State"
                    {...register("state")}
                    className=" w-full text-sm outline-none py-3 px-3 rounded-lg mt-1"
                  />{" "}
                  {errors.state && (
                    <p className="mt-1 text-red text-sm">
                      {errors.state?.message}
                    </p>
                  )}
                </div>
                <div className="mt-4">
                  <label htmlFor="" className="text-black text-sm ">
                    Country
                  </label>
                  <input
                    type="text"
                    placeholder="e.g Nigeria"
                    {...register("country")}
                    className="w-full  text-sm outline-none py-3 px-3 rounded-lg mt-1"
                  />{" "}
                  {errors.country && (
                    <p className="mt-1 text-red text-sm">
                      {errors.country?.message}
                    </p>
                  )}
                </div>
                
              </div>
                <div className="mt-4 mb-2">
                  <div className="flex space-x-2 ">
                    <input
                      type="checkbox"
                      name=""
                      id=""
                      className="scale-125 "
                      {...register("term")}
                    />
                    <p className="text-sm">
                      By continuing, You agree to our Terms and Privacy Policy
                    </p>
                  </div>
                  {errors.term && (
                    <p className="text-red text-sm mt-1">
                      {errors.term?.message}
                    </p>
                  )}
                </div>
                <button type="submit" className="bg-blue/90 hover:bg-blue py-2 text-xl text-center rounded-lg text-white capitalize">
                   {loading ? "Saving..." : "Create account"}
                </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default PersonalInfo;
