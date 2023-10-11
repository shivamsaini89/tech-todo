import React from 'react'
import './App.css';

const Todo_list=(props)=> {
  return (
    <>
     <div>
        <li>{props.input}</li>
    </div> 
    </>
  )
}

export default Todo_list
