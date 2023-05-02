import React from 'react'

const Form = ({todos,setTodos,inputText,setInputText}) => {

    const inputTextHandler = (e) => {
        console.log(e.target.value)
        setInputText(e.target.value)
    }
    const addTodo = (e) => {
        e.preventDefault()
        console.log("Add todo")
        setTodos([...todos, {text: inputText, completed: false, id: Math.random() * 1000}])
        setInputText("")
    }

  return (
    <form action="submit" className='Form'>
        <input value={inputText} type="text" className="input" placeholder='Write input here' onChange={inputTextHandler}/>
        <button className="addTodo" onClick={addTodo}>Add</button>
    </form>
  )
}

export default Form;