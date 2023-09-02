import { useState } from 'react'
import './App.css'
import './components/Footer'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Blog from './pages/Blog'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import About from './pages/About'
import Package from './pages/Package'
import Booking from './pages/Booking'
import Login from './pages/Login'
import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/blog" element={<Blog/>} />

        <Route path="/about" element={<About/>} />
        <Route path="/package" element={<Package/>} />
        <Route path="/booking" element={<Booking/>} />
        <Route path="/login" element={<Login/>} />

        


       


        
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App
