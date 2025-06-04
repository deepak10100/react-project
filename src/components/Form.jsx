import React, { useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa'

function Form() {
    const [submitData, setsubmitData] = useState(null)
    const [showEmail, setShowEmail] = useState(false)
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        mes: ""
    })
    let onchanged = (e) => {
        let { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }
    let typechange = () => {
        setShowEmail(!showEmail)
    }


    let handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await fetch('https://67d7e8139d5e3a10152c7e98.mockapi.io/demmy', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            })
            setFormData(formData)
            setsubmitData(formData)
            setFormData({
                name: "",
                email: "",
                mes: ""
            })
        } catch (error) {
            console.log(error)
        }

    }


    return (
        <>
            <section className='block md:flex md:flex-col md:justify-center md:items-center lg:pm-10 bg-amber-50 2xl:h-screen'>
                <form onSubmit={handleSubmit} className='bg-amber-100 md:w-md p-5 shadow-xl relative' method='POST'>
                    <label className='font-medium'>First Name</label>
                    <input value={formData.name} name='name' onChange={onchanged}
                        className='p-3 focus:outline focus:border-amber-600 border-1 w-full py-2 mt-2'
                        type="text" />

                    <label className='font-medium mt-3 block'>Email</label>
                    <div className="relative">
                        <input
                            value={formData.email}
                            name='email'
                            onChange={onchanged}
                            className='p-3 focus:outline focus:border-amber-600 border-1 w-full py-2 mt-2'
                            type={showEmail ? "text" : "password"}
                        />
                        <span className='absolute top-5 right-4 cursor-pointer' onClick={typechange}>
                            {showEmail ? <FaEyeSlash /> : <FaEye />}
                        </span>
                    </div>

                    <label className='font-medium mt-3 block'>Message</label>

                    <textarea
                        rows={5}
                        value={formData.mes}
                        name='mes'
                        onChange={onchanged}
                        className='p-3 focus:outline focus:border-amber-600 border-1 w-full py-2 mt-2'
                        type="text"
                    />
                    <span className='p-3 mt-2'>{formData.mes.length}</span>
                    <button className='hover:bg-amber-600 cursor-pointer px-4 py-2 mt-5 rounded-sm bg-amber-500' type='submit'>Submit</button>

                </form>

                {
                    submitData && (
                        <div className='mt-5'>
                            <h1 className='text-center text-2xl font-mono underline text-amber-800'>Submitted Data</h1>
                            <p><strong>Name:</strong> {submitData.name}</p>
                            <p><strong>Gmail:</strong> {submitData.email}</p>
                            <p><strong>Message:</strong> {submitData.mes}</p>
                        </div>
                    )
                }

            </section>
        </>
    )
}

export default Form