import React from 'react'
import { Route, Routes } from 'react-router'
import HomePage from './pages/HomePage'
import CreatePage from './pages/CreatePage'
import NoteDetails from './pages/NoteDetails'

const App = () => {
  return (
    <div className="relative min-h-screen w-full text-white">
      
      {/* Background */}
      <div className="absolute inset-0 z-0 bg-black [background:radial-gradient(125%_125%_at_50%_10%,#000_60%,#00FF9D40_100%)]" />

      {/* Content */}
      <div className="relative z-10">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/create" element={<CreatePage />} />
          <Route path="/note/:id" element={<NoteDetails />} />
        </Routes>
      </div>

    </div>
  )
}

export default App
