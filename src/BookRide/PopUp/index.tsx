import React from "react";
import "./style.css"
interface PopUpProps{
    togglePopUp:()=>void,
    ride:any[],
    bookTheRide:(ride:any)=>void
}


const PopUp:React.FC<PopUpProps>=({togglePopUp,ride,bookTheRide})=>{
    
    return(
        <div className="popup-box">
            <div className="box">
            <div className="close-btn-con">
            <button className="close-btn" onClick={(e)=>{e.preventDefault,togglePopUp}}>x</button>
            </div>
            <h3 className="popup-content">confirm to book the ride</h3>
            <div className="btn-container">
            <button className="yes-btn" onClick={(e)=>{e.preventDefault,bookTheRide(ride)}}>yes</button>
            <button className="no-btn"  onClick={(e)=>{e.preventDefault,togglePopUp}}>no</button>
            </div>
            </div>
        </div>
    )
}

export default PopUp