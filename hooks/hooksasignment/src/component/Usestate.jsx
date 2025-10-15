import { useState } from 'react';

export default function Usestate() {
    const [counter, setcounter] = useState(0);
  return (
    <>

    <h1>Counter Is : {counter}</h1>

     <button onClick={()=>{setcounter(counter+1)}}>Increment</button>
     <button onClick={()=>{setcounter(counter-1)}}>Decrement</button>
    </>
  )
}
