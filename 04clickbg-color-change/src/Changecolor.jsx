import React from 'react'
import { useState } from 'react'
function Changecolor() {
  const [colour, setColour] = useState("");
  return (
    <>
    <div className='h-screen' style={{backgroundColor: colour}} >

    <div>
      
        <button onClick={() => setColour("black")}>black</button>
        <button onClick={() => setColour("red")}>red</button>
        <button onClick={() => setColour("blue")}>blue</button>
        <button onClick={() => setColour("green")}>green</button>
        <button onClick={() => setColour("yellow")}>yellow</button>
    </div>
    </div>
      </>

  )
}

export default Changecolor
