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

    const handleCheckmark = (indexFromForm, items) => {
        setChecked(current => !current)
        let todoObj = todoArray[indexFromForm];
        console.log(todoObj);
        if (todoObj.completed === false) {
            todoObj.completed = true;
        } else {
            todoObj.completed = false;
        }
        console.log(todoObj.completed);
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
                        <p style= {{textDecorationLine: items.completed ? 'line-through': '', textDecorationStyle: items.completed ? 'solid' : ''}}>
                            {items.todo}<input type="checkbox" checked={items.completed} onChange={() => {handleCheckmark(index, items)}}></input></p>
                        {/* <button onClick={handleRemove}>Completed</button> */}
                        </div>
                        )} )}</div>
            </div>
        </div>
    )
}


export default TodoForm;