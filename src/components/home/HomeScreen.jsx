import React, { useContext } from 'react'
import AppContext from '../../Context/AppContext'
import db from '../../Model/DBConnection';
import HomeIntro from './HomeIntro';
import TopicSections from './TopicSections';
import Footer from '../common/Footer'
import Feedback from '../common/Feedback';
import AboutSection from '../about/AboutSection';


const fetchBlogs = async (topic) => {
  const query = await db.sql`Use Database ComposeBlog;select * from Blogs where topic = ${topic};`
  return query
}
export default function HomeScreen() {
  const { topics } = useContext(AppContext)

  return (
    <div className='w-full h-full   bg-[#212121] '>
      <HomeIntro />
      <TopicSections/>
      <AboutSection/>
      <Feedback/>
      <Footer/>

    </div>
  )
}
