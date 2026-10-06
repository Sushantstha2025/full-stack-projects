import React from 'react'
import { useNavigate } from 'react-router'

const GoBack = () => {
    const navigate = useNavigate()
  return (
    <div>
      <button className='cursor-pointer text-[#fafafad3] font-semibold text-l ml-4 mt-2 font-sans' onClick={()=>navigate(-1)}>Go back</button>
    </div>
  )
}

export default GoBack
