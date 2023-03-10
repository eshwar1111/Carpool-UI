import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import HistoryideTile from "./HistoryRideTile";
import "./style.css"


const MyRides:React.FC=()=>{

    const [offeredRides,setOfferedRides]=useState([])
    const [bookedRides,setBookedRides]=useState([])

    const getBookedRides=async()=>{

        const url="https://localhost:7192/api/history/BookedRides?UserId="+localStorage.getItem("userid")
        try{
            const response=await fetch(url)
            const ok=await response.json()
            setBookedRides(ok)
            console.log(ok)
            return ok
        }
        catch(error){
            console.log(error)
            return []
        }

    }

    const  getOfferedRides=async()=>{
        const url="https://localhost:7192/api/history/OfferedRides?UserId="+localStorage.getItem("userid")
        try{
            const response=await fetch(url)
           
            var ok=await response.json()
            setOfferedRides(ok)
            return ok
        }
        catch(error){
            console.log(error)
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
        <div className="booked-rides">
            <h1>Booked Rides</h1>
            <div className="ride-container">
                {bookedRides.map((ride: any)=>{
                    return(
                        <HistoryideTile Ride={ride} flag={true}/>
                    )
                })}
            </div>
        </div>
        <div className="offered-rides">
            <h1>Offered Rides</h1>
            <div className="ride-container">
                {offeredRides.map((ride: any)=>{
                    return(
                        <HistoryideTile Ride={ride} flag={false}/>
                    )
                })}
            </div>
        </div>
        </div>
     </div>   
    )
}

export default MyRides