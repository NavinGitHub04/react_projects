
import './App.css'
import UserContextProvider from './Context/UserContactProvider.jsx'
import Login from './components/Login.jsx'
import Profile from './components/Profile.jsx'

function App() {

  return (
    <UserContextProvider>
      <h1> this is first mini project </h1>
      <Login/>
      <Profile/>

    </UserContextProvider>
  )
}

export default App
