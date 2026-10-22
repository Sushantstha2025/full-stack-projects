import React from 'react'
import Navbar from '../components/Navbar'
import SearchBar from '../components/SearchBar'
import CardContainer from '../components/CardContainer'
import { useState } from 'react'
import { useEffect } from 'react'

const HomePage = () => {

  const [tasks, setTasks] = useState([])

  useEffect(() => {
    
  }, [])
  
  return (
    <div className='bg-[#FBF8F5] min-h-screen w-full'>
      <Navbar />
      <SearchBar />
      <CardContainer />
    </div>
  )
}

export default HomePage
