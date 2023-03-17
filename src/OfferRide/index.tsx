import React, { ChangeEvent, useState } from "react";
import IOfferRide from "../config/IOfferRide";
import Navbar from "../Navbar";
import {useForm} from "react-hook-form"
import "./style.css"
import { useNavigate } from "react-router-dom";
import AddStopsInput from "./AddStopsInput";
import OfferPopUp from "./OfferPopUp";
import {baseUrl} from "../../package.json"

const OfferRide:React.FC=()=>{

const [inputFields, setInputFields] = useState([""]);

const [showform2,setform2]=useState(false)

const { register , handleSubmit}=useForm()

const [isOpen,setOfferPopup]=useState(false)

const togglePopUp=()=>{
    setOfferPopup(!isOpen)
}
 
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
                            <h2>Offer A Ride</h2>
                            <p>we get you the matches asap !</p>
                            <div className="col-md">
                                <label htmlFor="">From</label>
                                <input type="text" className="input-offerride"{...register("from")} name="from" required/>
                            </div>
                            <div className="col-md">
                                <label htmlFor="">To</label>
                                <input type="text" className="input-offerride" {...register("to")}name="to" required/>
                            </div>
                            <div className="col-md">

                                <label htmlFor="">Date</label>
                                <input type="date"  className="input-offerride"{...register("date")}name="date" required/>
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
                                <h2>Offer A Ride</h2>
                                <p>we get you the matches asap !</p>
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
                                            <input  type="text" className="input-offerride" name="stop" value={inputFields[index]} onChange={(e)=>{handleChange(index,e)}} required/>
                                            </div>
                                        )
                                    })}
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