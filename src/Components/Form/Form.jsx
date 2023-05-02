import React from 'react'

const Form = () => {
  return (
    <form action="submit" className='Form'>
        <input type="text" className="input" placeholder='Write input here'/>
        <button className="submit">Add</button>
    </form>
  )
}

export default Form;