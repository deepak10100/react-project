import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Ecommerce from './components/Ecommerce'
import Navbar from './components/Navbar'
import Form from './components/Form'
import AddTodo from './components/AddTodo'



export default function App() {

  return (
    <>
      
 <BrowserRouter>
        <Navbar/> 
        <main>
          <Routes>
        <Route path="/ecommerce" element={<Ecommerce />} />
        <Route path="/form" element={<Form />} />
        <Route path="/todo" element={<AddTodo />} />
        </Routes>
        </main>
      </BrowserRouter>
     
    
    </>
  )
}

