import { StrictMode } from 'react'
import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements,  RouterProvider,  Route } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Components/Home/Home.jsx'
import About from './Components/About/About.jsx'
import Contact from './Components/Contace/Contace.jsx'
import User from './Components/User/User.jsx'
import GitHub, { GitHubInfoLoader } from './GitHub/GitHub.jsx'


// const router = createBrowserRouter([
//   {
//     path: '/',
//     element:<Layout/>,
//     children:[
//       {
//         path:"",
//         element:<Home />
//       },
//       {
//         path:'about',
//         element:<About/>
//       },
//       {
//         path:'contact',
//         element:<Contact/>

//       }
//     ]

//   },

// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element ={<Layout/>} >
      <Route path ='' element={<Home/>}/>
      <Route path ='About' element={<About/>}/>
      <Route path ='Contact' element={<Contact/>}/>
      <Route path ='user' element={<User/>}/>
      <Route
       loader={GitHubInfoLoader}
       path='github'
       element= {< GitHub/>}

      />
    </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
