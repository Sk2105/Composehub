import React from 'react'
import { Link } from 'react-router-dom'
export default function BlogCard({ blog }) {
  
  return (
    <div className='w-[200px] h-fit inline-block border border-gray-300 rounded-xl'>
      <div className='w-full h-fit  rounded-2xl   justify-center items-center flex-col flex'>
        <img src={blog.img} alt="" className='w-full h-4/5  rounded-xl ' />
        <p className='text-center font-bold text-white c-2'>{blog.title}</p>
        <Link to={`/${blog.title}`} ><button className='bg-black p-2  rounded-md hover:bg-gray-800 text-sm text-white'>Read More</button></Link>
      </div>
    </div>

  )
}
