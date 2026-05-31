import React, { useContext } from 'react'
import BreadCrumbImg from '../../public/Images/Travel/nature.jpg'
import HomeIcon from '../../public/Icons/Button Icons/home.png' 
import DoubleArrowIcon from '../../public/Icons/Button Icons/fast-forward.png' 
import { Link, useLocation } from 'react-router-dom'
import DataContext from '../Context/DataContext'

function BreadCrumb({ title }) {
    const location = useLocation();
    const { detailType } = useContext(DataContext);
  return (
    <div className='relative'>
        <img src={BreadCrumbImg} alt="bread crumb background image" className='h-60 md:h-100 w-full object-cover' />
        <div className='absolute inset-0 bg-black/40' />
        <div className='absolute bottom-6 left-0 px-6 sm:px-12 lg:px-24'>
            <h3 className='text-[var(--neutral-100)] uppercase mb-3'>{title}</h3>
            <div className='flex gap-2 md:gap-4 flex-wrap'>
                <Link to={'/'}>
                    <div className='flex gap-1 md:gap-2 cursor-pointer items-center'>
                        <img src={HomeIcon} alt="home button icon" className='h-5 w-5 object-contain invert' />
                        <p className='text-[var(--neutral-100)]'>Home</p>
                    </div>
                </Link>
                { location.pathname.includes('/blog-details') && (
                    <Link to={'/blog-page'}>
                        <div className='flex gap-1 md:gap-2 cursor-pointer items-center'>
                            <img src={DoubleArrowIcon} alt="home button icon" className='h-4 w-4 object-contain invert' />
                            <p className='text-[var(--neutral-100)]'>Blogs</p>
                    </div>
                    </Link>
                )}
                { location.pathname.includes('/package-details') && (
                    <Link to={'/packages'}>
                        <div className='flex gap-1 md:gap-2 cursor-pointer items-center'>
                            <img src={DoubleArrowIcon} alt="home button icon" className='h-4 w-4 object-contain invert' />
                            <p className='text-[var(--neutral-100)]'> { detailType === "package" ? 'Packages' : 'Activities'}</p>
                    </div>
                    </Link>
                )}
                    <div className='flex gap-1 md:gap-2 items-center'>
                        <img src={DoubleArrowIcon} alt="home button icon" className='h-4 w-4 object-contain invert' />
                        <p className='text-[var(--neutral-100)]'>{title}</p>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default BreadCrumb