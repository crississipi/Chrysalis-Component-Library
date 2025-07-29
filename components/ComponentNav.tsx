"use client";

import React from 'react'
import FilterButton from './FilterButton'
import { motion } from 'framer-motion'
import { ComponentNavProps } from '@/types';

type ComponentProps = ComponentNavProps ;

const ComponentNav = ({ setComponents, selectedComponents, showFilters }: ComponentProps) => {
  const componentFilter = [
    {
      name: "Headers",
      type: "header"
    },
    {
      name: "Buttons",
      type: "button"
    },
    {
      name: "Hero Boilerplates",
      type: "hero"
    },
    {
      name: "Cards",
      type: "card"
    },
    {
      name: "Footers",
      type: "footer"
    },
    {
      name: "Image Sliders",
      type: "slider"
    },
    {
      name: "Navigations",
      type: "nav"
    },
    {
      name: "Animated Backgrounds",
      type: "background"
    },
    {
      name: "Media",
      type: "media"
    },
    {
      name: "Login Pages",
      type: "login"
    },
    {
      name: "Statistics",
      type: "stats"
    },
    {
      name: "Inputs and Forms",
      type: "forms"
    },
    {
      name: "Notification Slips",
      type: "notif"
    },
    {
      name: "Confirmation Interfaces",
      type: "confirm"
    },
    {
      name: "Animations",
      type: "animate"
    },
    {
      name: "Lazy Loadings",
      type: "loading"
    },
    {
      name: "Others",
      type: "other"
    },
  ]
  const styleFilter = [
    {
      name: "Glassmorphism",
      type: "glassmorphic"
    },
    {
      name: "Neumorphism",
      type: "neumorphic"
    },
    {
      name: "Bubbles",
      type: "bubbles"
    },
    {
      name: "Sleek",
      type: "sleek"
    },
    {
      name: "Classic",
      type: "classic"
    },
    {
      name: "Neo Modern",
      type: "neo"
    },
    
  ]
  return (
    <motion.div 
      initial={{rotateX: "90deg"}}
      animate={{rotateX: '0deg'}}
      exit={{rotateX: '90deg', opacity: 0}}
      transition={{
        duration: 0.3,
        type: 'spring',
        damping: 20,
        stiffness: 300
      }}
      className='h-auto w-9/10 p-3 rounded-xl shadow-md bg-white absolute z-30 mt-20 md:mt-0 md:w-3/5 right-0 flex flex-col gap-2 before:h-1/2 before:w-full before:bg-white before:absolute before:left-0 before:-z-1'
    >
      <span className='h-8 w-8 bg-white rotate-45 absolute -top-2 right-3 md:top-3 md:right-0 md:-left-3 -z-[999] rounded-md shadow-lg'></span>
      <h3 className='w-full text-base font-semibold text-gray-600 bg-white'>Category</h3>
      <div className='h-auto w-full flex flex-wrap gap-2'>
        {componentFilter.map((val, i) => (
          <FilterButton 
            key={i} 
            name={val.name} 
            type={val.type} 
            showFilters={showFilters} 
            setComponents={setComponents} 
            selectedComponents={selectedComponents} 
          />
        ))}
      </div>
      <h3 className='w-full text-base font-semibold text-gray-600'>Styles</h3>
      <div className='h-auto w-full flex flex-wrap gap-2'>
        {styleFilter.map((val, i) => (
          <FilterButton 
            key={i} 
            name={val.name} 
            type={val.type} 
            showFilters={showFilters} 
            setComponents={setComponents} 
            selectedComponents={selectedComponents} 
          />
        ))}
      </div>
    </motion.div>
  )
}

export default ComponentNav
