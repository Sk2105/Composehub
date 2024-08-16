import React, { useMemo, useContext } from 'react'
import TopicContainer from './TopicContainer'
import { HashLoader } from 'react-spinners'
import AppContext from '../../Context/AppContext'

function TopicSections() {
  const { topics } = useContext(AppContext)

  return (
    <div className='w-full h-full border-t-2 border-gray-400/20 bg-black p-2 md:p-4' id='topics'>

      {
        topics.length > 0 ? (
          <div>
            <div className='w-full h-fit'>
              <h1 className='text-2xl md:text-3xl xl:text-3xl text-center text-white font-semibold p-2 md:p-4'>Browse Topics</h1>
            </div>
            <div className='w-full h-fit grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-3 sm:gap-3 md:gap-5 p-2 sm:p-4 md:p-4 items-center'>
              {
                topics.map((topic) => {
                  return (
                    <TopicContainer key={topic.topicId} topic={topic} />
                  )
                })
              }
            </div>
          </div>
        ) : (
          <div className='w-full h-screen grid place-content-center'>
                    <HashLoader color="white" aria-label='Loading...'/>
                  </div>
        )      }


    </div>
  )
}


export default TopicSections