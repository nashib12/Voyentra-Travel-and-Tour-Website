import React from "react";
import BrandLogo from '../../../public/Images/trip.png'
import Image from '../../../public/Images/Travel/adventure.jpg'
import MDImage from '../../../public/Images/Guests/guest-03.jpg';
import FacebookImg from '../../../public/Icons/Brand Icons/facebook.png'
import InstagramImg from '../../../public/Icons/Brand Icons/instagram.png'
import TwitterImg from '../../../public/Icons/Brand Icons/twitter.png'

function AboutSection() {
  return (
    <>
    <section id="about-section" className="px-6 sm:px-12 lg:px-24 py-12 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-0 gap-y-6 md:gap-12 items-center">
            <div>
                <span className="text-[var(--secondary-500)]">Our Story</span>
                <h3 className="mt-1 md:mt-3 mb-3 text-[var(--neutral-900)]">Discover the World with confidence</h3>
                <p className="mb-3 text-[var(--neutral-700)] text-justify md:text-start">We believe travel is not just about the destination it’s about the experience. Founded in 2015, we have been curating unforgettable travel adventures for explorers across the globe. From luxury vacations to budget-friendly getaways, we’re your trusted travel partner every step of the way.</p>
                <p className="mb-6 text-[var(--neutral-700)] text-justify md:text-start">Established in 2015, voyentra has risen to prominence as a premier international travel agency in Nepal. Renowned for its exceptional tours and trekking services, EuroAsia operates across Nepal, India, Tibet, and Bhutan, consistently prioritizing service quality. Guided by the philosophy of treating guests with divine reverence, voyentra has earned a reputation for its client- centric approach.</p>
                <div className="border border-[var(--neutral-900)] w-fit h-fit px-4 py-2 md:px-6 md:py-4 rounded-lg ">
                    <h6 className="text-[var(--neutral-900)] mb-1 md:mb-3">Trusted By  <span className="text-[var(--secondary-500)]">(10K+ Reviews)</span></h6>
                    <img src={BrandLogo} alt="trip advisor band logo" className="h-8 md:h-12 w-fit object-cover mb-1" />
                    
                </div>
            </div>
            <img src={Image} alt="image" className="hidden md:block h-80 w-60 lg:h-120 lg:w-100 object-cover rounded-xl shadow-md" />
        </div>
    </section>
    <section id="message" className="px-6 sm:px-12 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-0 gap-y-6 md:gap-12">
            <div className="flex items-center">
                <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 bg-[var(--primary-100)] w-full h-fit px-8 py-6 rounded-xl">
                    <img src={MDImage} alt="managing director image" className="h-60 w-60 md:h-80 md:w-80 object-cover rounded-xl" />
                    <div className="text-center">
                        <h4 className="text-[var(--neutral-900)] mb-1">Jhon Doe</h4>
                    <p className="text-[var(--neutral-700)] mb-3">Managing Director</p>
                    <div className="flex gap-4">
                        <a href="#"><button  className="bg-[var(--neutral-100)] rounded-full cursor-pointer h-8 w-8 flex items-center justify-center"><img src={FacebookImg} alt="" className="h-4 w-4 object-contain" /></button></a>
                        <a href="#"><button  className="bg-[var(--neutral-100)] rounded-full cursor-pointer h-8 w-8 flex items-center justify-center"><img src={InstagramImg} alt="" className="h-4 w-4 object-contain" /></button></a>
                        <a href="#"><button  className="bg-[var(--neutral-100)] rounded-full cursor-pointer h-8 w-8 flex items-center justify-center"><img src={TwitterImg} alt="" className="h-4 w-4 object-contain" /></button></a>
                    </div>
                    </div>
                </div>
            </div>
            <div>
                <span className="text-[var(--secondary-500)]">Message from Managing Director</span>
                <h3 className="text-[var(--neutral-900)] mt-1 md:mt-3 mb-3">Welcome to Voyentra Travel and Tours</h3>
                <h5 className="text-[var(--neutral-700)] mb-3">Dear Adventurers,</h5>
                <h5 className="mb-3 md:mb-6">Namaste</h5>
                <p className="text-[var(--neutral-700)] mb-3 text-justify md:text-start">Quis sunt tempor qui aute excepteur fugiat dolor ipsum esse dolore occaecat occaecat. Adipisicing in ut labore consectetur et cupidatat ut sint sit anim veniam cillum irure tempor. Consectetur ipsum adipisicing id aute sunt sint minim esse. Fugiat cillum qui do elit ea ex incididunt exercitation qui eu. Sint excepteur adipisicing et non ex mollit. Aute in Lorem minim irure dolor nisi dolore ipsum est.</p>
                <span className="italic text-[var(--primary-500)]">"Let the mountains speak to your soul and the trails lead you to unforgettable experiences."</span>
                <br />
                <button className="h-8 md:h-12 w-fit px-4 text-[var(--neutral-100)] bg-[var(--neutral-900)] mt-6 rounded-sm cursor-pointer">Contact Me</button>
            </div>
        </div>
    </section>
    </>
  );
}

export default AboutSection;
