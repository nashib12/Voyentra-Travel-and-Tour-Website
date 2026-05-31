import React, { useContext, useEffect, useState } from 'react'
import StarIcon from '../../../public/Icons/star-fil.png';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import DataContext from '../../Context/DataContext';

function Testimonials() {
    const { testimonials } = useContext(DataContext);
    if (!testimonials || testimonials.length === 0) {
        return <h2>loading...</h2>
    }

    return <TestimonialsCarousel testimonials={testimonials} />
}

function TestimonialsCarousel ( { testimonials }) {


    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
    });

    // useEffect(() => {
    //     if(!emblaApi) return;
    //     emblaApi.plugins().autoplay?.play();
    // }, [emblaApi])
  return (
    <section id="testimonials" className='px-6 sm:px-12 lg:px-24'>
        <span className='text-[var(--secondary-500)]'>Testimonials</span>
        <h3 className='mt-1 md:mt-3 mb-3 text-[var(--neutral-900)]'>Travelers' Reviews</h3>
        <p className='mb-6 md:mb-12 text-[var(--neutral-700)]'>Read what other travelers say about their experience with voyentra.</p>
        <div className='overflow-hidden' ref={emblaRef}>
            <div className='flex gap-6 px-6'>
                {testimonials.map(item => (
                <div key={item.id} className='flex-[0_0_100%] md:flex-[0_0_33.333%] h-fit w-fit bg-[var(--neutral-100)] rounded-xl shadow-sm px-4 py-4 md:px-6 md:py-6 min-w-0'>
                   <div className='flex gap-1 mb-3 md:mb-6'>
                     {[1,2,3,4,5].map(item => (
                        <img key={item} src={StarIcon} alt="star icon" className='h-4 w-4 object-contain' />
                    ))}
                   </div>
                   <span className='text-[var(--nautral-900)] block mb-3 text-justify'>"{item.message}"</span>
                   <div className='border-t rounded-t-lg border-[var(--neutral-900)] pt-3 md:pt-6  flex items-center gap-4'>
                        <img src={item.image_url} alt={item.customer_name} className='h-14 w-14 rounded-full object-cover' />
                        <div className='flex flex-col gap-0.5'>
                            <h6 className='text-[var(--neutral-900)]'>{item.customer_name}</h6>
                            <span className='text-[var(--neutral-700)]'>{item.address}</span>
                        </div>
                   </div>
                </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Testimonials