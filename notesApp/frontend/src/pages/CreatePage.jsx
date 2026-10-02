import { ArrowLeftIcon } from 'lucide-react'
import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { Link, useNavigate } from 'react-router'
import api from '../lib/axios'

const CreatePage = () => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  async function handleSubmit(e){
    e.preventDefault()
    if(!title.trim() || !content.trim){
      toast.error("Fields are empty")
      return
    }

    setLoading(true)
    try {
      await api.post(
        "/notes", {
          title, 
          content
        }
      )

      toast.success("Note created successfully")
      navigate("/")
    } catch (error) {
      if(error.response.status===429){
        toast.error("Slow down! You're creating note too fast", {
          duration: 4000, 
          icon: "💀"
        })
      }

      else{
        toast.error("Failed to create note. Please try again!")
      }
      console.log("Error creating a note", error.message)
    }

    finally{
      setLoading(false)
    }
  }

  return (
    <div className='min-h-screen bg-base-200'>
      <div className='container mx-auto px-4 py-8'>
        <div className='max-w-2xl mx-auto'>
          <Link to={"/"} className='btn btn-ghost'>
          <ArrowLeftIcon className='size-5' />
           Back to Notes
          </Link>

        <div className='card bg-[#323030] rounded-md'>
          <div className='card-body'>
            <h2 className='card-title text-2xl mb-4'>Create New Note</h2>
            <form onSubmit={handleSubmit}>
              <div className='form-control mb-4 flex flex-col'>
                <label className='label'>
                  <span className='label-text'>
                    Title
                  </span>
                </label>

                <input type="text"
                  placeholder='Note Title'
                  className='w-full input border-2 rounded-2xl border-gray-600'
                  value={title}
                  onChange={(e)=>setTitle(e.target.value)}
                />
              </div>

              <div className='form-control mb-4 flex flex-col'>
                <label className='label'>
                  <span className='label-text'>
                    Content
                  </span>
                </label>

                <textarea type="text"
                  placeholder='Note Content'
                  className='w-full textarea border-2 border-gray-600 rounded-2xl resize-none h-32'
                  value={content}
                  onChange={(e)=>setContent(e.target.value)}
                />
              </div>

              <div className='card-actions justify-end'>
                <button type='submit' className='btn btn-primary rounded-full text-[#323030] bg-[#3deba8f5] disabled:opacity-50 disabled:cursor-not-allowed' disabled={loading}>
                  {loading ? "Creating..." : "Create Note" }
                </button>
              </div>

            </form>
          </div>

        </div>
        </div>

      </div>
      
    </div>
  )
}

export default CreatePage
