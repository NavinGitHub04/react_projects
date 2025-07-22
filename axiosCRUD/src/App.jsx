import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

const API = "https://jsonplaceholder.typicode.com/users";
function App() {
  const [user, setUser] = useState([])
  const [name, setName] = useState("")
   const featchUser= async()=> {
        const res= await axios.get(API)
        setUser(res.data)
        }
   const addUser=async()=>{
      const add=await axios.post(API,{
        name:"name"
      })
      setUser([...user, add.data])
      setName("")
    
   }
   const remove= async(id)=>{
          await axios.delete(`${API}/${id}`)
          setUser(user.filter((id)=>{id!==id.user}))
   }

    useEffect(()=>{
      featchUser()
    },[])
  return (
    <>
      <div style={{ padding: "20px" }}>
      <h2>user (JSONPlaceholder)</h2>

      <input
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={addUser}>Add</button>

      <ul>
        {user.map((users) => (
          <li key={users.id}>
            {users.name}
            <button onClick={() => remove(users.id)} style={{ marginLeft: "10px" }}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
       
    </>
  )
}

export default App
