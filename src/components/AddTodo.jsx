import React, { useState } from 'react'
import { IoIosAddCircle } from "react-icons/io";
import { IoSave } from 'react-icons/io5';
import { FaEdit } from "react-icons/fa";
import { MdDelete } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { createTodo, deleteTodo, editTodo } from '../features/counter/userSlice';
function AddTodo() {
  const [editId, setEditId] = useState(null)
  const [inputText, setInputText] = useState({
    name:"",
    age:""
  })
  let onchangehandle = (e)=>{
    let {name,value}=e.target
    setInputText((prev)=>({ ...prev, [name]:value}));
  }
  let detetodo=(id)=>{
    dispatch(deleteTodo(id))
  }
  let onsubmithandle =(e)=>{
      e.preventDefault()
      console.log("submit data", inputText, editId);
      
    if (editId) {
      dispatch(editTodo({
        id:editId,
        updateData:{
          name:inputText.name,
          age:inputText.age
        },
      }))
      setEditId(null)
    } else {
     
    dispatch(createTodo({name:inputText.name,age:inputText.age}))
    }
     setInputText({
      name:"",
      age:""
    })
  }
  const user = useSelector((state) => state.user.value)
  const dispatch = useDispatch()
  return (
    <>
   <div className='container max-w-3xl m-auto p-5'>
    <h1 className='text-center text-2xl font-bold py-5'>Todo</h1>
    <form method="post" onSubmit={onsubmithandle}  className='flex flex-col sm:flex-row justify-center gap-2 items-center'>
        <input name='name' type="text" value={inputText.name} onChange={onchangehandle} className=' w-full px-3 py-2 border-2' placeholder='Enter the name' />
        <input name='age' type="number" value={inputText.age} onChange={onchangehandle} className='w-full px-3 py-2 border-2' placeholder='Enter the age' />
    <button type='submit' className='px-3 text-2xl py-3 bg-amber-950 text-amber-50 cursor-pointer  rounded-full'>{ editId?<FaEdit />:<IoSave />}</button>
    </form> 
      <table  className="text-center w-full mt-5 table-auto border-collapse border border-gray-400">
  <thead className='bg-orange-400 text-amber-50'>
    <tr className=''>
      <th className='border border-gray-300 text-left p-1'>Name</th>
      <th className='border border-gray-300'>Age</th>
      <th  className='border border-gray-300'>Action</th>
    </tr>
  </thead>
  <tbody>
    
     {
      user.length<1? <td className=' text-3xl text-center font-extrabold pl-40'>No Data</td>:(
         user.map((usr)=>(
        <tr key={usr.id}>
         <td className="border border-gray-300 text-left p-1">{usr.name}</td>
      <td className='border border-gray-300 w-10'> {usr.age}</td>
      <td className='border border-gray-300 w-25 md:w-30 p-2'>
      <button onClick={()=>detetodo(usr.id)} className='px-2 py-2 cursor-pointer bg-red-800 text-amber-50 rounded-full mr-3'><MdDelete /></button>
       <button onClick={()=>{setInputText({name: usr.name, age:usr.age}); setEditId(usr.id)}} className='px-2 py-2 bg-amber-950 text-amber-50 rounded-full cursor-pointer mr-5' ><FaEdit /></button>
      </td>
      </tr>
        
      ))
      )
     
     }
    
  </tbody>
</table>
   </div>
    </>
  )
}

export default AddTodo