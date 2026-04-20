import useEmblaCarousel from 'embla-carousel-react'
import React, { useCallback, useEffect, useState } from 'react'
import ArrowLeftIcon from '../../../public/Icons/Button Icons/left.png';
import ArrowRightIcon from '../../../public/Icons/Button Icons/right-arrow.png';
import Img from '../../../public/Images/Travel/everest-base-camp.jpg'

function PopularDestination() {
    const [ emblaRef, emblaApi ] = useEmblaCarousel({
        loop: false,
    });

    const [hasPrev, setHasPrev] = useState(false);
    const [hasNext, setHasNext] = useState(false);

    const updateButtons = useCallback(() => {
        if (!emblaApi) return;
        setHasPrev(emblaApi.canScrollPrev());
        setHasNext(emblaApi.canScrollNext());
    }, [emblaApi]);

    const scrollNext = useCallback(() => { emblaApi?.scrollNext() }, [emblaApi]);
    const scrollPrev = useCallback(() => { emblaApi?.scrollPrev() }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        updateButtons();
        emblaApi.on("select", updateButtons);
        emblaApi.on("init", updateButtons);

         return () => {
            emblaApi.on("select", updateButtons);
            emblaApi.on("init", updateButtons);
         }
    }, [emblaApi, updateButtons]);

  return (
    <section id='popular-destination' className='px-6 sm:px-12 lg:px-24'>
        <span className='text-[var(--secondary-500)] mb-3'>Destinations</span>
        <h3 className='text-[var(--neutral-900)] mb-3'>Explore Popular Travel Destinations</h3>
        <p className='text-[var(--neutral-700)] mb-12'>Handpicked locations offering culture, nature and unforgetable moments. Start your journey here.</p>

        <div className='flex gap-12'>
            <div className='flex flex-col gap-1'>
                <button onClick={scrollPrev} className={`rounded-sm h-14 w-14 border flex items-center justify-center border-[var(--neutral-900)] transition-colors duration-500 ease-in-out ${hasPrev ? "hover:bg-[var(--neutral-900)] cursor-pointer" : ""} group`}><img src={ArrowLeftIcon} alt='arrow left button icon' className={`h-6 w-6 object-contain transition-colors duration-500 ease-in-out ${hasPrev && "group-hover:invert" }`} /></button>
                <button onClick={scrollNext} className={`rounded-sm h-14 w-14 border flex items-center justify-center border-[var(--neutral-900)] transition-colors duration-500 ease-in-out ${hasNext ? "hover:bg-[var(--neutral-900)] cursor-pointer" : ""} group`}><img src={ArrowRightIcon} alt='arrow right button icon' className={`h-6 w-6 object-contain transition-colors duration-500 ease-in-out ${hasNext && "group-hover:invert"}`} /></button>
            </div>
            <div className='overflow-hidden cursor-grab active:cursor-grabbing' ref={emblaRef}>
                <div className='flex gap-6 px-6'>
                    {[1,2,3,4, 5].map(item => (
                        <div key={item} className='flex-[0_0_26%]'>
                            <div className='relative group shadow-sm'>
                                <img src={Img} alt="image" className='h-140 w-fit object-cover' />
                                <div className='absolute inset-0 transition-all duration-300 ease-out bg-black/20 group-hover:bg-black/40' />
                                <div className='absolute bottom-6 left-6'>
                                    <span className='text-[var(--neutral-500)] mb-3'>Location</span>
                                    <h3 className='text-[var(--primary-100)]'>Nepal</h3>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
  )
}

export default PopularDestination