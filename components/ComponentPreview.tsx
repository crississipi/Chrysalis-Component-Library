import { motion } from 'framer-motion'
import React from 'react'
import { RiHome5Fill } from 'react-icons/ri'

const ComponentPreview = () => {
  return (
    <div className='w-full aspect-[3/2] rounded-xl rounded-tr-none bg-white overflow-hidden p-2'>
      <div className='h-full w-full border border-gray-200 relative rounded-md overflow-hidden flex items-center justify-center'>
        <div className='w-full h-full grid grid-cols-10 absolute top-1/2 left-1/2 -translate-1/2'>
          {Array.from({ length: 125 }).map((_,i) => (
            <span key={i} className={`col-span-1 ${i < 10 && '-mt-2'} aspect-square border-[0.5px] border-gray-200`}></span>
          ))}
        </div>
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
          className='h-12 col-span-1 flex items-center gap-3 text-gray-600 text-xs rounded-md overflow-hidden relative border border-gray-400 bg-white scale-150'
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
    </div>
  )
}

export default ComponentPreview
