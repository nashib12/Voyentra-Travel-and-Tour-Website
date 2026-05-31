import React, { useCallback, useContext, useEffect, useState } from 'react'
import RightArrowIcon from '../../../public/Icons/Button Icons/right-arrow.png'
import ArrowRightIcon from '../../../public/Icons/Button Icons/arrow-right.png'
import ArrowLeftIcon from '../../../public/Icons/Button Icons/left-arrow.png'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay';
import DataContext from '../../Context/DataContext'
import DOMPurify from "dompurify";
import { Link } from 'react-router-dom'
import LocationIcon from '../../../public/Icons/location.png'

const ActvitiesSection = () => {
    const { activities } = useContext(DataContext);

    if (!activities || activities.length === 0) {
        return <h2>Loading ....</h2>
    }

    return <ActivitiesCarousel activities={activities} />
  
}

function ActivitiesCarousel ({ activities }) {
    const { setDetailType } = useContext(DataContext);
     const [autoplayRef]  = useState(() => {
          const instance = Autoplay({
              delay: 5000,
              stopOnInteraction: true,
              stopOnMouseEnter: true,
      });
      return instance;
  }); 

    const [ emblaRef, emblaApi ] = useEmblaCarousel({
        loop: true,
        align: 'center'
    }, [autoplayRef]); 

    const [ emblaThumbRef, emblaThumbApi ] = useEmblaCarousel({
        containScroll: "keepSnaps",
        dragFree: true,
        align: "start",
    })

    const onThumbClick = useCallback((index) => {
        if (!emblaApi || !emblaThumbApi ) return;
        emblaApi.scrollTo(index);
        emblaThumbApi.scrollTo(index);
    }, [ emblaApi, emblaThumbApi]);

    const onSelect = useCallback (() => {
        if (!emblaApi || !emblaThumbApi ) return;
        const index = emblaApi.selectedScrollSnap();
        emblaThumbApi.scrollTo(index);
    }, [emblaApi, emblaThumbApi]);

    useEffect(() => {
        if (!emblaApi) return;
        onSelect();
        emblaApi.on('select', onSelect).on('reInit', onSelect);
        return () => {
            emblaApi.off('select', onSelect);
            emblaApi.off('reInit', onSelect);
        }
    }, [emblaApi, onSelect]);

    const scrollNext = () => emblaApi?.scrollNext();
    const scrollPrev = () => emblaApi?.scrollPrev();
  return (
    <section className='px-6 sm:px-12 lg:px-24 py-12 md:py-24'>
        <div className='md:grid grid-cols-5 gap-6'>
            <div className='col-span-2 mb-6'>
            <div className='flex flex-col justify-center h-full'>
                <span className='text-[var(--secondary-500)]'>Popular Activities</span>
                <h3 className='text-[var(--neutral-900)] mt-1 mb-3 md:mt-3'>Beyond Unforgettable Tour Activities</h3>
                <p className='text-[var(--neutral-500)] mb-6 text-justify md:text-start'>If you are looking for a fun, exciting and challenging outdoor adventure activity center, look no further than Mill on the Brue and more tours!</p>
                <Link to={'/packages'} onClick={() => setDetailType('activity')}>
                <button className='h-9 md:h-11 w-fit px-2 md:px-4 rounded-sm text-[var(--neutral-100)] bg-[var(--primary-500)] flex items-center justify-center gap-3 cursor-pointer'>
                    View all activities 
                    <img src={RightArrowIcon} alt="right arrow icon" className='h-3 w-3 object-contain invert' /> 
                </button>
                </Link>
            </div>
            </div>
            <div className='col-span-3'>
                <div ref={emblaRef} className='overflow-hidden relative'>
                    <div className='flex'>
                        { activities.map(item => (
                            <div key={item.id} className='flex-[0_0_100%] min-w-0 p-4'>
                                <div className='h-48 md:h-120 w-full relative rounded-2xl overflow-hidden'>
                                    <img src={item.image_url} alt="h-full w-full object-cover" />
                                    <div className='bg-black/20 absolute inset-0 h-full w-full' />
                                    <div className='absolute inset-0 h-full w-full'>
                                        <div className='flex flex-col items-start h-full w-full justify-end px-4 py-4 md:px-12 md:py-12'>
                                            <h5 className='text-[var(--neutral-100)] md:mb-3 max-w-lg'>{item.title}</h5>
                                            <Link to={`/package-details/${item.slug}`} onClick={() => setDetailType('activity')}>
                                                <button className='h-8 md:h-11 px-2 md:px-4 w-fit rounded-sm bg-[var(--primary-500)] text-[var(--neutral-100)] cursor-pointer mt-2'>View Details</button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button onClick={scrollPrev} className='absolute top-1/2 -translate-y-1/2 left-6 h-8 w-8 md:h-12 md:w-12 rounded-full flex items-center justify-center cursor-pointer bg-[var(--neutral-900)]'>
                        <img src={ArrowLeftIcon} alt="arrow left icon" className='h-3 w-3 md:h-5 md:w-5 object-contain invert' />
                    </button>
                    <button onClick={scrollNext} className='absolute top-1/2 -translate-y-1/2 right-6 h-8 w-8 md:h-12 md:w-12 rounded-full flex items-center justify-center cursor-pointer bg-[var(--neutral-900)]'>
                        <img src={ArrowRightIcon} alt="arrow right icon" className='h-3 w-3 md:h-5 md:w-5 object-contain invert' />
                    </button>
                </div>
                {/* Thumbnail */}
                <div ref={emblaThumbRef} className='overflow-hidden w-full'>
                    <div className='flex mt-4'>
                        { activities.map((item, index )=> (
                            <div key={`THN-${item.id}`} className='min-w-0 flex pl-4'>
                                <button onClick={() => onThumbClick(index)} type='button' className='cursor-pointer h-18 w-18 md:h-24 md:w-24 rounded-md overflow-hidden'>
                                    <img src={item.image_url} alt={item.title} className='h-full w-full object-cover ' />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ActvitiesSection