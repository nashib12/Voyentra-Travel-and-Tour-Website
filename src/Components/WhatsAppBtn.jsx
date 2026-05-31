import React from 'react'
import WhatsAppBtnIcon from '../../public/Icons/Brand Icons/whatsapp.png'
import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'

function WhatsAppBtn() {
  return (
    <div className='relative'>
        <button data-tooltip-id='whatsapp' className='absolute bottom-11 right-2 md:bottom-18 md:right-4  cursor-pointer border h-8 w-8 md:h-11 md:w-11 rounded-sm md:rounded-md flex items-center justify-center bg-[var(--primary-500)] border-[var(--primary-500)] transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95'>
          <img src={WhatsAppBtnIcon} alt="whatsapp icon" className='h-4 w-4 md:h-6 md:w-6 object-contain invert' />
        </button>
        <Tooltip id='whatsapp'><span>Let's have a chat</span></Tooltip>
    </div>
  )
}

export default WhatsAppBtn