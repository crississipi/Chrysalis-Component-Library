import React from 'react'
import Image from "next/image";
import { HiOutlineMenuAlt4 } from 'react-icons/hi';

const Header = () => {
  return (
    <div className='h-20 w-full sticky top-0 z-50 bg-white/5 backdrop-blur-xs flex items-center justify-between py-2 px-3 pr-5'>
      <Image src='/c-logo.png' alt='logo icon' height={100} width={100} className='h-full w-min object-contain object-center aspect-square'/>
      <button type="button" className='text-4xl cursor-pointer p-2 rounded-sm ring-1 ring-transparent hover:ring-gray-300 focus:scale-110 focus:ring-gray-300 ease-in-out duration-150'>
        <HiOutlineMenuAlt4 />
      </button>
    </div>
  )
}

export default Header
