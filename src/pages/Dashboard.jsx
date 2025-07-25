import React from 'react'
import DashboardSidebar from '../components/DashboardSidebar'
import DashboardMain from '../components/DashboardMain'

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50">
  <section className="max-w-7xl mx-auto flex">
    {/* Sidebar */}
    <aside className="w-1/4 p-4">
      <DashboardSidebar />
    </aside>

    {/* Main Content */}
    <main className="w-3/4 p-4">
      <DashboardMain />
    </main>
  </section>
</div>

  )
}

export default Dashboard
