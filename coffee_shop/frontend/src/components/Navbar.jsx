import { ArrowLeft, Coffee, Plus } from 'lucide-react'
import React from 'react'
import { useLocation, useNavigate } from 'react-router'

const Navbar = () => {
  const location = useLocation()
  const navigate = useNavigate()

  const isCreatePage = location.pathname === '/create'

  const handleButtonClick = ()=>{
    // if create page, on click of the button, go to the home page
    if(isCreatePage){
      navigate('/')
    }
    else{
      navigate('/create')
    }

  }

  return (
    <div className='flex flex-wrap justify-between items-center p-10 bg-[#FFFEFE] drop-shadow-sm'>
      <div className='flex flex-wrap gap-4 items-center'>
        <img className='size-10 object-cover rounded-md' src="https://imgs.search.brave.com/0vrUHtC10sK9-zqY9SeXdNuiphCSMEdFhOYIxmXKJqY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA4Lzg2LzgyLzg0/LzM2MF9GXzg4Njgy/ODQ5NF9xQ0s4Nlh5/MkJwekVxQ1liSGdW/bkVJVFE5RkE5bEQ4/Ri5qcGc" alt="loading iamge" />
        <div>
            <h2 className='text-[#181411] tracking-tight font-semibold text-xl'>ATELIER COFFEE</h2>
            <h4 className='text-[#784323] tracking-tight font-semibold text-sm'>SPECIALTY ROASTERY & CAFE</h4>
        </div>
      </div>

    <div className='flex flex-wrap items-center gap-4'>
        <button 
          onClick={handleButtonClick}
          className='flex flex-wrap gap-2 items-center cursor-pointer font-semibold text-[#FBF8F5] px-4 py-2 rounded-md bg-[#181411]'
        >
          {
            isCreatePage ? 
            (
              <ArrowLeft size={20} />
            )
            :
            (
              <>
                <Plus size={20} /> 
                <Coffee size={20} />
              </>
            )
          }
          
          {
            isCreatePage? "Go Back" : "Create Coffee"
          }
        </button>
        <div className='w-px h-10 bg-gray-300'></div>
        <div>
            <h3 className='text-[#181411]'>Sarah Granger</h3>
            <h3 className='tracking-tight text-sm text-[#C68B59]'>HEAD BARISTA</h3>
        </div>
        <img className='size-10 rounded-md object-cover' src="https://imgs.search.brave.com/lhTFDCABcnZqXJb6p2WPDIpREq-6V4gbr41VyYA1vI8/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWcu/aWNvbnM4LmNvbS9v/ZmZpY2U4MC8xMjAw/L2d1ZXN0LW1hbGUu/anBn" alt="loading image" />
    </div>
    
    </div>
  )
}

export default Navbar
