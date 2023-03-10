import React from "react";
import IRide from "../../../config/IRide";
import "./style.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import * as Icon from 'react-bootstrap-icons';
import { ArrowRight } from "react-bootstrap-icons";

interface RideTileProps{
    Ride:any
    bookTheRide:(Ride:any)=>void
}

const RideTile:React.FC<RideTileProps>=({Ride,bookTheRide})=>{
    let date: string=Ride.date;
    var newDate:string=date.substring(0,10)
    return(
            <div className="card11" onClick={(e)=>{e.preventDefault(), bookTheRide(Ride)}}>
                <div className="card1-body">
                    <div className="d-flex">
                        <h5 className="card1-title">{Ride.offeredBy}</h5>
                    </div>
                    <div className="d-grid matched-offer">
                            <div>
                                <label>From</label>
                                <h4>{Ride.startPoint}</h4>
  
                            </div>
                            <div>
 
                                <ul className="icon">
                                <i className="bi bi-circle-fill"></i>
                                <li className="list-group-item me-2"><Icon.CircleFill className="start-circle"/></li>
                                <li className="list-group-item me-1"><Icon.CircleFill className="circle"/></li>
                                <li className="list-group-item me-1"><Icon.CircleFill className="circle"/></li>
                                <li className="list-group-item me-1"><Icon.CircleFill className="circle"/></li>
                                <li className="list-group-item me-2"><Icon.CircleFill className="circle"/></li>
                                <li className="list-group-item loc"><Icon.GeoAltFill className="end-geo"/></li>
                                </ul>
                            </div>
                            <div>
                                <label>To</label>
                                <h4>{Ride.endPoint}</h4>
                            </div>
                            <div>
                                <label>Date</label>
                                <h4>{newDate}</h4>
                            </div>
                            <div></div>
                            <div>
                                <label>Time</label>
                                <h4>{Ride.timeSlot}</h4>
                            </div>
                            <div>
                                <label>Price</label>
                                <h4>{Ride.price}</h4>
                            </div>
                            <div>

                            </div>
                            <div>
                                <label>seats available</label>
                                <h4>{Ride.availableSeats}</h4>
                            </div>
                        </div>
                </div>
            </div>

    )
}

export default RideTile