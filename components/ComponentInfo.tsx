import { ComponentCardProps, ComponentListProps, FilterButtonProps, HeroCardProps, UpdateInfoProps } from '@/types'
import { motion } from 'framer-motion'
import React from 'react'
import { RiHome5Fill } from 'react-icons/ri'

type ComponentInfoProps = HeroCardProps & ComponentListProps & FilterButtonProps & ComponentCardProps & UpdateInfoProps;

const ComponentInfo = ({ num, setViewComponentInfo, name, tags, updateInfo }: ComponentInfoProps) => {
  const toggleViewComponentInfo = () => {
    updateInfo(name, tags);
    setViewComponentInfo(true);
  }
  return (
    <button className='col-span-1 h-max rounded-lg bg-white shadow-md flex flex-col p-2 gap-2 relative hover:scale-101 focus:scale-105 ease-in-out duration-200' onClick={toggleViewComponentInfo}>
      <h4 className='h-7 min-w-8 font-extrabold text-sm absolute top-0 left-0 rounded-tl-lg rounded-br-lg bg-white flex items-center justify-center'>{num}</h4>
      <div className='w-full aspect-square rounded-md bg-zinc-100 flex items-center justify-center'>
        <motion.span
          animate={{
            boxShadow: ['0px 0px 0px rgba(0,0,0,0), 0px 0px 0px rgba(0,0,0,0), inset 0px 0px 0px rgba(0,0,0,0), inset 0px 0px 0px rgba(0,0,0,0)', '2px 2px 4px #bebebe, -2px -2px 4px #fff, inset 2px 2px 4px #bebebe, inset -2px -2px 4px #fff', '0px 0px 0px rgba(0,0,0,0), 0px 0px 0px rgba(0,0,0,0), inset 0px 0px 0px rgba(0,0,0,0), inset 0px 0px 0px rgba(0,0,0,0)'],
            width: ['3rem', '6rem', '3rem'],
            padding: ['0px 0px 0px 0px', '0px 5px 0px 5px', '0px 0px 0px 0px'],
            border: ['1px solid #cbd5e0', '0px solid rgba(0,0,0,0)', '1px solid #cbd5e0'],
          }}
          transition={{
            ease: 'easeInOut',
            duration: 5,
            repeat: Infinity,
            repeatType: 'loop',
          }}
          className='h-12 col-span-1 flex items-center gap-3 text-gray-600 text-xs rounded-md overflow-hidden relative border border-gray-400'
        >
          <motion.span 
            animate={{height: ['3rem','2.5rem', '3rem']}}
            transition={{
              ease: 'easeInOut',
              duration: 3,
              repeat: Infinity,
              repeatType: 'loop',
              delay: 1,
              repeatDelay: 2
            }}
            className='h-full aspect-square p-1 rounded-xs z-20'
          >
            <RiHome5Fill className='h-full w-full'/>
          </motion.span>
          <motion.span
            animate={{
              opacity: [0, 1, 0]
            }}
            transition={{
              ease: 'easeInOut',
              duration: 2,
              repeat: Infinity,
              repeatType: 'loop',
              delay: 1.5,
              repeatDelay: 3
            }}
            className='pr-1 mt-1 text-sm absolute z-1 right-1'
          >
            HOME
          </motion.span>
        </motion.span>
      </div>
      <div className='h-1/3 w-full flex flex-col'>
        <h5 className='text-sm font-semibold text-gray-600'>{name}</h5>
        <span className='text-xs text-gray-400 mt-2 w-full text-left'>tags</span>
        <div className='w-full flex gap-1 overflow-hidden flex-wrap leading-5 text-gray-600 font-light'>
          {tags.map((val,i) => (
            <span key={i} className={`text-xs ${i > 2 && 'font-semibold flex-grow'}`}>{i < 2 ? `#${val}` : tags.length - (i + 1) > 0 && `+${tags.length - (i + 1)}`}</span>
          ))}
        </div>
      </div>
    </button>
  )
}

export default ComponentInfo
