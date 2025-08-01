"use client"

import { HeroCardProps } from '@/types'
import React, { JSX, useState } from 'react'
import { HiCheck } from 'react-icons/hi'
import { SiAngular, SiCss3, SiHtml5, SiJavascript, SiNextdotjs, SiReact, SiTailwindcss, SiVuedotjs } from 'react-icons/si'

const LanguageButton = ({ num }: HeroCardProps) => {
  const [selected, isSelected] = useState(false);
  const language: Record<number, JSX.Element> = {
    0 : <SiHtml5 className={`text-amber-500 absolute`}/>,
    1 : <SiCss3 className='text-sky-400'/>,
    2 : <SiJavascript className='text-yellow-500'/>,
    3 : <SiNextdotjs />,
    4 : <SiTailwindcss className='text-sky-300'/>,
    5 : <SiReact className='text-rose-400'/>,
    6 : <SiVuedotjs className='text-emerald-500'/>,
    7 : <SiAngular className='text-rose-600'/>
  }
  return (
    <button
        type='button'
        className={`h-auto w-11 text-3xl flex flex-col gap-2 relative items-center justify-center ease-in-out duration-300`}
        onClick={() => isSelected(!selected)}
    >
        <span className={`bg-white rounded-sm ring-2 h-10 w-10 relative flex items-center justify-center ${selected ? 'top-7 ring-emerald-400' : 'ring-gray-200'}   ease-in-out duration-300`}>
            {language[num]}
        </span>
        {selected && <span className={`rounded-md text-2xl font-semibold text-white p-2 pt-5 pb-0.5 ${selected && 'bg-emerald-600'} ease-in-out duration-300`}>
            <HiCheck />    
        </span>}
    </button>
  )
}

export default LanguageButton
