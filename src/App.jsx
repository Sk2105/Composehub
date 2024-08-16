import { useEffect, useState } from 'react'

import {RouterProvider,  createBrowserRouter } from 'react-router-dom'
import Contact from './components/contact/Contact'
import BlogView from './components/blog/BlogView'
import AppContext from './Context/AppContext'
import HomeScreen from './components/home/HomeScreen'
import db from './Model/DBConnection'

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <HomeScreen />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "*",
    element: <div>404</div>,
  },
  {
    path: "/:path",
    element: <BlogView />,
  }

])
function App() {
  const [onScroll, setOnScroll] = useState(0)
  const [topics, setTopics] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)

  const [currentTopic, setCurrentTopic] = useState(1)

  const fetchBlogs = async () => {
    const query = await db.sql`Use Database ComposeBlog;select * from Topics;`
    return query
  }
  useEffect(() => {
    if (isLoaded) return
    fetchBlogs().then((topic) => {
      console.log(topic);
      setTopics(topic)
      setIsLoaded(true)
    }).catch((err) => console.log(err))
  }, [])



  return (
    <Provider topics={topics} onScroll={onScroll} setOnScroll={setOnScroll} currentTopic={currentTopic} setCurrentTopic={setCurrentTopic} />
  )
}

function Provider({ topics, currentTopic, setCurrentTopic, onScroll, setOnScroll }) {
  return (
    <AppContext.Provider value={{ topics, currentTopic, setCurrentTopic, onScroll, setOnScroll }}>
      <RouterProvider router={appRouter} />
    </AppContext.Provider>
  )

}

export default App
