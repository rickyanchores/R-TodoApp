import React from 'react'
import Todo from '../Todo/Todo'

const TodoList = ({todos,setTodos}) => {
  return (
    <div className='TodoList'>
        <h2>Todo List:</h2>
        <ul>
            {todos.map((todo) => (
                <Todo 
                    text={todo.text}
                    key={todo.id}
                    todos={todos}
                    setTodos={setTodos}
                    todo={todo}
                    completed={todo.completed}
                />
            ))}
        </ul>
    </div>
  )
}

export default TodoList