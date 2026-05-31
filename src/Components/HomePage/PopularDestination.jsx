import useEmblaCarousel from 'embla-carousel-react'
import React, { useCallback, useContext, useEffect, useState } from 'react'
import ArrowLeftIcon from '../../../public/Icons/Button Icons/left.png';
import ArrowRightIcon from '../../../public/Icons/Button Icons/right-arrow.png';
import Img from '../../../public/Images/Travel/everest-base-camp.jpg'
import LocationImg from '../../../public/Icons/location.png'
import StarImg from '../../../public/Icons/star-fil.png'
import ClockImg from '../../../public/Icons/clock.png'
import { Link } from 'react-router-dom';
import DataContext from '../../Context/DataContext';

function PopularDestination() {
    const { packages, setDetailType } = useContext(DataContext);
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
        <span className='text-[var(--secondary-500)]'>Featured Packages</span>
        <h3 className='text-[var(--neutral-900)] mt-1 md:mt-3 mb-3'>Our Most Popular Packages</h3>
        <p className='text-[var(--neutral-700)] mb-6 md:mb-12 text-justify md:text-start'>Embark on a memorial journey with one of our must popular package.</p>

                
        <div className='flex flex-col md:flex-row gap-6 md:gap-12'>
            <div className='flex justify-end md:justify-start md:flex-col gap-3 md:gap-1'>
                <button onClick={scrollPrev} className={`rounded-sm h-10 w-10 md:h-12 md:w-12 border flex items-center justify-center border-[var(--neutral-900)] transition-colors duration-500 ease-in-out ${hasPrev ? "hover:bg-[var(--neutral-900)] cursor-pointer" : "cursor-not-allowed"} group`}><img src={ArrowLeftIcon} alt='arrow left button icon' className={`h-5 w-5 md:h-6 md:w-6 object-contain transition-colors duration-500 ease-in-out ${hasPrev && "group-hover:invert" }`} /></button>
                <button onClick={scrollNext} className={`rounded-sm h-10 w-10 md:h-12 md:w-12 border flex items-center justify-center border-[var(--neutral-900)] transition-colors duration-500 ease-in-out ${hasNext ? "hover:bg-[var(--neutral-900)] cursor-pointer" : "cursor-not-allowed"} group`}><img src={ArrowRightIcon} alt='arrow right button icon' className={`h-5 w-5 md:h-6 md:w-6 object-contain transition-colors duration-500 ease-in-out ${hasNext && "group-hover:invert"}`} /></button>
            </div>
            <div className='overflow-hidden' ref={emblaRef}>
                <div className='flex gap-8 md:gap-6 md:px-6'>
                    {packages.map(item => (
                        <div key={item.id} className='flex-[0_0_100%] md:flex-[0_0_33.333%]'>
                            <Link to={`/package-details/${item.slug}`} onClick={()=> setDetailType("package")}>
                                <div className='rounded-xl bg-[var(--neutral-100)] overflow-hidden h-fit w-full'>
                                    <div className='cursor-pointer overflow-hidden'>
                                        <img src={item.image_url} alt="image" className='h-60 w-120 object-cover transition-transform duration-300 ease-in-out hover:scale-110' />
                                    </div>
                                    <div className='px-4 md:px-6 py-6'>
                                        <div className='flex items-center gap-2 mb-3'>
                                            <img src={LocationImg} alt="location icon" className='h-5 w-5 object-contain' />
                                            <span className='text-[var(--secondary-500)]'>{item.destinations?.destination}</span>
                                        </div>
                                        <h5 className='text-[var(--neutral-900)] mb-3 transition-colors duration-300 ease-in-out hover:text-[var(--secondary-500)]'>{item.title}</h5>
                                        <div className='flex items-center gap-2 mb-3'>
                                            <img src={StarImg} alt="star icon" className='h-4 w-4 md:h-5 md:w-5 object-contain' />
                                            <span className='text-[var(--secondary-500)]'>4.9 (100 reviews)</span>
                                        </div>
                                        <div className='flex items-center flex-wrap gap-2 mb-6'> 
                                            { item.travels?.map(i => (
                                                <div key={i.id} className='px-2 h-fit w-fit py-1 rounded-xs bg-[var(--primary-100)] text-[var(--primary-500)]'><span>{i.category}</span></div>
                                            ))}
                        
                                        </div>
                                        <div className='border-t-2 border-[var(--primary-500)] rounded-t-xl pt-3 flex justify-between px-2'>
                                            <div className='flex gap-2 items-center'>
                                                <span className='text-[var(--secondary-500)]'>From:</span>
                                                <h6 className='text-[var(--neutral-900)]'>${item.base_price}<span>/Person</span></h6>
                                            </div>
                                            <div className='flex items-center gap-2'>
                                                <img src={ClockImg} alt="clock icon" className='h-4 w-4 md:h-5 md:w-5 object-conatin' />
                                                <span className='text-[var(--secondary-500)]'>{item.no_days}D/{item.no_nights}N</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
  )
}

export default PopularDestination