import { FaRegBell, FaRegUserCircle } from 'react-icons/fa'
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
      <section className="py-6 px-3 md:px-4 max-h-screen ">
        <div className="flex justify-between items-center">
          <h2 className='text-2xl sm:text-3xl font-semibold'>Blog Manager </h2>
          <div className="flex space-x-6 items-center">
            <span><FaRegBell className='text-3xl ' /></span>
            <span>< FaRegUserCircle className="scale-150 text-2xl" /></span>
          </div>
        </div>
        <div className="grid grid-cols-2 mt-3 md:grid-cols-3 gap-6 my-2 md:my-6 md:p-6">
          <div className="col-span-1 bg-white rounded-lg px-3 py-3 md:px-6 md:py-6 space-y-3">
            <h3 className='text-sm md:text-xl font-medium'>Total posts</h3>
            <p className='text-lg md:text-2xl font-semibold'>25</p>
          </div>
          <div className="col-span-1 bg-white rounded-lg px-3 py-3 md:px-6 md:py-6 space-y-3">
            <h3 className='text-sm md:text-xl font-medium'>Blog post</h3>
            <p className='text-lg md:text-2xl font-semibold'>105</p>
          </div>
          <div className="col-span-3 mt-0 md:mt-4 p-2 md:p-6">
            <div className=" flex justify-between items-center mb-2 md:mb-4">
              <h2 className='text-2xl font-medium'>Recent Posts</h2>
              <p className='text-sm text-blue'>See More...</p>
            </div>
            <div className=" border border-darkGray/50 rounded-lg ">
              <div className="grid grid-cols-3 gap-3 shadow-lg p-2 text-center z-20">
                <h5 className='text-sm md:text-xl font-medium'>Title</h5>
                <h5 className='text-sm md:text-xl font-medium'>Date</h5>
                <h5 className='text-sm md:text-xl font-medium'>Status</h5>
              </div>
              <div className="h-96 overflow-y-auto scrollbar-hide py-5">
              {
                blogs.map((blog,idx)=>{
                  return(
                    <div className="grid grid-cols-3 space-y-6 items-center border-e-sky-500" key={idx}>
                      <p className='mt-6 text-center text-sm'>{blog.name}</p>
                      <p className='text-center text-sm'>{blog.date}</p>
                      <div className=" text-center">
                      <span className={`text-sm text-center px-3 py-2 rounded-md text-darkGray bg-lightorange ${blog.status === "draft" ? "bg-purple-400":"bg-lightorange"}`}>{blog.status}</span>
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
