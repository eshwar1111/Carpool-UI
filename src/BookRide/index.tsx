import React, { useState } from "react";
import IRide from "../config/IRide";
import BookRideLeft from "./BookRideLeft";
import BookRideRight from "./BookRight";
import Navbar from "../Navbar";
import { useNavigate } from "react-router-dom";
import "./style.css"
import { BookTheRideApiHelper } from "../Utils/ApiCalls";
import {baseUrl} from "../../package.json"


const BookRide:React.FC=()=>{
    const [rides,setrides]=useState([])

    const [hasSearched,setSearched]=useState(false)

    const updatedHasSearched=()=>{
        setSearched(true)
    }

    const updateRides=(rides:any)=>{
        setrides(rides)
    }

    const navigate=useNavigate()

    const bookTheRide=async(ride:any)=>{
        try{
            const response=await BookTheRideApiHelper(ride)
            var ok=await response.json()
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
            <BookRideLeft updateRides={updateRides} updateHasSearched={updatedHasSearched}/>
            <BookRideRight rides={rides} bookTheRide={bookTheRide} hasSearched={hasSearched} /> 
            </div>
       </div>
    )
}

export default BookRide