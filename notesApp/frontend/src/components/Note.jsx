import { PenSquare, Trash2Icon } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router'
import { formatDate } from '../lib/utils'

const Note = ({keyValue, note}) => {
    console.log(keyValue, note)
  return (
    <Link to={`/note/${note._id}`} className='card bg-[#323030] hover:shadow-lg transition-all duration-200 border-t-4 border-solid border-[#00FF9D] rounded-md text-[#f8f8f8]'>
        <div key={keyValue} className='card-body'>
            <h3 className='card-title text-base-content'>{note.title}</h3>
            <p className='text-base-content/70 line-clamp-3'>{note.content}</p>

            <div className='card-actions justify-between items-center mt-4'>
                <span className='text-sm text-base-content/60'>
                    {formatDate(new Date(note.createdAt))}
                </span>
                <div className='flex items-center gap-1'>
                    <PenSquare className='size-4' />
                    <button className='btn btn-ghost btn-xs text-error'>
                        <Trash2Icon className='size-4 text-red-700' />
                    </button>
                </div>
            </div>
        </div>
    </Link>
  )
}

export default Note
