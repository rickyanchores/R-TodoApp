import { useState } from 'react'
import React from 'react'
import Form from './Components/Form/Form'
import TodoList from './Components/TodoList/TodoList'

const App = () => {
  return (
    <div className='App'>
      <header>
        <h1>React Todo App v2 </h1>
        <Form />
        <TodoList />
      </header>
    </div>
  )
}

export default App