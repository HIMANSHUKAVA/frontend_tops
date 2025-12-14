import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Add_Task } from '../feature/taskslice';
export default function Task2() {
  const [task, settask] = useState("");

  const dispatch =useDispatch();
  const handlsubmit = (e)=>{
     e.preventDefault();
      console.log(task);

      dispatch(Add_Task(task))
      settask("");

  }
  return (
    <>

    <form onSubmit={handlsubmit}>
    <input type='text' placeholder='enter the task' value={task} onChange={(e)=>settask(e.target.value)}/>
    <button type='submit' style={{
      margin:"3px"
    }}>Add</button>
    </form>
    </>
  )
}
