import { Routes, Route } from "react-router-dom";
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

const App = () => {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/personal" element={<PersonalInfo />} />
        <Route path="/verify-email" element={<Emailverification />} />
        {/* Login */}
        <Route path="/login" element={<Login />} />
        {/* forgot-password */}
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/email-sent" element={<EmailSent />} />
        <Route path="/create-password" element={<CreatePassword />} />
        {/* PackageDetails */}
        <Route path="/packages" element={<PackageListing />} />
        <Route path="/packages/:id" element={<PackageDetails />} />
         {/* PackageForm */}
        <Route path="/package-form" element={<PackageForm />} />
        {/* Dashboard */}
        <Route path="/dashboard" element={<Dashboard/>} />
      </Routes>
    </>
  );
};

export default App;
