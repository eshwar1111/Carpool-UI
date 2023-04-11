import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import {useForm} from "react-hook-form"
import Logo from "../assets/logo.png"
import BgImg from "../assets/img1.png"
import BgImg2 from "../assets/img2.png"
import "./style.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import {baseUrl} from "../../package.json"
import { SignUpApiHelper } from "../Utils/ApiCalls"

const SignUp:React.FC=()=>{
    const CheckSignUp=async (data:any)=>{
        await SignUpUser(data)
    }

    const [isExceptionOpen,setException]=useState(false)

    const [isSignedUp,setSignedUp]=useState(false)

    const navigate=useNavigate()
    
    const {handleSubmit,register,formState:{errors}}=useForm({mode:"onTouched"})

    const SignUpUser=async(body:any)=>{
        console.log(JSON.stringify(body))
        try{
            const response=await SignUpApiHelper(body)
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
                <div className="heading-subheading-con">
                <div className="heading-container">
                    <h1>TURN <span className="heading1">MILES</span></h1>
                    <h1>INTO <span className="heading2">MONEY</span></h1>
                </div>
                    <div className="sub-heading">R I D E S &nbsp; O N &nbsp; T A P</div>
                </div>
                <img className="login-image" src={BgImg} alt="bg-image" />
            </div>
            
          
        <div className="form-container-signup">
            <div>
                <h1 className="form-title">SignUp</h1>
                <form id="signup-form" onSubmit={handleSubmit(CheckSignUp)}>
                    <div className="form-floating mb-3">
                        <input className="form-control"  id="floatingInput" type="text" {...register("username",{required:true,pattern:/^[a-zA-Z]*$/})} name="username" required placeholder="username"/>
                        <label htmlFor="floatingInput">Enter Username</label>
                                
                        {errors.username?.type==="required" && <p className="error">** this field is required</p>}
                        {errors.username?.type==="pattern" && <p className="error">** enter valid name</p>}
                    </div>
                    
                    <div className="form-floating mb-3">
                        <input className="form-control" id="floatingPassword" type="password" {...register("password",{required:true,pattern:/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/})} name="password" required placeholder="password"/>
                        <label htmlFor="floatingPassword">Enter Password</label>
                               
                        {errors.password?.type==="required" && <p className="error">** this field is required</p>}
                        {errors.password?.type==="pattern" && <p className="error">** enter valid password</p>}
                    </div>
                    <div className="form-floating mb-3">
                        <input className="form-control" id="floatingPassword"  type="password" {...register("confirmpassword",{required:true,pattern:/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/})} name="confirmpassword" placeholder="confirmpassword" required/>
                        <label htmlFor="floatingPassword">Confirm Password</label>
                               
                        {errors.confirmpassword?.type==="required" && <p className="error">** this field is required</p>}
                        {errors.confirmpassword?.type==="pattern" && <p className="error">** enter valid password</p>}
                    </div>
                    {isExceptionOpen &&<p className="valid-details">!Enter Valid Details</p>}
                    {isSignedUp &&<p className="signed-details">Signed Up Successfully</p>}
                    <button className="submit-signup-btn " type="submit">SIGNUP</button>
                </form>
                
                <div>
                    <p className="sub-para">Already a member?<span><Link className="signup-link" to="/login"> LOGIN</Link></span></p>
                </div>
            </div>
            <img src={BgImg2} className="form1-image" alt="" />
        </div>
     
        </div>
    )
}

export default SignUp