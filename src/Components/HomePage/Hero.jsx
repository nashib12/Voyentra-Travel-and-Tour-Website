import React from 'react'
import HeroImg from '../../../public/Images/hero-img-2.jpg';

function Hero() {
  return (
    <section id="hero">
      <div className='overflow-hidden relative'>
        <img src={HeroImg} alt="hero image" className='h-screen w-full object-cover' />
        <div className='absolute inset-0 bg-black/60' />
        <div className='absolute inset-0 text-[var(--neutral-100)] max-w-3xl mx-auto flex flex-col justify-center text-center'>
            <h1>Explore More Travel More</h1>
            <p>Discover curated destinations, seamless booking, and unforgettable experiences, all in one beautifully designed platform.</p>
        </div>
      </div>
    </section>
  )
}

export default Hero