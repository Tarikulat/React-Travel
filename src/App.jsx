import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import About from './pages/About'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Navbar from './components/Navbar'


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>




        <Route path="/about" element={<About/>} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/home" element={<Home/>} />


        
      </Routes>
    </BrowserRouter>
  )
}

export default App
