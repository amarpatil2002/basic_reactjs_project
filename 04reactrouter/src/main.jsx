import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, createBrowserRouter,RouterProvider ,createRoutesFromElements } from 'react-router-dom'
import Layout from '../src/Layout.jsx'
import Home from '../src/components/Home/Home.jsx'
import Contact from '../src/components/Contact/Contact.jsx'
import About from '../src/components/About/About.jsx'
import User from '../src/components/User/User.jsx'
import Getapidata,{apiDataLoader} from './components/Github/Github .jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>} >
        <Route path='' element={<Home />} />
        <Route path='contact' element={<Contact />} />
        <Route path='about' element={<About/>} />
        <Route path='user/:userID' element={<User/>} />
        <Route loader={apiDataLoader} path='getapidata' element={<Getapidata />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
