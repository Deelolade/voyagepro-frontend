import React from 'react'
import Sidebar from '../../components/admin/Sidebar'
import Blog from '../../components/admin/Blog'

const BlogManager = () => {
  return (
   <>
    <div className="min-h-screen bg-gray-50">
  <section className="max-w-7xl mx-auto flex gap-10">
    <aside className=" xxs:w-1/4 hidden md:block">
      <Sidebar/>
    </aside>
    <main className="md:w-3/4 w-full">
      <Blog />
    </main>
  </section>
</div>
      
    </>
  )
}

export default BlogManager
