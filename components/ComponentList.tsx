"use client";

import React, { useState } from 'react'
import { LuListFilter } from 'react-icons/lu'
import Search from './Search'
import ComponentInfo from './ComponentInfo'
import ComponentNav from './ComponentNav'
import { AnimatePresence } from 'framer-motion';
import { ComponentListProps, UpdateInfoProps } from '@/types';
import { IoCodeWorkingOutline } from 'react-icons/io5';

type ComponentProps = ComponentListProps & UpdateInfoProps;

const ComponentList = ({ setViewComponentInfo, updateInfo }: ComponentProps) => {
  const components = [
    {
      name: "Neumorphic Button",
      tags: ['button', 'neumorphic', 'Modern']
    },
    {
      name: "Glassmorphic Button",
      tags: ['button', 'glassmorphic', 'sleek']
    },
    {
      name: "Simple Header",
      tags: ['header', 'simple', 'classic']
    },
    {
      name: "Minimalist Hero",
      tags: ['hero', 'classic', 'sleek']
    },
    {
      name: "Neo Modern Footer",
      tags: ['footer', 'neo Modern', 'modern']
    },
    {
      name: "Side Slide Navigation Bar",
      tags: ['nav', 'classic', 'bubbles']
    },
    
  ]
  const [selectedComponents, setComponents] = useState<string[]>([]);

  const filteredCategory = selectedComponents.length === 0 ? components : components.filter(comp => comp.tags.some(tag => selectedComponents.includes(tag)));
  const [filters, showFilters] = useState(false);
  const toggleShowFilters = () => {
    showFilters(!filters);
  };

  return (
    <section className='min-h-full w-full z-10 flex flex-col mt-10 px-3'>
      <div className='h-full w-full flex flex-col relative perspective-1000 transform-style-preserve-3d'>
        <AnimatePresence>
          { filters && <ComponentNav showFilters={showFilters} setComponents={setComponents} selectedComponents={selectedComponents} />}
        </AnimatePresence>
        <div className='w-full flex gap-2'>
            <Search />
            <button type="button" className='p-1 px-4 bg-white rounded-md shadow-sm text-2xl hover:shadow-md focus:shadow-md focus:shadow-gray-300 group ease-in-out duration-200' onClick={toggleShowFilters}>
                <LuListFilter className='group-focus:scale-120 ease-in-out duration-200'/>
            </button>
        </div>
        <div className='mt-3 w-full h-full flex flex-col overflow-x-hidden'>
            <div className='w-full h-full min-h-[70vh] grid grid-cols-2 overflow-x-hidden pt-2 pb-5 gap-3'>
                {filteredCategory.length !== 0 ? 
                filteredCategory.map((val, i) => (
                  <ComponentInfo 
                    key={i} 
                    num={i + 1} 
                    setViewComponentInfo={setViewComponentInfo}
                    name={val.name}
                    tags={val.tags}
                    type=''
                    updateInfo={updateInfo}
                  />
                )) : 
                (
                  <div className='z-10 min-h-full col-span-full flex flex-col items-center justify-center px-10 text-gray-400'>
                    <IoCodeWorkingOutline className='text-8xl'/>
                    <p className='text-center'>Apologies, we don&apos;t have a component for this yet, but we&apos;re working on it!</p>
                  </div>
                )}
            </div>
        </div>
      </div>
    </section>
  )
}

export default ComponentList
