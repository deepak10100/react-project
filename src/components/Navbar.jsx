import React from 'react'
import { NavLink } from 'react-router-dom'


export default function Navbar() {
   
  return (
    <>
    <header className=' bg-amber-600 text-amber-50 p-5 w-full'>
        <nav>
            <ul className='md:flex hidden gap-5 items-center'>
                <li><NavLink to={'/'}  className={({isActive}) =>isActive?' bg-amber-200 text-black p-2  rounded-sm font-medium':" hover:bg-amber-200 text-white hover:text-black p-2  rounded-sm font-medium"}>Home</NavLink></li>
                <li><NavLink to={'/ecommerce'}  className={({isActive}) =>isActive?' bg-amber-200 text-black p-2  rounded-sm font-medium':"hover:bg-amber-200 text-white hover:text-black  p-2  rounded-sm font-medium"}>Ecommerce</NavLink></li>
                <li><NavLink to={'/form'}  className={({isActive}) =>isActive?' bg-amber-200 text-black p-2  rounded-sm font-medium':"hover:bg-amber-200 text-white hover:text-black p-2  rounded-sm font-medium"}>Form</NavLink></li>
                <li><NavLink to={'/todo'}  className={({isActive}) =>isActive?' bg-amber-200 text-black p-2  rounded-sm font-medium':"hover:bg-amber-200 text-white hover:text-black p-2  rounded-sm font-medium"}>Todo Redux-toolkit</NavLink></li>
            </ul>
        </nav>
    </header>
    </>
  )
}
