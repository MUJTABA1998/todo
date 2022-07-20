import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid'
import './App.css';
import TodoList from './TodoList';

function App() {

  const [ todo, setTodo ] = useState([])
  const [ input, setInput ] = useState('')
  
  const handleSubmit = e => {
    e.preventDefault();
    setTodo([
      ...todo,
      {
      id: uuidv4(),
      text: input,
      person: 0
    }])
    setInput('')
  }

  const handleRemove = () => {
    const t = todo.map( t => ({...t, person: 0}))
    setTodo(t)
  }

  return (
    <div className="App">
        <div  className='todo-form'>
          <h1>Enter Task</h1>
          <input type="text" placeholder='Enter todo task' value={input} onChange={e => setInput(e.target.value)}/>
          <button className='btn btn-submit' onClick={handleSubmit}>Add Task</button>
          <button className='btn btn-remove' onClick={handleRemove}>Remove Persons</button>

        </div>
        <TodoList todos={todo} setTodo={setTodo}/>
    </div>
  );
}

export default App;
