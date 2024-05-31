import React from 'react'
import './Sidebar.css'
import { assets } from '../../assets/assets'
import { IoAddCircleOutline } from "react-icons/io5";
import { FaRegCalendarCheck } from "react-icons/fa6";
import {NavLink} from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="sidebar-options">
            <NavLink to="/add" className="sidebar-option">
                <IoAddCircleOutline className=' text-[35px] text-slate-600'/>
                <p>Add Items</p>
            </NavLink>
            <NavLink to="/list" className="sidebar-option">
                <FaRegCalendarCheck className=' text-[30px] text-slate-600'/>
                <p>List Items</p>
            </NavLink>
            <NavLink to="/orders" className="sidebar-option">
                <FaRegCalendarCheck className='text-[30px] text-slate-600'/>
                <p>Orders</p>
            </NavLink>
        </div>
    </div>
  )
}

export default Sidebar