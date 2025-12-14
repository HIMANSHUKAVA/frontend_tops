import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment_count, decrement_count } from "../reduxxcomponent/Action"

export default function Counter() {
  const dispatch = useDispatch()
const selector = useSelector((state)=>state.count)
  return (
    <>

    <h2>Count is {selector}</h2>
    <br/>
     <button onClick={()=>dispatch(increment_count())}>Increment</button>
     <button onClick={()=>dispatch(decrement_count())}>decrement</button>
    </>
  )

}
