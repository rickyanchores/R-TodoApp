import React from 'react'
import Todo from '../Todo/Todo'

const TodoList = ({todos,setTodos}) => {
  return (
    <div className='TodoList'>
        TodoList Hello
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