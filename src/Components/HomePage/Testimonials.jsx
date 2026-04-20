import React, { useEffect } from 'react'
import StarIcon from '../../../public/Icons/star-fil.png';
import GuestImg1 from '../../../public/Images/Guests/guest-01.jpg';
import GuestImg2 from '../../../public/Images/Guests/guest-02.jpg';
import GuestImg3 from '../../../public/Images/Guests/guest-03.jpg';
import GuestImg4 from '../../../public/Images/Guests/guest-04.jpg';
import GuestImg5 from '../../../public/Images/Guests/guest-05.jpg';
import GuestImg6 from '../../../public/Images/Guests/guest-06.jpg';
import GuestImg7 from '../../../public/Images/Guests/guest-07.jpg';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

function Testimonials() {
    const testimonials = [
        {id: "TR-1", img: GuestImg1, fName: "Jhon Smith", message: "Minim exercitation ipsum aliqua ex do deserunt veniam velit id.Sit incididunt nulla ullamco sunt. Sit incididunt nulla ullamco sunt.", address: "Kathmandu, Nepal" },
        {id: "TR-2", img: GuestImg2, fName: "Jhon Smith", message: "Minim exercitation ipsum aliqua ex do deserunt veniam velit id.Sit incididunt nulla ullamco sunt. Sit incididunt nulla ullamco sunt.", address: "Kathmandu, Nepal" },
        {id: "TR-3", img: GuestImg3, fName: "Jhon Smith", message: "Minim exercitation ipsum aliqua ex do deserunt veniam velit id.Sit incididunt nulla ullamco sunt. Sit incididunt nulla ullamco sunt.", address: "Kathmandu, Nepal" },
        {id: "TR-4", img: GuestImg4, fName: "Jhon Smith", message: "Minim exercitation ipsum aliqua ex do deserunt veniam velit id.Sit incididunt nulla ullamco sunt. Sit incididunt nulla ullamco sunt.", address: "Kathmandu, Nepal" },
        {id: "TR-5", img: GuestImg5, fName: "Jhon Smith", message: "Minim exercitation ipsum aliqua ex do deserunt veniam velit id.Sit incididunt nulla ullamco sunt. Sit incididunt nulla ullamco sunt.", address: "Kathmandu, Nepal" },
        {id: "TR-6", img: GuestImg6, fName: "Jhon Smith", message: "Minim exercitation ipsum aliqua ex do deserunt veniam velit id.Sit incididunt nulla ullamco sunt. Sit incididunt nulla ullamco sunt.", address: "Kathmandu, Nepal" },
        {id: "TR-7", img: GuestImg7, fName: "Jhon Smith", message: "Minim exercitation ipsum aliqua ex do deserunt veniam velit id.Sit incididunt nulla ullamco sunt. Sit incididunt nulla ullamco sunt.", address: "Kathmandu, Nepal" },
    ];

    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
    }, [Autoplay({ delay: 5000})]);

    useEffect(() => {
        if(!emblaApi) return;
        emblaApi.plugins().autoplay?.play();
    }, [emblaApi])
  return (
    <section id="testimonials" className='px-6 sm:px-12 lg:px-24'>
        <span className='mb-3 text-[var(--secondary-500)]'>Testimonials</span>
        <h3 className='mb-3 text-[var(--neutral-900)]'>Travelers' Reviews</h3>
        <p className='mb-12 text-[var(--neutral-700)]'>Read what other travelers say about their experience with voyentra.</p>
        <div className='overflow-hidden' ref={emblaRef}>
            <div className='flex gap-6 px-6'>
                {testimonials.map(item => (
                <div key={item.id} className='flex-[0_0_33.333%] h-fit w-fit bg-[var(--neutral-100)] rounded-xl shadow-sm px-6 py-6 min-w-0'>
                   <div className='flex gap-1 mb-6'>
                     {[1,2,3,4,5].map(item => (
                        <img key={item} src={StarIcon} alt="star icon" className='h-4 w-4 object-contain' />
                    ))}
                   </div>
                   <p className='text-[var(--nautral-900)] mb-6'>"{item.message}"</p>
                   <div className='border-t border-[var(--neutral-900)] pt-6  flex items-center gap-4'>
                        <img src={item.img} alt={item.fName} className='h-14 w-14 rounded-full object-cover' />
                        <div className='flex flex-col gap-0.5'>
                            <h6 className='text-[var(--neutral-900)]'>{item.fName}</h6>
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