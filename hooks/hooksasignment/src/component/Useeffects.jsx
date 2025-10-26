import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Useeffects() {


    const [dat, setdatta] = useState([]);
    useEffect(() => {


        axios.get(`http://localhost:3000/fetch-data`)
        .then((Response)=>{
            setdatta(Response.data);
        })
        .catch((error)=>{
            console.log(error);

        })

    }, [])

  return (
    <>
      {dat.map((car)=>(
        <>
        <h1>Name : {car.name}</h1>
        <h1>Cource : {car.cource}</h1>
        </>
      ))}
    </>
  )
}
