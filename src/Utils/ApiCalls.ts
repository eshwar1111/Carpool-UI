import React from "react";
import {baseUrl} from "../../package.json"




const SignUpApiHelper=async(body:any)=>{
    
    const url=baseUrl+"authentication/signup"
    const response=await fetch(url,{method:"POST",
    headers: {
    Accept: 'application.json',
    'Content-Type': 'application/json'
    },
    body:JSON.stringify(body)
    })
    return response

}

const LogInApiHelper=async(body:any)=>{
    const url= baseUrl+"authentication/login"
    const response=await fetch(url,{method:"POST",
    headers: {
      Accept: 'application.json',
      'Content-Type': 'application/json'
    },
    body:JSON.stringify(body)
    });
    return response
}

const BookTheRideApiHelper=async(ride:any)=>{
    const url=baseUrl+"bookRide/bookTheRide?UserId="+localStorage.getItem("userid") || "1"
    const response=await fetch(url,{method:"POST",
    headers: {
    Accept: 'application.json',
    'Content-Type': 'application/json'
    },
    body:JSON.stringify(ride)
    })
    return response

}

const GetAvailableRidesApiHelper=async(body:any)=>{
    const url=baseUrl+"bookRide/availableRides"
    const response=await fetch(url,{method:"POST",
    headers: {
    Accept: 'application.json',
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem("token")}`
    },
    body:JSON.stringify(body)
    })
    return response

}

const OfferRideApiHelper=async(body:any)=>{
    const url=baseUrl+"offerride?UserId="+localStorage.getItem("userid") || "1"
    const response=await fetch(url,{method:"POST",
    headers: {
    Accept: 'application.json',
    'Content-Type': 'application/json'
    },
    body:JSON.stringify(body)
    })
    return response
}


const GetBookedRidesApiHelper=async()=>{
    const url=baseUrl+"history/BookedRides?UserId="+localStorage.getItem("userid")
    const response=await fetch(url)
    return response
}

const GetOfferedRidesApiHelper=async()=>{
    const url=baseUrl+"history/OfferedRides?UserId="+localStorage.getItem("userid")
    const response=await fetch(url)
    return response
}


export {SignUpApiHelper,LogInApiHelper,BookTheRideApiHelper,GetAvailableRidesApiHelper,OfferRideApiHelper,GetOfferedRidesApiHelper,GetBookedRidesApiHelper}