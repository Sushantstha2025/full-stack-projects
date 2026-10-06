import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import GoBack from '../components/GoBack'
import { Link } from 'react-router'
import EditPage from './EditPage'
import { DeleteIcon, PenBoxIcon, Trash2Icon } from 'lucide-react'

const HomePage = () => {

  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [loading, setLoading] = useState(false)

  const [task, setTask] = useState([])

  function handleSubmit(e){
    e.preventDefault()
  }

  return (
    <div>
      <Navbar />
      <GoBack />

      <div className='bg-gray-700 w-1/3 rounded-2xl drop-shadow-2xl mt-5'>
        <h1 className='text-xl font-sans font-semibold px-5 py-4'>Create Task</h1>
        <form className='flex flex-col gap-4 p-4 flex-wrap' onSubmit={handleSubmit}>
          <input value={title} type="text" placeholder='Enter title..' className='px-3 py-2 rounded-xl font-sans border-2 border-gray-500 focus:bg-gray-400 *:' onChange={e=>setTitle(e.target.value)}/>
          <textarea value={content} placeholder='Enter description..' className='resize-none px-3 py-2 rounded-xl font-sans border-2 border-gray-500 focus:bg-gray-400' onChange={e=>setContent(e.target.value)}/>
          <button type='submit' className='rounded-md bg-blue-200 px-3 py-2 w-fit font-semibold cursor-pointer active:bg-blue-300 duration-200 ease-in active:-translate-y-0.5'>Create</button>
        </form>
      </div>

      <div className="card-contaner mt-4 bg-amber-300 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="card bg-amber-900 px-5 py-3 rounded-md font-sans">
          <h1 className='text-2xl font-semibold mb-2'>Buy Eggs</h1>
          <p className='line-clamp-3 h-fit w-fit tracking-tight'>No matter what, finish the react concept now. And then do the backend interview question</p>
          <div className="btns flex justify-end gap-3 items-center">
            <Link to={"/edit"}><PenBoxIcon className='size-5 fill-amber-200 text-amber-500' /></Link>
            <Link to={"/delete"}><Trash2Icon className='size-5 text-red-500'/></Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
