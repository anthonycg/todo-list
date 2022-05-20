import React from 'react'
import { useState } from 'react'
const TodoForm = (props) => {
    const {newTodoObj, todoArray, setTodoArray, setChecked, checked, setTodoItem, todoItem, handleTodoItem} = props;
// const TodoForm = (props) => {
//     const [todoItem, setTodoItem] = useState("");
//     const [todoArray, setTodoArray] = useState([]);
//     const [checked, setChecked] = useState(false);
//     const handleTodoItem = (e) => {
//         e.preventDefault();
//         setTodoItem(todoItem);
//         console.log(todoItem);
//         // create an object that contains inputted value
//         const newTodoObj = {
//             todo: todoItem,
//             completed: false
//         }
//         console.log(todoArray);
//         setTodoArray([...todoArray, newTodoObj]);
//         // create array to add new todo items to
//         const todoList = [...todoArray, newTodoObj];
//         console.log(todoList)
//         console.log("completed status" + newTodoObj.completed);
//         setTodoItem("");
        
//     }

    const handleCheckmark = () => {
        setChecked(current => !current);
        // console.log(checked);
        // return checked ? console.log("it's true"): todoArray.filter( (item, index) => {index.remove()} )
    }

    const handleRemove = (index) => {
        const editedArray = todoArray.filter( (item, index) => index !== 1);
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
                        <p style= {{textDecorationLine: checked ? 'line-through': '', textDecorationStyle: checked ? 'solid' : ''}}>{items.todo}<input type="checkbox" checked={checked} onChange={handleCheckmark}></input></p>
                        {/* <button onClick={handleRemove}>Completed</button> */}
                        </div>
                        )} )}</div>
            </div>
        </div>
    )
}


export default TodoForm;