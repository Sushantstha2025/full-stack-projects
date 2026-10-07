import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import GoBack from '../components/GoBack'
import api from '../lib/axios.ts'
import toast from 'react-hot-toast'
import Card from '../components/Card.tsx'
import type { Note } from '../types/note.ts'

const HomePage = () => {

  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const [task, setTask] = useState<Note[]>([])

  async function handleSubmit(e){
    setIsLoading(true)
    e.preventDefault()

    if(!title || !content){
      return toast.error("Fields are empty..")
    }

    try {
      const response = await api.post(
          '/notes/', {
            title, 
            content
          }
    )

    setTask((prev)=> [...prev, response.data.note])
    setTitle("")
    setContent("")

    toast.success("Task Created")

      
    } catch (error: unknown) {
      if(error instanceof Error){
        console.log('Error when creating a task', error.message)
        return  toast.error("Error when creating")
      }
    }

    finally{
      setIsLoading(false)
    }


  }


  useEffect(() => {
    setIsLoading(true)
    const fetchTask = async()=>{
      const response = await api.get('/notes/')
      const data = response.data.notes
      setTask(data)
      setIsLoading(false)
    }

    fetchTask()
  }, [])
  

  return (
    <div>
      <Navbar />
      <GoBack />

      <div className='bg-gray-700 w-1/3 rounded-2xl drop-shadow-2xl mt-5'>
        <h1 className='text-xl font-sans font-semibold px-5 py-4'>Create Task</h1>
        <form className='flex flex-col gap-4 p-4 flex-wrap' onSubmit={handleSubmit}>
          <input value={title} type="text" placeholder='Enter title..' className='px-3 py-2 rounded-xl font-sans border-2 border-gray-500 focus:bg-gray-400 *:' onChange={e=>setTitle(e.target.value)}/>
          <textarea value={content} placeholder='Enter description..' className='resize-none px-3 py-2 rounded-xl font-sans border-2 border-gray-500 focus:bg-gray-400' onChange={e=>setContent(e.target.value)}/>
          <button disabled={isLoading} type='submit' className='rounded-md bg-blue-200 px-3 py-2 w-fit font-semibold cursor-pointer active:bg-blue-300 duration-200 ease-in active:-translate-y-0.5'>{isLoading ? 'Creating...' : 'Create'}</button>
        </form>
      </div>

      <div className="card-contaner mt-4 bg-amber-300 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {
          task.map((val, index)=>{
            return (
              <Card data={val} keyValue={index}/>
            )
          })
        }
      </div>
    </div>
  )
}

export default HomePage
