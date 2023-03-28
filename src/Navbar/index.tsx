import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./style.css"
import jwt from 'jwt-decode'
import Logo from '../assets/logo.png'
import 'bootstrap/js/dist/dropdown'
import 'bootstrap/dist/css/bootstrap.min.css';
import BgProfile from "../assets/default2.jpg"

const Navbar:React.FC=()=>{
    const name:string=localStorage.getItem("username")||"username"
    const navigate=useNavigate()

    
    
    return(
        <div className="nav-component">
            <div className="nav-container">

                <img  className="navbar-brand logo"src={Logo}alt="" onClick={()=>{navigate("/home")}} />
                <div>
                <div className="dropdown-center">
                    <div className="profile-name">
                        {name}
                    </div>
                    <img src={BgProfile} alt="img"  className="dropdown-toggle nav-name profile-img"  id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false" />
                    
                    <ul className="dropdown-menu menu">
                        <li key="home"><Link className="dropdown-item" to="/home">Profile</Link></li>
                        <li key="myrides"><Link className="dropdown-item" to="/myrides">My Rides</Link></li>
                        <li key="login"><Link className="dropdown-item" to="/login" onClick={()=>{localStorage.clear()}} >LogOut</Link></li>
                    </ul>
                </div>
                </div>
            
            </div>

        </div>
    )
}

export default Navbar