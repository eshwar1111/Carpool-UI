import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./style.css"
import jwt from 'jwt-decode'
import Logo from '../assets/logo.png'
import 'bootstrap/js/dist/dropdown'
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar:React.FC=()=>{
    const name:string=localStorage.getItem("username")||"username"
    const navigate=useNavigate()
    
    return(
        <div>
            <nav className="navbar ">
            <div className="container">

                <img  className="navbar-brand logo"src={Logo}alt="" onClick={()=>{navigate("/home")}} />
                <div>
                <div className="dropdown-center">
                    
                    <div className="dropdown-toggle nav-name"  id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                        {name}
                    </div>
                    <ul className="dropdown-menu menu">
                        <li><Link className="dropdown-item" to="/home">Profile</Link></li>
                        <li><Link className="dropdown-item" to="/myrides">My Rides</Link></li>
                        <li><Link className="dropdown-item" to="/login" onClick={()=>{localStorage.clear()}} >LogOut</Link></li>
                    </ul>
                </div>
                </div>
            
            </div>

        </nav>
        </div>
    )
}

export default Navbar