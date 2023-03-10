import React from "react";
import "./style.css"
import * as Icon from "react-bootstrap-icons"

interface HistoryRideTileProps{
    Ride:any
    flag:Boolean
}

const HistoryideTile:React.FC<HistoryRideTileProps>=({Ride,flag})=>{

        var name:string="";
        if(flag){
            name=Ride.offeredBy;
        }
        else{
            name=Ride.bookedBy;
        }
        let date: string=Ride.date;
        var newDate:string=date.substring(0,10)
        return(
            <div className="card1">
            <div className="card1-body">
                <div className="d-flex">
                    <h5 className="card1-title">{name}</h5>
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
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default  HistoryideTile