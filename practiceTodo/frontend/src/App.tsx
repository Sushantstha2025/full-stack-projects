import React from 'react'
import { Route, Routes } from 'react-router'
import HomePage from './pages/HomePage'
import CreatePage from './pages/CreatePage'
import EditPage from './pages/EditPage'

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


  <Routes>
    <Route path='/' element={<HomePage />} />
    <Route path='/create' element={<CreatePage />} />
    <Route path='/edit' element={<EditPage />} />
  </Routes>


  return (
    <div>
      
    </div>
  )
}

export default App
