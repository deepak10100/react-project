import React, { useEffect, useState } from 'react'

function RandomQuote() {
    let [text,setText] = useState('')
    let [tag,setTag] = useState([])
    let [loading, setLoading]=useState(false)
    let randomClick = async ()=>{
        setLoading(true)
        try {
            let res = await fetch('https://api.quotable.io/random')
            let data = await res.json()
            
        console.log(data)
        setText(data)
        setTag(data.tags)
       
      } catch (error) {
        console.log(error)
        
      }
      setLoading(false)
    }
    
useEffect(() => {
  randomClick()
}, [])

    
    return (
        <>
           {
           
             <div className="body flex justify-center p-5">
                <div className=' bg-white w-6xl h-70 p-5 rounded-md'>
                <div className="content my-5">
                    <h1 className=' font-bold text-5xl mb-3'>{text.author}</h1>
                    <p className=' text-gray-500'>{text.content}</p>
                </div>
                <div className="tag">
                    {
                        
                        tag.map((tag)=>(
                            <span>{tag}</span>
                        ))
                    
                        }
                </div>
                <button onClick={randomClick} className={` px-5 py-2 text-white cursor-pointer rounded-sm  bg-blue-500`}>{loading?"Loading...":"Random Quote"}</button>
            </div>
            </div>
            
           }
        </>
    )
}

export default RandomQuote