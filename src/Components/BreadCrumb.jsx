import React from 'react'
import BreadCrumbImg from '../../public/Images/Travel/nature.jpg'
import HomeIcon from '../../public/Icons/Button Icons/home.png' 
import DoubleArrowIcon from '../../public/Icons/Button Icons/fast-forward.png' 
import { Link } from 'react-router-dom'

function BreadCrumb({ title }) {
  return (
    <div className='relative'>
        <img src={BreadCrumbImg} alt="bread crumb background image" className='h-60 md:h-100 w-full object-cover' />
        <div className='absolute inset-0 bg-black/40' />
        <div className='absolute bottom-6 left-0 px-6 sm:px-12 lg:px-24'>
            <h2 className='text-[var(--neutral-100)] uppercase mb-3'>{title}</h2>
            <div className='flex gap-4'>
                <Link to={'/'}>
                    <div className='flex gap-2 cursor-pointer items-center'>
                        <img src={HomeIcon} alt="home button icon" className='h-5 w-5 object-contain invert' />
                        <p className='text-[var(--neutral-100)]'>Home</p>
                    </div>
                </Link>
                    <div className='flex gap-2 cursor-pointer items-center'>
                        <img src={DoubleArrowIcon} alt="home button icon" className='h-4 w-4 object-contain invert' />
                        <p className='text-[var(--neutral-100)]'>{title}</p>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default BreadCrumb