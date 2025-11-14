import React from 'react'
import { FiSearch } from "react-icons/fi";

const Search = () => {
  return (
    <div className='w-full h-[60px] bg-[#F3F4F7] rounded-sm flex items-center px-4 gap-1'>
      <input type="text" className='bg-transparent text-[16px] text-black/80 outline-none h-10 w-full' placeholder='Search for products...' />
      <button className='cursor-pointer'><FiSearch size={20} /></button>
    </div>
  )
}

export default Search