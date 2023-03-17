import React, { useState } from "react";
import IRide from "../config/IRide";
import BookRideLeft from "./BookRideLeft";
import BookRideRight from "./BookRight";
import Navbar from "../Navbar";
import { useNavigate } from "react-router-dom";
import "./style.css"
import PopUp from "./PopUp";
import {baseUrl} from "../../package.json"


const BookRide:React.FC=()=>{
    const [rides,setrides]=useState([])

    const updateRides=(rides:any)=>{
        setrides(rides)
    }

    const navigate=useNavigate()

    const bookTheRide=async(ride:any)=>{
        const url=baseUrl+"bookRide/bookTheRide?UserId="+localStorage.getItem("userid") || "1"
        try{
            const response=await fetch(url,{method:"POST",
            headers: {
            Accept: 'application.json',
            'Content-Type': 'application/json'
            },
            body:JSON.stringify(ride)
            })
            var ok=await response.json()
            console.log(ok)
            if(ok){
                navigate("/home")
            }
        }
        catch(error){
            console.log(error)
        }
    }

    return(
        <div className="bookride-main">
            <Navbar/>
            <div className="bookride-container">
            <BookRideLeft updateRides={updateRides}/>
            <BookRideRight rides={rides} bookTheRide={bookTheRide}/> 
            </div>
       </div>
    )
}

export default BookRide