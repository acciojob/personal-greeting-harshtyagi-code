import React from "react";
import { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [name, setName] = useState('');

  const handleChange = (event) => {
    setName(event.target.value);
  };
  
  return (
    <div>
      <label htmlFor="name">Enter your name:</label>
      <input id="name" type="text" value={name} onChange={handleChange} />
      <p>Hello {name}!</p>
    </div>
  )
}

export default App