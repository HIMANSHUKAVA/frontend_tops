import React from 'react'
import { useSelector } from 'react-redux';
import { Tasklist } from './Tasklist';

export default function Taskul() {


 const task = useSelector(state=>state.task.item)
  return (
    <>
    <ul>
      {
        task.map((item) => {
  return <Tasklist key={item.id} text={item.text} id={item.id} />;
})

      }
    </ul>
    </>
  )
}
