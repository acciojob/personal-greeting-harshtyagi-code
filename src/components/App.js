import React ,{useState} from "react";
import './../styles/App.css';

const App = ()=> {
  let [name ,setName] = useState("");

  return (
      <div>
          <p>Enter your name:</p>
          <input type="text" onChange={(event)=>setName(event.target.value)}/>
          {
              name && (
                  <p>Hello {name}!</p>
              )
          }
      </div>
  )
}

export default App