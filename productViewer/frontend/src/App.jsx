import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import Card from './components/Card';

const App = () => {
  const [products, setProducts] = useState([])
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')


  useEffect(() => {
    fetch(`http://localhost:3000/api/products`)
    .then((response)=>response.json())
    .then((data)=>setProducts(data))
  }, [])
  

  async function handleSubmit(e){
    e.preventDefault()

    const response = await fetch(`http://localhost:3000/api/product`, 
      {
        method: "POST", 
        headers: {
          "Content-Type": "application/json"
        }, 
        body: JSON.stringify({
          title, 
          description
        })
      }
    )

    const data = await response.json()
    setProducts([...products, data])

    setTitle("")
    setDescription("")

  }

  return (
   <div className='w-full min-h-screen p-10 bg-[#485664] text-[#D3D9DF]'>

      <form onSubmit={handleSubmit} className='flex flex-col gap-4 mb-10 flex-wrap'>
        <input 
          type="text" 
          placeholder='Enter title'
          value={title}
          required={true}
          onChange={(e)=>setTitle(e.target.value)}
          className='px-5 py-2 border-2 border-[#C4CCD5] rounded-md'
        />
        
        <textarea 
          placeholder='Enter description'
          value={description}
          required={true}
          onChange={(e)=>setDescription(e.target.value)}
          className='resize-none px-5 py-2 border-2 border-[#C4CCD5] rounded-md'
        />

        <button className='w-4/5 mx-auto text-[#424c55] bg-[#B6C0CA] px-5 py-3 border-none rounded-full font-semibold hover:bg-[#424c55] hover:text-[#B6C0CA] ease-in-out duration-300' type='submit'>Submit</button>

      </form>

    <div className='flex flex-wrap gap-10'>
    {
      products.map((product, id)=>{
        return (
          <Card 
            product={product}
            key={id}
          />
        )
      })
    }

    </div>

    </div>
  )
}

export default App
