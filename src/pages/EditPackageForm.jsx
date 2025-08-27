import React from 'react'
import EditForm from '../components/EditPackageForm';
import DashboardBottomBar from '../components/DashboardBottomBar';
const EditPackageForm = () => {
  return (
    <div>
      <EditForm/>
      <div className="mt-10 md:mt-0">
        <DashboardBottomBar/>
      </div>
    </div>
  )
}

export default EditPackageForm
