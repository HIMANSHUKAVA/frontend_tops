import React from 'react'

export default function UserCard(props) {
  return (
    <div>
      <h2>Hello My Name is {props.name} and i am {props.age} year old I am from {props.location}</h2>
    </div>
  )
}
