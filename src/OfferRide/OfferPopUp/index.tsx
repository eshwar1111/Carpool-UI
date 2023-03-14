import React from "react";
import { useNavigate } from "react-router-dom";
import "./style.css"


interface OfferPopUpProps{
    togglePopUp:()=>void
}


const OfferPopUp:React.FC<OfferPopUpProps>=({togglePopUp})=>{
    const navigate=useNavigate()
    
    return(
        <div className="popup-box">
            <div className="box">
            <div className="close-btn-con">
            </div>
            <h3 className="popup-content">Offered the ride successfully</h3>
            <div className="btn-container">
            <button className="ok-btn" onClick={(e)=>{e.preventDefault,togglePopUp(),navigate("/home")}}>ok</button>
            </div>
            </div>
        </div>
    )

}

export default OfferPopUp