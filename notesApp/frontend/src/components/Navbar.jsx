import { PlusIcon } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router'

const Navbar = () => {
  return (
    <header className='bg-base-300 border-b border-base-content/10'>
        <div className='mx-auto max-w-6xl p-4'>
            <div className='flex items-center justify-between'>
                <h1 className='font-bold font-mono text-3xl text-primary tracking-tighter'>ThinkBoard</h1>
                <div>
                    <Link to={"/create"} className='btn bg-[#00FF9D] border-[#00FF9D] text-black hover:bg-[#00d985]'>
                        <PlusIcon size={20}/>
                        <span>New</span>
                    </Link>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Navbar
