import { React, useState } from 'react';
import './App.css';
import TodoList from './TodoList';

function App() {
  const [todo, setTodo] = useState([]);
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  }
// HANDLECLICK FUNCTION FOR UPDATION
  const handleClick = () => {
    if (input === "") {
      alert("Please add items to the list");
    }
    else {
      const newTodo = {
        text: input,
        time: new Date().toLocaleString()
      }
      setTodo((todo) => {
        return [...todo, newTodo];
      });
      setInput("")
    }
  };

  // ITEM DELETE FUNCTION
  const deleteItem = (id) => {
    console.log("item deleted")
    setTodo((prevItems) => {
      return (prevItems.filter((arr, index) => {
        return index !== id
      })
      )
    })
  }


  return (
    <>
      <div className="container">
        <div className="list">
          <br />
          <h1>TODO List</h1>
          <br />
          <input placeholder='Add TODO Items'
          style={{padding: "0.2rem", fontSize: "1.2rem", marginRight: "1rem"}}
           onChange={handleChange} 
           value={input} />
          <button 
          style={{padding: "0.5rem 1rem", margin:"5px", fontSize: "1.2rem", backgroundColor: "green", color: "white", border: "none", borderRadius: "0.5rem"}}
          onClick={handleClick}>Add</button>

          {/* LIST STARTS FROM HERE */}
          <ol>
            {todo.map((todo, index) => {
              return (
                <TodoList
                  key={index}
                  id={index}
                  input={todo.text}
                  time={todo.time} 
                  onDelete={deleteItem} />
              );
            })}
          </ol>
        </div>
      </div>
    </>
  )
}

export default App
