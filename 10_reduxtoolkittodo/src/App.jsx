import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodo  from './components/addTodo.jsx'
import Todos from './components/Todos.jsx'

function App() {
  

  return (
    <>
      <h1 className='text-3xl'>testing redux tookits</h1>
      <AddTodo/>
      <Todos />
      
    </>
  )
}

export default App
