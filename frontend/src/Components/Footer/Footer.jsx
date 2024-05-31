import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod, voluptate, impedit rem doloremque ut culpa asperiores assumenda distinctio est natus perspiciatis sequi magnam at placeat officiis odio, repellat ea esse maiores velit voluptatem nemo? Dignissimos facilis fugit facere blanditiis iusto?</p>
                <div className="*:w-10 flex *:mr-4 *:cursor-pointer">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-center">
                <h2 className=' text-white'>COMPANY</h2>
                <ul className=' *:mb-[10px] *:cursor-pointer'>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2 className=' text-white'>GET IN TOUCH</h2>
                <ul className=' *:mb-[10px] *:cursor-pointer'>
                    <li>+1-231-323-4345</li>
                    <li>contact@tomato.com</li>
                </ul>
            </div>
        </div>
        <hr className=' w-full h-[2px] my-5 bg-gray-500 border-none'/>
        <p className="footer-copyright">
            Copyright 2024 &copy; Tomato.com - All Right Reserved.
        </p>
    </div>
  )
}

export default Footer