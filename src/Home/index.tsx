import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import './style.css'
import { useNavigate } from "react-router-dom";
import BgImg from "../assets/img3.png"
const Home:React.FC=()=>{

    const navigate=useNavigate()
    
    const name:string=localStorage.getItem("username")||"username"
    return(
        <div>
            <Navbar/>
            <h1 className="home-heading">Hey {name}!</h1>
            <div className="options d-flex">

            <a className="book-ride option-style" onClick={()=>{navigate("/bookride")}}>Book a ride</a>
            <a className="offer-ride option-style" onClick={()=>{navigate("/offerride")}}>Offer a ride</a>

            </div>
            <img className="home-img" src={BgImg} alt="" />
        </div>
    )
}

export default Home