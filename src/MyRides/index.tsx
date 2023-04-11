import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import HistoryideTile from "./HistoryRideTile";
import "./style.css"
import { GetBookedRidesApiHelper,GetOfferedRidesApiHelper } from "../Utils/ApiCalls";


const MyRides:React.FC=()=>{

    const [offeredRides,setOfferedRides]=useState([])
    const [bookedRides,setBookedRides]=useState([])
    const [showBookedRides,setShowBooked]=useState(true)
    const [showOfferedRides,setShowOffered]=useState(true)
    const [currentRide,setCurrentRide]=useState("Booked-Rides")


    const switchRides=()=>{
        if(currentRide=="Booked-Rides"){
            setShowBooked(true)
            setShowOffered(false)
            setCurrentRide("Offered-Rides")
        }
        else{
            setShowBooked(false)
            setShowOffered(true)
            setCurrentRide("Booked-Rides")
            
        }

    }

    const getBookedRides=async()=>{
        try{
            const response=await GetBookedRidesApiHelper()
            const ok=await response.json()
            setBookedRides(ok)
            return ok
        }
        catch(error){
            return []
        }
    }

    const  getOfferedRides=async()=>{
        try{
            const response=await GetOfferedRidesApiHelper()
            var ok=await response.json()
            setOfferedRides(ok)
            return ok
        }
        catch(error){
            return []
        }
    }
    useEffect(()=>{
        getBookedRides()
        getOfferedRides()
    },[]);
    
    return(
     <div className="myrides-page">
        <Navbar/>
        <div className="myrides-container">
        <button className="switch-history" onClick={(e)=>{e.preventDefault(),switchRides()}}>Show {currentRide} </button> 
        {showBookedRides&&<div className="booked-rides">
            <h1>Booked Rides</h1>
            
            {bookedRides.length==0&& <div>---  you haven't booked any rides</div> }
            <div className="ride-container">
                {bookedRides.map((ride: any)=>{
                    return(
                        <HistoryideTile Ride={ride} flag={true}/>
                    )
                })}
            </div>
        </div>}
        {showOfferedRides&&<div className="offered-rides">
            <h1>Offered Rides</h1>
            {offeredRides.length==0&& <div>---  you haven't offered any rides</div> }
            <div className="ride-container">
                {offeredRides.map((ride: any)=>{
                    return(
                        <HistoryideTile Ride={ride} flag={false}/>
                    )
                })}
            </div>
        </div>}
        </div>
     </div>   
    )
}

export default MyRides