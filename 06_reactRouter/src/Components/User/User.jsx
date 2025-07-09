
import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid} = useParams()
  return (
    <div  className=' text-center m-4 p-4  text-3xl mt-4 bg-slate-400'>User: Navin Kumar</div>
  )
}

export default User