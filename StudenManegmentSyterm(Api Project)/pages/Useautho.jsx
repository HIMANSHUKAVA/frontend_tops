import React from 'react'
import { createContext } from 'react'
import { useState } from 'react'
import TeacherLogin from './TeacherLogin'
import Layout from '../Layoutm';


    // create the usecontext for autho
    const Authocontex =  createContext();


export default function Useautho({children}) {


    // create the state for Login 
    const [islogin, setislogin] = useState(false);
  return (
    <div>
      
      <Authocontex.Provider value={{islogin , setislogin}}>
        {children}
      </Authocontex.Provider>
    </div>
  )

}

export {Authocontex};