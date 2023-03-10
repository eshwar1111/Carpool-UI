import React, { useState } from "react";
import IRide from "../../config/IRide";
import RideTile from "./RideTile";
import "./style.css"
var rides:any[]=[{from:"ok",to:"ok",name:"name",date:"11/11/2022",seats:"2",price:"$100",time:"2-4"},{from:"ok2",to:"ok2",name:"name2",date:"11/11/2022",seats:"2",price:"$100",time:"2-4"}]

interface BookRideRightProps{
    rides:any[]
    bookTheRide:(ride:any)=>void
}


const BookRideRight:React.FC<BookRideRightProps>=({rides,bookTheRide})=>{
    if(rides.length==0){
        return(
            <div className="bookrideright-container">
            <h2>Your Matches</h2>
            <div className="rides-container">! Sorry no rides available, please enter your journey details.</div>
        </div>
        )
    }
    return(
        <div className="bookrideright-container">
            <h2>Your Matches</h2>
            <div className="rides-container">
                {
                    rides.map((ride)=>{
                        return(
                                <RideTile Ride={ride} bookTheRide={bookTheRide}/>
                        )
                    })
                }
            </div>
        </div>

    )
}

export default BookRideRight