import React from 'react'
import DataContext from '../Context/DataContext'
import UpArrowIcon from '../../public/Icons/Button Icons/up-arrow.png'
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css'

function BackToTop() {
  
  return (
    <div className='relative'>
        <button data-tooltip-id='back-to-top' onClick={() => window.scrollTo({top: 0, left: 0, behavior:'smooth'})} className='absolute bottom-2 right-2 md:bottom-4 md:right-4 cursor-pointer border h-8 w-8 md:h-11 md:w-11 rounded-sm md:rounded-md flex items-center justify-center bg-[var(--neutral-900)] border-[var(--neutral-900)] transition-transform duration-300 ease-in-out hover:scale-110 active:scale-95'>
          <img src={UpArrowIcon} alt="up arrow icon" className='h-3 w-3 md:h-5 md:w-5 object-contain invert' />
        </button>
        <Tooltip id='back-to-top'><span>Go to top</span></Tooltip>
    </div>
  )
}

export default BackToTop