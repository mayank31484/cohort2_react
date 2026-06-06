import React from 'react'
import Navbar from './Navbar';
import Men from './Men';
import Women from './Women';

const App = () => {
  const user1 = {
    name: "John Doe",
    email: "john.doe@example.com",
    gender: "male",
    age: 30
  };
  const user2 = {
    name: "Jane Smith",
    email: "jane.smith@example.com",
    gender: "female",
    age: 25
  };
  const user3 = {
    name: "Alex Johnson",
    email: "alex.johnson@example.com",
    gender: "male",
    age: 9
  };

  return (
    <div>
      {user2.gender == "male" ? <Men /> : <Women />} 
    </div>
  )
}

export default App
