import React from 'react'
import { Provider } from 'react-redux'
import "./App.css"
import Counter from './Asi/Counter'
import store from "./reduxxcomponent/Store"
export default function App() {
  return (
    <>
     <Provider store={store}>
        <Counter/>
     </Provider>

    </>
  )
}
