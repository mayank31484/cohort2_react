import React from 'react'

const Navbar = (props) => {
    console.log(props.link);
  return (
    <div className="flex justify-between items-center bg-gray-800 text-white p-5 m-3 rounded-2xl">
      <h1 className="text-xl font-bold text-gray-300"> {props.title} </h1>
      <div className="flex space-x-10">
        {props.link.map((option, index) => (
          <h3 key={index}>{option}</h3>
        ))}
      </div>
    </div>
  )
}

export default Navbar
