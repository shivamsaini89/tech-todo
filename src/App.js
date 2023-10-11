import { React, useState } from 'react';
import './App.css';
import TodoList from './TodoList';

function App() {
  const [list, setList] = useState([]);
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  }

  const handleClick = () => {
    setList((prevItems) => {
      return  [...prevItems, input]
    });
  }

  return (
    <>
      <div className="container">
        <div className="list">
          <br />
          <h1>TODO List</h1>
          <br />
          <input placeholder='Add TODO Items' onChange={handleChange} />
          <button onClick={handleClick}>Add</button>
          <ol>
            {list.map((input, index, currentTime) => {
              return <TodoList key={index} input={input} />
            })}
          </ol>
        </div>
      </div>
    </>
  )
}

export default App
