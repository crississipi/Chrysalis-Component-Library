import { ComponentCardProps } from '@/types'
import React from 'react'
import { SiCss3, SiHtml5, SiJavascript, SiNextdotjs, SiTailwindcss, SiTypescript } from 'react-icons/si'

const ComponentDocu = ({ tags }: ComponentCardProps) => {
  return (
    <div className='md:col-span-1 h-1/2 w-full md:h-full md:pb-5 flex flex-wrap px-2 items-start'>
      <h3 className='text-lg font-semibold mt-3 md:mt-0 w-full flex-grow'>Description</h3>
      <p className='w-full mb-auto'>Aesthetic and modern adaptation of neumorphism. Giving the user minimalist yet interactive and intuitive experience.</p>
      <div className='w-full font-medium'>
        <span>tags</span>
        <div className='w-full flex gap-1 overflow-hidden flex-wrap leading-5 text-gray-600 font-light'>
          {tags.map((val,i) => (
            <span key={i} className={`${i > 2 && 'font-semibold flex-grow'}`}>{i < 2 ? `#${val}` : tags.length - (i + 1) > 0 && `+${tags.length - (i + 1)}`}</span>
          ))}
        </div>
      </div>
      <div className='w-1/2 flex flex-col'>
        <h3 className='text-lg font-semibold mt-3 md:text-base'>Uploaded By</h3>
        <span>@Jen052504</span>
      </div>
      <div className='w-1/2 flex flex-col'>
        <h3 className='text-lg font-semibold mt-3 md:text-base'>Date Uploaded</h3>
        <span>Jul 20, 2025</span>
      </div>
      <div className='w-full flex flex-col gap-2 mt-auto'>
        <h3 className='text-lg font-semibold w-full text-left md:text-base'>Available in</h3>
        <div className='w-full flex text-3xl gap-2'>
          <SiNextdotjs />
          <SiTypescript className='text-amber-400'/>
          <SiTailwindcss className='text-sky-400'/>
          <SiHtml5 className='text-orange-400'/>
          <SiCss3 className='text-sky-400'/>
          <SiJavascript className='text-amber-400'/>
        </div>
      </div>
    </div>
  )
}

export default ComponentDocu
