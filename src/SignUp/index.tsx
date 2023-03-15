import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import {useForm} from "react-hook-form"
import Logo from "../assets/logo.png"
import BgImg from "../assets/img1.png"
import BgImg2 from "../assets/img2.png"
import "./style.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import {baseUrl} from "../../package.json"

const SignUp:React.FC=()=>{
    const CheckSignUp=async (data:any)=>{
        await SignUpUser(data)
    }

    const [isExceptionOpen,setException]=useState(false)

    const [isSignedUp,setSignedUp]=useState(false)




    const navigate=useNavigate()

    const {handleSubmit,register}=useForm()

    const SignUpUser=async(body:any)=>{
        console.log(JSON.stringify(body))
        const url=baseUrl+"authentication/signup"
        try{
            const response=await fetch(url,{method:"POST",
            headers: {
            Accept: 'application.json',
            'Content-Type': 'application/json'
            },
            body:JSON.stringify(body)
            })
            if(response.status==400){
                setException(true)
                setSignedUp(false)
            }
            else{
                setException(false)
                setSignedUp(true)

            }
        }
        catch(error){
            console.log(error)
        }
    }
    
    return(
        <div className="signup-page">
            <div className="title-container">
            <div className="logo-container"><img className="logo-image" src={Logo} alt="logo" /></div>
            <div className="heading-container">
              <h1>TURN <span className="heading1">MILES</span></h1>
              <h1>INTO <span className="heading2">MONEY</span></h1>
            </div>
              <div className="sub-heading">R I D E S &nbsp; O N &nbsp; T A P</div>
            <img className="login-image" src={BgImg} alt="bg-image" />
          </div>
          
        <div className="form-container-signup">
            <h1 className="form-title">SignUp</h1>
            <form id="signup-form" onSubmit={handleSubmit(CheckSignUp)}>
                <div className="form-floating mb-3">
                    <input className="form-control"  id="floatingInput" type="text" {...register("username")} name="username" required placeholder="username"/>
                    <label htmlFor="floatingInput">Enter Username</label>
                </div>
                
                <div className="form-floating mb-3">
                    <input className="form-control" id="floatingPassword" type="password" {...register("password")} name="password" required placeholder="password"/>
                    <label htmlFor="floatingPassword">Enter Password</label>
                </div>
                <div className="form-floating mb-3">
                    <input className="form-control" id="floatingPassword"  type="password" {...register("confirmpassword")} name="confirmpassword" placeholder="confirmpassword" required/>
                    <label htmlFor="floatingPassword">Confirm Password</label>
                </div>
                {isExceptionOpen &&<p className="valid-details">!Enter Valid Details</p>}
                {isSignedUp &&<p className="signed-details">Signed Up Successfully</p>}
                <button className="submit-signup-btn " type="submit">SIGNUP</button>
            </form>
            
            <div>
                <p className="sub-para">Already a member?<span><Link className="signup-link" to="/login"> LOGIN</Link></span></p>
            </div>
            <img src={BgImg2} className="form1-image" alt="" />
        </div>
     
        </div>
    )
}

export default SignUp