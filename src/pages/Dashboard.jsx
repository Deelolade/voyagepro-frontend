import React from 'react'
import DashboardSidebar from '../components/DashboardSidebar'
import DashboardMain from '../components/DashboardMain'
import DashboardBottomBar from '../components/DashboardBottomBar'

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="max-w-7xl mx-auto flex gap-10">
        <aside className="xxs:w-1/4 hidden md:block ">
          <DashboardSidebar />
        </aside>
        <main className="md:w-3/4 w-full">
          <DashboardMain />
          <DashboardBottomBar/>
        </main>
      </section>
    </div>

  )
}

export default Dashboard
