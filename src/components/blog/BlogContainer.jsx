import React, { useEffect } from 'react'
import BlogCard from './BlogCard'
import db from '../../Model/DBConnection'


export default function BlogContainer({ topic }) {
  const [blogs, setBlogs] = React.useState([])

  const fetchBlogs = async () => {
    const query = await db.sql`Use Database ComposeBlog;select * from Blogs where topic = ${topic};`
    return query
  }

  useEffect(() => {
    fetchBlogs().then((blog) => {
      for (const item of blog) {
        setBlogs(prev => [...prev, item])
      }
    })
  }, [topic])
  
  return (

    <div className='w-full h-fit flex justify-center items-center flex-col p-2'>
      <h1 className='text-xl text-black font-bold'>{topic}</h1>
      <div className={`w-full h-fit p-2 relative  space-x-4 scroll  overflow-x-scroll whitespace-nowrap scroll-smooth`}>
        {
          blogs.map((blog) => {
            return (
              <BlogCard blog={blog} key={blog.title} />
            )
          })
        }
      </div>
    </div>
  )
}
