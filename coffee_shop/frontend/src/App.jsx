import React from 'react'
import Navbar from './components/Navbar'
import SearchBar from './components/SearchBar'
import Card from './components/Card'
import CardContainer from './components/CardContainer'
import {Route, Routes} from 'react-router'
import HomePage from './pages/HomePage'
import CreatePage from './pages/CreatePage'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/create' element={<CreatePage />} />
      </Routes>
    </div>
  )
}

export default App
