import { useState } from 'react'
// import './App.css'
// import from './components/Footer'



import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Services from './pages/Services'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import About from './pages/About'
import Package from './pages/Package'
import Booking from './pages/Booking'
import Login from './Login_from/Login'
import Footer from './components/Footer'

// import FrontHome from './Frontend/FrontHome'



function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/package" element={<Package/>} />
        <Route path="/booking" element={<Booking/>} />
        <Route path="/login" element={<Login/>} />
        {/* <Route path="/hha" element={<FrontHome/>} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
