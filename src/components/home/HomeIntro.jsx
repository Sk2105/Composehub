import React from 'react'
import model from '../../assets/model.png'
import { Link } from 'react-scroll'
import HomeHeader from '../common/HomeHeader'

export default function HomeIntro() {
  return (
    <div className='w-full h-full flex justify-center items-center p-1 flex-col bg-black'>
      <HomeHeader />
      <div className='w-full h-fit grid grid-cols-1 place-self-end sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-5 p-2 md:p-4 xl:p-4 place-content-center'>
        <div className='w-full order-2 sm:order-1 h-full flex justify-center  flex-col p-2 sm:ps-4'>

          <h1 className='text-3xl sm:text-4xl md:text-4xl xl:text-5xl 2xl:text-7xl leading-14  mb-2 text-center sm:text-start  drop-shadow-xl text-white'>
            Explore programming and much more at <span className='text-violet-600 font-bold'>Composehub</span>     <br />
          </h1>
          <p className='mb-2 text-gray-400 text-center sm:text-start '>
            Composehub is a platform that provides you with the tools and resources you need to unleash your creativity.
            Learning programming languages is a fun and engaging experience.
          </p>
          <Link className='w-full flex justify-center sm:justify-start' to="topics" smooth={true} offset={10} duration={500}><button className='w-fit mt-2 hover:rounded-2xl duration-150 bg-violet-600 text-white p-2 rounded '>Get Started</button>
          </Link>



        </div>
        <div className='w-full h-full p-2 md:p-4 xl:p-4 order-1 md:order-2'>
          <img src={model} alt="" />
        </div>

      </div>

    </div>

  )
}
