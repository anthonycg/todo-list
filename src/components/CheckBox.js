import { getValue } from "@testing-library/user-event/dist/utils";
import React, { useState } from "react";
import TodoForm from "./TodoForm";

const CheckBoxes = (props) => {
    const [checked, setChecked] = useState(false);
    
    const handleCheckmark = (e) => {
        setChecked(!checked);
        console.log(checked);
    }

    return (
<div>
                <h3>To Do List:</h3>
                <div>{TodoForm.todoArray.map( (items, index) => {
                    return (
                        <div key={index}> 
                        <p>Todo: {items.todo} <input type="checkbox" value={checked} onChange={handleCheckmark}></input></p>
                        </div>
                        )} )}</div>
            </div>
    )
}

export default CheckBoxes;