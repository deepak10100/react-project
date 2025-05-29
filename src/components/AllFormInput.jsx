import React, { useEffect, useState } from 'react'

function AllFormInput() {
    const [Submitted, setSubmitted] = useState(null)
    const [colored, setColored] = useState("")
    const [inputBox, setInputBox] = useState({
        name:"",
        pass:"",
        email:"",
        date:"",
        time:"",
        gender:"",
        file:null,
        color:"",
        range:50,
        tel:"",
        url:"",
        search:"",
        country:"",
        message:"",
        agree:false,
    })
    let onchanged = (e)=>{
        let {name,value,checked,type,files}=e.target
        setInputBox((prev)=>({...prev,[name]:type==="checkbox"?checked:type==="file"?files[0]:value}))
    }
    let randomcolor=()=>{
        let red = Math.floor(Math.random()*256)
        let blue = Math.floor(Math.random()*256)
        let green = Math.floor(Math.random()*256)
        let col = `rgb(${red},${blue},${green})`
        setColored(col)
        
    }
    let submithandle = (e)=>{
        e.preventDefault()
        setSubmitted(inputBox)
        console.log(inputBox)
    }
    let resethandle = ()=>{
        setInputBox({
        name:"",
        pass:"",
        email:"",
        date:"",
        time:"",
        gender:"",
        file:null,
        color:"",
        range:"",
        tel:"",
        url:"",
        search:"",
        country:"",
        message:"",
        agree:false,
        })
    }
    useEffect(() => {
      randomcolor()
     
      
    }, [inputBox.range])
    
  return (
    <>
    <div class="max-w-2xl mx-auto px-4 " style={{backgroundColor:colored}}>
  <h2 class="text-2xl font-bold mb-6 text-center">Controlled Input Form </h2>
  <form class="bg-white shadow-md rounded px-6 py-8"  onSubmit={submithandle}>
    
    <div class="mb-4">
      <label class="block mb-1 font-medium">Name</label>
      <input type="text" name='name' onChange={onchanged} class="w-full border rounded px-3 py-2" />
    </div>

    <div class="mb-4">
      <label class="block mb-1 font-medium">Password</label>
      <input type="password" name='pass' onChange={onchanged} class="w-full border rounded px-3 py-2" />
    </div>

    <div class="mb-4">
      <label class="block mb-1 font-medium">Email</label>
      <input type="email" name='email' onChange={onchanged} class="w-full border rounded px-3 py-2" />
    </div>

    <div class="mb-4">
      <label class="block mb-1 font-medium">Age</label>
      <input type="number" name='number' onChange={onchanged} class="w-full border rounded px-3 py-2" />
    </div>

    <div class="mb-4">
      <label class="block mb-1 font-medium">Date</label>
      <input type="date" name='date' onChange={onchanged} class="w-full border rounded px-3 py-2" />
    </div>

    <div class="mb-4">
      <label class="block mb-1 font-medium">Time</label>
      <input type="time" name='time' onChange={onchanged} class="w-full border rounded px-3 py-2" />
    </div>

    <div class="mb-4">
      <label class="block mb-2 font-medium">Gender</label>
      <label class="mr-4">
        <input type="radio" name="gender" onChange={onchanged} checked={inputBox.gender=='male'} value="male" /> Male
      </label>
      <label>
        <input type="radio" name="gender" onChange={onchanged} checked={inputBox.gender=='female'} value="female" /> Female
      </label>
    </div>
    <div class="mb-4">
      <label class="block mb-1 font-medium">Upload File</label>
      <input type="file" accept={'image/*'} onChange={onchanged} name='file' class="w-full bg-gray-200  rounded-sm file:border-2 file:px-5 file:py-2 file:rounded-xl file:rounded-r-none file:border-r-0 file:bg-black file:text-amber-50 file:cursor-pointer file:font-medium" />
    </div>

    <div class="mb-4">
      <label class="block mb-1 font-medium">Choose Color</label>
      <input type="color" onChange={onchanged} name='color' class="w-10 h-10" />
    </div>

    <div class="mb-4">
      <label class="block mb-1 font-medium">Range</label>
      <input type="range" onChange={onchanged} name='range' min={0} max={255} value={inputBox.range} class="w-full" />
      <span>{colored}</span>
    </div>

    <div class="mb-4">
      <label class="block mb-1 font-medium">Phone</label>
      <input type="tel" onChange={onchanged} name='tel' class="w-full border rounded px-3 py-2" />
    </div>

    <div class="mb-4">
      <label class="block mb-1 font-medium">Website</label>
      <input type="url" onChange={onchanged} name='url' class="w-full border rounded px-3 py-2" />
    </div>

    <div class="mb-4">
      <label class="block mb-1 font-medium">Search</label>
      <input type="search" onChange={onchanged} name='search' class="w-full border rounded px-3 py-2" />
    </div>

    <div class="mb-4">
      <label class="block mb-1 font-medium">Country</label>
      <select class="w-full border rounded px-3 py-2" onChange={onchanged} name='country'>
        <option value="india">India</option>
        <option value="usa">USA</option>
        <option value="uk">UK</option>
      </select>
    </div>

    <div class="mb-4">
      <label class="block mb-1 font-medium">Message</label>
      <textarea name='message' onChange={onchanged} class="w-full border rounded px-3 py-2"></textarea>
    </div>
 <div class="mb-4">
     
      <label class="mr-4">
        <input type="checkbox" onChange={onchanged} name='agree' value="html" /> I Agree
      </label>
    </div>
    <div class="flex items-center space-x-4">
      <input type="submit" value="Submit" class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 cursor-pointer" />
      <input type="reset" value="Reset" onClick={resethandle} class="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500 cursor-pointer" />
    </div>
    
  </form>
</div>
{
    Submitted && (
        <>
        <p><strong>Name:</strong> {Submitted.name}</p>
          <p><strong>Range Color:</strong> {Submitted.range}</p>
        {Submitted.file && <img src={URL.createObjectURL(Submitted.file)} alt="Uploaded preview" className="mt-4 mx-auto max-h-60 rounded" />}
        </>
    )
}

    </>
  )
}

export default AllFormInput