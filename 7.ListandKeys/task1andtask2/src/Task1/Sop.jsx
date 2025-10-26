import React from 'react'

export default function Sop(props) {
  return (
    <>
    <h1>Fruit List</h1>

     <ol>
    {props.deta.map((item , index)=>(
        <li key={index}>{item}</li>
    ))}
    </ol>
    </>
  )
}
