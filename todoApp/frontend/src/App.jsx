import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const App = () => {
  const [notes, setNotes] = useState([])
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')


  useEffect(() => {
    fetch(`http://localhost:3000/api/notes`)
    .then((response)=>response.json())
    .then((data)=>setNotes(data))
  }, [])   // only runs on initial render
  

  async function handleSubmit(e){
    e.preventDefault()

    const response = await fetch('http://localhost:3000/api/note', {
      method: "POST", 
      headers: {
        "Content-Type": "application/json"
      }, 
      body: JSON.stringify({
        title, 
        content
      })

    })

    const newNote = await response.json()
    setNotes([...notes, newNote])

    setTitle("")
    setContent("")



  }

  return (
    <div>
      <h1>Card container</h1>
      <form onSubmit={handleSubmit}>

        <input 
          type="text"
          placeholder='Note title'
          value={title}
          onChange={(e)=>setTitle(e.target.value)}
          required='true'
        />

        <textarea
          placeholder='Note content'
          value={content}
          onChange={(e)=>setContent(e.target.value)}
          required='true'
        />

      <button type='submit'>Create Note</button>
      </form>

      <div className="cards">
        {
          notes.map((note)=>{
            return (<div className="card" key={note.id}>
              <h2>{note.title}</h2>
              <h2>{note.content}</h2>
            </div>
            )
          })
        }
      </div>

    </div>
  )
}

export default App
