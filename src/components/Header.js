import React, { useState } from "react"
import  ReactDOM  from "react-dom/client"
import { LOGO_IMAGE } from "../utils/constants"
import { Link } from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus"
const Header=()=>{
    const [loginConverter,setLoginConverter] = useState("Login");
    //const LoginClick =()=>{}
    return(
        <div className="flex justify-between m-4 shadow-lg border-2 border-[#FEA993] ">
            <div className="logoContainer">
                <img className="logo" src={LOGO_IMAGE}></img>
            </div>
            <div className="flex items-center">
            <ul className="flex p-4">
               <li className="ml-4 mr-4">Online Status: {useOnlineStatus() ? "✅" : "🔴"}</li>
                <li className="ml-4 mr-4">
                    <Link to="/">Home</Link>
                </li>
                {/* if we write <a href="/about">About</a> it refreshes the page agin so we use Link  */}
                
                <li className="ml-4 mr-4">
                  <Link to="/about">About</Link>
                </li>
                <li className="ml-4 mr-4">
                  <Link to="/contact">Contact Us</Link>
                </li>
                <li className="ml-4 mr-4">
                    <Link to="/grocery">Grocery</Link>
                </li>
                <li className="ml-4 mr-4">Cart</li>
                </ul>
                <button className={`bg ${loginConverter=="Logout" ? 'bg-red-200': "bg-black-200"} mr-4 pl-2 pr-2 pt-1 pb-1 border border-black` } onClick={()=>loginConverter=="Logout" ? setLoginConverter("Login"):setLoginConverter("Logout")}> {loginConverter} </button>
            
            </div>
            
        </div>
        
    )
}
export default Header;  