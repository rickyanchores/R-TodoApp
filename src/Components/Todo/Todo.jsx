import React from 'react'

const Todo = ({text,todos,setTodos,todo}) => {

    // EVENTS
    const removeHandler = () => {
        console.log("remove")
        setTodos(todos.filter((el) => el.id !== todo.id));
    }
    const completedHandler = () => {
        console.log("completed")
        // SET
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

        // Animation 
        //let todoItem= document.querySelector(".todo-item")

        //todoItem.style.background = "rebeccapurple";
        //todoItem.style.transition = "0.5s ease-in";  



      
    }

  return (
    <div className='Todo'>
        <li className="todo-item">
        <h3>{text}</h3>
          <div className="btn-container">
            <button className="remove-btn" onClick={removeHandler}>
              Remove
            </button>
            <button className="completed-btn" onClick={completedHandler}>
              Completed
            </button>
          </div>
      </li>
    </div>
  )
}

export default Todo