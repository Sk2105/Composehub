import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import Contact from './components/contact/Contact'
import BlogView from './components/blog/BlogView'
import AppContext from './Context/AppContext'
import HomeScreen from './components/home/HomeScreen'

import { BrowserRouter, HashRouter, RouterProvider, createHashRouter as createBrowserRouter } from "react-router-dom"
const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <HomeScreen />,
        children: [
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

        ]
    }


])
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
       
           <App />

   
    </React.StrictMode>
)
