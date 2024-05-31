import React from 'react'
import './AppDownload.css'
import { assets } from '../../assets/assets'

const AppDownload = () => {
  return (
    <div className='app-download' id="app-download">
        <p>For Better Experience Download <br/> Tomato App</p>
        <div className="app-download-platforms *:w-[max(30vw,120px)] *:max-w-[180px] *:cursor-pointer 
            *:transition *:duration-500 hover:*:scale-105">
            <img src={assets.play_store} alt="" />
            <img src={assets.app_store} alt="" />
        </div>
    </div>
  )
}

export default AppDownload