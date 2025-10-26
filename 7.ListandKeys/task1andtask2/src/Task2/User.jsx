import React from 'react'

export default function User(props) {
  return (
    <>
    <h1> User Detail</h1>

    <table border={2}>

    <thead>
        <th>Id</th>
        <th>Name</th>
        <th>Cource</th>
    </thead>

    <tbody>
        {props.deta.map((item , index)=>(
            <tr key={index}>
             <td>{item.id}</td>
             <td>{item.Name}</td>
             <td>{item.Cource}</td>
            </tr>
        ))}
    </tbody>
    </table>
    </>
  )
}
