import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import TodoForm from "./components/TodoForm"

function App() { 
  const [checked, setChecked] = useState(false);
  return (
    <div className="App">
      <header className="back-splash">
        <TodoForm />
      </header>
    </div>
  );
}

export default App;
