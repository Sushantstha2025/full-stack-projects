import React from 'react'
import Navbar from '../components/Navbar'
import SearchBar from '../components/SearchBar'
import CardContainer from '../components/CardContainer'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'

const HomePage = () => {

  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/products/')
        setTasks(response.data.products)
        console.log(JSON.stringify(response.data.products))
        
      } catch (error) {
        console.log("Error trace", error.message)
        console.log(error)
        console.log(error.code)
      }
    }

    fetchData()
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
