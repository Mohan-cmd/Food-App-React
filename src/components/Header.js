import React, { useState } from "react"
import  ReactDOM  from "react-dom/client"
import { LOGO_IMAGE } from "../utils/constants"
import { Link } from "react-router-dom"
const Header=()=>{
    const [loginConverter,setLoginConverter] = useState("Login");
    //const LoginClick =()=>{}
    return(
        <div className="header">
            <div className="logoContainer">
                <img className="logo" src={LOGO_IMAGE}></img>
            </div>
            <div className="nav-items">
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                {/* if we write <a href="/about">About</a> it refreshes the page agin so we use Link  */}
                
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/contact">Contact Us</Link>
                </li>
                <li>Cart</li>
                <button className={loginConverter=="Logout" ? "logoutClass": "classbutton"} onClick={()=>loginConverter=="Logout" ? setLoginConverter("Login"):setLoginConverter("Logout")}> {loginConverter} </button>
            </ul>
            </div>
            
        </div>
        
    )
}
export default Header;  