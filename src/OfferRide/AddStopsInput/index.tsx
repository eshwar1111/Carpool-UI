import React from "react";
import "./style.css"


interface AddStopsInputProps{
    index:number,
    handleChange:(index:number, evnt:React.ChangeEvent<HTMLInputElement>)=>void,
    addInputField:()=>void
}

const AddStopsInput:React.FC<AddStopsInputProps>=({handleChange,addInputField,index})=>{
    return(
        <div className="addstopsinput">
        <label htmlFor="">stop {index+1} :</label>

        <div className="input-addbtn-container">
            <input type="text" className="input-offerride" name="stop" onChange={(e)=>{handleChange(index,e)}} />
            <button onClick={(e)=>{addInputField(),e.preventDefault()}} className="add-btn">+</button>
        </div>
        </div>
    )
}

export default AddStopsInput;