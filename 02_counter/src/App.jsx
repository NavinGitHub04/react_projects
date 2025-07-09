import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(15)
  //let counter = 15
  const addValue = () => {
    if (counter < 20) {
      counter += 1
      setCounter(counter)

      // setCounter(counter+1)
      // setCounter(counter+1)
      // setCounter(counter+1)
      // setCounter(prevCounter=> prevCounter+1)
      // setCounter(prevCounter=> prevCounter+1)
      // setCounter(prevCounter=> prevCounter+1)

      console.log('add value', counter)
    } else {
      window.alert("not display greater the 20: ")
    }
  }
  const removeValue = () => {
    if (counter > 0) {
      counter -= 1
      setCounter(counter)
      console.log('remove value', counter)
    } else {
      window.alert("not display any nagative value: ")
    }
  }
  return (

    <>
      <h1>javascript or react</h1>
      <h3>counter value: {counter}</h3>

      <button
        onClick={addValue}
      >add value{counter}</button>
      <br />
      <button
        onClick={removeValue}
      >remove value{counter}</button>
    </>
  )
}

export default App
