import React, { useContext } from 'react'
import AppContext from '../../Context/AppContext'
import db from '../../Model/DBConnection';
import HomeIntro from './HomeIntro';
import TopicSections from './TopicSections';
import Footer from '../common/Footer'
import Feedback from '../common/Feedback';
import AboutSection from '../about/AboutSection';
import { Helmet } from 'react-helmet';


const fetchBlogs = async (topic) => {
  const query = await db.sql`Use Database ComposeBlog;select * from Blogs where topic = ${topic};`
  return query
}
export default function HomeScreen() {

  return (
    <div className='w-full h-full   bg-[#212121] '>
      <Helmet>
        <title>Explore programming and much more at Composehub</title>
        <meta name="description" content="Composehub is a platform where you can explore programming and much more" />
        <meta name="keywords" content="Composehub, Programming, Web Development, C Programming , Python, Coding, Programming Tutorials, Programming Courses, Web Development Courses, Web Development Tutorials" />
      </Helmet>
      <HomeIntro />
      <TopicSections />
      <AboutSection />
      <Feedback />
      <Footer />

    </div>
  )
}
