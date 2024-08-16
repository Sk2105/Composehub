import React from 'react'
import { Link } from 'react-scroll';

export default function HomeHeader() {
    return (
        <div className='w-full h-fit border-b-2 border-gray-400/20 bg-black p-2'>
            <div className='w-full h-fit grid p-0 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-2 sm:gap-2 md:gap-2 xl:gap-2 items-center'>

                <h1 className='text-xl md:text-2xl xl:text-2xl 2xl:text-3xl font-bold text-start md:ps-4 text-white drop-shadow-xl shadow-violet-600 '>Composehub.in</h1>

                <div className='w-0 sm:w-full md:w-full xl:w-full  h-0 sm:h-fit md:h-fit  xl:h-fit flex justify-end items-center flex-row me-6'>
                    <Link to="topics" smooth={true}
                        offset={10}
                        duration={500}><span className='text-white m-1 cursor-pointer  ps-2 pe-2 pb-1   hover:border-b-[3px] hover:border-violet-600 '>Topics</span></Link>

                    <Link to="about" smooth={true}
                        offset={10}
                        duration={500}><span className='text-white m-1 cursor-pointer ps-2 pe-2 pb-1   hover:border-b-[3px] hover:border-violet-600'>About</span></Link>

                    <Link to="feedback" smooth={true}
                        offset={10}
                        duration={500}><span className='text-white m-1 cursor-pointer   ps-2 pe-2 pb-1   hover:border-b-[3px] hover:border-violet-600'>Feedback</span></Link>
                </div>
            </div>
        </div>
    )
}
