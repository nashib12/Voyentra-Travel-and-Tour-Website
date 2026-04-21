import React from 'react'
import TeamImg1 from '../../../public/Images/Teams/team-1.jpg'
import TeamImg2 from '../../../public/Images/Teams/team-2.jpg'
import TeamImg3 from '../../../public/Images/Teams/team-3.jpg'
import TeamImg4 from '../../../public/Images/Teams/team-4.jpg'
import TeamImg5 from '../../../public/Images/Teams/team-5.jpg'
import TeamImg6 from '../../../public/Images/Teams/team-6.jpg'
import TeamImg7 from '../../../public/Images/Teams/team-7.jpg'
import TeamImg8 from '../../../public/Images/Teams/team-8.jpg'
import TeamImg9 from '../../../public/Images/Teams/team-9.jpg'
import TeamImg10 from '../../../public/Images/Teams/team-10.jpg'
import FacebookImg from '../../../public/Icons/Brand Icons/facebook.png'
import InstagramImg from '../../../public/Icons/Brand Icons/instagram.png'
import TwitterImg from '../../../public/Icons/Brand Icons/twitter.png'
import TikTokImg from '../../../public/Icons/Brand Icons/tik-tok.png'

function TeamSection() {
    const teamlist = [
        {id:"TE-1", img: TeamImg1, fName: "Jhon Doe", title: "Guide"},
        {id:"TE-2", img: TeamImg2, fName: "Jhon Doe", title: "Guide"},
        {id:"TE-3", img: TeamImg3, fName: "Jhon Doe", title: "Guide"},
        {id:"TE-4", img: TeamImg4, fName: "Jhon Doe", title: "Guide"},
        {id:"TE-5", img: TeamImg5, fName: "Jhon Doe", title: "Guide"},
        {id:"TE-6", img: TeamImg6, fName: "Jhon Doe", title: "Guide"},
        {id:"TE-7", img: TeamImg7, fName: "Jhon Doe", title: "Guide"},
        {id:"TE-8", img: TeamImg8, fName: "Jhon Doe", title: "Guide"},
        {id:"TE-9", img: TeamImg9, fName: "Jhon Doe", title: "Guide"},
        {id:"TE-10", img: TeamImg10, fName: "Jhon Doe", title: "Guide"},
    ];
  return (
    <section id="team-section" className='px-6 sm:px-12 lg:px-24 pb-12 md:pb-24'>
        <span className='text-[var(--secondary-500)]'>Our Team</span>
        <h3 className='text-[var(--neutral-900)] mt-1 md:mt-3 mb-6 md:mb-12'>Meet Our Team</h3>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-12 text-center'>
            {teamlist.map(item => (
            <div key={item.id} className='h-fit w-fit px-4 py-6 rounded-xl bg-[var(--primary-100)]'>
                <img src={item.img} alt={item.fName} className='h-60 w-80 object-cover rounded-lg mb-3 md:mb-6' />
                <h4 className='text-[var(--neutral-900)] mb-1'>{item.fName}</h4>
                <p className='text-[var(--neutral-700)] mb-3'>{item.title}</p>
                <div className='flex items-center justify-center gap-4'>
                    <a href="#"><button className='h-8 w-8 rounded-full cursor-pointer flex items-center justify-center bg-[var(--neutral-100)] shadow-sm'><img src={FacebookImg} alt="facebook icon" className='h-4 w-4 object-contain' /></button></a>
                    <a href="#"><button className='h-8 w-8 rounded-full cursor-pointer flex items-center justify-center bg-[var(--neutral-100)] shadow-sm'><img src={InstagramImg} alt="instagram icon" className='h-4 w-4 object-contain' /></button></a>
                    <a href="#"><button className='h-8 w-8 rounded-full cursor-pointer flex items-center justify-center bg-[var(--neutral-100)] shadow-sm'><img src={TwitterImg} alt="twitter icon" className='h-4 w-4 object-contain' /></button></a>
                    <a href="#"><button className='h-8 w-8 rounded-full cursor-pointer flex items-center justify-center bg-[var(--neutral-100)] shadow-sm'><img src={TikTokImg} alt="tik tok icon" className='h-4 w-4 object-contain' /></button></a>
                </div>
            </div>
            ))}
        </div>
    </section>
  )
}

export default TeamSection