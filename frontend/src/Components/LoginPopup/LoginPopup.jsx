import React, {useContext, useEffect, useState} from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios';

const LoginPopup = ({setShowLogin}) => {
    
    const {url, setToken}=useContext(StoreContext);
    const [currState, setCurrState] = useState("Login");
    const [data,setData]=useState({
        name: "",
        email: "",
        password: ""
    })


    useEffect(() =>{
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'unset';
        }
    },[]);


    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData({...data, [name]:value})
    }
    
    const onLogin = async(event) => {
    event.preventDefault();
        let newUrl = url;
        if(currState==="Login"){
            newUrl += "/api/user/login";
        }
        else{
            newUrl += "/api/user/register";
        }
        const response = await axios.post(newUrl, data);
        if(response.data.success){
            setToken(response.data.token);
            localStorage.setItem("token", response.data.token);
            setShowLogin(false)
        }
        else{
            alert(response.data.message);
        }
    }
    


  return (
    <div className='login-popup' onClick={()=>setShowLogin(false)}>
        <form onSubmit={onLogin} className="login-popup-container" onClick={e=>e.stopPropagation()}>
            <div className="login-popup-title">
                <h2>{currState}</h2>
                <img className=' w-4 cursor-pointer' onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt=''/>
            </div>
            <div className="login-popup-inputs ">
                {currState==="Login"?<></>:<input type="text" placeholder='Your name' name='name' value={data.name} onChange={onChangeHandler} required/>}
                <input name='email' onChange={onChangeHandler} value={data.email} type='email' placeholder='Your email' required/>
                <input name='password' onChange={onChangeHandler} value={data.password} type="password" placeholder='Password' required/>
            </div>
            <button className="login-popup-button" type="submit">{currState==="Sign Up"?"Create account":"Login"}</button>
            <div className="login-popup-condition">
                <input name='checkbox' className=' mt-[5px]' type="checkbox" required/>
                <p>By continuing, I agree to the Terms & Conditions</p>
            </div>
            {
                currState==="Login"?
                <p>Don't Have an account? <span className='spanChange' onClick={()=>setCurrState("Sign Up")}>Sign up here</span></p>
                : 
                <p>Already Have an account? <span className='spanChange' onClick={()=>setCurrState("Login")}>Login here</span></p>
            }
        </form>
    </div>
  )
}

export default LoginPopup