import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import IOfferRide from "../config/IOfferRide";
import Navbar from "../Navbar";
import {useForm} from "react-hook-form"
import "./style.css"
import * as Icon from "react-bootstrap-icons"
import { useNavigate } from "react-router-dom";
import AddStopsInput from "./AddStopsInput";
import OfferPopUp from "./OfferPopUp";
import {baseUrl} from "../../package.json"

const OfferRide:React.FC=()=>{

const [inputFields, setInputFields] = useState([""]);

const [showform2,setform2]=useState(false)


const { register , handleSubmit ,formState:{errors}}=useForm({mode:"onTouched"})

const [isOpen,setOfferPopup]=useState(false)

const bottomRef=useRef<null | HTMLDivElement>(null)

const togglePopUp=()=>{
    setOfferPopup(!isOpen)
}
useEffect(() => {
    bottomRef.current?.scrollIntoView({behavior:"smooth"});
  }, [inputFields]);
 
const addInputField = ()=>{
        setInputFields([...inputFields, "" ])
    }

const removeInputFields = (index:number)=>{
        const rows = [...inputFields];
        rows.splice(index, 1);
        setInputFields(rows);
   }
   
const handleChange = (index:number, evnt:React.ChangeEvent<HTMLInputElement>)=>{
    const value = evnt.currentTarget.value;
    const list = [...inputFields];
    list[index] = value;
    setInputFields(list);
}

const navigate=useNavigate();

const onSubmit=async (data:any)=>{
    console.log(data);
    console.log(inputFields)
    if(inputFields[inputFields.length-1]==""){
        inputFields.pop()
    }
    var path1:string[]=[data.from.toString()].concat(inputFields)
    path1.push(data.to.toString())
    const body:IOfferRide={
        path:path1,
        price:Number(data.price),
        availableseats:Number(data.availableSeats),
        date:new Date(data.date.toString()),
        timeslot:data.time.toString()
    }
    console.log(body)
    OfferRide(body)
   }




   const OfferRide=async(body:any)=>{
    const url=baseUrl+"offerride?UserId="+localStorage.getItem("userid") || "1"
    try{
        const response=await fetch(url,{method:"POST",
        headers: {
        Accept: 'application.json',
        'Content-Type': 'application/json'
        },
        body:JSON.stringify(body)
        })
        var ok=await response.json()
        console.log(ok)
        if(ok){
            setOfferPopup(true)
        }
    }
    catch(error){
        console.log(error)
        alert("an error occured")
    }
   }

   
    return(
        <div className="offerride-page">
            <Navbar/>
            {isOpen&&<OfferPopUp togglePopUp={togglePopUp}/>}
            <div className="offerride-container">
                <form onSubmit={handleSubmit(onSubmit)}  className="form-control">
                    <div className="offerride-form-container">

                        <div className="offerride-form1">
                            <div className="offerride-form-header">
                                <div className="offerride-heading">
                                    <h2>Offer A Ride</h2>
                                    <p>we get you the matches asap !</p>
                                </div>
                                <div className="checkbox-wrapper-22" >
                                <label className="switch" htmlFor="checkbox">
                                    <input type="checkbox" id="checkbox"  onChange={()=>{navigate("/bookride")}}/>
                                    <div className="slider round"></div>
                                </label>
                                </div>
                            </div>
                            <div className="offerride1-input-container">
                                <div className="offerride1-inputs">
                                    <div className="col-md">
                                        <label htmlFor="">From</label>
                                        <input type="text" className="input-offerride"{...register("from",{required:true,pattern:/^[a-zA-Z]*$/})}/>
                                        {errors.from?.type==="required" && <p className="error">this field is required</p>}
                                        {errors.from?.type==="pattern" && <p className="error">enter valid name</p>}
                                    </div>
                                   
                                    <div className="col-md">
                                        <label htmlFor="">To</label>
                                        <input type="text" className="input-offerride" {...register("to",{required:true,pattern:/^[a-zA-Z]*$/})}name="to" required/>
                                        {errors.to?.type==="required" && <p className="error">this field is required</p>}
                                        {errors.to?.type==="pattern" && <p className="error">enter valid name</p>}
                                    </div>
                                    <div className="col-md">

                                        <label htmlFor="">Date</label>
                                        <input type="date"  className="input-offerride"{...register("date")}name="date" min={new Date().toISOString().split("T")[0]}  required/>
                                        
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
                                    <input type="radio"  {...register("time")}name="time" value={"12-3"}  />
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
                            <button className="btn nxt-btn" onClick={(e)=>{e.preventDefault(),setform2(true)}}>Next{">>"}</button>
                        </div>


                        {showform2?(
                            
                            <div className="offerride-form2">
                                <div className="offerride-form-header">
                                    <div className="offerride-heading">
                                        <h2>Offer A Ride</h2>
                                        <p>we get you the matches asap !</p>
                                    </div>
                                    <div className="checkbox-wrapper-22" >
                                    <label className="switch" htmlFor="checkbox">
                                        <input type="checkbox" id="checkbox"  onChange={()=>{navigate("/bookride")}}/>
                                        <div className="slider round"></div>
                                    </label>
                                    </div>
                                </div>
                                <div className="offerride2-inputs-container">
                                    <div className="stops-container">
                                        {inputFields.map((stop,index)=>{
                                            if(index==inputFields.length-1){
                                                return(
                                                    <AddStopsInput addInputField={addInputField} index={index} handleChange={handleChange}/>
                                                )
                                            }
                                            return(
                                                <div className="stops">
                                                <label htmlFor="">stop {index+1} :</label>
                                                <input  type="text" className="input-offerride" pattern="^[a-zA-Z]*$" required name="stop" value={inputFields[index]} onChange={(e)=>{handleChange(index,e)}}/>
                                                </div>
                                            )
                                        })}
                                        <div ref={bottomRef}/>
                                    </div>
                                    <div className="offerride2-icon-container">
                                        <ul className="offerride2-icons">
                                        <li className="list-group-item "><Icon.CircleFill className="start-circle"/></li>
                                        <li className="list-group-item "><Icon.CircleFill className="circle"/></li>
                                        <li className="list-group-item "><Icon.CircleFill className="circle"/></li>
                                        <li className="list-group-item "><Icon.CircleFill className="circle"/></li>
                                        <li className="list-group-item "><Icon.CircleFill className="circle"/></li>
                                        <li className="list-group-item "><Icon.CircleFill className="circle"/></li>
                                        <li className="list-group-item "><Icon.CircleFill className="circle"/></li>
                                        <li className="list-group-item "><Icon.CircleFill className="circle"/></li>
                                        <li className="list-group-item loc"><Icon.GeoAltFill className="end-geo"/></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="seatsprice-div">
                                    <div className="seats-div">
                                        <div className="title">Available Seats</div>
                                        <div className="seat-container">
                                            <label>
                                                <input type="radio" {...register("availableSeats")} name="availableSeats" value={1} defaultChecked />
                                                <span className="seat-option">1</span>
                                            </label>
                                            <label>
                                                <input type="radio" {...register("availableSeats")}name="availableSeats" value={2} />
                                                <span className="seat-option">2</span>
                                            </label>
                                            <label>
                                                <input type="radio" {...register("availableSeats")}name="availableSeats" value={3}  />
                                                <span className="seat-option">3</span>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="price-div">
                                        <label htmlFor="">Price</label>
                                        <input type="number" className="input-offerride" {...register("price")} name="price" required/>
                                    </div>
                                </div>
                            
                                <button type="submit" className="submit-btn">submit</button>
                            </div>

                        ):null}

                        
                    </div>
                </form>
            </div>
        </div>
    )
}

export default OfferRide