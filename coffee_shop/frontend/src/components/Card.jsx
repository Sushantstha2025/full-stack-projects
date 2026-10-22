import { useState } from "react";
import { MoreHorizontal, PencilIcon, Trash2 } from "lucide-react";


const Card = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleEdit = ()=>{
    setMenuOpen(false)
    console.log(`Clicked on edit button`)
  }

  const handleDelete = ()=>{
    setMenuOpen(false)
    alert("Do you want to delete this product?")
  }

  return (
    // card
    <div className='bg-[#fbf4ec] w-100 h-105 rounded-xl border-2 border-[#e8be8d]'>
      <div className='relative'>
          <img className='rounded-t-md object-cover' src="https://imgs.search.brave.com/0vrUHtC10sK9-zqY9SeXdNuiphCSMEdFhOYIxmXKJqY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA4Lzg2LzgyLzg0/LzM2MF9GXzg4Njgy/ODQ5NF9xQ0s4Nlh5/MkJwekVxQ1liSGdW/bkVJVFE5RkE5bEQ4/Ri5qcGc" alt="Loading image" />

          <button 
            type='button' 
            onClick={()=>setMenuOpen(prev => !prev)} 
            className='absolute top-2 right-2 rounded-full bg-white/90 text-gray-700 shadow hover:bg-white focus:outline-none duration-150 ease-in-out focus:ring-2 focus:ring-blue-500' 
            aria-label='Image options'
            aria-expanded={menuOpen}
          >
            <MoreHorizontal size={22}/>
          </button>

          {
            menuOpen && (
              <div className="absolute right-2 top-10 z-20 h-20 w-26 overflow-hidden rounded-lg border border-gray-200 bg-[#ebe7e7a0] py-1 shadow-lg">
                <button 
                  onClick={handleEdit}
                  className="flex w-full gap-1 items-center px-4 py-2 text-sm text-amber-400 hover:bg-yellow-700"
                >
                  <PencilIcon size={16}/>
                  <span>Edit</span>
                </button>

                <button 
                  onClick={handleDelete}
                  className="flex w-full gap-1 p-1 items-center px-4 py-2 text-sm text-red-500 hover:bg-red-200"
                >
                  <Trash2 size={16}/>
                  <span>Delete</span>
                </button>
              </div>
            )
          }
          
      </div>

      <div className='px-3 py-1 flex flex-col gap-1'>
        <h2 className='font-semibold text-2xl tracking-tight'>Macha Latte</h2>
        <div className="flex flex-col gap-1 px-2 py-1 rounded-md bg-[#f5ddc6]">
          <h3 className="tracking-tight">INGREDIENTS FORMULATION</h3>
          <p className='line-clamp-3 text-sm tracking-tight font-serriff'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, blanditiis, optio ut nulla incidunt qui totam eos nihil neque ullam tempora dolor. Velit iste harum nesciunt voluptate recusandae odio debitis voluptatibus sunt odit veniam, sapiente ratione voluptatum illo aut aperiam consequuntur deleniti, quibusdam provident facere ullam quisquam perspiciatis impedit et!</p>
        </div>
        <div className='h-[0.25px] w-full bg-gray-400 mt-2'></div>
        <div className="flex justify-between items-center-safe">
          <button type="button" className="text-gray-500 text-center text-sm tracking-tighter cursor-pointer hover:text-gray-700 duration-300 ease-in">Tap it to View</button>
          <h2 className='text-xl text-end  font-bold'>$29.99</h2>
        </div>
      </div>
    </div>
  )
}

export default Card