"use client";

import { AddNewComponent, ComponentList, ComponentPage, Header } from "@/components";
import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { SetInfoProps } from "@/types";

export default function Home() {
  const [list, viewList] = useState(true);
  const [viewComponentInfo, setViewComponentInfo] = useState(false);
  const [info, setInfo] = useState<SetInfoProps>({
    displayName: '...',
    displayTags: [],
  });
  const updateInfo = (name: string, tags: string[]) => {
    setInfo((prevInfo) => ({
      ...prevInfo,
      displayName: name,
      displayTags: tags
    }));
  }
  return (
    <main className="h-auto min-h-full w-full relative flex flex-col">
      <div className="h-full w-full fixed top-1/2 left-1/2 -translate-1/2 grid grid-cols-5 md:grid-cols-13 bg-zinc-100 overflow-hidden">
        {Array.from({ length: 150 }).map((_, i) => (
          <motion.span 
            key={i} 
            animate={{boxShadow: ['0 0 0 1px rgba(0, 0, 0, 0.05)', '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)', '0 0 0 1px rgba(0, 0, 0, 0.05)']}}
            transition={{
              ease: 'easeInOut', 
              duration: 5, 
              delay: Math.random() * 2, 
              repeat: Infinity,
              repeatType: 'loop'
            }}  
            className={`col-span-1 ${i % 2 === 1 && 'bg-zinc-100 animate-pulse'} aspect-square`}
          >
          </motion.span>
        ))}
      </div>
      <Header viewList={viewList} list={list}/>
      {list ? (
        <div className="h-full w-full flex flex-col overflow-x-hidden">
          {!viewComponentInfo && <ComponentList setViewComponentInfo={setViewComponentInfo} updateInfo={updateInfo}/>}
          {viewComponentInfo && <ComponentPage setViewComponentInfo={setViewComponentInfo} displayName={info.displayName} displayTags={info.displayTags} tags={[]}/>}
        </div>
      ) : (
        <AddNewComponent viewList={viewList} list={list}/>
      )}
      <footer className="h-16 md:h-14 w-full bg-black text-white text-sm z-10 flex items-center gap-3 ">
        <span className="h-full aspect-square bg-white flex items-center justify-center">
          <Image src='/logo.png' alt='logo icon' height={100} width={100} className='h-10 w-full object-contain object-center'/>
        </span>
        <p className="leading-4"><b>Chrysalis</b> is an Open-Source platform where developers can share and use unique components to their system.</p>
      </footer>
    </main>
  );  
}
