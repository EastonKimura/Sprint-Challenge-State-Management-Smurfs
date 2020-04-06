import React, { useState } from "react";

const SmurfForm = (props) => {
    const [ value, setValue ] = useState({
        name : "",
        age : "",
        height : "" , 
    });
    const handleChanges = e => {
        setValue({
            ...value,
            [e.target.name] : e.target.value
        })
    }
    const handleSubmit = e => {
        e.preventDefault();
        props.addSmurf(value);
        setValue({
            name: "",
            age : "",
            height : "",
        })
        console.log("value", value)
    }
    return (
        <form onSubmit={handleSubmit}>
            <input 
            name ="name"
            type="text"
            onChange={handleChanges}
            />
            <input 
            name ="age"
            type="number"
            onChange={handleChanges}
            />  
            <input 
            name ="height"
            type="text"
            onChange={handleChanges}
            />  
            <button>Add Smurf</button>                    
        </form>
    )
}
export default SmurfForm; 