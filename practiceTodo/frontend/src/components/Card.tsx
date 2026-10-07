import React from 'react'
import { Link } from 'react-router'
import { formatDate } from '../lib/utils'
import { PenBoxIcon, Trash2Icon } from 'lucide-react'
import type { Note } from '../types/note'


interface CardProps {
    keyValue: number
    data: Note
}

const Card = ({keyValue, data}: CardProps) => {
  return (
    <div key={keyValue} className="card bg-amber-900 px-5 py-3 rounded-md font-sans">
        <h1 className='text-2xl font-semibold mb-2'>{data.title}</h1>
        <p className='line-clamp-3 h-fit w-fit tracking-tight'>{data.content}</p>
        <div className="btns flex justify-between mt-3 items-center">
        <p>{formatDate(new Date(data.createdAt))}</p>
        <div className='flex gap-3'>
            <Link to={"/edit"}><PenBoxIcon className='size-5 fill-amber-200 text-amber-500' /></Link>
            <Link to={"/delete"}><Trash2Icon className='size-5 text-red-500'/></Link>
        </div>
        </div>
    </div>
  )
}

export default Card
