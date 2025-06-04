import React, { useEffect } from 'react'
import { useState } from 'react'

function DarkMode() {
  let [dark,setDark]=useState(false)
  let onclick = ()=>{
    setDark(!dark)
  }
  useEffect(() => {
   let theme =  localStorage.getItem('theme')
   if (theme =="black") {
    setDark(true)
   }
  }, [])
  useEffect(() => {
    localStorage.setItem('theme',dark?"black":"white")
  }, [dark])
  
  return (
    <div className={`${dark?"bg-black":"bg-white"} ${dark?"text-white":"text-black"}`}>
    <button onClick={onclick}>{dark?"dark":"light"}</button>
    </div>
  )
}

export default DarkMode