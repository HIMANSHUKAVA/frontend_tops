import React, { useState } from 'react'

export default function Counter() {

    const [count , setcount] =  useState(0);
    const increment =()=>{
        setcount(count+1);
    }
    const decrement =()=>{
      
        setcount(count-1);
    }
  return (
    <>
    
    <h1>Your Value Is : {count}</h1>

    <button type='button' onClick={increment}>Increment</button>
    <button type='button' onClick={decrement}>Decrement</button>
    
    </>
  )
}
