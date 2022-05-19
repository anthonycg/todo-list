import React from 'react'
import { useState } from 'react'

const TodoForm = (props) => {
    const [todoItem, setTodoItem] = useState("");
    const [todoArray, setTodoArray] = useState([]);
    const [checked, setChecked] = useState(false);
    const handleTodoItem = (e) => {
        e.preventDefault();
        setTodoItem(todoItem);
        console.log(todoItem);
        // create an object that contains inputted value
        const newTodoObj = {
            todo: todoItem,
            completed: checked
        }
        console.log(todoArray);
        setTodoArray([...todoArray, newTodoObj]);
        // create array to add new todo items to
        const todoList = [...todoArray, newTodoObj];
        console.log(todoList)
        console.log("completed status" + newTodoObj.completed);
        
        
    }

    const handleCheckmark = (e) => {
        setChecked(!checked);
        console.log(checked);
        return checked ? console.log("it's true"): todoArray.filter( (item, index) => {index.remove()} )
    }

    const handleRemove = (index) => {
        const editedArray = todoArray.filter( (item, index) => item.index === index);
        setTodoArray(editedArray);
        console.log(editedArray);
    }

    return (
        <div>
        <form onSubmit={ handleTodoItem }>
            <label>To Do Item</label>
            <input 
            onChange={ (e) => setTodoItem(e.target.value) }
            value={todoItem}
            ></input>
        </form>
            <div>
                <h3>To Do List:</h3>
                <div>{todoArray.map( (items, index) => {
                    return (
                        <div key={index}> 
                        {/* <input type="checkbox" value={checked} onChange={handleCheckmark}></input> */}
                        <p>Todo: {items.todo} <button onClick={handleRemove}>Done</button></p>
                        </div>
                        )} )}</div>
            </div>
        </div>
    )
}

export default TodoForm;