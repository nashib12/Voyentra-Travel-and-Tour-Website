import React from 'react'
import WhatsAppBtnIcon from '../../public/Icons/whatsapp.png'

function WhatsAppBtn() {
  return (
    <div className='relative'>
        <button className='absolute bottom-18 z-999 right-4  cursor-pointer border h-11 w-11 rounded-md flex items-center justify-center bg-[var(--primary-500)] border-[var(--primary-500)] transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95'><img src={WhatsAppBtnIcon} alt="whatsapp icon" className='h-6 w-6 object-contain invert' /></button>
    </div>
  )
}

export default WhatsAppBtn