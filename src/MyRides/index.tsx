import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import HistoryideTile from "./HistoryRideTile";
import "./style.css"
import {baseUrl} from "../../package.json"


const MyRides:React.FC=()=>{

    const [offeredRides,setOfferedRides]=useState([])
    const [bookedRides,setBookedRides]=useState([])

    const getBookedRides=async()=>{

        const url=baseUrl+"history/BookedRides?UserId="+localStorage.getItem("userid")
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
        const url=baseUrl+"history/OfferedRides?UserId="+localStorage.getItem("userid")
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
            
            {bookedRides.length==0&& <div>---  you haven't booked any rides</div> }
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
            {offeredRides.length==0&& <div>---  you haven't offered any rides</div> }
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