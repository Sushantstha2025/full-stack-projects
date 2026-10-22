import React from 'react'
import Navbar from '../components/Navbar'
import { Coffee } from 'lucide-react'

const CreatePage = () => {
  return (
    <div>
      <Navbar />
        
<form className="w-full max-w-md mx-auto bg-[#FFF9F0] p-6 rounded-2xl shadow-md flex flex-col gap-4 border border-[#E8D8C3] mt-7">

  <h2 className="text-2xl font-bold text-[#4B2E24]">
    Add a New Product ☕
  </h2>
  <p className="text-sm text-[#8B6F5A] -mt-2">
    Add a little something to the menu.
  </p>

  <div className="flex flex-col gap-1.5">
    <label className="text-sm font-semibold text-[#4B2E24]">
      Product Name
    </label>
    <input
      type="text"
      placeholder="e.g. Caramel Latte"
      className="w-full rounded-lg border border-[#D6C0A8] bg-white px-3 py-2.5 text-[#4B2E24] outline-none focus:border-[#8B5E3C] focus:ring-2 focus:ring-[#DCC3A5]"
    />
  </div>

  <div className="flex flex-col gap-1.5">
    <label className="text-sm font-semibold text-[#4B2E24]">
      Description
    </label>
    <textarea
      placeholder="Describe your delicious coffee..."
      rows={3}
      className="w-full resize-y rounded-lg border border-[#D6C0A8] bg-white px-3 py-2.5 text-[#4B2E24] outline-none focus:border-[#8B5E3C] focus:ring-2 focus:ring-[#DCC3A5]"
    />
  </div>

  <div className="flex flex-col gap-1.5">
    <label className="text-sm font-semibold text-[#4B2E24]">
      Price ($)
    </label>
    <input
      type="number"
      step="0.01"
      min="0"
      placeholder="4.99"
      className="w-full rounded-lg border border-[#D6C0A8] bg-white px-3 py-2.5 text-[#4B2E24] outline-none focus:border-[#8B5E3C] focus:ring-2 focus:ring-[#DCC3A5]"
    />
  </div>

  <div className="flex flex-col gap-1.5">
    <label className="text-sm font-semibold text-[#4B2E24]">
      Product Photo
    </label>
    <input
      type="file"
      accept="image/*"
      className="w-full rounded-lg border border-dashed border-[#C4A484] bg-[#F7EDE0] p-3 text-sm text-[#6F4E37] file:mr-3 file:rounded-md file:border-0 file:bg-[#6F4E37] file:px-3 file:py-2 file:font-medium file:text-white hover:file:bg-[#4B2E24]"
    />
  </div>

  <button
    type="submit"
    className="mt-2 rounded-lg bg-[#6F4E37] py-3 font-semibold text-white transition hover:bg-[#4B2E24] active:scale-[0.98]"
  >
    Add to Menu ☕
  </button>

</form>



      
    </div>
  )
}

export default CreatePage
