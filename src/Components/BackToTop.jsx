import React, { useContext } from 'react'
import DataContext from '../Context/DataContext'
import UpArrowIcon from '../../public/Icons/Button Icons/up-arrow.png'
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css'

function BackToTop() {
    const { lenis } = useContext(DataContext);

  return (
    <div className='relative'>
        <button data-tooltip-id='back-to-top' onClick={() => {lenis?.scrollTo(0, {duration: 1.5})}} className='absolute bottom-4 right-4 cursor-pointer border h-11 w-11 rounded-md flex items-center justify-center bg-[var(--neutral-900)] border-[var(--neutral-900)] transition-transform duration-300 ease-in-out hover:scale-110 active:scale-95'><img src={UpArrowIcon} alt="up arrow icon" className='h-5 w-5 object-contain invert' /></button>
        <Tooltip id='back-to-top'><span>Go to top</span></Tooltip>
    </div>
  )
}

export default BackToTop