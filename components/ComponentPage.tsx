"use client";

import React, { useState } from 'react';
import { HiOutlineChevronLeft } from 'react-icons/hi2';
import ComponentPreview from './ComponentPreview';
import ComponentCode from './ComponentCode';
import { ComponentCardProps, ComponentListProps, SetInfoProps } from '@/types';
import ComponentDocu from './ComponentDocu';

type ComponentProps = ComponentListProps & ComponentCardProps & SetInfoProps;

const ComponentPage = ({ setViewComponentInfo, displayName, displayTags }: ComponentProps) => {
  const [showOther, setShowOther] = useState(false);
  const toggleShowOther = () => {
    setShowOther(!showOther);
  }
  const toggleViewComponentInfo = () => {
    setViewComponentInfo(false);
  }
  return (
    <div className='h-[100vh] md:h-auto md:pb-10 w-full flex flex-col md:grid md:grid-cols-2 gap-2 px-3 pt-10 z-10 items-start justify-start'>
      <span className='md:col-span-full w-full flex flex-wrap items-center relative'>
        <span className='w-full text-xs text-gray-400 font-semibold'>../<span className='capitalize'>{displayTags[0]}</span>/{displayName}</span>
        <button 
          type="button"
          className='h-10 w-10 rounded-sm ring-1 ring-transparent flex items-center justify-center text-3xl hover:ring-gray-300 focus:ring-gray-300 focus:scale-110 ease-in-out duration-200'
          onClick={toggleViewComponentInfo}
        >
          <HiOutlineChevronLeft />
        </button>
        <h2 className='text-lg font-medium w-5/6 text-wrap leading-5'>{displayName}</h2>
      </span>
      <div className='md:col-span-1 h-max w-full flex flex-col gap-3 p-2 pt-0'>
        <div className='w-full flex flex-col items-end'>
          <div className={`right-0 -bottom-3.5 text-xs font-medium flex rounded-t-xl ${!showOther ? 'bg-white' : 'bg-black'} overflow-hidden p-1.5 pb-0`}>
            <button type="button" className={`py-1.5 px-3 rounded-md ${!showOther ? 'bg-emerald-300' : 'text-white'} hover:bg-emerald-200 hover:text-black focus:bg-emerald-300 ease-in-out duration-200`} onClick={toggleShowOther}>Preview</button>
            <button type="button" className={`py-1.5 px-3 rounded-md ${showOther && 'bg-rose-300'} hover:bg-rose-100 focus:bg-rose-300 ease-in-out duration-200`} onClick={toggleShowOther}>Code</button>
          </div>
          {!showOther && <ComponentPreview />}
          {showOther && <ComponentCode isDisplayed={true}/>}
        </div>
      </div>
      <ComponentDocu tags={displayTags}/>
    </div>
  )
}

export default ComponentPage
