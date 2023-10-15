import React from 'react'
import './App.css';

const Todo_list = (props) => {
    
    return (
        <>
            <div className="list-style">
                <i className="fa fa-trash" 
                style={{padding: "0.2rem .3rem", marginBottom: "1rem", fontSize: "1rem", backgroundColor: "red", cursor: "pointer", color: "white", border: "none", borderRadius: "0.5rem"}}
                    onClick={()=>{
                        props.onDelete(props.id)
                }}>X</i>
                <li>{props.input} <span className='show-time'> - added at [{props.time}]</span></li>
                
            </div>
        </>
    );
}

export default Todo_list
