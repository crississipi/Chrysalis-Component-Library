import React, { useRef, useState } from 'react'
import { HiOutlinePlus, HiOutlineUpload } from 'react-icons/hi'
import { HiOutlineChevronLeft } from 'react-icons/hi2'
import ModifyComponent from './ModifyComponent';
import CreateComponent from './CreateComponent';

const AddNewComponent = () => {
  const uploadComponent = useRef<HTMLInputElement | null>(null);
  const [modifyComponent, setModify] = useState(false);
  const [createComponent, setCreate] = useState(false);

  const inputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      console.log(files[0].name);
      setModify(true);
    }
  };
  return (
    <>
      { !(modifyComponent || createComponent) && (
        <div className='h-[85vh] w-full flex flex-col items-center justify-center z-10 overflow-x-hidden p-5'>
            <span className='md:col-span-full w-full flex flex-wrap items-center relative'>
                <button 
                type="button"
                        className='h-10 w-10 rounded-sm ring-1 ring-transparent flex items-center justify-center text-3xl hover:ring-gray-300 focus:ring-gray-300 focus:scale-110 ease-in-out duration-200'
                >
                <HiOutlineChevronLeft />
                </button>
                <h1 className='text-lg font-medium w-5/6 text-wrap leading-5'>Add New Component</h1>
            </span>
            <div className='h-auto w-auto my-auto flex flex-col gap-3'>
                <input 
                    ref={uploadComponent} 
                    type="file" 
                    name="uploadFile" 
                    id="uploadFile" 
                    className='hidden'
                    accept=".html,.jsx,.tsx"
                    onChange={inputChange}
                />
                <button
                    type='button'
                    className='flex py-3 px-5 pl-4 items-center gap-3 rounded-md bg-zinc-400 relative overflow-hidden before:h-1/2 before:aspect-square before:rounded-full before:absolute before:top-1/2 before:left-1/2 before:-translate-1/2 before:z-10 before:opacity-0 hover:before:bg-gray-950/15 hover:before:opacity-100 hover:before:scale-1200 focus:before:bg-gray-950/30 before:ease-in-out before:duration-500'
                    onClick={() => uploadComponent.current?.click()}
                >
                    <HiOutlineUpload className='text-2xl'/>
                    Upload existing file
                </button>
                <button
                    type='button'
                    className='flex py-3 px-5 pl-4 items-center gap-3 rounded-md bg-zinc-300 relative overflow-hidden before:h-1/2 before:aspect-square before:rounded-full before:absolute before:top-1/2 before:left-1/2 before:-translate-1/2 before:z-10 before:opacity-0 hover:before:bg-gray-950/15 hover:before:opacity-100 hover:before:scale-1200 focus:before:bg-gray-950/30 before:ease-in-out before:duration-500'
                    onClick={() => setCreate(true)}
                >
                    <HiOutlinePlus className='text-2xl'/>
                    Create New Component
                </button>
            </div>
        </div>
      )}
      { modifyComponent && (<ModifyComponent />) }
      { createComponent && (<CreateComponent />) }
    </>
  )
}

export default AddNewComponent
