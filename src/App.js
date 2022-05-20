import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import TodoForm from "./components/TodoForm"

function App() { 
  // const [checked, setChecked] = useState(false);
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
            completed: false
        }
        console.log(todoArray);
        setTodoArray([...todoArray, newTodoObj]);
        // create array to add new todo items to
        const todoList = [...todoArray, newTodoObj];
        console.log(todoList)
        console.log("completed status" + newTodoObj.completed);
        setTodoItem("");
        
    }
  return (
    <div className="App">
      <header className="back-splash">
        
        <TodoForm todoItem={todoItem} setTodoItem={setTodoItem} todoArray={todoArray} setTodoArray={setTodoArray} checked={checked} setChecked={setChecked} handleTodoItem={handleTodoItem}/>
      </header>
    </div>
  );
}


export default App;
