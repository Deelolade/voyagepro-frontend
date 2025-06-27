import { Routes, Route } from "react-router-dom"
import SignUp from "./pages/signup/SignUp"
import Emailverification from "./pages/signup/Emailverification"
import PersonalInfo from "./pages/signup/PersonalInfo"
const App = () => {
  return (
    <>
    <Routes>
      <Route path="/signup" element={<SignUp />}/>
      <Route path="/personal" element={<PersonalInfo />}/>
      <Route path="/verify-email" element={<Emailverification />}/>
    </Routes>
    </>
  )
}

export default App