import { Link } from "react-router-dom";
import image from "../../images/voyage-pro-1.png";
import { BiArrowBack } from "react-icons/bi";
import BreadCrumbs from "../../components/BreadCrumbs";
import { FaChevronDown } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const PersonalInfo = () => {
  const ValidationSchema = yup.object().shape({
    firstName: yup.string().required("First name is required"),
    lastName: yup.string().required("Last name  is required"),
    phoneNumber: yup
      .string()
      .required("Phone number is required")
      .matches(/^(?:\+234|0)[789][01]\d{8}$/, "Enter a valid phone number"),
    state: yup.string().required("State  is required"),
    country: yup.string().required("Country is required"),
    role: yup
      .string()
      .required("Role is required")
      .oneOf(["user", "admin"], "Select a valid account type"),
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
  const onSubmit = (data) => {
    console.log(data);
    console.log();
    // navigate("/verify-email");
    toast("Signed Up successfully !!");
  };
  return (
    <>
      <section className="flex h-screen justify-around px-20 py-8 max-h-screen">
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
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="flex justify- gap-5 mt-5">
                <div className="w-[50%]">
                  <label htmlFor="" className="text-black text-sm ">
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter First Name"
                    {...register("firstName")}
                    className="w-full  text-sm outline-none py-3 px-3 rounded-lg mt-1"
                  />{" "}
                  {errors.firstName && (
                    <p className="mt-2 text-red-500 text-sm">
                      {errors.firstName?.message}
                    </p>
                  )}
                </div>
                <div className="w-[50%]">
                  <label htmlFor="" className="text-black text-sm ">
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Last Name"
                    {...register("lastName")}
                    className=" w-full text-sm outline-none py-3 px-3 rounded-lg mt-1"
                  />{" "}
                  {errors.lastName && (
                    <p className="mt-2 text-red-500 text-sm">
                      {errors.lastName?.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="flex  gap-5 mt-8">
                <div className="w-[50%]">
                  <label htmlFor="" className="text-black text-sm ">
                    Phone Number
                  </label>
                  <div className="flex gap-2 items-center bg-white rounded-lg">
                    {/* Flag & Country Code Box */}
                    <div className="flex items-center  px-4 py-3 border-r rounded-l-lg bg-gray-200">
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
                    <p className="mt-2 text-red-500 text-sm">
                      {errors.phoneNumber?.message}
                    </p>
                  )}
                </div>
                <div className="w-[50%]">
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
                    <p className="mt-2 text-red-500 text-sm">
                      {errors.state?.message}
                    </p>
                  )}
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
                    {...register("country")}
                    className="w-full  text-sm outline-none py-3 px-3 rounded-lg mt-1"
                  />{" "}
                  {errors.country && (
                    <p className="mt-2 text-red-500 text-sm">
                      {errors.country?.message}
                    </p>
                  )}
                </div>
                <div className="w-[50%]">
                  <label htmlFor="" className="text-black text-sm ">
                    Role
                  </label>
                  <div className="relative">
                    <select
                      className="appearance-none w-full text-sm outline-none py-3 px-3 pr-10 rounded-lg mt-1 text-gray-500"
                      {...register("role")}
                    >
                      <option value="">Select a role</option>{" "}
                      {/* Placeholder */}
                      <option value="admin">Admin</option>
                      <option value="user">User</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500">
                      <FaChevronDown />
                    </div>
                  </div>
                  {errors.role && (
                    <p className="mt-2 text-red-500 text-sm">
                      {errors.role?.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="mt-8 flex flex-col  w-[90%]">
                <div className="my-4">
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
                    <p className="text-red-500 text-sm mt-2">
                      {errors.term?.message}
                    </p>
                  )}
                </div>
                <button className="bg-blue-600 hover:bg-blue-500 py-2 text-xl text-center rounded-lg text-white capitalize">
                  Create account
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default PersonalInfo;
