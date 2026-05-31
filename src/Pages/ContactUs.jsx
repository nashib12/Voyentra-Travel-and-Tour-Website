import React from 'react'
import BreadCrumb from '../Components/BreadCrumb'

const ContactUs = () => {
  return (
    <div>
        <BreadCrumb title="Contact us" />
        <section className='px-6 sm:px-12 lg:px-24 py-12 lg:py-24'>
            <div className='grid grid-cols-2'>
                <div className='flex items-center justify-center max-w-lg'>
                     <h2 className='text-[var(--primary-500)] italic'>Ready to connect with us.</h2>
                </div>
                <div className='h-fit w-fit px-6 py-6'>
                    <h4 className='text-[var(--neutral-900)] mb-6'>Quick enquiry</h4>
                    <form className='mb-6 border px-6 py-6 rounded-xl'>
                        <div className='grid grid-cols-2 gap-4 mb-6'>
                            <div>
                                <label htmlFor="fName" className='mb-2 block'>Full Name</label>
                                <input type="text" id='fName' className='outline-none h-10 px-2 border rounded-sm' placeholder='e.g. Jhon Doe' />
                            </div>
                            <div>
                                <label htmlFor="email" className='mb-2 block'>E-mail</label>
                                <input type="email" id='email' className='outline-none h-10 px-2 border rounded-sm' placeholder='example@example.com' />
                            </div>
                        </div>
                        <div className='grid grid-cols-2 gap-4 mb-6'>
                            <div>
                                <label htmlFor="contact" className='mb-2 block'>Contact</label>
                                <input type="text" id='contact' className='outline-none h-10 px-2 border rounded-sm' placeholder='+977 980-0000000' />
                            </div>
                            <div>
                                <label htmlFor="address" className='mb-2 block'>Address</label>
                                <input type="text" id='address' className='outline-none h-10 px-2 border rounded-sm' placeholder='Full address' />
                            </div>
                        </div>
                        <div className='mb-6'>
                            <label htmlFor="subject" className='mb-2 block'>Subject</label>
                            <input type="text" id='subject' className='outline-none h-10 px-4 border rounded-sm w-full' placeholder='Enter message title'  />
                        </div>
                        <div className='mb-6'>
                            <label htmlFor="mesasge" className='block mb-2'>Message</label>
                            <textarea id="message" className='outline-none w-full border py-4 px-4 rounded-sm' placeholder='Enter your message...' rows={6}></textarea>
                        </div>
                        <div className='mb-6'>
                            <input id='terms' type="checkbox" className='outline-none h-4 w-4' />
                            <label htmlFor="terms">I have read and agree to all <a href="#">Terms and Conditions. </a></label>
                        </div>
                        <button className='w-full h-11 cursor-pointer bg-[var(--neutral-900)] text-[var(--primary-100)] rounded-sm' type='submit'>Submit my message</button>
                    </form>
                </div>
            </div>
        </section>
    </div>
  )
}

export default ContactUs