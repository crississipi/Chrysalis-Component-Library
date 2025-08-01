"use client";

import React, { useState } from 'react';
import { HiOutlineChevronLeft } from 'react-icons/hi2';
import ComponentPreview from './ComponentPreview';
import ComponentCode from './ComponentCode';
import LanguageButton from './LanguageButton';
import { HiOutlineX } from 'react-icons/hi';
import { ModifyComponentProps } from '@/types';

const ModifyComponent = ({ setModify }: ModifyComponentProps) => {
  const [inputValue, setInputValue] = useState<string>('');
  const [tags, setTags] = useState<string[]>([]);

  const inputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value); // Update input value as the user types
  };

  const keyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && inputValue.trim() !== '') {
      setTags((prev) => [...prev, inputValue]);
      setInputValue('');
    }
  };
  
  return (
    <div className='md:h-full h-max w-full flex flex-col md:flex-wrap md:flex-row md:items-start items-center md:justify-start justify-center z-10 overflow-hidden p-5 gap-5 md:p-3 md:gap-y-2 md:pb-5'>
      <span className='w-full flex flex-wrap items-center relative'>
        <button 
          type="button"
          className='h-10 w-10 rounded-sm ring-1 ring-transparent flex items-center justify-center text-3xl hover:ring-gray-300 focus:ring-gray-300 focus:scale-110 ease-in-out duration-200'
          onClick={() => setModify(false)}
        >
          <HiOutlineChevronLeft />
        </button>
        <h1 className='text-lg font-medium w-5/6 text-wrap leading-5'>Modify Component</h1>
      </span>
      <div className='h-full w-full md:w-[43%] md:h-[80vh] flex flex-col items-start  gap-3 mt-auto md:mt-0 md:overflow-hidden'>
        <ComponentPreview />
        <ComponentCode isDisplayed={false} />
      </div>
      <div className='h-full w-full md:w-[55%] flex flex-col gap-3 md:gap-0'>
        <h2 className='w-2/3 text-left text-lg font-medium mt-2 md:mt-0 md:overflow-x-hidden'>Description</h2>
        <form className='h-full w-full flex flex-col gap-3 text-base'>
          <input 
              type="text" 
              placeholder='Component Name' 
              className='py-3 px-5 md:px-4 md:text-sm border border-zinc-300 rounded-md bg-zinc-100 hover:border-zinc-500 focus:border-zinc-700 focus:placeholder:text-zinc-700 ease-in-out duration-200'
          />
          <textarea 
              placeholder='Description'
              className='min-h-40 md:min-h-32 md:px-4 py-3 px-5 border border-zinc-300 rounded-md bg-zinc-100 md:text-sm hover:border-zinc-500 focus:border-zinc-700 focus:placeholder:text-zinc-700 ease-in-out duration-200 mb-2 resize-none'
          ></textarea>
          <div className='w-full flex gap-2 md:gap-3 md:items-center'>
            <span>Tags:</span>
              {tags.map((val, i) => (
                  <span
                      key={i}
                      className='p-2 md:p-1 rounded-md bg-zinc-200 flex items-center gap-1 md:text-sm'
                  >
                      <button 
                          type="button"
                          className='text-xl md:text-lg hover:text-rose-300 focus:rotate-90 focus:text-rose-500 ease-in-out duration-200'
                          onClick={() => setTags(prevItems => prevItems.filter(tag => tag !== val))}
                      >
                          <HiOutlineX />
                      </button>
                      #{val}
                  </span>
              ))}
          </div>
          <input 
              type="text" 
              placeholder='#something' 
              className='py-3 px-5 md:px-4 md:text-sm border border-zinc-300 rounded-md bg-zinc-100 hover:border-zinc-500 focus:border-zinc-700 focus:placeholder:text-zinc-700 ease-in-out duration-200 mb-2'
              value={inputValue}
              onChange={inputChange}
              onKeyDown={keyPress}
          />
          <span>Language/Framework Used</span>
          <div className='h-14 w-full flex items-end'>
              {Array.from({ length: 8 }).map((_, i) => (
                  <LanguageButton key={i} num={i} />
              ))}
          </div>
        </form>
        <div className='w-full flex gap-3 justify-end md:mt-10'>
          <button 
              type="button"
              className='py-3 px-5 relative overflow-hidden flex items-center gap-2 group rounded-md bg-zinc-300 before:h-1/2 before:aspect-square before:rounded-full before:absolute before:top-1/2 before:left-1/2 before:-translate-1/2 before:z-10 before:opacity-0 hover:before:bg-gray-950/20 hover:before:opacity-100 hover:before:scale-450 focus:before:bg-gray-950/30 before:ease-in-out before:duration-500'
          >
              Submit
          </button>
        </div>
      </div>
    </div>
  )
}

export default ModifyComponent
