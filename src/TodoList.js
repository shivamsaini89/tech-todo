import React from 'react'
import './App.css';

const Todo_list = (props) => {
    
    console.log(props.time)
    return (
        <>
            <div className="list-style">
                <i className="fa fa-trash" aria-hidden="true" 
                    onClick={()=>{
                        props.onDelete(props.id)
                }}>X</i>
                <li>{props.input} </li>
                <h6>{props.time}</h6>
            </div>
        </>
    );
}

export default Todo_list
