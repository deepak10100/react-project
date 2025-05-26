import React, { useState } from 'react'

function Form() {
    const [formData, setFormData] = useState({
        fname: "",
        email: "",
        mes: ""
    })
    const [setsubmitData, setSetsubmitData] = useState(null)
    let submithandle = (e) => {
        e.preventDefault(); // page reload na ho
        console.log('Submitted Name:', formData);
        setSetsubmitData(formData)
        setFormData({
            fname: "",
            email: "",
            mes: ""
        })
    }
    let onchanged = (e) => {
        let { name, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }))
    }
    return (
        <>
           
                <section className='block md:flex md:flex-col md:justify-center md:items-center lg:pm-10  bg-amber-50 2xl:h-screen '>
                    <form onSubmit={submithandle} action="" className=' bg-amber-100 md:w-md p-5 shadow-xl'>
                        <label htmlFor="" className=' font-medium'>First Name</label>
                        <input value={formData.fname} name='fname' onChange={onchanged} className='p-3 focus:outline focus:border-amber-600 border-1 w-full py-2 mt-2 ' type="text" />
                        <label htmlFor="" className=' font-medium'>Email</label>
                        <input value={formData.email} name='email' onChange={onchanged} className='p-3 focus:outline focus:border-amber-600 border-1 w-full py-2 mt-2 ' type="text" />
                        <label htmlFor="" className=' font-medium'>Message</label>
                        <textarea rows={5} value={formData.mes} name='mes' onChange={onchanged} className='p-3 focus:outline focus:border-amber-600 border-1 w-full py-2 mt-2 ' type="text" />
                        <button className=' hover:bg-amber-600  cursor-pointer px-4 py-2 mt-5 rounded-sm bg-amber-500' type='submit'>Submit</button>
                    </form>

                    <div>
                    </div>
                    {
                        setsubmitData && (
                            <>
                               <div className='mt-5'>
                                <h1 className=' text-center text-2xl font-mono underline text-amber-800'>Submited Data</h1>
                                 <p> <strong>Name:</strong> {setsubmitData.fname}</p>
                                <p> <strong>Gmail:</strong> {setsubmitData.email}</p>
                                <p> <strong>Message:</strong> {setsubmitData.mes}</p>
                               </div>
                            </>
                        )
                    }
                </section>

            
        </>
    )
}

export default Form