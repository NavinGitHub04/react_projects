import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [number, setNumber] = useState(false)
  const [character, setCharacter] = useState(false)  // fixed spelling
  const [password, setPassword] = useState("")       // fixed initial value (was " ")

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (number) str += "0123456789"
    if (character) str += "@#$%^&*()_+[]{}"

    for (let i = 0; i < length; i++) {
      const index = Math.floor(Math.random() * str.length)
      pass += str.charAt(index)
    }

    setPassword(pass)
  }, [length, number, character])

  const copyPasswordToClipboard = useCallback(() => {
      passwordRef.current?.select()
      passwordRef.current?.setSellectionRange(0, 3)
      window.navigator.clipboard.writeText(password)
      

  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [length, number, character, passwordGenerator])

  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800">
      <h1 className="text-white text-center my-3">Password Generator</h1>

      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          value={password}
          readOnly
          className="outline-none w-full py-1 px-3"
          placeholder="password"
          ref={passwordRef}
        />
        <button
          onClick={copyPasswordToClipboard}
          className="outline-none bg-blue-800 text-white px-3 py-0.5 shrink-0
           hover:bg-blue-600"
          
        >
          Copy
        </button>
      </div>

      <div className="flex text-sm gap-x-4 flex-wrap">
        <div className="flex items-center gap-x-1">
          <input
            type="range"
            min={6}
            max={100}
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
            className="cursor-pointer"
          />
          <label className="text-white">Length: {length}</label>
        </div>

        <div className="flex items-center gap-x-2">
          <input
            type="checkbox"
            id="numberInput"
            checked={number}
            onChange={() => setNumber((prev) => !prev)}
          />
          <label htmlFor="numberInput" className="text-white">Include Numbers</label>

          <input
            type="checkbox"
            id="characterInput"
            checked={character}
            onChange={() => setCharacter((prev) => !prev)}
          />
          <label htmlFor="characterInput" className="text-white">Include Special Characters</label>
        </div>
      </div>
    </div>
  )
}

export default App
