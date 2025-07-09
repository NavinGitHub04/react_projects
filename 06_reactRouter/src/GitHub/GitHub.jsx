import React, { useState, useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'


function GitHub() {
    const data= useLoaderData()
    // const[data, setData]= useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/NavinGitHub04')
    //     .then( res => res.json() )
    //     .then(data =>{
    //         console.log(data)
    //         setData(data)
    //     })
    // },[])
  return (
    <div className=' text-center m-4 p-4  text-3xl mt-4 bg-slate-400'>user: {data.login}
    <img src={data.avatar_url} alt="git picture" width={300}  className='full'/>
    </div>
  )
}

export default GitHub
export const GitHubInfoLoader= async() => {
    const response= await fetch('https://api.github.com/users/NavinGitHub04')
    return response.json()
}