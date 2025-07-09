import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './component/Card.jsx' 

function App() {
  const [count, setCount] = useState(0)
  // let newArr={
  //   name:'chai oe code',
  //   contact:736464664
  // }
  // let array=[1,2,3,4,5]

  return (
    <>
      <h1 className="bg-green-500 p-4 rounded-xl mb-4">tailwind css</h1>
      <Card  userName='chai or code' />
      <Card userName="watching new card"/>
    </>
  )
}

export default App
