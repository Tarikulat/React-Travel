import React from 'react'
import './Style.css'
import {NavLink} from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
        <NavLink to="/" className="nav-link">Home</NavLink>
        <NavLink to="/blog" className="nav-link">Services</NavLink>
        <NavLink to="/package" className="nav-link">Package</NavLink>
        <NavLink to="/booking" className="nav-link">Booking</NavLink>
        <NavLink to="/about" className="nav-link">About</NavLink>
        <NavLink to="/login" className="nav-link">Login</NavLink>
    </nav>
   
  )
}


export default Navbar


    