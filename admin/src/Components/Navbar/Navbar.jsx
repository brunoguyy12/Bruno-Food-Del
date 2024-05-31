import React from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='navbar-logo-container'>
            <img src={assets.logo} className='logo' alt=""/>
            <span className='title'>Admin Panel</span>
        </div>
        <img src={assets.profile_image} className='profile' alt="" />
    </div>
  )
}

export default Navbar