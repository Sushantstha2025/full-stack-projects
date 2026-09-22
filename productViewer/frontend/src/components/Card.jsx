import React from 'react'
import { ArrowRight } from 'lucide-react';


const Card = ({product, id}) => {
  return (
    <div key={id} className='p-5 border-2 border-gray-700 rounded-xl'>
      <h1 className='text-2xl font-bold capitalize text-shadow-xs'>{product.title}</h1>
      <h3>{product.description}</h3>
    </div>

  )
}

export default Card
