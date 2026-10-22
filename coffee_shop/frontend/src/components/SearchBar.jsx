import { KeyRoundIcon, SearchIcon } from 'lucide-react'
import React from 'react'

const SearchBar = () => {
    const handleSubmit = async (e) => {
        e.preventDefault()
    }

  return (
    <div className='my-2 text-[#181411] flex justify-center'>
      <form className='flex flex-wrap justify-center items-center px-10 py-5 gap-4 bg-[#FFFEFE] m-2 rounded-md w-fit' onSubmit={handleSubmit}>
        <input type="text" name="" id="" placeholder='Search coffees, ingredients, roast level...' className='w-200 px-3 py-2 rounded-md border-none bg-[#FFFEFE] focus:bg-[#f8f1ea]'/>
        <button type='submit' className='flex flex-wrap gap-2 items-center cursor-pointer font-semibold text-[#FBF8F5] px-4 py-2 rounded-md bg-[#181411]'><SearchIcon size={20} />Search</button>
      </form>
    </div>
  )
}

export default SearchBar    
