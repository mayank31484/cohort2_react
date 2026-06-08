import React from 'react'

const Card = (props) => {
  return (
    <div className="bg-gradient-to-br from-pink-500 to-pink-600 h-96 w-80 flex flex-col items-center justify-between gap-0 rounded-2xl shadow-xl overflow-hidden">
        <div className="w-full h-48 overflow-hidden">
          <img src={props.user.image} alt="profile" 
          className="h-full w-full object-cover"/>
        </div>
        <div className="w-full flex-1 bg-white text-center p-6 flex flex-col justify-center  gap-3">
            <h1 className="text-2xl font-bold text-gray-800 mb-2">{props.user.name}</h1>
            <h4 className="text-lg font-semibold text-pink-600 mb-2">{props.user.phone}</h4>
            <p className="text-sm text-gray-600">{props.user.email}</p>
            <button className="h-10 w-35 rounded-xl font-white bg-red-600 text-semibold text-lg active:scale-95" onClick={props.onDelete}>Delete contact</button>
        </div>
      
    </div>
  )
}

export default Card
