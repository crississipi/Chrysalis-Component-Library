import { SelectedFilterProps } from '@/types'
import React from 'react'
import { TfiClose } from 'react-icons/tfi'

const SelectedFilter = ({ title, category, setSelected }: SelectedFilterProps) => {
  const closeSelected = () => {
    setSelected('');
  }
  return (
    <div className='w-max flex flex-col gap-1'>
        <h3 className='text-gray-500 text-xs ml-7'>{title}</h3>
        <div className='flex gap-1.5'>
            <button 
                type="button"
                className='text-gray-400 text-lg focus:text-rose-500 ease-in-out duration-200'
                onClick={closeSelected}
            >
                <TfiClose />
            </button>
            <span className='bg-gray-200 text-gray-600 text-sm rounded-md py-2 px-3 font-medium'>{category}</span>
        </div>
    </div>
  )
}

export default SelectedFilter
