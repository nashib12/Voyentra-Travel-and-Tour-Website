import React from 'react'
import GuestImg1 from '../../../public/Images/Guests/guest-01.jpg'
import GuestImg2 from '../../../public/Images/Guests/guest-02.jpg'
import GuestImg3 from '../../../public/Images/Guests/guest-03.jpg'
import GuestImg4 from '../../../public/Images/Guests/guest-04.jpg'
import StarIcon from '../../../public/Icons/star-fil.png'
import TravelImg1 from '../../../public/Images/Travel/everest.jpg'
import TravelImg2 from '../../../public/Images/Travel/everest-base-camp.jpg'

function AboutUs() {
  return (
    <section id='about-us' className='px-6 sm:px-12 lg:px-24 py-12 md:py-24'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-0 md:gap-12'> 
            <div className=''>
                <span className='text-[var(--secondary-500)]'>Extreme Tour</span>
                <h3 className='text-[var(--neutral-900)] mt-1 md:mt-3 mb-3'>Discover Your Perfect Travel Destinations</h3>
                <p className='text-[var(--neutral-700)] mb-6 text-justify md:text-start'>We create unforgettable experiences for you and your family, with personalized itineraries and exclusive access to the world's most breathtaking locations.</p>
                <div className='flex flex-col md:flex-row md:items-center gap-4 md:gap-16 text-[var(--neutral-700)] mb-6'>
                    <div className='flex items-center'>
                        <img src={GuestImg1} alt="guest image" className='h-10 w-10 md:h-12 md:w-12 rounded-full object-cover border-2 border-[var(--neutral-100)]' />
                        <img src={GuestImg2} alt="guest image" className='-ml-4 md:-ml-2 h-10 w-10 md:h-12 md:w-12 rounded-full object-cover border-2 border-[var(--neutral-100)]' />
                        <img src={GuestImg3} alt="guest image" className='-ml-4 md:-ml-2 h-10 w-10 md:h-12 md:w-12 rounded-full object-cover border-2 border-[var(--neutral-100)]' />
                        <img src={GuestImg4} alt="guest image" className='-ml-4 md:-ml-2 h-10 w-10 md:h-12 md:w-12 rounded-full object-cover border-2 border-[var(--neutral-100)]' />
                        <span className='ml-3'>+10k Travellers</span>
                    </div>
                    <div className='flex gap-1'>
                        {[1, 2, 3, 4, 5].map((item) => (
                            <img key={item} src={StarIcon} alt='star icon' className='h-3 w-3 md:h-4 md:w-4 object-contain' />
                        ))}
                        <span className='ml-1 md:ml-3'>4.9/5 Ratings</span>
                    </div>
                </div>
                <div className='flex items-center gap-3 md:gap-6'>
                    <button className='h-8 md:h-12 w-fit px-4 bg-[var(--primary-500)] text-[var(--neutral-100)] rounded-sm cursor-pointer'>Start Your Journey</button>
                    <button className='h-8 md:h-12 w-fit px-4 bg-[var(--neutral-100)] text-[var(--primary-500)] border border-[var(--primary-500)] rounded-sm cursor-pointer'>View Destinations</button>
                </div>
            </div>
            <div className='hidden sm:flex items-center gap-3 md:gap-6'>
                <div className='h-60 md:h-100 w-1/2 rounded-xl md:rounded-3xl overflow-hidden'>
                    <img src={TravelImg2} alt="everest base camp" className='h-full w-full object-cover shadow-sm' />
                </div>
                <div className='h-60 md:h-100 w-1/2 rounded-xl md:rounded-3xl overflow-hidden'>
                    <img src={TravelImg1} alt="everest base camp" className='h-full w-full object-cover shadow-sm' />
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutUs