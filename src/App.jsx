import { Routes, Route } from "react-router-dom"
import SignUp from "./pages/signup/SignUp"
import Emailverification from "./pages/signup/Emailverification"
import PersonalInfo from "./pages/signup/PersonalInfo"
import LandingPage from "./pages/LandingPage"
import Login from "./pages/signin/Login"
import ForgotPassword from "./pages/password-recovery/ForgotPassword"
const App = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={ <LandingPage /> } />
      <Route path="/signup" element={<SignUp />}/>
      <Route path="/personal" element={<PersonalInfo />}/>
      <Route path="/verify-email" element={<Emailverification />}/>
      {/* Login */}
      <Route path="/login" element={<Login />}/>
      {/* forgot-password */}
      <Route path="/forgot-password" element={<ForgotPassword/>}/>

    </Routes>
    </>
  )
}

export default App