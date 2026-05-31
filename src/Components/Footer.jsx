import React, { useContext, useEffect } from 'react'
import LogoImg from '../../public/Images/logo.svg'
import NEImg from '../../public/Images/Emblem_of_Nepal.svg'
import NTBImg from '../../public/Images/ntb.jpg'
import GalleryImg from '../../public/Images/Travel/everest-base-camp.jpg'
import { Fancybox } from "@fancyapps/ui/dist/fancybox/";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import { Link } from "react-router-dom"
import DataContext from '../Context/DataContext'

function Footer() {
  const { gallery, destinations, setDetailTypes } = useContext(DataContext);
  useEffect(() => {
    Fancybox.bind("[data-fancybox='gallery']", {
      Thumbs: {
        autoStart: true,
      },
    });
    return () => {
      Fancybox.destroy();
    };
  }, []);
  // console.log(gallery);
  return (
    <footer className='px-6 sm:px-12 lg:px-24 bg-[var(--neutral-900)] pt-12 pb-6 md:pt-24'>
      <div className='grid grid-cols-3 md:grid-cols-5 gap-6 mb-6 md:mb-12'>
        <img src={LogoImg} alt="brand logo" className='h-fit w-32 object-contain' />
        <div>
          <h5 className='text-[var(--neutral-100)] mb-3 md:mb-6'>Useful Links</h5>
          <ul className='text-[var(--neutral-500)] flex flex-col gap-1 md:gap-2 ml-1'>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about-us">Our Story</Link></li>
            <li><Link to="/blog-page">Blogs</Link></li>
            <li><Link to="/packages" onClick={() => setDetailTypes('package')}>Packages</Link></li>
            <li><Link to="/packages" onClick={() => setDetailTypes('activity')}>Activities</Link></li>
            <li><Link to="/contact-us">Contact Us</Link></li>
          </ul>
        </div>
        <div>
          <h5 className='text-[var(--neutral-100)] mb-3 md:mb-6'>Destinations</h5>
          <ul className='text-[var(--neutral-500)] flex flex-col gap-1 md:gap-2 ml-1'>
            {destinations.map(item => (
              <li key={item.id}>{item.destination}</li>
            ))}
          </ul>
        </div>
        <div>
          <h5 className='text-[var(--neutral-100)] mb-3 md:mb-6'>Legal Terms & Policies</h5>
          <ul className='text-[var(--neutral-500)] flex flex-col gap-1 md:gap-2 ml-1'>
            <li>Travel Insurance</li>
            <li>Booking Policy</li>
            <li>Privacy Policy</li>
            <li>Terms of use</li>
          </ul>
        </div>
        <div>
          <h5 className='text-[var(--neutral-100)] mb-3 md:mb-6'>Associated with</h5>
          <div className='flex gap-6 items-center'>
            <img src={NEImg} alt="emblem of Nepal" className='h-12 w-12 object-cover' />
            <img src={NTBImg} alt="nepal tourism board" className='h-12 w-12 object-cover' />
          </div>
        </div>
      </div>
      <div className='pt-6 md:pt-12 border-t-2 border-[var(--secondary-500)]/60 rounded-t-xl grid grid-cols-2 md:grid-cols-3 gap-x-3 mb-6 md:mb-12'>
        <div>
          <h5 className='text-[var(--neutral-100)] mb-3 md:mb-6'>Head Office</h5>
          <p className='text-[var(--neutral-500)] mb-3 md:mb-6'>Kathmandu, Ring Road Area, Nepal</p>
          <ul className='flex flex-col gap-1 md:gap-2 ml-1 text-[var(--neutral-500)]'>
            <li>Contact no.: <a href="#" className='text-[var(--secondary-500)]'>+977 980-0000000</a></li>
            <li>Email: <a href="#" className='text-[var(--secondary-500)]'>info.voyentra-ktm@gmail.com</a></li>
          </ul>
        </div>
        <div>
          <h5 className='text-[var(--neutral-100)] mb-3 md:mb-6'>Branch Office</h5>
          <p className='text-[var(--neutral-500)] mb-3 md:mb-6'>Pokahra, Lakeside Area, Nepal</p>
          <ul className='flex flex-col gap-1 md:gap-2 ml-1 text-[var(--neutral-500)]'>
            <li>Contact no.: <a href="#" className='text-[var(--secondary-500)]'>+977 980-0000000</a></li>
            <li>Email: <a href="#" className='text-[var(--secondary-500)]'>info.voyentra-pkr@gmail.com</a></li>
          </ul>
        </div>
        <div className='col-span-2 md:col-span-1 mt-6 md:mt-0'>
          <h5 className='text-[var(--neutral-100)] mb-3 md:mb-6'>Our Gallery</h5>
          <div className='grid grid-cols-3 gap-3'>
            {gallery.map(item => (
              <a key={item.id} href={item.image_url} data-fancybox='gallery'>
                <img src={item.image_url} alt={item.title} className='h-24 w-full object-cover rounded-sm' />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className='pt-6 border-t-2 border-[var(--secondary-500)]/60 rounded-t-xl flex flex-col md:flex-row items-center md:justify-between gap-2 md:justify-between text-[var(--neutral-500)]'>
          <span>&copy; All rights reserved. Voyentra Inc. @ {new Date().getFullYear()}</span>
          <span>Crafted at: <a href="https://sait.com.np/" target='blank' className='text-[var(--secondary-500)]'>S.A I.T Solutions Nepal</a></span>
      </div>
    </footer>
  )
}

export default Footer