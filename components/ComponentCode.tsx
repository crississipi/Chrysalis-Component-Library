"use client";

import React, { useEffect, useState } from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/components/prism-typescript.min.js';
import 'prismjs/components/prism-jsx.min.js';
import { HiOutlineCheck } from 'react-icons/hi2';
import { HiFolder } from 'react-icons/hi';
import { RiFileCopyLine } from 'react-icons/ri';
import { CodeProps } from '@/types';

const ComponentCode = ({ isDisplayed }: CodeProps) => {
  const [isClient, setIsClient] = useState(false);
  const [preStyle, setPreStyle] = useState('');
  const codeString = `import { RiHome5Line } from "react-icons/ri";
const NeumorphicButton1 = () => {
  return (
    <span className='h-12 col-span-1 flex items-center gap-2 text-gray-600 text-xs rounded-md overflow-hidden relative border border-gray-400 bg-white'>
      <span className='h-full aspect-square p-1 rounded-xs z-20 bg-white'>
        <RiHome5Fill className='h-full w-full'/>
      </span>
      <span className='pr-1 text-sm absolute z-1 right-1'>
        HOME
      </span>
    </span>
  )
}
export default NeumorphicButton1


`;

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient) {
      Prism.highlightAll();
    }
    setPreStyle('h-max max-w-full overflow-y-hidden p-3 pb-10 leading-3 bg-black');
  }, [isClient, codeString]);

  const [copyString, setCopyString] = useState(false);
  const toggleCopyString = () => {
    navigator.clipboard.writeText(codeString)
      .then(() => {
        setCopyString(true);
        setTimeout(() => setCopyString(false), 2000);
      })
      .catch((err) => {
        console.error('Failed to copy text: ', err);
        setCopyString(false)
      });
  };
  return (
    <div className={`w-full ${isDisplayed ? 'aspect-[3/2]' : 'aspect-square'} rounded-xl rounded-tr-none bg-black overflow-hidden relative`}>
      <span className='w-full text-xs text-zinc-400 flex items-center gap-2 p-2 px-3 absolute bg-black top-0'>
        <HiFolder className='text-xl text-zinc-300'/>
        <p>Components/NeumorphicButton1.tsx</p>
      </span>
      { isDisplayed ? (
        <div className='h-full w-full tracking-wider text-xs text-white overflow-x-hidden mt-7'>
          <pre className={preStyle ?? 'h-full w-full overflow-y-hidden p-3 leading-3'}>
            <code className='language-jsx'>
              {codeString}
            </code>
          </pre>
        </div>
      ) : (
        <textarea
          spellCheck="false"
          className='h-full w-full text-white md:text-white/70 font-mono mt-10 px-5 text-xs md:text-sm'
          defaultValue={codeString}
        >
        </textarea>
      )}
      { isDisplayed && (
        <button type="button" className={`absolute bottom-3 right-3 z-20 text-white text-xs flex gap-1 py-2 px-3 rounded-md bg-gray-500 ring-1 ring-transparent hover:ring-gray-300 focus:ring-white`} onClick={toggleCopyString}>
          {copyString ? <><HiOutlineCheck className='text-base'/> Copied!</> : <><RiFileCopyLine className='text-base'/> Copy Code</> }
        </button>
      )}
    </div>
  )
}

export default ComponentCode
