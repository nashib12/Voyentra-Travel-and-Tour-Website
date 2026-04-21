import React from 'react'
import Img from '../../../public/Images/Travel/everest-base-camp.jpg'

function PopularPackages() {
  return (
    <section id="popular-packages" className='px-6 sm:px-12 lg:px-24 py-12 md:py-24'>
        <span className='text-[var(--secondary-500)]'>Featured Paclages</span>
        <h3 className='text-[var(--neutral-900)] mt-1 mb-3 md:mt-3'>Our Most Popular Packages</h3>
        <p className='text-[var(--neutral-500)] mb-6 md:mb-12 text-justify md:text-start'>Embark on a memorial journey with one of our must popular adventure package.</p>
        <div className='grid grid-cols-1 gap-y-6 gap-x-0 md:grid-cols-6 md:gap-6'>
            {[1,2].map(item => (
            <div key={item} className='col-span-3'>
                <div className='relative group overflow-hidden rounded-xl'>
                    <img src={Img} alt="image" className='h-60 md:h-80 w-full object-cover' />
                    <div className='absolute inset-0 md:bg-black/20 transition-colors duration-300 ease-out bg-black/60 group-hover:bg-black/60' />
                    <div className='absolute bottom-4 px-4 md:px-6 overflow-hidden cursor-pointer transition-transform duration-700 ease-in-out md:translate-y-28 group-hover:translate-y-0 flex flex-col'>
                        <span className='text-[var(--secondary-100)] mb-1 md:mb-3'>7D/6N | Nepal </span>
                        <h5 className='text-[var(--neutral-100)] mb-3'>Everest Base Camp Trekking</h5>
                        <span className='text-white hidden md:block mb-3'>Take on the Everest Base Camp Trek, an adventure that takes to the heart of the Himalayas. This legendary journey follows in the footsteps of mountaineers, winding throuh secneric trails.</span>
                        <button className='h-8 w-fit px-3 rounded-sm cursor-pointer bg-[var(--primary-500)] text-[var(--neutral-100)]'>Discover</button>
                    </div>
                </div>
            </div>
            ))}
            <div className='md:hidden'>
                <div className='relative group overflow-hidden rounded-xl'>
                    <img src={Img} alt="image" className='h-60 md:h-80 w-full object-cover' />
                    <div className='absolute inset-0 bg-black/60 md:bg-black/20 transition-colors duration-300 ease-out group-hover:bg-black/60' />
                    <div className='absolute bottom-4 px-4 md:px-6 overflow-hidden cursor-pointer transition-transform duration-700 ease-in-out md:translate-y-32 group-hover:translate-y-0 flex flex-col'>
                        <span className='text-[var(--secondary-100)] mb-1 md:mb-3'>7D/6N | Nepal </span>
                        <h5 className='text-[var(--neutral-100)] mb-3'>Everest Base Camp Trekking</h5>
                        <span className='text-white hidden md:block'>Take on the Everest Base Camp Trek, an adventure that takes to the heart of the Himalayas. This legendary journey follows in the footsteps of mountaineers, winding throuh secneric trails.</span>
                        <button className='h-8 w-fit px-3 rounded-sm cursor-pointer bg-[var(--primary-500)] text-[var(--neutral-100)]'>Discover</button>
                    </div>
                </div>
            </div>
            {[1,2,3].map(item => (
            <div key={item} className='hidden md:block col-span-2'>
                <div className='relative group overflow-hidden rounded-xl'>
                    <img src={Img} alt="image" className='h-60 md:h-80 w-full object-cover' />
                    <div className='absolute inset-0 bg-black/60 md:bg-black/20 transition-colors duration-300 ease-out group-hover:bg-black/60' />
                    <div className='absolute bottom-4 px-4 md:px-6 overflow-hidden cursor-pointer transition-transform duration-700 ease-in-out md:translate-y-36 group-hover:translate-y-0 flex flex-col'>
                        <span className='text-[var(--secondary-100)] mb-1 md:mb-3'>7D/6N | Nepal </span>
                        <h5 className='text-[var(--neutral-100)] mb-3'>Everest Base Camp Trekking</h5>
                        <span className='text-white hidden md:block'>Take on the Everest Base Camp Trek, an adventure that takes to the heart of the Himalayas. This legendary journey follows in the footsteps of mountaineers, winding throuh secneric trails.</span>
                        <button className='h-8 w-fit px-3 rounded-sm cursor-pointer bg-[var(--primary-500)] text-[var(--neutral-100)] md:mt-3'>Discover</button>
                    </div>
                </div>
            </div>
            ))}
        </div>
    </section>
  )
}

export default PopularPackages