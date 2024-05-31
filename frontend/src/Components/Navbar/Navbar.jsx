/* eslint-disable no-unused-vars */
import {useContext, useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'

import { assets } from "../../assets/assets"
import './Navbar.css'
import { StoreContext } from '../../context/StoreContext'

const Navbar = ({setShowLogin}) => {
    const {getTotalCartAmount, token, setToken} = useContext(StoreContext);
    
    const navigate = useNavigate();

    const logout = () => {
      localStorage.removeItem("token");
      setToken("");
      navigate("/");
    }
    

    const [menu, setMenu] = useState('home');


  return (
    <div className="navbar">
        <Link to="/"><img src={assets.logo} alt="" className="logo"/></Link>
        <ul className="navbar-menu">
            <Link to="/" onClick={()=>{setMenu("home")}} className={menu==="home"?"active": ""}>Home</Link>
            <a href='#explore-menu' onClick={()=>{setMenu("menu")}} className={menu==="menu"?"active": ""}>Menu</a>
            <a href='#app-download' onClick={()=>{setMenu("mobile-app")}} className={menu==="mobile-app"?"active": ""}>Mobile-app</a>
            <a href='#footer' onClick={()=>{setMenu("contact-us")}} className={menu==="contact-us"?"active": ""}>Contact us</a>
        </ul>
        <div className="navbar-right">
            <img src={assets.search_icon} className=' w-6' alt="" />
            <div className="navbar-search-icon">
                <Link to='/cart'><img src={assets.basket_icon} alt="" className=' w-6 cursor-pointer'/></Link>
                <div className={getTotalCartAmount()===0?"":"dot"}></div>
            </div>
            {!token && <button className="navbar-button" onClick={()=>setShowLogin((prev)=>!prev)}>Sign in</button>}
            {token && <div className='navbar-profile'>
                <img src={assets.profile_icon} alt="" />
                <ul className="nav-profile-dropdown">
                    <li onClick={() => navigate('/myorders')
                    }><img src={assets.bag_icon} alt="" /><p>Orders</p></li>
                    <hr />
                    <li onClick={logout}><img src={assets.logout_icon} alt="" /><p>Logout</p></li>
                </ul>
            </div>}
        </div>
    </div>
  )
}

export default Navbar