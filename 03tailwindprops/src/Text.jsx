import React from 'react'

function Text(props) {
  return (
    <>
     <h1>
{props.title}
      <span className='text-cyan-400 bg-black' >{props.text} </span>
     </h1>
    </>
  )
}

export default Text
