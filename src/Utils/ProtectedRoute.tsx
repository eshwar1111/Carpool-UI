import React from "react";
import { Outlet,Navigate } from "react-router-dom";

const ProtectedRoute:React.FC=()=>{
    let auth:boolean=localStorage.getItem("token")!=null
    return(
        auth? <Outlet/>:<Navigate to="/login"/>
    )
}

export default ProtectedRoute
