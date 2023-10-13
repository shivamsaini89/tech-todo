import { React, useState } from 'react';
import './App.css';
import TodoList from './TodoList';

function App() {
  const [list, setList] = useState([]);
  const [input, setInput] = useState("");
  const [time, setTime] = useState([]);

  const handleChange = (e) => {
    setInput(e.target.value);
  }

  const handleClick = () => {
    if (input === "") {
      alert("Please add items to the list");
    }
    else {
      setList((prevItems) => {
        return [...prevItems, input];
      });
      setInput("");
      setTime((prevTime) => {
        return [...prevTime, new Date()];
      });
    }
  };

  const deleteItem = (id) => {
    console.log("item deleted")
    setList((prevItems) => {
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
          <input placeholder='Add TODO Items' onChange={handleChange} value={input} />
          <button onClick={handleClick}>Add</button>
          <ol>
            {list.map((time, index ) => {
              return (
                <TodoList
                  key={index}
                  id={index}
                  input={input}
                  time={time}
                  onDelete={deleteItem}
                   />
              );
            })}
          </ol>
        </div>
      </div>
    </>
  )
}

export default App
