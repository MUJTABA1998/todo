import React, { useState } from 'react'
import './App.css'

const TodoList = ({ todos, setTodo }) => {


    const [ edit, setEdit ] = useState(false)
    const [ updatedText, setUpdatedText ] = useState('')
    const [ person, setPerson ] = useState(0)
    

    const handleEdit = text => {
        setUpdatedText(text)
        setEdit(true)
    }

    const handleChangeText = e => {
        setUpdatedText(e.target.value)
    }

    const handleUpdate = id => {
        const item = todos.find(todo => todo.id === id)
        item.text = updatedText;
       
        setEdit(false)
    }

    const handleDelete = id => {
        setTodo(
            todos.filter(todo => todo.id !== id)
        )
    }
    
    const handleInc = id => {
        const item = todos.find(t => t.id === id)
        setPerson(item.person)
        item.person = person + 1
    }
    const handleDec = id => {
        const item = todos.find(t => t.id === id)
        setPerson(item.person)
        item.person = person - 1
    }



  return (
    <div className='tod-list'>
       {
        todos.map((todo, index) => (
            <div className='todo-item' key={index}>
                <div className='person-action'>
                    <button onClick={() => handleInc(todo.id)}>+</button>
                    <button onClick={() => handleDec(todo.id)}>-</button>
                </div>
                <div className={todo.person > 0 ? 'persons' : 'person'}>{todo.person > 0 ? `Person ${todo.person}` : `Person 0`}</div>
                <div className='todo-text'>
                {
                    edit === false ?
                    <h3>{todo.text}</h3>
                    :
                    <input type="text" value={updatedText} onChange={handleChangeText}/>
                }
                </div>
                <div className='todo-action'>
                {
                    edit === false ?
                    <button onClick={() => handleEdit(todo.text)}>Edit</button>:<button onClick={() => handleUpdate(todo.id)}>Update</button>
                }
                <button onClick={() => handleDelete(todo.id)}>Delete</button>
                </div>
            </div>
        ))
       }
    </div>
  )
}

export default TodoList