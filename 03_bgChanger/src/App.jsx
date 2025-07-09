import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const[color, setColor]=useState('olive')
  return (
    <>
    <div className='h-screen flex justify-center items-center text-white space-x-1'  
    style={{background:color}}
    >
      <button className='bg-green-300 p-3 rounded-xl' onClick={()=>{setColor("green")} }>green</button>
      <button className='bg-red-300 p-3 rounded-xl 'onClick={()=>{setColor("red")}}>red</button>
      <button className='bg-blue-300 p-3 rounded-xl'onClick={()=>{setColor("blue")}}>blue</button>
      <button className='bg-pink-300 p-3 rounded-xl'onClick={()=>{setColor("pink")}}>pink</button>
      <button className='bg-black p-3 rounded-xl'onClick={()=>{setColor("black")}}>black</button>
      <button className='bg-purple-300 p-3 rounded-xl'onClick={()=>{setColor("purple")}}>purpol</button>
      </div>
    </>
  )
}

export default App
