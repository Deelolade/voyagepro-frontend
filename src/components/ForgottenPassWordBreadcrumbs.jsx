import { useLocation } from 'react-router-dom'
import { FaChevronRight } from "react-icons/fa";

const BreadCrumbs = () => {
  const location = useLocation();
  const currentPath = location.pathname; 
  const signupSteps = [
    {title: "Forgot Password ", path:"/forgot-password", icon: <FaChevronRight/>, currentStep: 1},
    { title: "Email Sent", path:"/email-sent", icon:<FaChevronRight/>, currentStep:2},
    {title: "Create New Password", path:"/create-password", icon:"", currentStep: 3}
  ]
  return (
    <nav className='flex space-x-2 text-[15px]  '>
    {signupSteps.map((step, idx)=>{
         const isActive = step.path === currentPath;
      const isCompleted = signupSteps.findIndex((s)=> s.path === currentPath) > idx ;
      return (
        <div key={step.path}>
          <p className={` flex space-x-2 items-center font-semibold`}>
            <span className={` ${ isActive ? "bg-blue-500 text-white  border-none " : isCompleted ? "bg-blue-500 text-white border-none " : "bg-gray-300"}flex text-gray-400 border-2 border-gray-400 rounded-full h-6 w-6 text-center items-center justify-center text-sm`}>{step.currentStep}</span>
            <span className='xs:text-sm'>{step.title}</span><span>{step.icon}</span>
          </p>
          {idx < signupSteps.length - 1 && <span className='text-gray-300'></span> }
        </div>
      )
    })}
    </nav>
  )
}

export default BreadCrumbs