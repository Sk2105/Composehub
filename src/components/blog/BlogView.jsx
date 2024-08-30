import React, { useEffect } from 'react'
import db from '../../Model/DBConnection'
import { Link, useParams } from 'react-router-dom'
import { animateScroll as scroll } from 'react-scroll'
import MDEditor from '@uiw/react-md-editor';
import { SlArrowLeftCircle } from "react-icons/sl";
import AppContext from "../../Context/AppContext"
import { useContext } from 'react'
import Feedback from '../common/Feedback';
import Footer from '../common/Footer';
import HashLoader from "react-spinners/HashLoader";
import { Helmet } from 'react-helmet';

export default function BlogView() {
  const { currentTopic, setCurrentTopic } = useContext(AppContext)

  const { path } = useParams()
  const database = db
  const [blogItem, setBlog] = React.useState()
  const [titles, setTitles] = React.useState([])
  const [blogTitle, setBlogTitle] = React.useState("")
  const [isShowTitles, setIsShowTitles] = React.useState(false)

  useEffect(() => {
    const fetchBlog = async () => await database.sql`Use Database ComposeBlog;select * from Blogs where title = ${path};`;
    const fetchTitle = async () => await database.sql`Use Database ComposeBlog;select title from Blogs where topicId = ${currentTopic};`;

    setBlog()
    fetchTitle().then((allTitles) => {
      setTitles([])
      for (const title of allTitles) {
        setTitles(prev => [...prev, title.title])
      }
      
    })
    
    fetchBlog().then((blog) => {
      setBlog(blog[0].blog)
      setBlogTitle(blog[0].title)
      setCurrentTopic(blog[0].topicId)

    })
    scroll.scrollTo(0)
  }, [path, currentTopic])






  return (
    <div className='w-full h-fit  flex flex-col bg-black' >
      <Helmet>
        <title>{blogTitle}</title>
        <meta name="description" content="Explore Programming and much more at Composehub" />
        <meta name="keywords" content={`${blogTitle}, Programming, Languages, Education, Composehub, C Language, Java, Python`} />
      </Helmet>
      <nav className='w-full p-3 h-fit bg-black flex items-center border-b-2 border-gray-400/20 justify-items-start'>
        <Link to='/'><SlArrowLeftCircle className=' text-white w-6 h-6 m-1 hover:bg-gray-400/20 rounded-3xl' /></Link>
        <h1 className='text-white text-sm sm:text-xs md:text-xl m-1'>{path}</h1>
      </nav>
      <div className='w-full h-fit bg-black pe-2 ps-2 md:pe-4 md:ps-4'>
        <div className='w-full h-fit flex flex-col sm:flex-row md:flex-row xl:flex-row '>
          <div className='w-full sm:w-1/3 md:w-1/5  xl:w-1/5 2xl:w-1/5 h-[250px] sm:h-fit md:h-fit flex items-start sm:border-r-2 border-gray-400/20 flex-col p-1 md:p-3 ms-1 justify-start'>
            <h1 className='text-gray-400 font-bold'>Topics</h1>
            <div className='pt-2 w-full overflow-y-scroll sm:overflow-hidden h-full scroll-smooth items-center flex flex-col justify-start'>
              {
                titles ? titles.map((title) => {
                  return (
                    <Link to={`/${title}`} className='w-full'>
                      <button className={`w-full duration-150 text-md p-2 m-1 text-start  hover:bg-[#212121] hover:rounded-sm  ${title === blogTitle ? 'rounded-[0px] bg-gray-400/20 border-s-2 text-white border-blue-500 font-bold ps-3 ' : 'bg-black text-gray-300'}`}>{title}</button>
                      <br /></Link>

                  )
                }) :(
                  <div className='w-full h-screen grid place-content-center'>
                    <HashLoader color="white" aria-label='Loading...'/>
                  </div>
                )
              }
            </div>

          </div>
          <div className='w-full border-l-2 border-gray-400/20 sm:w-2/3 md:w-4/5 h-fit p-3 '>
            {
              blogItem ?
                <MDEditor.Markdown source={blogItem} style={{ backgroundColor: "black" }} className='p-1 sm:ps-3 sm:pe-2 md:ps-3 md:pe-2 text-sm sm:text-xl md:text-xl xl:text-xl leading-normal sm:leading-normal md:leading-normal text-gray-300' />
                : (
                  <div className='w-full h-screen grid place-content-center'>
                    <HashLoader color="white" aria-label='Loading...'/>
                  </div>
                )           }
          </div>
        </div>

      </div>
      <div className='w-full h-fit border-t-2 bg-black border-gray-400/20'>

      </div>
      <Feedback />
      <Footer />
    </div>
  )
}