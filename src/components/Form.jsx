import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

function Form() {
    const [formData, setFormData] = useState({
        fname: "",
        email: "",
        mes: ""
    });
    
    const [setsubmitData, setSetsubmitData] = useState(null);
    const [showEmail, setShowEmail] = useState(false); // 👈 visibility toggle

    let submithandle = (e) => {
        e.preventDefault();
        console.log('Submitted Name:', formData);
        setSetsubmitData(formData);
        setFormData({ fname: "", email: "", mes: "" });
    };

    let onchanged = (e) => {
        let { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        
    };

    let typechange = () => {
        setShowEmail(prev => !prev);
    };
    
    return (
        <>
            <section className='block md:flex md:flex-col md:justify-center md:items-center lg:pm-10 bg-amber-50 2xl:h-screen'>
                <form onSubmit={submithandle} className='bg-amber-100 md:w-md p-5 shadow-xl relative'>
                    <label className='font-medium'>First Name</label>
                    <input value={formData.fname} name='fname' onChange={onchanged}
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
                    <span  className='p-3 mt-2'>{formData.mes.length}</span> 
                    <button className='hover:bg-amber-600 cursor-pointer px-4 py-2 mt-5 rounded-sm bg-amber-500' type='submit'>Submit</button>
                
                </form>

                {
                    setsubmitData && (
                        <div className='mt-5'>
                            <h1 className='text-center text-2xl font-mono underline text-amber-800'>Submitted Data</h1>
                            <p><strong>Name:</strong> {setsubmitData.fname}</p>
                            <p><strong>Gmail:</strong> {setsubmitData.email}</p>
                            <p><strong>Message:</strong> {setsubmitData.mes}</p>
                        </div>
                    )
                }

            </section>
        </>
    );
}

export default Form;
