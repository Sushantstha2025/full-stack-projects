import React from 'react'
import { Link } from 'react-router'
import HomePage from '../pages/HomePage'
import ContactPage from '../pages/ContactPage'

const Navbar = () => {
  return (
    <div className='bg-gray-600 flex justify-between items-center px-5 py-2 font-sans'>
      <h1 className='text-2xl font-bold tracking-tight'>Todo Application</h1>
      <nav className='flex gap-6 mr-4'>
        <Link className='font-semibold text-l' to={"/"}>Home</Link> 
        <Link className='font-semibold text-l' to={"/contact"}>Contacts</Link> 

      </nav>
    </div>
  )
}

export default Navbar
