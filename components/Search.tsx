import React from 'react'
import { HiOutlineSearch } from 'react-icons/hi'

const Search = () => {
  return (
    <div className='pl-5 py-2 pr-3 rounded-md shadow-md bg-white w-6/7 flex' >
        <input 
            type="text" 
            placeholder='Search for components'
            className='w-full font-medium'
        />
        <button 
            type="button"
            className='text-2xl rounded-md p-2 ring-1 ring-transparent hover:ring-gray-300 focus:scale-110 focus:ring-gray-300 ease-in-out duration-200'
        >
            <HiOutlineSearch />
        </button>
    </div>
  )
}

export default Search
