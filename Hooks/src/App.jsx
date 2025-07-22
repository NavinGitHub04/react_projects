import { useState } from 'react'
import './App.css'

function App() {
const [counter, setCounter] = useState(15)

 
 const addValue= () => {
      setCounter(counter+1)
  }
  const remove= () => {
      setCounter(counter-1)
  }

  return (
    <>
    <div>
      <h1>const: {counter}</h1>
      <button onClick={addValue}  >add value:{counter}</button>
      <br></br>
      <button onClick={remove}>remove value:{counter}</button>
      </div>
    </>
  )
}

export default App
