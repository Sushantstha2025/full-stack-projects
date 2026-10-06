import React from 'react'
import { Route, Routes } from 'react-router'
import HomePage from './pages/HomePage'
import EditPage from './pages/EditPage'
import ContactPage from './pages/ContactPage'
import PageNotFound from './pages/PageNotFound'

const App = () => {

  // function greet(name: string): string{
  //   return `hello ${name}`
  // }


  // function identify<T>(value: T): T{
  //   return `This is the value to be returned: ${value}, and its type is: ${typeof(value)}`  // generic value. euta function lai different different values diyera use garnu xa vane, kasari garne ta? 
  // }

  // function typeNarrowing<T>(value: string | number): T{
  //   if(typeof(value) === 'string') return `The value is string`
  //   else return `The value is number`
  // }


  return (
    <div className='min-h-screen bg-gray-800 p-10'>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/edit' element={<EditPage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </div>
  )
}

export default App
