import React from "react";
import Sop from "./Task1/Sop";
import User from "./Task2/User";
export default function App() {
  const fruis = ["apple", "orange", "mango", "watermelon"];
  const user = [
    {
      id: 1,
      Name: "Himanshu",
      Cource: "Java Full Stack",
    },

    {
      id: 2,
      Name: "Devang",
      Cource: "Data Science",
    },

    {
      id: 3,
      Name: "Jinal",
      Cource: "Python Devlopment",
    },
  ];
  return <div>
    {/* <Sop deta={fruis}/> first Task run */}
    <User deta ={user} />
    
    
    </div>;
}
