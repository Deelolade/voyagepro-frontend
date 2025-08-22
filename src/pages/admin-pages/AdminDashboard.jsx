import React from 'react'
import Dashboard from '../../components/admin/Dashboard'
import Sidebar from '../../components/admin/Sidebar'

const AdminDashboard = () => {
  return (
    <>
    <div className="min-h-screen bg-gray-50">
  <section className="max-w-7xl mx-auto flex gap-10">
    {/* Sidebar */}
    <aside className="w-1/4 ">
      <Sidebar/>
    </aside>

    {/* Main Content */}
    <main className="w-3/4 ">
      <Dashboard />
    </main>
  </section>
</div>
      
    </>
  )
}

export default AdminDashboard
