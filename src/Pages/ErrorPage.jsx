import React from 'react'
import ErroImageIcon from '../../public/Images/404.svg'
import ArrowLeftIcon from '../../public/Icons/Button Icons/left.png'
import { Link } from 'react-router-dom';

function ErrorPage() {
  return (
    <div className="relative">
      <img src={ErroImageIcon} alt="oops page not found image" className="h-screen w-screen object-fit" />
      <Link to="/"><button className="h-12 w-fit px-4 flex items-center gap-2 justify-center absolute bottom-8 right-8 cursor-pointer border rounded-md bg-[var(--neutral-900)] text-[var(--neutral-100)] transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95"><img src={ArrowLeftIcon} alt="arrow left icon" className="h-4 w-4 object-contain invert"/>Let's go home</button></Link>
    </div>
  )
}

export default ErrorPage