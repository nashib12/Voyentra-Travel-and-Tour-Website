import React from 'react'
import HeroImg from '../../../public/Images/hero-img.jpg';

function Hero() {
  return (
    <section id="hero">
        <img src={HeroImg} alt="hero image" className='h-screen w-full object-cover mb-6' />
        <img src={HeroImg} alt="hero image" className='h-screen w-full object-cover mb-6' />
    </section>
  )
}

export default Hero