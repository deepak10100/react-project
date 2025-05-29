import React, { useEffect, useState } from 'react'
import { FaEdit } from 'react-icons/fa'
import { MdDelete } from 'react-icons/md'
import { RiAddBoxFill } from 'react-icons/ri'

function Todo() {
  const [EditId, setEditId] = useState(null)
  const [inputData, setInputData] = useState({
    name: "",
    age: "",
    agree: false,
    file: null,
    country: '',
    gender: "",
  })
  const [data, setData] = useState([])
  let onchanged = (e) => {
    let { name, value, type, checked, files } = e.target
    setInputData((prev) => ({ ...prev, [name]: type == "checkbox" ? checked : type == "file" ? files[0] : value }))
  }
  let editButton =(item)=>{
    setInputData({name:item.name,age:item.age,country:item.country, file:item.file, gender:item.gender,agree:item.agree})
    setEditId(item.id)
  }
  let submitted = (e) => {
    e.preventDefault()
   if (EditId) {
    let updateitem = data.map((item)=>(
      item.id === EditId ? {...item, ...inputData}:item
    ))
    setData(updateitem)
    setEditId(null)
    setInputData({
      name: "",
      age: "",
      agree: false,
      file: null,
      country: "",
      gender: ""
    });
   } else {
     let newData = {
      ...inputData,
      id: Date.now()
    }
    let a = setData([...data, newData])
    console.log(a)
   setInputData({
      name: "",
      age: "",
      agree: false,
      file: null,
      country: "",
      gender: ""
    });
   }
  }
  
  
  let deleteButton =(id)=>{
    setData(data.filter((item)=>item.id !== id))
  }
  return (
    <>
      <div className='container max-w-5xl m-auto p-5'>
        <h1 className='text-center text-2xl font-bold py-5'>Todo</h1>
        <form method="post" className='flex flex-col sm:flex-row justify-center gap-2 items-center'>
          <input onChange={onchanged} value={inputData.name} name='name' type="text" className='w-full px-3 py-2 border-2' placeholder='Enter the name' />
          <input onChange={onchanged} name='age' value={inputData.age} type="number" className='w-full px-3 py-2 border-2' placeholder='Enter the age' />
          <input onChange={onchanged} name='file' type="file" className='w-full file:bg-amber-400 file:px-4 file:py-2 px-2 py-2 file:rounded-md' placeholder='Enter the age' />
          <select onChange={onchanged} name="country" value={inputData.country} id="" className=' px-3 py-2 border-2'>
            <option value="">Selected</option>
            <option value="india">India</option>
            <option value="usa">USA</option>
            <option value="ua">UA</option>
          </select>
          <div className='text-center'>
            <label htmlFor="" className='font-medium'>Gender</label>
            <div className='flex gap-2'>
              <input onChange={onchanged} type="radio" checked={inputData.gender === 'male'} value={'male'} name="gender" id="" className='w-full px-3 py-2 border-b-amber-300' /> 
            <label htmlFor="">Male</label>
            <input onChange={onchanged} type="radio" checked={inputData.gender === 'female'} value={'female'} name="gender" id="" className='w-full px-3 py-2' /> 
            <label htmlFor="">Female</label>
            </div>
          </div>
         <div className='w-md text-center'>
           <input onChange={onchanged} type="checkbox" checked={inputData.agree} name="agree" id="" /> 
          <label htmlFor="" >I Agree</label>
         </div>
          <button type='submit' onClick={submitted} className='px-3 text-2xl py-3 bg-amber-950 text-amber-50 cursor-pointer rounded-full'>{EditId?<FaEdit />:<RiAddBoxFill />}</button>
        </form>

        <table className="text-center w-full mt-5 table-auto border-collapse border border-gray-400">
          <thead className='bg-orange-400 text-amber-50'>
            <tr>
              <th className='border border-gray-300 text-left p-1'>Name</th>
              <th className='border border-gray-300'>Profile Image</th>
              <th className='border border-gray-300'>Age</th>
              <th className='border border-gray-300'>Country</th>
              <th className='border border-gray-300'>Gender</th>
              <th className='border border-gray-300'>Agree</th>
              <th className='border border-gray-300'>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              data.map((item) => (
                <tr key={item.id}>
                  <td className='border border-gray-300 text-left p-1'>{item.name}</td>
                  <td className='border border-gray-300 w-30 h-20 text-center'>  {item.file && <img src={URL.createObjectURL(item.file)} alt="" className=' rounded-full w-10 h-10' srcset="" />}</td>
                  <td className='border border-gray-300 w-20'>{item.age}</td>
                  <td className='border border-gray-300 w-20'>{item.country}</td>
                  <td className='border border-gray-300 w-20'>{item.gender}</td>
                  <td className='border border-gray-300 w-20'>{item.agree == true ? "Yes" : "No"}</td>
                  <td className='border border-gray-300 w-25 md:w-30 p-2 text-center'>
                    <button onClick={()=> deleteButton(item.id)} className='px-2 py-2 cursor-pointer bg-red-800 text-amber-50 rounded-full mr-3'><MdDelete /></button>
                    <button onClick={()=>editButton(item)} className='px-2 py-2 bg-amber-950 text-amber-50 rounded-full cursor-pointer mr-5'><FaEdit /></button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>

    </>
  )
}

export default Todo