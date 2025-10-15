import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Task2render from './Task2render.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App />  first Task run  */}
    <Task2render/>
  </StrictMode>,
)
