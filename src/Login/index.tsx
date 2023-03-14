import React from "react"
import { json, Link } from "react-router-dom"
import ILogin from "../config/ILogin"
import { useNavigate } from "react-router-dom"
import Navbar from "../Navbar"
import jwt from 'jwt-decode'
import './style.css'
import { useForm } from "react-hook-form";
import Logo from '../assets/logo.png'
import BgImg from '../assets/img1.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css"
import BgImg2 from '../assets/img2.png'


const Login:React.FC=()=>{
    const {handleSubmit ,register}=useForm()
    const UserExists=async(body:any)=>{
      const url="https://localhost:7192/api/authentication/login"
      console.log(JSON.stringify(body))
      try{
        const response=await fetch(url,{method:"POST",
        headers: {
          Accept: 'application.json',
          'Content-Type': 'application/json'
        },
        body:JSON.stringify(body)
        });
        const data=await response.text();
        if(data!="false"){
          localStorage.setItem("token",data)
        }
        else{
          localStorage.setItem("token","null")
        }
      }catch(error){
        console.log(error)
      }
    }

    const navigate=useNavigate()

    const CheckLogin=async (data:any)=>{
        // const form:any=document.querySelector("form")
        // const data=Object.fromEntries(new FormData(form).entries())
        await UserExists(data)

        console.log("tokennnn  : - "+localStorage.getItem("token"))
        if(localStorage.getItem("token")!="null"){
          const token=localStorage.getItem("token")
          const credentials:any=jwt(token || "")
          console.log(credentials)
          localStorage.setItem("username",credentials.Name)
          localStorage.setItem("userid",credentials.Sid)
          navigate("/home")
        } 
        else{
          alert("enter valid details")
        }
    }
    

    return(
        <div className="login-page">
          <div className="title-container">
            <div className="logo-container"><img className="logo-image" src={Logo} alt="logo" /></div>
            <div className="heading-container">
              <h1>TURN <span className="heading1">MILES</span></h1>
              <h1>INTO <span className="heading2">MONEY</span></h1>
            </div>
              <div className="sub-heading">R I D E S &nbsp; O N &nbsp; T A P</div>
            <img className="login-image" src={BgImg} alt="bg-image" />
          </div>
          
          <div className="form-container">
            <h1 className="form-title">LogIn</h1>
            <form id="login-form"  onSubmit={handleSubmit(CheckLogin)}>


              <div  className="form-floating mb-3">
                <input type="text" className="form-control" id="floatingInput"{...register("username")} name="username" required placeholder="usrname"/>
                <label htmlFor="floatingInput">Enter username</label>
              </div>

              <div className="form-floating mb">
                <input type="password" className="form-control" id="floatingPassword"{...register("password")} name="password" placeholder="Password" required/>
                <label htmlFor="floatingPassword">Enter password</label>
              </div>
                <button className="submit-btn" type="submit" >Submit</button>
                
            </form>
            <div>
                <p className="sub-para">Not a member yet?  <span><Link className="signup-link" to="/signup" >  SIGN UP</Link></span></p>
            </div>
            <img src={BgImg2} className="form-image" alt="" />
          </div>

        </div>
     )   
}




export default Login