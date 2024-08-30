import React from 'react'
import { Link } from 'react-router-dom'
import AppContext from '../../Context/AppContext'
import { useContext } from 'react'

export default function TopicContainer({ topic }) {
    const { setCurrentTopic } = useContext(AppContext)
    return (
        <div className='w-full shadow-xl pb-4 shadow-violet-600/30 bg-black  h-full md:hover:scale-110 sm:hover:scale-105 xl:hover:scale-110 duration-300  flex flex-col hover:shadow-xl hover:shadow-violet-600 justify-start items-center  rounded-xl'>
            <img loading='lazy' src={topic.image} alt="" className='w-full h-[200px] object-fill p-[-2px] rounded-xl content-center' />
            <h1 className='w-full text-center ps-1 pe-1 text-xl sm:text-xl md:text-2xl xl:text-2xl text-balance font-bold text-white m-1'>{topic.topicName}</h1>
            <h2 className='text-[14px] sm:text-[15px] md:text-[16px] text-center h-fit sm:h-[150px] md:h-[130px] xl:h-[120px] text-gray-400 ms-2 me-2'>
                {
                    topic.description
                }
            </h2>
            <Link to={`/${topic.topicTitle}`} onClick={() => {
                setCurrentTopic(topic.topicId)
            }}><button className='w-fit mb-2 h-fit mt-2 bg-violet-600 p-2 hover:rounded-3xl rounded-md duration-300 text-white text-sm'>Read More</button></Link>

        </div>
    )
}
