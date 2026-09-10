import React, { useState } from 'react'

const Demo = () => {
  
  const [text, setText] = useState('')  
  const [isDarkTheme, setIsDarkTheme] = useState(false)

  console.log("rendering...")
  return (
    <div className={"border border-black w-1/3 h-60 m-auto mt-10 p-8 " + (isDarkTheme && "bg-gray-900 text-white")}>
        <input 
            className='border'
            type='text' 
            value={text}
            onChange={(e)=>setText(e.target.value)}
        />
        <button className='border bg-neutral-50 text-black px-2 rounded' onClick={()=>{setIsDarkTheme(!isDarkTheme)}}>Theme</button>
    </div>
  )
}

export default Demo