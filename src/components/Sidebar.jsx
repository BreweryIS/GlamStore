import React, { useContext } from 'react'
import { SidebarContext } from '../context/SidebarContext'
import { IoMdArrowForward } from 'react-icons/io';


const Sidebar = () => {

const {isOpen, handleClose} = useContext(SidebarContext)

  return (
    <div className={`${isOpen ? "right-0" : "-right-full"} w-full h-full bg-white fixed top-0 shadow-2xl sm:w-[55vw] md:max-w-[44vw] xl:max-w-[27vw] transition-all duration-300 z-20 px-4 lg:px-[35px]`}>
      <div className='flexBetween py-6 border-b'>
        <div className='uppercase text-sm font-semibold'>Shopping Bag (0)</div>
        {/* icon */}
        <div onClick={handleClose} className='cursor-pointer w-8 h-8 flexCenter'>
          <IoMdArrowForward className='text-2xl'/>
        </div>
      </div>
    </div>
  )
}

export default Sidebar