import { ComponentNavProps, FilterButtonProps } from '@/types'
import React from 'react'

type ButtonProps = FilterButtonProps & ComponentNavProps;

const FilterButton = ({ name, type, setComponents, showFilters, selectedComponents }: ButtonProps) => {
  const isActive = selectedComponents.includes(type);

  const toggleFilter = () => {
    if (isActive) {
      setComponents(prevItems => prevItems.filter(item => item !== type));
    } else {
      setComponents(prevItems => [...prevItems, type]);
    }

    

    showFilters(false);
  }

  return (
    <button 
      type='button' 
      className={`p-2 py-2.5 rounded-md border border-gray-400 text-sm text-gray-500 flex-grow ${isActive && 'bg-zinc-300 border-gray-600 text-gray-700'} hover:bg-zinc-100 focus:bg-zinc-300 focus:border-gray-600 focus:text-gray-700 ease-in-out duration-200`}
      onClick={toggleFilter}
    >
        {name}
        <span className='hidden'>{type}</span>
    </button>
  )
}

export default FilterButton
