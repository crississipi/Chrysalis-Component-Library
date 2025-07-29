"use client";

import React, { useState } from 'react'
import Image from "next/image";
import { HiOutlineMenuAlt4, HiOutlinePlus } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { HeaderProps } from '@/types';

const Header = ({ viewList, list }: HeaderProps ) => {
  const [menu, showMenu] = useState(false);
  const toggleMenu = () => { showMenu(!menu); }
  return (
    <div className='h-16 w-full sticky top-0 z-50 bg-white/5 backdrop-blur-xs flex items-center gap-1 py-2 px-3 pr-5 border-b-4 border-black/5'>
      <Image src='/logo.png' alt='logo icon' height={100} width={100} className='h-full w-min object-contain object-center aspect-square'/>
      <h1 className='font-bold mr-auto'>CHRYSALIS</h1>
      <div className={`hidden h-full gap-3 md:flex`}>
        <button type="button" className='p-3 md:py-0 h-full relative overflow-hidden before:h-1/2 before:aspect-square before:rounded-full before:absolute before:top-1/2 before:left-1/2 before:-translate-1/2 before:z-10 before:opacity-0 hover:before:bg-gray-950/15 hover:before:opacity-100 hover:before:scale-700 focus:before:bg-gray-950/30 before:ease-in-out before:duration-500' onClick={() => viewList(true)}>Components</button>
        <button type="button" className='p-3 md:py-0 h-full relative overflow-hidden flex items-center gap-2 group rounded-md bg-zinc-300 before:h-1/2 before:aspect-square before:rounded-full before:absolute before:top-1/2 before:left-1/2 before:-translate-1/2 before:z-10 before:opacity-0 hover:before:bg-gray-950/20 hover:before:opacity-100 hover:before:scale-700 focus:before:bg-gray-950/30 before:ease-in-out before:duration-500' onClick={() => viewList(false)}>
          <HiOutlinePlus className='group-focus:rotate-360 ease-in-out duration-500'/>
            Add New
        </button>
      </div>
      <button type="button" className='md:hidden text-3xl cursor-pointer p-2 rounded-sm ring-1 ring-transparent hover:ring-gray-300 focus:scale-110 focus:ring-gray-300 ease-in-out duration-150' onClick={toggleMenu}>
        <HiOutlineMenuAlt4 />
      </button>
      { menu && (
        <div className={`h-max absolute z-50 right-1 bg-zinc-100 top-full mt-1 px-5 py-10 rounded-md shadow-md flex flex-col gap-2`}>
          <motion.button 
            type="button" 
            initial={{y: -10, opacity: 0}}
            animate={{y: 0, opacity: 1}}
            transition={{duration: 0.3, ease:'easeInOut'}}
            className='p-3 h-full relative overflow-hidden before:h-1/2 before:aspect-square before:rounded-full before:absolute before:top-1/2 before:left-1/2 before:-translate-1/2 before:z-10 before:opacity-0 hover:before:bg-gray-950/15 hover:before:opacity-100 hover:before:scale-700 focus:before:bg-gray-950/30 before:ease-in-out before:duration-500'
            onClick={() => {viewList(true); showMenu(false)}}
          >
            Components
          </motion.button>
          <motion.button 
            type="button" 
            initial={{y: -10, opacity: 0}}
            animate={{y: 0, opacity: 1}}
            transition={{duration: 0.3, ease:'easeInOut', delay: 0.1}} 
            className='p-3 h-full relative overflow-hidden flex items-center gap-2 group rounded-md bg-zinc-300 before:h-1/2 before:aspect-square before:rounded-full before:absolute before:top-1/2 before:left-1/2 before:-translate-1/2 before:z-10 before:opacity-0 hover:before:bg-gray-950/20 hover:before:opacity-100 hover:before:scale-700 focus:before:bg-gray-950/30 before:ease-in-out before:duration-500'
            onClick={() => {viewList(false); showMenu(false)}}
          >
            <HiOutlinePlus className='group-focus:rotate-360 ease-in-out duration-500'/>
              Add New
          </motion.button>
        </div>
      )}
    </div>
  )
}

export default Header
