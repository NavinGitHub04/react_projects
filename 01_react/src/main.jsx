import React from 'react'
import { createRoot } from 'react-dom/client'
import './App.css';


const newText= 'add new test'
const test= React.createElement(
  'a',
   {href: "https://google.com", target:'_blank'},
   'a testing code',
   newText
)

createRoot(document.getElementById('root')).render(
 
    test
  
)
