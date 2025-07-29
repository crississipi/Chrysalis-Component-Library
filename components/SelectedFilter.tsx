import { ComponentNavProps, SelectedFilterProps } from '@/types'
import React, { useEffect, useState } from 'react'
import { TfiClose } from 'react-icons/tfi'

type FilterProps = SelectedFilterProps & ComponentNavProps;
const SelectedFilter = ({ category, selectedComponents, setComponents }: FilterProps) => {
  const [selected, setSelected] = useState(false);
  const isActive = selectedComponents.includes(category);
  const closeSelected = () => {
    setSelected(false);
    if (isActive) {
      setComponents(prevItems => prevItems.filter(item => item !== category));
    } else {
      setComponents(prevItems => [...prevItems, category]);
    }
  }
  useEffect(() => {
    setSelected(true);
  }, [category]);

  return (
    <>
      { selected && (
        <div className='w-max flex flex-col gap-1'>
          <span className='flex gap-3 bg-gray-400 text-white text-sm rounded-md p-3 font-medium capitalize'>
            <button 
              type="button"
              className='text-white text-lg focus:text-rose-500 ease-in-out duration-200'
              onClick={closeSelected}
            >
              <TfiClose />
            </button>
              {category}
            </span>
      </div>
      )}
    </>
  )
}

export default SelectedFilter
