import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './app.css'

import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Skills from './pages/Skills'

const router = createBrowserRouter([
  {
    path:"/",
    element: Home()
  },
  {
    path: "/about",
    element: About()
  },
  {
    path: "/projects",
    element: Projects()
  },
  {
    path: "/skills",
    element: Skills()
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
