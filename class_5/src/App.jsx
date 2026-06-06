import { useState } from 'react'
import React from 'react'

const App = () => {
    let [marks, setMarks] = useState([45,676,34,223,34,56,78,90])
    
    function graceMarks(){
        let updatedMarks = marks.map((mark, idx) => {
            if(mark < 50){
                console.log(`marks changed for student ${idx + 1}`)
                return mark + 10
            }
            return mark
        })
        setMarks(updatedMarks)
    }
  return (
    <div>
        <h1 className='text-2xl font-bold underline m-10'>
            Student Marks
        </h1>
        <div>
            {marks.map((mark, idx) => {
                return <h2 key = {idx}> student {idx + 1}= {mark}</h2>
            })}
        </div>
        <button className="bg-blue-500 m-10 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={graceMarks}>
            Apply Grace Marks
        </button>
    </div>
  )
}

export default App
