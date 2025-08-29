import React from 'react'
import Dashboard from '../../components/admin/Dashboard'
import Sidebar from '../../components/admin/Sidebar'
import DashboardBottomBar from '../../components/admin/DashboardBottom'

const AdminDashboard = () => {
  return (
    <>
    <div className="min-h-screen bg-gray-50">
  <section className="max-w-7xl mx-auto flex gap-10">
    {/* Sidebar */}
    <aside className="xxs:w-1/4 hidden md:block ">
      <Sidebar/>
    </aside>

    {/* Main Content */}
    <main className="md:w-3/4 w-full">
      <Dashboard />
      <DashboardBottomBar/>
    </main>
  </section>
</div>
      
    </>
  )
}

export default AdminDashboard
