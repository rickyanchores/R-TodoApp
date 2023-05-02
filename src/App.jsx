import { useState } from 'react'
import React from 'react'
import Form from './Components/Form/Form'
import TodoList from './Components/TodoList/TodoList'

const App = () => {

  const [inputText,setInputText] = useState("")
  const [todos,setTodos] = useState([])

  return (
    <div className='App'>
      <header>
        <h1>React Todo App v2 </h1>
        <Form inputText={inputText} setInputText={setInputText} todos={todos} setTodos={setTodos}/>
        <TodoList todos={todos} setTodos={setTodos} />
      </header>
    </div>
  )
}

export default App