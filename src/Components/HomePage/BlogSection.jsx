import React from 'react'
import Img from '../../../public/Images/Travel/everest-base-camp.jpg'
import TagIcon from '../../../public/Icons/tag.png'
import CalendarIcon from '../../../public/Icons/calendar.png'
import UserIcon from '../../../public/Icons/user.png'
import CommentIcon from '../../../public/Icons/comment.png'

function BlogSection() {
  return (
    <section id="blog-section" className='px-6 sm:px-12 lg:px-24 py-6 md:py-24'>
        <span className='text-[var(--secondary-500)] mb-3'>Blog Posts</span>
        <h3 className='text-[var(--neutral-900)] mb-3'>Travel Stories, Insights & Guides</h3>
        <p className='text-[var(--neutral-700)] mb-12'>Stories, Insights and travel inspirations from across the Asia shared by our team and community.</p>
        <div className='grid grid-cols-2 gap-12'>
            <div className='cursor-pointer group bg-[var(--neutral-100)] shadow-md overflow-hidden rounded-2xl'>
                <img src={Img} alt="" className='h-90 w-full object-cover' />
                <div className='flex flex-col gap-3 py-6 px-6'>
                <div className='flex justify-between'>
                    <div className='flex gap-2 items-center'>
                        <img src={TagIcon} alt="tag icon" className='h-5 w-5 object-contain' />
                        <span className='text-[var(--secondary-500)]'>Places</span>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <img src={CalendarIcon} alt="tag icon" className='h-5 w-5 object-contain' />
                        <span className='text-[var(--secondary-500)]'>April 20, 2026</span>
                    </div>
                </div>
                <h4 className='text-[var(--neutral-900)]'>Top 5 Trekking Destinations in Nepal</h4>
                <p className='text-[var(--neutral-700)]'>Occaecat aliquip id duis dolor magna laboris pariatur Lorem ad aliquip aliqua ullamco qui.Ipsum aliqua elit veniam id est dolore...</p>
                <div className='flex justify-between mt-6'>
                    <div className='flex items-center gap-2'>
                        <div className='h-8 w-8 rounded-full bg-[var(--neutral-900)] flex items-center justify-center'>
                            <img src={UserIcon} alt="user icon" className='h-3 w-3 object-contain invert' />
                        </div>
                        <span className='text-[var(--secondary-500)]'>Admin</span>
                    </div>
                    <div className='flex items-center gap-2'>
                        <div className='h-8 w-8 rounded-full bg-[var(--neutral-900)] flex items-center justify-center'>
                            <img src={CommentIcon} alt="comments icon" className='h-3 w-3 object-contain invert' />
                        </div>
                        <span className='text-[var(--secondary-500)]'>View Comments</span>
                    </div>
                </div>
                </div>
            </div>
            <div className='grid grid-cols-2 gap-6'>
                {[1,2,3,4].map(item => (
                    <div key={item} className='cursor-pointer group bg-[var(--neutral-100)] shadow-md overflow-hidden rounded-xl'>
                        <img src={Img} alt="" className='h-36 w-full object-cover' />
                        <div className='flex flex-col gap-3 py-3 px-3'>
                        <div className='flex justify-between'>
                            <div className='flex gap-2 items-center'>
                                <img src={TagIcon} alt="tag icon" className='h-5 w-5 object-contain' />
                                <span className='text-[var(--secondary-500)]'>Places</span>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <img src={CalendarIcon} alt="tag icon" className='h-5 w-5 object-contain' />
                                <span className='text-[var(--secondary-500)]'>April 20, 2026</span>
                            </div>
                        </div>
                        <h5 className='text-[var(--neutral-900)]'>Top 5 Trekking Destinations in Nepal</h5>
                        <div className='flex gap-2'>
                            <div className='flex items-center gap-2'>
                                <div className='h-6 w-6 rounded-full bg-[var(--neutral-900)] flex items-center justify-center'>
                                    <img src={UserIcon} alt="user icon" className='h-2 w-2 object-contain invert' />
                                </div>
                                <span className='text-[var(--secondary-500)]'>Admin</span>
                            </div> |
                            <div className='flex items-center gap-2'>
                                <div className='h-6 w-6 rounded-full bg-[var(--neutral-900)] flex items-center justify-center'>
                                    <img src={CommentIcon} alt="comment icon" className='h-2 w-2 object-contain invert' />
                                </div>
                                <span className='text-[var(--secondary-500)]'>View Comment</span>
                            </div>
                        </div>
            
                        </div>
                    </div>
                ))}

            </div>
        </div>
    </section>
  )
}

export default BlogSection