import React from 'react'
import Img from '../../../public/Images/Travel/adventure.jpg'
import LocationIcon from '../../../public/Icons/location.png'
import BalanceIcon from '../../../public/Icons/meditation.png'
import ResponseIcon from '../../../public/Icons/response.png'
import ConnectionIcon from '../../../public/Icons/arrow.png'
import VerifyIcon from '../../../public/Icons/Button Icons/verify.png'

function TravelWithUs() {
    const guideArray = [
        {id:1, img: LocationIcon, title: "Discovery", text: "Real life expeirences."},
        {id:2, img: ConnectionIcon, title: "Connections", text: "Connect through shared journeys."},
        {id:3, img: BalanceIcon, title: "Balance", text: "Travel works bets when it's balanced."},
        {id:4, img: ResponseIcon, title: "Responsibiity", text: "Mindful and sustainable travel."},
    ]
  return (
    <> 
    <section id="travel-with-us" className='px-6 sm:px-12 lg:px-24'>
        <div className='grid grid-cols-2 gap-12'>
            <div className='flex justify-center items-center relative'>
                <div className='border-2 border-[var(--primary-500)] rounded-xl h-120 w-100'>
                    <img src={Img} alt="image" className='ml-8 mt-8 h-full w-full object-cover rounded-xl' />
                </div>
                <button className='absolute bottom-24 left-0 h-16 px-4 w-fit flex items-center justify-center gap-3 border border-[var(--neutral-900)] bg-[var(--neutral-100)] rounded-sm'><img src={VerifyIcon} alt="verififed button icon" className='h-8 w-8 object-contain' /> <div className='flex flex-col items-start gap-0.5'><h5 className='text-[var(--neutral-900)]'>Trusted By</h5> <span className='text-[var(--nautral-500)]'>Thousnd of Travellers</span></div></button>
            </div>
            <div>
                <span className='text-[var(--secondary-500)] mb-3'>Why Travel with us</span>
                <h3 className='text-[var(--neutral-900)] mb-3'>Our Commitment to your <strong className='text-[var(--primary-500)]'>Journey</strong></h3>
                <p className='text-[var(--neutral-700)] mb-6'>With over 18 years of experience in guided tours in Nepal, Bhutan, Tibet, and India, we create journeys that go beyond sightseeing. Discover hidden local gems and authentic experiences with our expert tour leaders. Our tours and treks focus on meaningful adventures that combine cultural exploration, and off-the-beaten-path experiences, and ensure an immersive experience in every destination.</p>
                <div className='grid grid-cols-2 gap-6 mb-6'>
                    {guideArray.map(item => (
                    <div key={item.id} className='flex items-center gap-3'>
                        <img src={item.img} alt={item.title} className='h-11 w-11 object-contain' />
                        <div>
                            <h6 className='text-[var(--neutral-900)] mb-1'>{item.title}</h6>
                            <span className='text-[var(--neutral-500)]'>{item.text}</span>
                        </div>
                    </div>
                    ))}
                </div>
                <button className='h-12 w-fit px-4 bg-[var(--neutral-900)] text-[var(--primary-100)] cursor-pointer rounded-sm'>Learn More</button>
            </div>
        </div>
    </section>
    <section id="our-approach" className='px-6 sm:px-12 lg:px-24 py-6 md:py-24'>
        <div className='grid grid-cols-2 gap-12 items-center'>
            <div>
                <span className='text-[var(--secondary-500)] mb-3'>Our Approach</span>
                <h3 className='text-[var(--neutral-900)] mb-6'>Bespoke to Your Design</h3>
                <p className='text-[var(--neutral-700)] mb-3'>We are a team of seasoned professionals with over 18 years of expertise in Asian tourism. With an extensive network across Bhutan, Nepal, Tibet, India, Cambodia, Vietnam, Laos, Myanmar, and Thailand, we specialize in creating seamless, culturally sensitive, and personalized travel experiences. </p>
                <p className='text-[var(--neutral-700)] mb-6'>From crafting tailor-made trips to managing every detail with care, we are dedicated to delivering unparalleled satisfaction. We are dedicated to making your trip genuinely remarkable, whether we are handling intricate logistics or creating original itineraries.</p>
                <button className='h-12 w-fit px-4 rounded-sm cursor-pointer bg-[var(--primary-500)] text-[var(--neutral-100)]'>Contact Us</button>
            </div>
            <div className='flex items-center justify-center'>
                <div className='border-2 border-[var(--neutral-900)] rounded-xl h-120 w-100'>
                    <img src={Img} alt="image" className='h-full w-full object-cover rounded-xl -ml-8 mt-8' />
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default TravelWithUs