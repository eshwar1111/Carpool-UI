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
                        <li><Link className="dropdown-item" to="/login" >LogOut</Link></li>
                    </ul>
                </div>
                </div>
            
            </div>
            {/* <nav class="navbar navbar-light">
            <div class="container-fluid">
                <img class="navbar-brand logo" src="../../assets/images/logo.png">
                <div class="user-login d-flex">
                <h1 class="username">{{username}}</h1>

                <div class="dropdown">

                    <img src="../../../assets/images/user-profile-icon-free-vector.jpg" alt="user-image" class="user-image dropdown-toggle" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">

                    <ul class="dropdown-menu dropdown-menu-end menu" aria-labelledby="dropdownMenuButton">
                    <li><a class="dropdown-item" >Profile</a></li>
                    <li><a class="dropdown-item" routerLink="/welcome" routerLinkActive="active-link">Home</a></li>
                    <li><a class="dropdown-item" routerLink="/my-rides" routerLinkActive="active-link">My Rides</a></li>
                    <li><a class="dropdown-item" routerLink="/login">Logout</a></li>
                    </ul>
                </div>
                </div>
            </div>
            </nav> */}
        </nav>
        </div>
    )
}

export default Navbar