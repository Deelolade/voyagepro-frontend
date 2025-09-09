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
import PackageDetails from "./pages/PackageDetails";
import { useDispatch, useSelector } from "react-redux";
import DashboardBottomBar from '../src/components/DashboardBottomBar'
import DashboardBottom from '../src/components/admin/DashboardBottom'
import { logOut } from "./redux/users/userSlice";
import { lazy, Suspense } from "react";

const App = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.user.currentUser);

  const Dashboard = lazy(() => import("./pages/Dashboard"));
  const PackageListing = lazy(() => import("./pages/PackageListing"));
  const PackageForm = lazy(() => import("./pages/PackageForm"));
  const EditPackageForm = lazy(() => import("./pages/EditBookingForm"));
  const BookingConfirmation = lazy(() => import("./pages/BookingConfirmation"));
  const ConfirmationDetails = lazy(() => import("./pages/ConfirmationDetails"));
  const AdminDashboard = lazy(() => import('./pages/admin-pages/AdminDashboard'))
  const BlogManager = lazy(() => import('./pages/admin-pages/BlogManager'))
  const AdminBookings = lazy(() => import('./pages/admin-pages/AdminBookings'))
  const PackageData = lazy(() => import('./pages/admin-pages/PackageData'))
  return (
    <>
      {/* <button className="absolute bg-red px-3 py-2 text-white rounded-lg " onClick={() => dispatch(logOut())}>logOut</button> */}

      <ToastContainer />
      <Suspense fallback={<div>loading...</div>}>

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
          {currentUser?.role === "user" && (
            <>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="*" element={<Dashboard />} />
              <Route path="/packages" element={<PackageListing />} />
              <Route path="/packages/:id/package-form" element={<PackageForm />} />
              <Route path="/edit-booking" element={<EditPackageForm />} />
              <Route path="/bookings" element={<BookingConfirmation />} />
              <Route path="/confirm-details" element={<ConfirmationDetails />} />
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
    </Suspense >

    {/* { currentUser?.role === "user"?
      
        < DashboardBottomBar/>: <DashboardBottom/>
       } */}
    </>
  );
};

export default App;
