import React, { useState } from 'react'
import Card from './Card'

const App = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [image, setImage] = useState("");

  function submitHandler(e) {
    e.preventDefault();
    const newUser = {name, email, phone, image};
    setAllUsers([...allUsers, newUser]);
    localStorage.setItem("all-users", JSON.stringify([...allUsers, newUser]));

    setName("");
    setEmail("");
    setPhone("");
    setImage("");
  }
  
  function deleteHandler(index) {
    const oldUsers = [...allUsers];
    const conf = confirm("DO you really want to delete this contact?");
    if (conf) {
      oldUsers.splice(index, 1);
      setAllUsers(oldUsers);
      localStorage.setItem("all-users", JSON.stringify(oldUsers));
    }else{ console.log("deletion cancelled");
      alert("deletion cancelled for index: " + index);
     }
  }

  const localData = JSON.parse(localStorage.getItem('all-users')) || []

   const [allUsers, setAllUsers] = useState(localData);
  
  return (
    <div className='h-screen w-screen flex flex-col gap-8'>
      <form onSubmit={(e) => {
        submitHandler(e)
      }} className='px-2 py-2 w-full flex flex-wrap mt-5 justify-center items-center gap-5'>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="enter new persons Name"
          className='mr-5 mb-5 px-2 py-2 border-2 border-gray-300 rounded-lg'
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="enter new persons Email"
          className='mr-5 mb-5 px-2 py-2 border-2 border-gray-300 rounded-lg'
        />
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="enter new persons Phone"
          className='mr-5 mb-5 px-2 py-2 border-2 border-gray-300 rounded-lg'
        />
        <input
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          placeholder="enter new persons Image URL"
          className='mr-5 mb-5 px-2 py-2 border-2 border-gray-300 rounded-lg'
        />
        <button className=' px-5 py-2 text-xl active:scale-95 cursor-pointer font-semibold bg-emerald-700 rounded m-2 w-[97%]' type="submit">Create User</button>
      </form>
      <div className='flex flex-wrap justify-center items-center gap-5'>
        
        {allUsers.map((user, index) => {
          return <Card key={index} user={user} onDelete={() => deleteHandler(index)}/>
        })}
      </div>
    </div>
  )
}

export default App
