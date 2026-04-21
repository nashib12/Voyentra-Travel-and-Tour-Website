import React from 'react'
import FlexibilityIcon from '../../../public/Icons/flexibility.png'
import PartnerIcon from '../../../public/Icons/deal.png'
import AvailableIcon from '../../../public/Icons/availability.png'
import TranspaarencyIcon from '../../../public/Icons/transparency.png'
import GuidesIcon from '../../../public/Icons/costumer.png'
import ResponseIcon from '../../../public/Icons/response.png'
import Images from '../../../public/Images/Travel/adventure.jpg'

function ServiceSection() {
    const servicelist = [
        {id: "SC-1", img: AvailableIcon, title: "24/7 Customer Support"},
        {id: "SC-2", img: ResponseIcon, title: "Responsible Travel"},
        {id: "SC-3", img: FlexibilityIcon, title: "Flexibilty"},
        {id: "SC-4", img: TranspaarencyIcon, title: "Supervision"},
        {id: "SC-5", img: GuidesIcon, title: "Experienced Team"},
        {id: "SC-6", img: PartnerIcon, title: "Journey Partners"},
    ];
  return (
    <section id="service-section" className='px-6 sm:px-12 lg:px-24 py-12 md:py-24'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-x-0 gap-y-6 md:gap-12'>
            <div>
                <span className='text-[var(--secondary-500)]'>Our Services</span>
                <h3 className='text-[var(--neutral-900)] mt-1 md:mt-3 mb-3'>Join the Adventures with Story</h3>
                <p className='text-[var(--neutral-700)] mb-3 md:mb-6'>Reconnect with nature through immersive outdoor experiences, eco-friendly stays, and guided activities like hiking and meditation. Perfect for relaxation and renewal.</p>
                <div className='grid grid-cols-3 gap-6 mb-3 md:mb-12'>
                    {servicelist.map(item => (
                    <div key={item.id} className='flex flex-col items-center text-center gap-3'>
                        <img src={item.img} alt={item.title} className='h-12 w-12 object-contain' />
                        <h6 className='text-[var(--primary-500)]'>{item.title}</h6>
                    </div>
                    ))}
                </div>
                <button className='h-8 md:h-12 w-fit px-4 cursor-pointer bg-[var(--primary-500)] text-[var(--neutral-100)] rounded-sm'>View Packages</button>
            </div>
            <img src={Images} alt="adventure img" className='hidden md:block h-80 w-60 lg:h-120 lg:w-100 object-cover rounded-xl' />
        </div>
    </section>
  )
}

export default ServiceSection