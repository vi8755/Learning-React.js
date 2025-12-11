import React, { useState } from 'react'

function Counter() {
    const [counter,setcounter] = useState(0);

    const increse = ()=>{
        setcounter(counter+1);
    }
    const decrese =()=>{
        setcounter(counter-1);
    }
  return (
    <>
      <h1>{counter}</h1>
      <button onClick={increse}  > +</button>
    
      <button onClick={decrese}  > -</button>
    </>
  )
}

export default Counter
