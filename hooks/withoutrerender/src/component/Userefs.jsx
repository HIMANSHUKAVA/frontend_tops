import { useRef, useState } from 'react';

export default function Userefs() {

    const [counter, setcounter] = useState(0);

    const a = useRef(0);

    const increment = ()=>{

        a.current = a.current + 1;

        console.log(a.current);

    }
    const decrement = ()=>{


        a.current = a.current - 1;

        console.log(a.current);

    }
  return (

    <>

    <h1>Count Is :{counter}</h1>

    <button onClick={increment}>increment</button>

    <button onClick={decrement}>decrement</button>
    </>
  )
}
