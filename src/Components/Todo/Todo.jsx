import React from 'react'

const Todo = ({text,todos,setTodos,todo}) => {

    // EVENTS
    const removeHandler = () => {
        console.log("remove")
        setTodos(todos.filter((el) => el.id !== todo.id));
    }
    const completedHandler = () => {
        console.log("completed")
        setTodos(
            todos.map((item) => {
              if (item.id === todo.id) {
                return {
                  ...item,
                  completed: !item.completed
                };
              }
              return item;
            })
          );
    }

  return (
    <div className='Todo'>
        <li className="todo-item">
        <h3>{text}</h3>
        <button className="remove-btn" onClick={removeHandler}>
          Remove
        </button>
        <button className="completed-btn" onClick={completedHandler}>
          Completed
        </button>
      </li>
    </div>
  )
}

export default Todo