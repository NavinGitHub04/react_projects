import React, {useContext} from 'react'
import UserContext from '../Context/userContext'

function Profile() {
    const{user}= useContext(UserContext)
    if(!user) return<div>please login</div>
  return (
    <div>welcome {user.username}</div>
  )
}

export default Profile


