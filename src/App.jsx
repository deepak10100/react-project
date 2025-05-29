import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Ecommerce from './components/Ecommerce'
import Navbar from './components/Navbar'
import Form from './components/Form'
import AddTodo from './components/AddTodo'
import RandomQuote from './components/RandomQuote'
import AllFormInput from './components/AllFormInput'
import Todo from './components/Todo'
export default function App() {

  return (
    <>

      <BrowserRouter>
        <Navbar />
        <main>
          <Routes>
            <Route path="/ecommerce" element={<Ecommerce />} />
            <Route path="/form" element={<Form />} />
            <Route path="/todo" element={<AddTodo />} />
            <Route path="/random" element={<RandomQuote />} />
            <Route path="/allform" element={<AllFormInput />} />
            <Route path="/reacttodo" element={<Todo />} />
          </Routes>
        </main>
      </BrowserRouter>


    </>
  )
}

