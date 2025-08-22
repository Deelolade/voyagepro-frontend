import React from 'react'
import { FaRegBell } from 'react-icons/fa'
import profileImage from "../../images/landing-image-1.png";
const Blog = () => {
  const blogs = [
    {
      "name": "Exploring the Streets of Marrakech",
      "date": "10 Aug, 2025",
      "status": "published"
    },
    {
      "name": "A Weekend in Paris",
      "date": "15 Aug, 2025",
      "status": "draft"
    },
    {
      "name": "Hiking the Swiss Alps",
      "date": "20 Aug, 2025",
      "status": "published"
    },
    {
      "name": "Tokyo Nightlife Adventures",
      "date": "01 Sep, 2025",
      "status": "published"
    },
    {
      "name": "Safari in Kenya",
      "date": "05 Sep, 2025",
      "status": "draft"
    },
    {
      "name": "Road Trip Across California",
      "date": "12 Sep, 2025",
      "status": "published"
    },
    {
      "name": "Discovering the Pyramids of Giza",
      "date": "20 Sep, 2025",
      "status": "draft"
    },
    {
      "name": "Venice Gondola Experience",
      "date": "25 Sep, 2025",
      "status": "published"
    },
    {
      "name": "Beach Escape in Bali",
      "date": "03 Oct, 2025",
      "status": "draft"
    },
    {
      "name": "Cultural Tour of Istanbul",
      "date": "10 Oct, 2025",
      "status": "published"
    },
    {
      "name": "Northern Lights in Iceland",
      "date": "18 Oct, 2025",
      "status": "published"
    },
    {
      "name": "Christmas Markets in Germany",
      "date": "14 Dec, 2025",
      "status": "draft"
    }
  ]

  return (
    <>
      <section className="py-6 px-4 max-h-screen ">
        <div className="flex justify-between items-center">
          <h2 className='text-3xl font-semibold'>Blog Manager </h2>
          <div className="flex space-x-6 items-center">
            <span><FaRegBell className='text-3xl ' /></span>
            <img src={profileImage} alt="" className='h-12 w-12 rounded-full object-cover' />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-6 my-6 p-6">
          <div className="col-span-1 bg-white rounded-lg px-6 py-6 space-y-3">
            <h3 className='text-xl font-medium'>Total posts</h3>
            <p className='text-2xl font-semibold'>25</p>
          </div>
          <div className="col-span-1 bg-white rounded-lg px-6 py-6 space-y-3">
            <h3 className='text-xl font-medium'>Blog post</h3>
            <p className='text-2xl font-semibold'>105</p>
          </div>
          <div className="col-span-3 mt-4 p-6">
            <div className=" flex justify-between items-center mb-4">
              <h2 className='text-2xl font-medium'>Recent Posts</h2>
              <p className='text-sm text-blue'>See More...</p>
            </div>
            <div className=" border border-darkGray/50 rounded-lg ">
              <div className="grid grid-cols-3 gap-3 shadow-lg p-2 text-center z-20">
                <h5 className='text-xl font-medium'>Title</h5>
                <h5 className='text-xl font-medium'>Date</h5>
                <h5 className='text-xl font-medium'>Status</h5>
              </div>
              <div className="h-96 overflow-y-auto scrollbar-hide py-5">
              {
                blogs.map((blog,idx)=>{
                  return(
                    <div className="grid grid-cols-3 space-y-8 items-center" key={idx}>
                      <p className='text-center text-sm'>{blog.name}</p>
                      <p className='text-center'>{blog.date}</p>
                      <div className=" text-center">
                      <span className={`text-center px-3 py-2 rounded-md text-darkGray bg-lightorange ${blog.status === "draft" ? "bg-purple-400":"bg-lightorange"}`}>{blog.status}</span>
                      </div>
                    </div>

                  )
                })
              }
              </div>
            </div>

          </div>
        </div>

      </section>
    </>
  )
}

export default Blog
