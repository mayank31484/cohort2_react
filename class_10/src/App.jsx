import { useState}from 'react'
import './App.css'
import axios from 'axios'


import React, { useEffect } from 'react'

const App = () => {
  const [counter, setCounter] = useState(0);
  const [response, setResponse] = useState({ data: [] });

  useEffect( () => {
    const fetchdata =async () => {
      const responses = await axios.get('https://jsonplaceholder.typicode.com/users')
      setResponse(responses);
    };
    fetchdata();
  },[])


  return (
    <div>
      <h1 >Counter: {counter}</h1>
      <div id='container'>
        {response.data.map(user => {
          let c1=Math.floor(Math.random() * 256);
          let c2=Math.floor(Math.random() * 256);
          let c3=Math.floor(Math.random() * 256);

          return(
          <div className="box" style={{ backgroundColor: `rgb(${c1}, ${c2}, ${c3})` }} key={user.id}>
            <h2>{user.name}</h2>
            <p>{user.website}</p>
          </div>)
        }
        )}
      </div>
      <button onClick={() => setCounter(counter + 1)}>
        Increment
      </button>
    </div>
  )
}

export default App
