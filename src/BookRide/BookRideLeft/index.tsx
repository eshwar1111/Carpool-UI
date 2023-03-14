import React from "react";
import {useForm} from "react-hook-form"
import "./style.css"


interface BookRideLeftProps{
    updateRides:(rides:any)=>void;
}

const BookRideLeft:React.FC<BookRideLeftProps>=({updateRides})=>{
    const {handleSubmit,register}=useForm()
    const onSubmit=(data:any)=>{
        // const form:any=document.querySelector("form")
        // const data=Object.fromEntries(new FormData(form).entries())
        console.log(data)
        GetAvailableRides(data)
    }


    const GetAvailableRides=async(body:any)=>{
        const url="https://localhost:7192/api/bookRide/availableRides"
        try{
            const response=await fetch(url,{method:"POST",
            headers: {
            Accept: 'application.json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem("token")}`
            },
            body:JSON.stringify(body)
            })
            var newrides= await response.json()
            console.log(newrides)
            updateRides(newrides)
        }
        catch(error){
            console.log(error)
        }
    }


    return(
        <div className="bookrideleft-container">
            <div className="container">
            <h2>Book A Ride</h2>
            <p>we get you the matches asap !</p>

            <form className="form-group" onSubmit={handleSubmit(onSubmit)}>
                <div className="col-md ">
                <label htmlFor="">From</label>
                <input type="text" className="input-bookride" {...register("startpoint")} name="startpoint" required/>
                </div>
                <div className="col-md">
                <label htmlFor="">To</label>
                <input type="text"  className="input-bookride" {...register("endpoint")} name="endpoint"  required/>
                </div>
                <div className="col-md">
                <label htmlFor="">Date</label>
                <input type="date" placeholder="xx/mm/yyyy"  className="input-bookride"{...register("date")} name="date" required/>
                </div>
                {/* <div className="col-md">
                <label htmlFor="">Time</label>
                <input type="text"  className="form-control"{...register("time")} name="time" required/>
                </div> */}
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