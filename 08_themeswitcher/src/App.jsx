
import { ThemeProvider } from './context/Theme'
import './App.css'
import { useState, useEffect } from 'react'
import Card from './components/card'
import ThemeBtn from './components/ThemBtn'

function App() {
  const[themeMode, setThemeMode]= useState("light")
  const lightTheme= ()=>{
    setThemeMode("dark")
  }
   const darkTheme= ()=>{
    setThemeMode("light")
  }

  useEffect(()=>{
      document.querySelector('html').classList.remove("light", "dark")
      document.querySelector('html').classList.add(themeMode)
  },[themeMode])

  return (
    <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>
   <div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                         <Card/>
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                       <ThemeBtn/>
                    </div>
                </div>
            </div>
           
            
    </ThemeProvider>
  )
}

export default App
