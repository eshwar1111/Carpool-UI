import React, { useEffect, useState } from "react";
import {useForm} from "react-hook-form"
import "./style.css"
import * as Icon from "react-bootstrap-icons"
import { useNavigate } from "react-router-dom";
import { GetAvailableRidesApiHelper } from "../../Utils/ApiCalls";

interface BookRideLeftProps{
    updateRides:(rides:any)=>void;
    updateHasSearched:()=>void;
}

const BookRideLeft:React.FC<BookRideLeftProps>=({updateRides,updateHasSearched})=>{
    const {handleSubmit,register,formState:{errors}}=useForm({mode:"onTouched"})


    const onSubmit=(data:any)=>{
        updateHasSearched()
        GetAvailableRides(data)
    }

    const navigate=useNavigate()





    const GetAvailableRides=async(body:any)=>{
        try{
            const response=await GetAvailableRidesApiHelper(body)
            var newrides= await response.json()
            updateRides(newrides)
        }
        catch(error){
            console.log(error)
        }
    }




    return(
        <div className="bookrideleft-container">
            <div className="bookrideleft-container1">
            <div className="bookride-header">
                <div className="bookride-heading">
                    <h2>Book A Ride</h2>
                    <p>we get you the matches asap !</p>
                </div>
                <div className="checkbox-wrapper-22" >
                <label className="switch" htmlFor="checkbox">
                    <input type="checkbox" id="checkbox" defaultChecked onChange={()=>{navigate("/offerride")}} />
                    <div className="slider round"></div>
                </label>
                </div>

            </div>

            <form className="form-group" onSubmit={handleSubmit(onSubmit)}>
                <div className="bookride-inputs-container">
                    <div className="bookride-inputs">
                        <div className="col-md ">
                        <label htmlFor="">From</label>
                        <input type="text" className="input-bookride" {...register("startpoint",{required:true,pattern:/^[a-zA-Z]*$/})} />
                        {errors.startpoint?.type==="required" && <p className="error">this field is required</p>}
                        {errors.startpoint?.type==="pattern" && <p className="error">enter valid name</p>}
                        </div>
                        
                        <div className="col-md">
                        <label htmlFor="">To</label>
                        <input type="text"  className="input-bookride" {...register("endpoint",{required:true,pattern:/^[a-zA-Z]*$/})} name="endpoint"/>
                        {errors.endpoint?.type==="required" && <p className="error">this field is required</p>}
                        {errors.endpoint?.type==="pattern" && <p className="error">enter valid name</p>}
                        </div>
                        <div className="col-md">
                        <label htmlFor="">Date</label>
                        <input type="date" placeholder="xx/mm/yyyy"  className="input-bookride"{...register("date")} name="date" required/>
                        </div> 
                    </div>
                    <div>
                        <ul className="offerride1-icons">
                        <li className="list-group-item "><Icon.CircleFill className="start-circle"/></li>
                        <li className="list-group-item "><Icon.CircleFill className="circle"/></li>
                        <li className="list-group-item "><Icon.CircleFill className="circle"/></li>
                        <li className="list-group-item "><Icon.CircleFill className="circle"/></li>
                        <li className="list-group-item "><Icon.CircleFill className="circle"/></li>
                        <li className="list-group-item loc"><Icon.GeoAltFill className="end-geo"/></li>
                        </ul>
                    </div>

                </div>
                <label>Time</label>
                <div className="time-container">
                    <label>

                        <input type="radio" {...register("time")} name="time" value={"5-9"} defaultChecked/>
                        <span className="time-option">5am-9am</span>
                    </label>
                    <label>
                        <input type="radio" {...register("time")}name="time" value={"9-12"} />
                        <span className="time-option">9am-12am</span>
                    </label>
                    <label>
                        <input type="radio" {...register("time")}name="time" value={"12-3"}  />
                        <span className="time-option">12am-3pm</span>
                    </label>
                    <label>
                        <input type="radio" {...register("time")}name="time" value={"3-6"}  />
                        <span className="time-option">3pm-6pm</span>
                    </label>
                    <label>
                        <input type="radio" {...register("time")}name="time" value={"6-9"}  />
                        <span className="time-option">6pm-9pm</span>
                    </label>
                    
                    
                </div>
                <button type="submit" className="submit-btn">Submit</button>
            </form>
            </div>
        </div>
    )
}

export default BookRideLeft