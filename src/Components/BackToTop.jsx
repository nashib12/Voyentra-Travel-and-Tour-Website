import React, { useContext } from 'react'
import DataContext from '../Context/DataContext'
import UpArrowIcon from '../../public/Icons/up-arrow.png'

function BackToTop() {
    const { lenis } = useContext(DataContext);

  return (
    <div className='relative'>
        <button onClick={() => {lenis?.scrollTo(0, {duration: 1.5})}} className='absolute bottom-4 right-4 z-999 cursor-pointer border h-11 w-11 rounded-md flex items-center justify-center bg-[var(--neutral-900)] border-[var(--neutral-900)] transition-transform duration-300 ease-in-out hover:scale-110 active:scale-95'><img src={UpArrowIcon} alt="up arrow icon" className='h-5 w-5 object-contain invert' /></button>
    </div>
  )
}

export default BackToTop