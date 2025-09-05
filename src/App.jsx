import { Routes, Route, useNavigate } from "react-router-dom";
import SignUp from "./pages/signup/SignUp";
import Emailverification from "./pages/signup/Emailverification";
import PersonalInfo from "./pages/signup/PersonalInfo";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/signin/Login";
import ForgotPassword from "./pages/password-recovery/ForgotPassword";
import EmailSent from "./pages/password-recovery/EmailSent";
import CreatePassword from "./pages/password-recovery/CreatePassword";
import { ToastContainer } from "react-toastify";
import PackageListing from "./pages/PackageListing";
import PackageDetails from "./pages/PackageDetails";
import PackageForm from "./pages/PackageForm";
import Dashboard from "./pages/Dashboard";
import BookingConfirmation from "./pages/BookingConfirmation";
import ConfirmationDetails from "./pages/ConfirmationDetails";
import EditPackageForm from "./pages/EditBookingForm";
import AdminDashboard from "./pages/admin-pages/AdminDashboard";
import PackageData from "./pages/admin-pages/PackageData";
import BlogManager from "./pages/admin-pages/BlogManager";
import AdminBookings from "./pages/admin-pages/AdminBookings";
import { useDispatch, useSelector } from "react-redux";
import DashboardBottomBar from '../src/components/DashboardBottomBar'
import DashboardBottom from '../src/components/admin/DashboardBottom'
import { logOut } from "./redux/users/userSlice";

const App = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.user.currentUser);

// console.log(currentUser.role);
  return (
    <>
      {/* <button className="absolute bg-red px-3 py-2 text-white rounded-lg " onClick={() => dispatch(logOut())}>logOut</button> */}

      <ToastContainer />
      <Routes>
        {/* public routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/personal" element={<PersonalInfo />} />
        <Route path="/verify-otp" element={<Emailverification />} />
        <Route path="/login" element={<Login />} />
        <Route path="/otp-sent" element={<EmailSent />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/create-password" element={<CreatePassword />} />
        <Route path="/packages/:id" element={<PackageDetails />} />

        {/* private routes */}
        {currentUser?.role === "user" && (
          <>
            <Route path="/packages" element={<PackageListing />} />
            <Route path="/packages/:id/package-form" element={<PackageForm />} />
            <Route path="/edit-booking" element={<EditPackageForm />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/bookings" element={<BookingConfirmation />} />
            <Route path="/confirm-details" element={<ConfirmationDetails />} />
            <Route path="*" element={<Dashboard />} />
          </>
        )}
        {/* admin routes */}
        {currentUser?.role === "admin" && (
          <>
            <Route path="/dashboard" element={<AdminDashboard />} />
            <Route path="/package" element={<PackageData />} />
            <Route path="/blog" element={<BlogManager />} />
            <Route path="/booking" element={<AdminBookings />} />
          </>
        )}
        {!currentUser && <Route path="*" element={<LandingPage />} />}
      </Routes>
      {/* { currentUser?.role === "user"?
      
        < DashboardBottomBar/>: <DashboardBottom/>
       } */}
    </>
  );
};

export default App;
